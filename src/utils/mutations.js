import gql from "graphql-tag";

export const ADD_USER = gql`
  mutation AddUser(
      $firstName: String!,
      $lastName: String!,
      $userName: String!,
      $password: String,
    ){
    addUser(
      input: {
        firstName: $firstName
        lastName: $lastName
        userName: $userName
        password: $password
      }
    ){
      firstName
      lastName
    }
  }
`;