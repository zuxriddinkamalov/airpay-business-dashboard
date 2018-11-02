import gql from 'graphql-tag'

//  GET BUSINESS SETTINGS
export const GET_SETTINGS_MUTATION = gql`
  query ($business: ID!){
    getSettings(business: $business){
      input {
        name
        website
        phone
        country
        businessname
      }
      logo
    }
  }
`
