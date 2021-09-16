import React from "react";

// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//         <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of">Of</span>
//             <span className="the">The</span>
//           </span>
//           Day
//         </h1>
//         <h3 className="tagline">
//           <span> {this.props.tagline}</span> //uses the keyword 'this' b/c it's a class
//         </h3>
//       </header>
//     );
//   }
// }

const Header = (props) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span> {props.tagline}</span> {/* doesn't need the 'this'keyword b/c/ it's Stateless Functional Component (SFC); it's possible to remove the need for props if you destructure the props parameter, i.e. ({tagline}) => ()+ */}
    </h3>
  </header>
);

export default Header;
