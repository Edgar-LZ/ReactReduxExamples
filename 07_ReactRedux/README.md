# Requirements
This example uses the semantic-ui CSS framework.
If you want to replicate this example you need to go to *cdnjs.com/libraries/semantic-ui*, search for the semantic.min.css link and add it to your *public/index.html* file as a stylesheet. 
Also, in this example we make use of the redux and react-redux libraries. To install rhe libraries you can use the next command in your react app folder.
```
npm install --save redux react-redux
```
# Important Concepts
The integration of React with Redux helps with the creation of complex applications.

## Action Creators
Actions creators return a plain Javascript object defining an action. It is required for the action to have a type and optional to define a payload key for the object.

## Named Export
Named exports allow us to use the name of a function, class or variable to be transferred in the file we are importing it.
If we use named exports, when we import the function or class from another file, we need to use curly braces.
Example:
```import {selectSong} from '../actions' ```
If we make a default export, we don't have to write them.
It is recommended to think if we are importing a named export or a default one.

## Provider and Connect
The ```<Provider />``` makes the Redux store available to any nested components that have been wrapped in the ```connect()``` function.

Since any React component in a React Redux app can be connected, most applications will render a ```<Provider>``` at the top level, with the entire app’s component tree inside of it.

Normally, you can’t use a connected component unless it is nested inside of a ```<Provider>```.



