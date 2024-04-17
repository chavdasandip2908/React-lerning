/* OnClick Event in React */

// import React from 'react'
// export default function App() {

//   const test = () => {
//     alert("Button Click !")
//   }
//   return (
//     <div>
//       <h1>hello  </h1>
//       <button onClick={test}>Click Me</button>
//       {/* Or */}
//       <button onClick={()=>{test()}}>Click Me</button>
//     </div>
//   )
// }

/* State with functional Components in React */
/*
import React, { useState } from 'react'
export default function App() {
  // state
  const [data, setData] = useState("sandip");

  const test = () => {
    setData("bcuidh");
  }
  return (
    <div>
      <h1>hello ,{data} </h1>
      <button onClick={test}>Click Me</button>
    </div>
  )
}
 */

/* State with Class Components in React */

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       data: "sandip"
//     }
//   }
//   apple(){
//       this.setState({data:"pradip"})
//   }
//   render() {
//     return (
//       <div>
//         <h1>hello ,{this.state.data} </h1>
//         <button onClick={()=>{this.apple()}}>Click Me</button>
//       </div>
//     )
//   }
// }

/* Props with functional components in React */

// import React, { useState } from 'react'
// import Student from './Components/Student'

// export default function App() {
//   const [name, setname] = useState("Sandip");
//   const [email, setemail] = useState("sandipchavda@113.com");
//   const hello = (name) =>{
//     alert("hello "+name)
//   }
//   return (
//     <div>
//       <h1>student Components</h1>
//       {/* <Student name={"sandip"} email={",fhjbskhjbdsbfjbdf@hmail.con"} />
//       <Student name={"kjdn"} email={",fhjbskhjbdsbfjbdf@hmail.con"} />
//     <Student name={"dvlksj"} email={",fhjbskhjbdsbfjbdf@hmail.con"} /> */}

//       {/* Change Name Click Button */}
//       <Student name={name} email={email} fun={hello}/>
//       <button onClick={() => { setname("sandip"); setemail("chavdasandip@123.com") }}>Update Name</button>
//     </div>
//   )
// }

/* props With Class Components */

// import React, { Component } from 'react'
// import Student from './Components/Student'

// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       name: "sandip",
//       email: "chavdasandip@123.com"
//     }
//   }
//   render() {
//     const hello = (name) => {
//       alert("hello " + name)
//     }
//     return (
//       <div>
//         <Student name={this.state.name} email={this.state.email} fun={hello} />
//         <button onClick={() => { this.setState({ name: "Sandip" }); this.setState({ email: "sandip@abc123.com" }) }}>Update Name</button>
//       </div>
//     )
//   }
// }

/* Get Input Box Value in react */

// import React, { useState } from 'react'

// export default function App() {
//   const [name, setName] = useState("name not entered");
//   function getData(params) {
//     // console.log(params.target.value);
//     (params.target.value == "") ? setName("name not entered") : setName(params.target.value);
//   }
//   return (
//     <div>
//       <h1>Get Input Box Value</h1>
//       <input type='text' onChange={getData} />
//       <h2>Your Name : {name}</h2>
//     </div>
//   )
// }

/* Hide , Show and Toggle */

// import React, { useState } from 'react'

// export default function App() {
//   const [status, setstatus] = useState(true);
//   return (
//     <div>
//       {status ? <h1>Hello World</h1> : null}

//       <button onClick={() => { setstatus(true) }}>Show</button><br/><br/>
//       <button onClick={() => { setstatus(false) }}>Hide</button><br/><br/>
//       <button onClick={() => { setstatus(!status) }}>Toggle</button><br/><br/>
//     </div>
//   )
// }

/* Basic Form in React */

// import React, { useState } from 'react'

// export default function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [term, setTerm] = useState(false);
//   const [gender, setgender] = useState("");
//   function getFormData(e) {
//     e.preventDefault();
//     console.log(name);
//     console.log(email);
//     console.log(gender);
//     console.log(term);
//   }
//   return (
//     <div>
//       <form onSubmit={getFormData}>
//         <input type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}/>
//         <br /><br />

//         <input type="text" placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}/>
//         <br /><br />

//         <select name="gender" onChange={(e)=>{setgender(e.target.value)}}>
//           <option value="select">Select option</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//         <br /><br />

//         <input type="checkbox" onChange={(e)=>{setTerm(e.target.checked)}}/><span>Accept Term And Conditions</span>
//         <br />  <br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

/* Conditional Rendering in React  */

// import React from 'react'
// import Profile from './Components/Profile'

