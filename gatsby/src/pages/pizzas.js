import React from 'react';
import { graphql } from 'gatsby';
import PizzaList from '../components/PizzaList';
import ToppingsFilter from '../components/ToppingsFilter';

// create functional component and pass in graphQL query as props

export default function PizzasPage({ data }) {
  // destructured the pizza objct from props.data

  const pizzas = data.pizzas.nodes;
  return (
    <div>
      <ToppingsFilter />
      <PizzaList pizzas={pizzas} />
    </div>
  );
}

export const query = graphql`
  query PizzaQuery($toppingRegex: String) {
    pizzas: allSanityPizza(
      filter: { topping: { elemMatch: { name: { regex: $toppingRegex } } } }
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        topping {
          id
          name
        }
        image {
          asset {
            fixed(width: 600, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
