import gql from 'graphql-tag';
import { SIZE_FRAGMENT } from '../fragment/size';


//**************************************************************************************************
//                    Método de añadir género de la api graphql                                                           
//**************************************************************************************************

export const ADD_PRODUCT_SIZE = gql`

mutation addProductSize($productSize: ProductSizeInput!) {
    addProductSize(productSize: $productSize) {
      status
      message
      product {
        id
      }
    }
  }
  `;

export const DELETE_PRODUCT_SIZE = gql`

mutation deleteProductSize($productId: ID!) {
    deleteProductSize(productId: $productId) {
      status
      message
    }
  }
  `;


