// import React, { Component } from 'react';
import { Fragment } from "react/jsx-runtime";



//Class Component
// class App extends Component{ 
//   render(){
//     return <div>
//       <h1>Hello, world!</h1>
//       <p>This is a simple React class component.</p>
//       <p>It demonstrates the use of JSX in a class-based component.</p>
//       <p>Class components can hold and manage their own state.</p>
//       </div>;
//   }
// }

//Functional Component

function App() {

  // java script athule xml use karanna puluwan
  // e.g. const element = <h1>Hello, world!</h1>;

  // For Wrap elements
  // 1. <fragment> </fragment> - OLD
  // 2. <div> </div> - MOST USED
  // 3. <> </> - NEW
   let value: string = "Dilan";
  return(
  //  <div>       
  //   <h1>Hello, world!</h1>
  //   <p>Functional components can hold and manage their own state.</p>
  //   </div>

    // <Fragment>
    //   <h1>Hello, world!</h1>
    //   <p>Functional components can hold and manage their own state.</p>
    // </Fragment>

    // <>
    //   <h1>Hello, world!</h1>
    //   <p>Functional components can hold and manage their own state.</p>
    
    // </>

    //We can use JavaScript expressions inside Html by wrapping them in curly braces {}
    <>
      <h1>{value}</h1> 
      {value ? <h1>Hello,{value}</h1>: <h1>Hello, React</h1>}
      {console.log(value)}
      <h1>Hello, {value || "React"}</h1>
      <h2>this is react</h2>
      <h2>app component</h2>
    </>
  );
}

export default App