// export default function App() {
//   return (
//     <div>
//       <h1>Welcome </h1>
//       <Profile />
//     </div>
//   )
// }

/* Basic Form Validation  */

// import React from 'react'
// import Login from './Components/Login'

// export default function App() {
//   return (
//     <div>
//       <Login/>
//     </div>
//   )
// }

/* Pass function as props  OR Parent to Child Passing Data*/

// import React from 'react'
// import User from './Components/User'

// function getData() {
//   alert("hello from app ")
// }

// export default function App() {
//   return (
//     <div>
//       <User data={getData} />
//     </div>
//   )
// }

/* Render Life cycle method */
/*
  1.Load Page Time Render Call
  2.Props update time render call
  3.State update time render call
*/

// import React, { useState } from 'react'
// import User2 from './Components/User2'

// export default function App() {
//   const [name, setName] = useState("Anil");
//   return (
//     <div>
//       <h1>Render Method Life Cycle</h1>
//       <User2 name={name}/>
//       <button onClick={() => setName("sandip")}>Update Name</button>
//     </div>
//   )
// }

/* componentsDidMount Life cycle methods */
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Sandip"
//     }
//     console.log("constructor");

//   }
//   componentDidMount() {
//     console.log("componentDidMount")
//   }
//   render() {
//     return (
//       <div>
//         <h1>componentDidMount</h1>
//         <h3>
//           {this.state.name} 
//         </h3>
//       </div>
//     )
//   }
// }


/* componentsDidUpdate Life cycle methods */
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     }
//     console.log("constructor");
//   }
//   componentDidUpdate(preProps, preState, snapshot) {
//     // if you are updating state or props here, it is necessary to give condition properly.
//     // Do note Condition it will be an infinite loop
//     if (this.state.count < 10) {
//       this.setState({ count: this.state.count + 1 });
//     }

//     // Here PreState will give the state before the update , same for PreProps .
//     console.log(preState);
//     console.log(preProps);
//     console.log("componentDidUpdate");
//   }
//   render() {
//     return (
//       <div>
//         <h1>componentDidMount</h1>
//         <h3>
//           {this.state.count}
//         </h3>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update Name</button>
//       </div>
//     )
//   }
// }


/* shouldComponentUpadte Life cycle Method */
// it can stop rendering 

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     }
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     // shouldComponentUpdate by default returns false 
//     // shouldComponentUpdate function returns true then it will become render other wise not render 
//     console.log(this.state.count);
//     if (this.state.count < 10 && this.state.count >= 5) {
//       return true;
//     } 
//     return false;
//   }
//   render() {
//     return (
//       <div>
//         <h1>shouldComponentUpadte : {this.state.count}</h1>
//         <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Upadte</button>
//       </div>
//     )
//   }
// }

/* componentWillUpadte Life Cycle method */
// import React, { Component } from 'react'
// import Student2 from './Components/Student2';

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       show: true
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>component Will Upadte</h1>
//         <button onClick={() => { this.setState({ show: !this.state.show }) }}>Toggle</button>
//         {
//           this.state.show ? <Student2 /> : console.log("remove")
//         }
//       </div>
//     )
//   }
// }


/* Hooks in React */
// What is Hooks ?
/*
  With Hook ,we can Use class component features in
  functional components such as state , life cycle , pure component ,etc
*/

// import React, { useState } from 'react'

// export default function App() {
//   const [data, setData] = useState("abcd");
//   // hook is mainly starting with use keyword like useState and useEffect.
//   return (
//     <div>
//       <h1>{data}</h1>
//       <button onClick={() => setData("updated value")}>Update</button>
//     </div>
//   )
// }


/* useEffect in react */
// useEffect same as componentDidMount
// import React, { useEffect, useState } from 'react'

// export default function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("useEffect");
//   }, []);
//   return (
//     <div>
//       <h1>use Effect in React {count}</h1>
//       <button onClick={() => { setCount(count + 1) }}>Update Counter</button>
//     </div>
//   )
// }

/* useEffect with Specific State and Props */
// this type dependencies useEffect same as componentDidUpdate

// import React, { useEffect, useState } from 'react'

// export default function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("useEffect");
//   }, [count]);
//   return (
//     <div>
//       <h1>use Effect in React {count}</h1>
//       <button onClick={() => { setCount(count + 1) }}>Update Counter</button>
//     </div>
//   )
// }


/* Style Type in React   */

