import gql from 'graphql-tag'

//  GET ALL DISTRIBUTIONS RELATIVE TO BUSINESS
export const GET_DISTRIBUTIONS_MUTATION = gql`
  query ($business: ID!, $pagination: PaginationInput){
    getDistributions(business: $business, pagination: $pagination){
      distributions {
        status
        amount
        txHash
        user {
          id
          email
        }
        business {
          id
          name
        }
        metadata {
          crowdsale {
            name
          }
        }
        created
      }
      pagination {
        totalDocs
        limit
        offset
        hasPrevPage
        hasNextPage
        page
        totalPages
        prevPage
        nextPage
      }
    }
  }
`
//  GET DISTRIBUTION
export const GET_DISTRIBUTION_MUTATION = gql`
  query ($id: ID!){
    getDistribution(id: $id){
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
