1. What problem does the context API help solve?

   Prop drilling is no longer required. You can just store data on a context object and then pull that data to the component from the object not props.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   actions: are payloads of information that send data from your application to your store. They are the only source of information for the store, and they are objects.

   reducers: Reducers specify how the application's state changes in response to actions sent to the store. Basically, a reducer is a type of function that takes in the current state and an action and returns a new state object based on both pieces of data.

   store: The Store is the object that brings actions and reducers together. The store is known as a 'single source of truth' in a redux application because all of the app's data lives in one place (state).

3) What is the difference between Application state and Component state? When would be a good time to use one over the other?

   Application state (the "store) is global. Component state is local. Component state is good for styling, everything else goes in store

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

5) What is your favorite state management system you've learned and this sprint? Please explain why!
