import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import {ADD_USER} from '../utils/mutations';


const AddUser = () => {
    let firstName;
    let lastName;
    let username;
    let password;
    return (
        <Mutation mutation={ADD_USER}>
          {(addUser, { data }) => (
            <div>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  console.log(firstName.value);
                  console.log(lastName.value);
                  console.log(username.value);
                  console.log(password.value);

                  addUser({variables: {firstName:firstName.value, lastName:lastName.value, userName:username.value, password: password.value}});

                  firstName.value = '';
                  lastName.value = '';
                  username.value = '';
                  password.value = '';



                }}
              >
              <input placeholder='firstname'
                  ref={node => {
                    firstName = node;
                  }}
                />
                <input placeholder='lastname'
                  ref={node => {
                    lastName = node;
                  }}
                />
                <input placeholder='username'
                  ref={node => {
                    username = node;
                  }}
                />
                <input placeholder='password'
                  ref={node => {
                    password = node;
                  }}
                />
                <button type="submit">Add User</button>
              </form>
            </div>
          )}
        </Mutation>
      );
};

export default AddUser;