// import React from 'react'
// import './Components/src/css/style.css'
// import style from'./Components/src/css/cuttom.module.css'
// export default function App() {
//   return (
//     <div>
//       <h1 className='primary'>Style 1 Way in React Js </h1>
//       <h1 style={{color:"red",backgroundColor:'black'}}>Style 2 Way in React Js </h1>
//       <h1 className={style.success}>Style 3 Way in React Js </h1>
//     </div>
//   )
// }


/* Bootstrap in react */
// how to install : write on terminal = npm install react-bootstrap bootstrap

// import 'bootstrap/dist/css/bootstrap.min.css';  // write index.js inside  

// import React from 'react'
// import { Button } from 'react-bootstrap'

// export default function App() {
//   return (
//     <div>
//       <Button as="a" variant="primary">
//         Button as link
//       </Button>
//     </div>
//   )
// }

/* Handle Array with List */

// import React from 'react'

// export default function App() {
//   const students = ["sandip", "annand", "jaydip", "bhargav"];
//   const students2 = [
//     { name: "anil", email: "anil@example.com", contact: 12524698485 },
//     { name: "sidhu", email: "sidhu@example.com", contact: 12524698485 },
//     { name: "sandip", email: "sandip@example.com", contact: 12524698485 },
//     { name: "abc", email: "abc@example.com", contact: 12524698485 },
//     { name: "xyz", email: "xyz@example.com", contact: 12524698485 }
//   ]
//   // students.map((item) => {
//   //   console.log(item);
//   // });
//   /* in JSX not support loop */
//   // for (let i = 0; i < students.length; i++) {
//   //   console.warn(students[i]);
//   // }
//   return (
//     <div>
//       <h1>Handle Array with List </h1>
//       {/* {
//         students.map((item ,index) => {
//           return (
//             <h3 key={index}>Name is : {item}</h3>
//           )
//         })
//       } */}
//       <table border={1}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Contact</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             students2.map((item, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.contact}</td>
//                 </tr>
//               )
//             })
//           }
//         </tbody>
//       </table>


//     </div>
//   )
// }

/* List With Boostrap and Unique Key */

// import React from 'react'
// import { Table } from 'react-bootstrap';

// export default function App() {

//   const users = [
//     { name: "anil", email: "anil@example.com", contact: 12524698485 },
//     { name: "sidhu", email: "sidhu@example.com", contact: 12524698485 },
//     { name: "sandip", email: "sandip@example.com", contact: 12524698485 },
//     { name: "abc", email: "abc@example.com", contact: 12524698485 },
//     { name: "xyz", email: "xyz@example.com", contact: 12524698485 }
//   ];

//   return (
//     <div>
//       <h1>List With Boostrap and Unique Key</h1>

