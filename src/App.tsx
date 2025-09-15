// // import React, { Component } from 'react';
// // import { Fragment } from "react/jsx-runtime";

// import MyComponent from './components/MyComponents';



// //Class Component
// // class App extends Component{ 
// //   render(){
// //     return <div>
// //       <h1>Hello, world!</h1>
// //       <p>This is a simple React class component.</p>
// //       <p>It demonstrates the use of JSX in a class-based component.</p>
// //       <p>Class components can hold and manage their own state.</p>
// //       </div>;
// //   }
// // }

// //Functional Component

// function App() {


//   // java script athule xml use karanna puluwan
//   // e.g. const element = <h1>Hello, world!</h1>;

//   // For Wrap elements
//   // 1. <fragment> </fragment> - OLD
//   // 2. <div> </div> - MOST USED
//   // 3. <> </> - NEW
//    let value: string = "Dilan";
//   return(
    
//   //  <div>     
//   //   <h1>Hello, world!</h1>
//   //   <p>Functional components can hold and manage their own state.</p>
//   //   </div>

//     // <Fragment>
//     //   <h1>Hello, world!</h1>
//     //   <p>Functional components can hold and manage their own state.</p>
//     // </Fragment>

//     // <>
//     //   <h1>Hello, world!</h1>
//     //   <p>Functional components can hold and manage their own state.</p>
    
//     // </>

//     //We can use JavaScript expressions inside Html by wrapping them in curly braces {}
//     <>
//         <MyComponent />
//         <MyComponent>
//            <h5> I am a Default prop </h5>
//         </MyComponent>

//         <MyComponent>
//           <h4>I am a Default prop (2)</h4>
//         </MyComponent> 

//         <MyComponent name = {"Dilan"}
//         age = {22}
//         email = {"dilan@example.com"}>

//         </MyComponent>

//       <h1>{value}</h1> 
//       {value ? <h1>Hello,{value}</h1>: <h1>Hello, React</h1>}
//       {console.log(value)}

//      {/* Add css styles */}
//       <h1
//         className = ""
//         style ={{
//           color: "blue"
//         }}>

//         Hello, {value || "React"}</h1>
//       <h2>this is react</h2>
//       <h2>app component</h2>
//     </>
//   );
// }

// export default App

// import './App.css' 
// import UserDetails from './components/UserDetails';

// const App = () => {
//   return (
//     <div>
//       <h1>User Details</h1>
//       <hr />
//       <UserDetails name="Dilan Liyanaarachchi" age={22} email="liyanaarachchidilan@gmail.com" isAdmin={true} />
//     </div>
//   );
// }

// export default App;

// import UserDetails from "./components/UserDetails"

// const dataList = [
//   {
//     name: "nimal",
//     age: 15,
//     email: "",
//     isAdmin: true
//   },
//   {
//     name: "kavindu",
//     age: 25,
//     email: "",
//     isAdmin: false
//   },
//   {
//     name: "kumar",
//     age: 35,
//     email: "kumar@gmail.com",
//     isAdmin: true
//   }
// ]

// const App = () => {
//   return (
//     <>
//     <h1>User details List</h1>
//     <hr />
    

//     {dataList?.map((user, index) => (
//       <Userdetails name={user.name} age={user.age} email={user.email} isAdmin={user.isAdmin} key={index} />   
//     )
//     )}
//     </>
//   )
// }
// export default App




// -----------------------Event Handling ------------------------------------------------

// const App = () => {

//   const handleButtonClick = (e: any) => {
//     console.log("You Clicked Me");
//     e.target.textContent = "Ouch"
    
//   }
//   return (
//     <>
//       <h1>Event Handling</h1>
//       <hr />
//       <button onClick={handleButtonClick}>Click Me</button>
//     </>
//   )
// }
// export default App 



// -----------------------Hook ------------------------------------------------




// // -------------------------State------------------------------------------------
//   // useState is a Hook that allows you to have state variables in functional components.

// import { useState } from "react";

// const App = () => {
//   //let count : number = 0;  No more use varibales in react
//   // data name, setter method name
//   let [count, setCount] = useState(0);

//   const increment = () => {
//     setCount((prev) => prev + 1);
//   }

//   const decrement = () => {
//     setCount((prev) => prev - 1);
//   }

//   const reset = () => {
//     setCount(0);
//   }
//   return (
//     <>
//       <h1>Count :{count}</h1>
    
      
//       <div>
//         <button onClick={() => increment()}>+</button>
//         <button onClick={() => reset()}>reset</button>
//         <button onClick={() => decrement()}>-</button>
//       </div>
      
//     </>
//   )
// }    

// export default App


// ----------------------------Form-------------------------------------------------

import { useState } from "react";

const App = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [email, setEmail] = useState<string>("");

  const [users,setUsers] = useState<any[]>([])

  const addUser = () => {
    if(!name || !age || !email){
      alert("Please fill all the fields")
      return
    }
    const user = { name, age, email }
    setUsers((prev) => [...prev, user])
  }

  return (
    <div className="p-5 bg-red-400">
      <h4 className="font-bold" >Name :{name}  Age :{age} Email :{email}</h4>
      <hr />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} placeholder="Age" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={() => addUser()}>Submit</button>
      {
        users?.map((data, index) => (
          <div key={index}>
            <h5>Name : {data?.name}</h5>
            <h5>Age : {data?.age}</h5>
            <h5>Email : {data?.email}</h5>
          </div>
        ))
      }
    </div>
  )
}

export default App
