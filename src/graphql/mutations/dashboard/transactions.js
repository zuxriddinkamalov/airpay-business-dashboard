import gql from 'graphql-tag'

//  GET ALL TRANSACTIONS RELATIVE TO BUSINESS
export const GET_TRANSACTIONS_MUTATION = gql`
query ($pagination: PaginationInput, $business: ID, $filter: Filter){
  getTransactions(business:$business, pagination: $pagination, filter: $filter){
    transactions {
      id
      status
      from {
        name
        storage
        business
        type {
          name
          symbol
        }
      }
      to {
        name
        storage
        business
      }
      asset {
        name
        symbol
        global
      }
      amount
      created
    }
    pagination {
      page
    }
  }
}
`
//  GET TRANSACTION
export const GET_TRANSACTION_MUTATION = gql`
  query ($id: ID!){
    getTransaction(id: $id){
      id
      paymentAddress
      status
      amount
      txHash
      currency
      user {
        id
        email
      }
      business {
        id
        name
      }
      metadata {
        crowdsale
        withdrawAddress
      }
      created
    }
  }
`
