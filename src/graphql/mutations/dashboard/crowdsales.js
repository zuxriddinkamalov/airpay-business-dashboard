import gql from 'graphql-tag'

//  GET ALL CROWDSALES RELATIVE TO BUSINESS
export const GET_CROWDSALES_MUTATION = gql`
  query($business: ID!) {
    getCrowdsales(business: $business) {
      id
      hardcap
      startDate
      endDate
      name
    }
  }
`
//  GET CROWDSALE
export const GET_CROWDSALE_MUTATION = gql`
  query($id: ID!, $business: ID!) {
    getCrowdsale(id: $id, business: $business) {
      id
      name
      hardcap
      whitelist
      asset {
        symbol
        name
      }
      business {
        id
        logo
        name
      }
      agreement
      assetAccept {
        asset {
          symbol
        }
        minAmount
        rate
      }
      whitelist
    }
  }
`

// CREATE CROWDSALE
export const CREATE_CROWDSALE = gql`
  mutation($input: InputCrowdsale!, $business: ID!) {
    createCrowdsale(input: $input, business: $business)
  }
`
