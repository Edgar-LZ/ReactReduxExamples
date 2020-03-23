# Dependencies
This example uses the semantic-ui CSS framework.
If you want to replicate this example you need to go *cdnjs.com/libraries/semantic-ui*, search for the semantic.min.css link and add it to your *public/index.html* file as a stylesheet. 

We also make use of the *faker.js* library to generate random images. To install it you can use the command
```
npm install --save faker
```
The flag ```--save``` tells npm that we want to save the package to the local project and creates an entry inside the *package.json* file.

# Important Concepts

## Component Nesting
A React component can be shown inside of another.

## Component Reusability
It is a good practice to make components that can be easily reused throughout the application. 
## Component Configuration
We should be able to configure and customize a component when it is created.

## Creating a Reusable, Configurable Component
* Identify the JSX that appears to be duplicated.
* Create a new file to store this component. The name of the file should be the same as the component.
* Create a new component in the new file.
* Make the new component configurable using *React's 'props' system*.

## React 'props' system
It is a system created for passing data from a parent component to a nested component. The props system helps to make a nested or child component customizable.
The purpose is to customize how a component looks and how  the user interacts with it.
We provide information from the parent to the child with the following sintax:
```
---- Inside parent component ----

<ChildComponent propName=propValue />

```
We can also call props as a JS object inside the child component in JSX using
```
{props.propName}
``` 

We can access the ```props.children``` object property in the parent component to pass one nested component into it.

By using this technique of passing chindren to a component and then showing the chindren inside the parent component referencing ``` props.children``` we can create as many elements as we wish.

