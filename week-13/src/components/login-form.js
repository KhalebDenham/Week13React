import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
        <form id="loginForm">
            <h3>Log In</h3>
            <label htmlFor="userName">User Name</label> 
            <input id="userName" name="userName"></input>
            

            <label htmlFor="userPassword">Password</label>
            <input id="userPassword" name="userPassword"></input>
            <button>Log In</button>
        
        
        
        </form>

        )
        
        
    }
}