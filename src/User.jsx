import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "./assets/images/img1.jpg";
import logo from "./assets/logo.svg";

export const User = ({ name, age }) => {
  return (
    <>
      <h1>
        This is user component {name}
        {age}
      </h1>
      <NavLink to="/">Home</NavLink>
      <div>User Component</div>
      <img src={logo} alt="logo" />
    </>
  );
};

export const Home = () => {
  return (
    <h1>
      Home Components
      <NavLink to="/user">User</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </h1>
  );
};

// const User = ({ name, age }) => {
//   return (
//     <>
//       <h1>
//         <Link to="/">home</Link>
//         <br />
//         Hey this is {name} and my age is {age}.
//       </h1>
//       <hr />
//       <img
//         src={img1}
//         alt="this is image"
//         style={{ width: "20%", height: "40%", margin: "50px" }}
//       />
//     </>
//   );
// };

// export const Home = () => {
//   return (
//     <h1>
//       this is home component:
//       <hr />
//       <Link to="/user">User</Link>
//       <hr />
//       <Link to="/style">Material ui</Link>
//       <hr />
//       <Link to="/extra">Exra</Link>
//     </h1>
//   );
// };

// export const Extra = () => {
//   const a = [1, 2, 3, 4, 5];
//   return (
//     <>
//       <Link to="/">home</Link>
//       <h3>array using map:</h3>
//       {a.map((i) => (
//         <h3>this {i}th element</h3>
//       ))}
//     </>
//   );
// };

export default User;
