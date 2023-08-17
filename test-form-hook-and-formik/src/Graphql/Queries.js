import {gql} from '@apollo/client'

export const LOAD_USER=gql`
query{
    cart(id:"100"){
      totalUniqueItems
      totalItems
      items{
        name
        quantity
        unitTotal{
          formatted
        }
      }
    }
  }
`;