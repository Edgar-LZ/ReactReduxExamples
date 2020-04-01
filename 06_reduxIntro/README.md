# Important Concepts

## What is Redux?
Redux is a state management library. With redux we can handle the state instead of altering it or maintain it in the react component. The Redux Library is not explicitly designed to work with react, it can be used with other labraries and languages.

## Redux Cycle
* Action Creator --> Function that is going to return a plain JS object
* Action --> JS object with a type that indicates the type of action being performed. Actions are payloads of information that send data from the application to the store.
* dispatch --> dispatch is part of the Redux Library. It is the only way to trigger a state change.
* Reducers --> They are JS functiones called with some data and an action, they modify and return the existing data based on the content and the action provided. Reducers specify how the state is going to change based upon the action.
* State --> We can only modify it trough the use of the dispatch function, the action creators, and the actions we provide.

## Redux store
A store holds the state tree of the application. The only way to change the state is to dispatch actions on it.
A store is a JS object with come methods on it. You can create a store passing your root reducing to createStore.
The store methods are:
* getState()
* dispatch(action)
* subscribe(listener)
* replaceReducer(nextReducer) 

