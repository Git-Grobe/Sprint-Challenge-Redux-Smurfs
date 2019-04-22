1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

ANSWER:
Object.assign(), Array.concat(), Array.maop() , Array.filter()

Object.assign() - creates a brand new object that copies another object's properties and values into it, it updates whicever values we want to update in our new object or adds new key:value pairs. It does not mutate the origianl object




2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

ANSWER:

STORE - A single javascript object that contains all the state for the whole app. It is known as the single source of truth because the stores state data is immutable (read only) and never mutated, just cloned, copied, and used.

ACTIONS - actions are JS objects with information that contain an action type with some data we want associated with that action type. They are an object with two properties, a type and a payload. They are dispatched by the reducers.

REDUCERS - they respond to actions and update state by returning a new object that doesn't mutate the store state.





3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

ANSWER:

Application state could ber thought of as "global state" that all components have access to, Component state is state for a single component and is not accessable to all components by default.

A good time to use Application is when you need to change global variables such as login information, Component might be just specific to a single component like hitting a like button.



4.  What is middleware?


ANSWER:

Middleware is an extension for redux and adds new funtionality, we can use third party middleware or create our own. middleware can intercept the actions before they flow to the reducer in order to run a fuction then continue the process. We can stop actions, foward an action untouches, dispatch a different action, or dispatch multiple actions. we can run multiple middleware which will run sequentially in the order it is defined. 



5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?


ANSWER:

redux-thunk is middleware that allows to run asynchronous requests, such as API calls using axios. redux-thunk intercepts the action-creator action call and runs a function returned from a function.




6.  Which `react-redux` method links up our `components` with our `redux store`?


ANSWER: 

connect(mapStateToProps, { action })(Component)

