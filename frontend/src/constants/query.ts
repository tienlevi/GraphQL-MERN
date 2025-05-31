import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query getProducts {
    products {
      id
      name
      price
      description
      category
      rating
      stock
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query getProductById($id: ID!) {
    product(id: $id) {
      id
      name
      price
      description
      category
      rating
      stock
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation createProduct($data: Inputs) {
    create(data: $data) {
      name
      price
      description
      category
      rating
      stock
    }
  }
`;

export const EDIT_PRODUCT = gql`
  mutation editProduct($id: ID!, $data: Inputs) {
    update(id: $id, data: $data) {
      name
      price
      description
      category
      rating
      stock
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: ID!) {
    delete(id: $id) {
      id
      name
      price
      description
      category
      rating
      stock
    }
  }
`;
