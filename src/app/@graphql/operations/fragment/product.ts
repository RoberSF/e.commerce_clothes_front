//**************************************************************************************************
//    Definición de los objetos de la Api para poder ser rehutilizados en diferentes querys o mutations                                                           
//**************************************************************************************************
import gql from 'graphql-tag';

export const PRODUCT_FRAGMENT = gql `

fragment ProductObject on ProductItem {
          id
          name
          slug
          categoria
          categoriaInfo {
            name
          }
          description
          size
          sizeInfo {
            name
          } 
          color
          colorInfo {
            name
          }
          img
          price
          # rating
          screenshoots
          active
          stock
}
`


