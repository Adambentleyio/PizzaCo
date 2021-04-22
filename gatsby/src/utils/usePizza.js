import React, { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';
import attachNamesAndPrices from './attachNamesAndPrices';
import calculateOrderTotal from './calculateOrderTotal';
import formatMoney from './formatMoney';

export default function usePizza({ pizzas, values }) {
  // 1. create state that will hold the customers order
  // NO LONGER USING LINE BELOW -- MOVED THE USESTATE() ORDER AND SETORDER TO CONTEXT (ORDERCONTEXT.JS)
  // const [order, setOrder] = useState([]);

  const [order, setOrder] = useContext(OrderContext);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // 2. make a function to add pizza to state
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }

  // 3. make a function to remove a pizza from the order
  function removeFromOrder(index) {
    setOrder([
      // everything before the item to remove
      ...order.slice(0, index),
      // everything after the item to remove
      ...order.slice(index + 1),
    ]);
  }

  // this function runs when a customer submits their order form
  async function submitOrder(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // gather all the data to send to email serverless function
    const body = {
      order: attachNamesAndPrices(order, pizzas),
      total: formatMoney(calculateOrderTotal(order, pizzas)),
      name: values.name,
      email: values.email,
      treacle: values.treacle,
    };
    console.log(body);

    // 4. send the data to a serverless function at customer checkout
    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );
    const text = JSON.parse(await res.text());

    // check if everything worked

    if (res.status > 400 && res.status >= 600) {
      setLoading(false);
      setError(text.message);
    } else {
      setLoading(false);
      setMessage('Success! Come on down for your pizza');
    }
  }

  return {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  };
}
