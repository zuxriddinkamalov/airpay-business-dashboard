import gql from 'graphql-tag'

//  GET ALL CROWDSALES RELATIVE TO BUSINESS
export const GET_CROWDSALES_MUTATION = gql`
  query($organization: ID!) {
    getCrowdsales(organization: $organization) {
      id
      name
      hardcap
      startDate
      endDate
      whitelist
      asset {
        symbol
        name
      }
      assetAccept {
        asset {
          symbol
          name
        }
        minAmount
        rate
      }
      whitelist
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
