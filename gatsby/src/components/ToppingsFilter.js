import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function countPizzasInToppings(pizzas) {
  // return the pizzas with counts
  const counts = pizzas
    .map((pizza) => pizza.topping)
    .flat()
    .reduce((acc, topping) => {
      // check if this is an existing topping in the array
      const existingTopping = acc[topping.id];
      if (existingTopping) {
        // if it is, increment by 1
        existingTopping.count += 1;
      } else {
        // otherwise, create new entry in our acc and set it to one
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }
      return acc;
    }, {});

  // sort them based on count
  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  console.log(sortedToppings);
  return sortedToppings;
}

export default function ToppingsFilter() {
  // Get a list of all the toppings
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          topping {
            name
            id
          }
        }
      }
    }
  `);

  const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);

  return (
    <div>
      <p>Toppings filter</p>
    </div>
  );
}