//       {/* <Table striped bordered hover> */}
//       <Table striped bordered hover variant="dark">
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Contact</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             users.map((item, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{index+1}</td>
//                   <td>{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.contact}</td>
//                 </tr>
//               )
//             })
//           }
//         </tbody>
//       </Table>
//     </div>
//   )
// }


/* Nested List with Nested */

// import React from 'react'
// import { Table } from 'react-bootstrap';

// export default function App() {
//   const users = [
//     {
//       name: "anil", email: "anil@example.com", contact: 12524698485,
//       address: [
//         { type: "Office", houseNo: 10, city: "Noida", country: "India" },
//         { type: "Home", houseNo: 105, city: "Amd", country: "India" },
//         { type: "Other", houseNo: 201, city: "Bag", country: "India" },
//       ]
//     },
//     {
//       name: "sidhu", email: "sidhu@example.com", contact: 12524698485,
//       address: [
//         { type: "Office", houseNo: 10, city: "Noida", country: "India" },
//         { type: "Home", houseNo: 105, city: "Amd", country: "India" },
//         { type: "Other", houseNo: 201, city: "Bag", country: "India" },
//       ]
//     },
//     {
//       name: "sandip", email: "sandip@example.com", contact: 12524698485,
//       address: [
//         { type: "Office", houseNo: 10, city: "Noida", country: "India" },
//         { type: "Home", houseNo: 105, city: "Amd", country: "India" },
//         { type: "Other", houseNo: 201, city: "Bag", country: "India" },
//       ]
//     },
//     {
//       name: "abc", email: "abc@example.com", contact: 12524698485,
//       address: [
//         { type: "Office", houseNo: 10, city: "Noida", country: "India" },
//         { type: "Home", houseNo: 105, city: "Amd", country: "India" },
//         { type: "Other", houseNo: 201, city: "Bag", country: "India" },
//       ]
//     },
//     {
//       name: "xyz", email: "xyz@example.com", contact: 12524698485,
//       address: [
//         { type: "Office", houseNo: 10, city: "Noida", country: "India" },
//         { type: "Home", houseNo: 105, city: "Amd", country: "India" },
//         { type: "Other", houseNo: 201, city: "Bag", country: "India" },
//       ]
//     }
//   ];
//   return (
//     <div>
//       <h1>Nested List with Nested</h1>
//       <Table striped bordered hover variant="dark" >
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Contact</th>
//             <th>Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             users.map((item, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.contact}</td>
//                   <td>
//                     <Table variant="dark">
//                       <thead>
//                         <tr>
//                           <th>Type</th>
//                           <th>House No</th>
//                           <th>City</th>
//                           <th>Country</th>
//                         </tr>
//                       </thead>
//                       <tbody>{
//                         item.address.map((address, i) => {
//                           return (
//                             <tr key={i}>
//                               <td>{address.type}</td>
//                               <td>{address.houseNo}</td>
//                               <td>{address.city}</td>
//                               <td>{address.country}</td>
//                             </tr>
//                           )
//                         })
//                       }</tbody>

//                     </Table>
//                   </td>
//                 </tr>
//               )
//             })
//           }
//         </tbody>
//       </Table>
//     </div>
//   )
// }

/* Reuse Components */

// import React from 'react'
// import UserInfo from './Components/UserInfo'

// export default function App() {
//   const users = [
//     { name: "anil", email: "anil@example.com", contact: 12524698485 },
//     { name: "sidhu", email: "sidhu@example.com", contact: 12524698485 },
//     { name: "sandip", email: "sandip@example.com", contact: 12524698485 },
//     { name: "abc", email: "abc@example.com", contact: 12524698485 },
//     { name: "xyz", email: "xyz@example.com", contact: 12524698485 }
//   ]
//   return (
//     <div>
//       <h1>Reuse Component</h1>
//       {
//         users.map((user, index) => {
//           return (
//             <UserInfo key={index} user={user} index={index} />
//           )
//         })
//       }
//     </div>
//   )
// }

/* React Fragment  */
// React Fragment is a React component that wraps in one tag.

// 1 Way to use Fragment
// import React from 'react'

// export default function App() {
//   return (
//     <React.Fragment>
//       <h1>hello</h1>
//       <h1>hello</h1>
//       <h1>hello</h1>
//     </React.Fragment>
//   )
// }

// 2 Way to use Fragment
// import React, { Fragment } from 'react'

// export default function App() {
//   return (
//     <Fragment>
//       <h1>hello</h1>
//       <h1>hello</h1>
//       <h1>hello</h1>
//     </Fragment>
//   )
// }

// 3 Way to use Fragment
// import React from 'react'

// export default function App() {
//   return (
//     <>
//       <h1>hello</h1>
//       <h1>hello</h1>
//       <h1>hello</h1>
//     </>
//   )
// }

/* Send Date Child to Parent Component Or Lifting State Up */

// import React, { useState } from 'react'
// import User3 from './Components/User3'

// export default function App() {
//   function SendData(name) {
//     console.log(name);
//     setName(name);

//   }
//   const [name, setName] = useState("");
//   return (
//     <>
//       <h1>Lifting State Up</h1>
//       <div>{name}</div>
//       <User3 sendData={SendData} />
//     </>
//   )
// }

/* pure Component */
// Stopd Rendering of Component
// check old component and new component if there is same Stopd Rendering ,if there is not same new component Rendering .

// how to use pureComponent
// import React, { PureComponent } from 'react'

// export default class App extends PureComponent {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     }
//   }
//   render() {
//     console.log("component rendered");
//     return (
//       <>
//         <h1>Pure Component : Count = {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>Incriment</button >
//         <button onClick={() => this.setState({ count: 1 })}>set Default Value</button>
//       </>
//     )
//   }
// }


/* UseMemo Hook in React */

// UseMemo same as pureComponent but use different methods for use

// import React, { useState, useMemo } from 'react'

// export default function App() {
//   const [count, setcount] = useState(0);
//   const [item, setItem] = useState(10);

//   // How to Create usememo
//   const updateCountRelate = useMemo(() => {
//     console.log("useMemo call");
//     return count * 10;
//   }, [count]);
//   return (
//     <>
//       <h1>UseMemo Hook in React : </h1>
//       <h1>count : {count}</h1>
//       <h1>item : {item}</h1>
//       <h1>{updateCountRelate}</h1>
//       <button onClick={() => setcount(count + 1)}>Update Count</button>
//       <button onClick={() => setItem(item + 1)}>Update item</button>
//     </>
//   )
// }


/* Ref in React js */
// why use ref : using Ref get DOM and Modify DOM
// import React, { Component, createRef } from 'react'

// export default class App extends Component {
//   constructor() {
//     super();
//     this.myCustomRef = createRef();
//   }
//   componentDidMount() {
//     // console.log(this.myCustomRef);
//     // console.log(this.myCustomRef.current.value=10000);
//   }

//   getVal() {
//     // console.log(this.myCustomRef);
//     console.log(this.myCustomRef.current.value);
//     this.myCustomRef.current.style.backgroundColor = "red";
//   }

//   render() {
//     return (
//       <>
//         <h1>Ref in React</h1>
//         <input type='text' ref={this.myCustomRef} />
//         <button onClick={() => { this.getVal() }}>Check Ref</button>
//       </>
//     )
//   }
// }

/* useRef Hook In React */
// useRef and Ref are same but they are used in different places.

// import React, { useRef } from 'react'

// export default function App() {

//   let myCustomRef = useRef(null);

//   function getVal() {
//     console.log(myCustomRef);
//     // console.log(myCustomRef.current.value);
//     console.log(myCustomRef.current.value = 100);
//     myCustomRef.current.focus();
//   }


//   return (
//     <>
//       <h1>useRef in React</h1>
//       <input type='text' ref={myCustomRef} />
//       <button onClick={() => getVal()}>Check Ref</button>
//     </>
//   )
// }



/* forwardRef in React  */
// forwardRef is advance version of Ref
// ref send as props parend to child called is forwardRef

// import React, { useRef } from 'react'
// import User4 from './Components/User4';

// export default function App() {
//   let myCustomRef = useRef(null);
//   function updateInput() {
//     myCustomRef.current.value = "1000";
//     myCustomRef.current.focus();
//   }
//   return (
//     <>
//       <h1>forwardRef in React</h1>
//       <User4 ref={myCustomRef} />
//       <button onClick={() => { updateInput() }}>Update input box</button>
//     </>
//   )
// }


/* Controlled Component */

// Creted Component using State this is controlled Component
// handle with State 

// import React, { useState } from 'react'

// export default function App() {
//   const [name, setName] = useState("John Doe");
//   const [email, setEmail] = useState("san");

//   return (
//     <>
//       <h1>Controlled Component</h1>
//       <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
//       <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
//       <button onClick={() => { console.log(name); console.log(email) }}>Print</button>
//     </>
//   )
// }

/* Uncontrolled Component */
// it mean input field intreck with javaScript or Ref Handle
// import React, { useRef } from 'react'

// export default function App() {
//   let inputRef = useRef(null);
//   let inputRef2 = useRef(null);
//   function submitForm(e) {
//     e.preventDefault();
//     console.log("1.input field value : ", inputRef.current.value);
//     console.log("2.input field value : ", inputRef2.current.value);
//     let input3 = document.getElementById('input3').value;
//     console.log("3.input field value : ", input3);

//   }
//   return (
//     <>
//       <form>
//         <h1>Controlled Component</h1>
//         <input ref={inputRef} type='text' />
//         <input ref={inputRef2} type='email' />
//         <input id='input3' type='email' />
//         <button type='submit' onClick={(e) => { submitForm(e) }}>submit</button>
//       </form>
//     </>
//   )
// }

/* Simple HOC(Hight order component) */
// HOC is One Component input and Return Component

// import React, { useState, useRef } from 'react'

// export default function App() {
//   return (
//     <>
//       <h1>Simple HOC</h1>
//       <HOCRed Cmp={Counter} />
//       <HOCGreen Cmp={Counter} />
//     </>
//   )
// }


// function HOCRed(Props) {
//   return (
//     <div style={{ background: "red", width: "200px" }}>
//       <Props.Cmp />
//     </div>
//   )
// }
// function HOCGreen(Props) {
//   return (
//     <div style={{ background: "green", width: "200px" }}>
//       <Props.Cmp />
//     </div>
//   )
// }
// function Counter() {
//   const [count, setcount] = useState(0);
//   return (
//     <>
//       <h3>Count: {count}</h3>
//       <button onClick={() => setcount(count + 1)}>Update</button>
//     </>
//   )
// }


// ---------------------------------------------> React Router <----------------------------------------------------------------

import React from 'react'
import Home from "./Components/Router/Home";
import About from "./Components/Router/About";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


