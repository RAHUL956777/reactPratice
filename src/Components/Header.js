// import "./Header.css"

// // function Header() {
// //   return <div>First component</div>;
// // }
// // function Header2() {
// //   return <div>New way to makeing components</div>;
// // }
// function Main() {
//   return <div>Default main component</div>;
// }



// // export default Header;
// // export { Header, Header2 };
// export default Main;

import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css'; // import the CSS file

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {/* <Link to="/">Home</Link> */}
          Home
        </li>
        <li>
          {/* <Link to="/about">About</Link> */}
          About
        </li>
        <li>
          {/* <Link to="/contact">Contact</Link> */}
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

