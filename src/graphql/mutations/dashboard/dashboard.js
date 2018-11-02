import gql from 'graphql-tag'

//  GET BUSINESS INFORMATION
export const GET_ME_MUTATION = gql`
  query {
    me {
      owner {
        logo
        name
        id
      }
    }
  }
`
