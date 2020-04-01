// The code in this file is intended to run in codepen.io
// Create a new pen and in the settings add Redux to it.
// I the JavaScript tab, you can paste the code below
// and see the results in the cosole.

console.clear();

// People Dropping off a form (Action Creator)
const createPolicy = (name, amount) => {
  return { // Action
    type: 'CREATE_POLICY',
    payload: {
      name,
      amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoney) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name, 
      amountOfMoney
    }
  };
};

// Reducers
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM'){
    // We care about the action
    return [... oldListOfClaims, action.payload];
  }
  // we don't care about the action
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if(action.type ==='CREATE_CLAIM'){
    return bagOfMoney - action.payload.amountOfMoney
  } else if(action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney
};

const policies = (listOfPolicies=[],action) => {
  if(action.type==='CREATE_POLICY'){
    return [...listOfPolicies,action.payload.name];
  } else if(action.type==='DELETE_POLICY'){
    return listOfPolicies.filter(name=>name!==action.payload.name);
  }
  return listOfPolicies;
};

// Combine reducers
// This gives us properties in our state object
// with names equal to the keys of the object

const {createStore, combineReducers} = Redux;
const ourDepartments = combineReducers({
  accounting,
  policies,
  claimsHistory
});

// Dispatch and state

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Edgar',35));
store.dispatch(createPolicy('Jim',30));
store.dispatch(createPolicy('Bob',20));

store.dispatch(createClaim('Jim', 50));
store.dispatch(createClaim('Edgar', 100));

store.dispatch(deletePolicy('Bob'));
// Each one of the dispatches is a separate execution of the 
// redux cycle
console.log(store.getState());