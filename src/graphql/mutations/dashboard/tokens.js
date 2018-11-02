import gql from 'graphql-tag'

//  GET ALL TOKENS RELATIVE TO BUSINESS
export const GET_TOKENS_MUTATION = gql`
  query ($business: ID!){
    getTokens(business: $business){
      id
      distributionAddress
      distributionMethod
      blockchain
      tokenHolderAddress
      tokenAddress
      network
    }
  }
`
//  GET TOKEN
export const GET_TOKEN_MUTATION = gql`
  query ($id: ID!){
    getToken(id: $id){
      id
      distributionAddress
      distributionMethod
      blockchain
      tokenHolderAddress
      tokenAddress
      network
    }
  }
`
