import gql from 'graphql-tag'

//  GET ALL USERS RELATIVE TO BUSINESS
export const GET_USERS_MUTATION = gql`
  query ($pagination: PaginationInput, $business: ID!){
    getUsers(business: $business, pagination: $pagination){
      users {
        id
        email
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
//  GET USER
export const GET_USER_MUTATION = gql`
  query ($id: ID!, $business: ID!){
    getUser(business: $business, id: $id){
      id
      email
    }
  }
`
