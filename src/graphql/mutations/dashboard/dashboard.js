import gql from 'graphql-tag'

//  GET BUSINESS INFORMATION
export const GET_ME_MUTATION = gql`
  query {
    me {
      account {
        logo
        email
        name
        id
      }
      organizations {
        id
        name
        logo
      }
    }
  }
`
