import React, { Component } from 'react'
import {graphql, Query} from 'react-apollo';
import {ALL_USERS} from '../utils/queries';

const AllUsers = () => (
    <Query query={ALL_USERS}>
         {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
          <div>
            <ul>{data.getAllUsers.map((user, i) => <li key={i}>Firstname: {user.firstName} <br /> Lastname: {user.lastName} <br /><br /> </li>)}</ul>
          </div>
      );
         }}
    </Query>
);


export default AllUsers;