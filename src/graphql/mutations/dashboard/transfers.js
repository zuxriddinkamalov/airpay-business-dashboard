import gql from 'graphql-tag'

//  GET ALL TRANSFERS RELATIVE TO BUSINESS
export const GET_TRANSFERS_MUTATION = gql`
query ($pagination: PaginationInput, $organization: ID, $filter: Filter){
  getTransfers(organization: $organization, pagination: $pagination, filter: $filter){
    transfers {
      id
      status
      from {
        name
        type
      }
      to {
        name
        type
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
      totalPages
      totalDocs
    }
  }
}
`
//  GET TRANSFER
export const GET_TRANSFER_MUTATION = gql`
  query ($id: ID!){
    getTransfer(id: $id){
      id
      status
      from {
        name
        type
      }
      to {
        name
        type
      }
      asset {
        name
        symbol
        global
      }
      amount
      created
    }
  }
`
