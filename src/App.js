import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';

const client = new ApolloClient({
  uri:'https://polar-hollows-16046.herokuapp.com/graphql'
})

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
          <AllUsers />
          <h5>Add a new user</h5>
          <AddUser />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
