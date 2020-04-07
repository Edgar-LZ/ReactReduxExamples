# Important Concepts

## Middleware
Inside of our redux app we can have as many or as few middlewares as we want.
A middleware is a plain JS function that gets called with every action we dispatch. It has the hability to stop, modify and handle an action in any way.

One of the most popular uses of middleware is for dealing with asynchronous action creators.

## Action creators
Action creators must return action objects and must have a type property. Also, actions can optionally have a payload.

## Actions with Redux Thunk
Action creators can return action objects or functions.
If an object gets returned, it must have a type and if an action object is returned, it can optionally have a payload.

With redux thunk, we can manually dispatch an action at some point in time.

Redux Thunk middleware allows us to write action creators that return a function instead of an action. It can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

## Reducers
Reducers must return any value besides 'undefined'.
They produce 'state' or data to be used inside the app using only the previous state and an action.
Reducers must be pure, they are only supposed to look at the previous state value and the action provided.
They must not mutate its input 'state' argument.