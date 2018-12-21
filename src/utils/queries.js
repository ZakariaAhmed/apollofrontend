import gql from 'graphql-tag';


export const ALL_USERS = gql`
{
getAllUsers{
firstName
lastName
}
}
`