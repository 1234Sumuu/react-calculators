// Context API is a feature provided by React.js that allows you to share data between components without having to pass the data through props at every level of the component tree. It provides a way to create global state accessible to multiple components.

// Here's an example to illustrate how to use Context API:

import React, { createContext, useState, useContext } from 'react';

// Step 1: Create a context
const MyContext = createContext();

// Step 2: Create a provider component
const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <MyContext.Provider value={{ count, increment }}>
      {children}
    </MyContext.Provider>
  );
};

// Step 3: Create consumer components (optional)
const DisplayCount = () => {
  const { count } = useContext(MyContext);

  return <p>Count: {count}</p>;
};

const IncrementButton = () => {
  const { increment } = useContext(MyContext);

  return <button onClick={increment}>Increment</button>;
};

// Step 4: Use the provider and consumer components
const App = () => {
  return (
    <MyProvider>
      <DisplayCount />
      <IncrementButton />
    </MyProvider>
  );
};

export default App;

// In this example, we start by creating a context using createContext() in Step 1. We name it MyContext, but you can choose any appropriate name.

// In Step 2, we create a provider component called MyProvider. It wraps the components that need access to the shared data. In this case, we have a count state variable and an increment function provided by the MyContext.Provider. The value prop of the provider specifies the data and functions available to the consumer components.

// In Step 3, we define two consumer components: DisplayCount and IncrementButton. These components use the useContext() hook to access the data and functions provided by the context.

// Finally, in Step 4, we use the MyProvider component to wrap the components that need access to the shared data. In this case, we wrap DisplayCount and IncrementButton in the App component.

// Now, any component wrapped by the MyProvider can access the shared data and functions using the useContext() hook.

// Please note that the useContext() hook can only be used within functional components and can only access the context created using createContext().
