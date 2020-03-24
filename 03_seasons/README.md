# Dependencies
This example uses the semantic-ui CSS framework.
If you want to replicate this example you need to go to *cdnjs.com/libraries/semantic-ui*, search for the semantic.min.css link and add it to your *public/index.html* file as a stylesheet. 

# Important Concepts

A **Component** can be functional or a **Class component** that produces HTML to show to the user using JSX and handles feedback from them using event handlers.

### Should I use class components or functional components?
* Functional components are good for simple content, you can use them when you only need to show come simple content to the user.
* Class components are good for more complex tasks, you can use them for components that handle interaction with the user. 
## Class Based Components
Class based components are Javascript classes and they must extend React.Component. This classes must define a 'render' method that returns some amount of JSX.
You can use the state system in React to handle user input and update the application. 

The basic structure of a class component is
```
class ComponentName extends React.Component{
    render(){
        return (
            <JSXCOMPONENTS />
            );
    }
}

```
The reason we extend React.Component is because React expects our class based components to have some methods attached to it and we take these methods from the React.Component class. This allows us to use the functionality of React.Component into our class.

The constructor function is a JS function and it is the first function to be called when you instantiate a class.
You can define it like in the next example:

```
class ComponentName extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <JSXCOMPONENTS />
            );
    }
}

```
You need to call ```super(props);``` to call the constructor of the React.Component class. It is a reference to the parent's constructor function.

## State System
The state can only be usable with class components and it must be initialized when the component is created.
State is a Javascript object that contains data strictly relevant to a single component and updating it will cause the component to almost instantly rerender.
You should only update the state using the function 'setState'. The next is an example of how to initialize the state object.
```
this.state = { lat: null };
```
To update the state you need to call 'setState' with an object containig the property you want to change.
```
this.setState({ lat: position.coords.latitude });
```
An alternate method to initialize the state is:
```
state = { lat: null, errorMessage: '' };
```
When we do this, react creates a constructor for us and defines *this.state*.
## Rendering content conditionally
An option to show content to the user based in contions is to make use of if statements inside the render method.
```
render(){
    if(condition){
        return(
            <JSXComponents>
        );
    } else if (otherCondition){
        return(
            <JSXComponents>
        );
    }
}
```
## Lifecycle Methods
Lifecycle Methods are functions that we can optionally define inside our React components. These methods are going to be automatically called by React during the lifecycle of the component. 
* constructor ---> Good to do state initialization and one-time setup
* render ---> Not optional. Returning JSX
* componentDidMount ---> Data loading
* componentDidUpdate ---> Data loading when state/props change
* componentWillUnmount ---> Cleanup for non-React stuff

rarely used:

* shouldComponentUpdate
* getDerivedStateFromProps
* getSnapshotBeforeUpdate

## CSS
You can import CSS in JS and use it in React thanks to webpack.js

## Default props
We can define an object called *ComponentName.defaultProps* that defines the props object in case we don't pass any property value.


  
