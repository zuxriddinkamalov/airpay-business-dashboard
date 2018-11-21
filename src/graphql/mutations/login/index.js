import gql from 'graphql-tag'

//  Enter
export const ENTER_MUTATION = gql`
  mutation($email: String!) {
    accountEnter(email: $email)
  }
`

// Authorization
export const AUTHORIZATION_MUTATION = gql`
  mutation($hash: String!, $code: Int!) {
    accountAuth(hash: $hash, code: $code) {
      isStarted
      authorization
    }
  }
`

//  Get started
export const GET_STARTED_MUTATION = gql`
  mutation($personalInput: getStartedPersonal!, $organizationInput: getStartedOrganization!) {
    getStarted(personalInput: $personalInput, organizationInput: $organizationInput)
  }
`

//  Create Business
export const CREATE_BUSINESS_MUTATION = gql`
  mutation($input: Input!, $logo: Upload!) {
    createBusiness(input: $input, logo: $logo)
  }
`
