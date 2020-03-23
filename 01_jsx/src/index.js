// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = {text:'click me!'};
    const style = {backgroundColor:'blue', color:'white'};
    // React components return JSX code that tells the app how to show 
    // information to the user
    return( 
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={style}>{buttonText.text}</button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
