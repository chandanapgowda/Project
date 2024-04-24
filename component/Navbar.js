import React from 'react';
// import images from '../images/large (1).png';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'font-awesome/css/font-awesome.min.css'; 

function Navbar() {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  }

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-row row">
          <div className="col-1">
            <span className="sideNav" style={{ fontSize: '35px', cursor: 'pointer', color: '#fff', marginLeft: '20px' }} onClick={openNav}> &#9776;</span>
            <img src="large (1).png" alt="Logo" className="img" />
          </div>
          <div className="col-4">
            <div className="search1">
              <input type="text" placeholder="search" />
              <div className="search_icon">
                <img className="icon" src="search.svg" alt="Search" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-5">
            <div className="user">
              <img src="user.svg" alt="User" style={{ height: '35px' }} />
              <a className="m">&nbsp;Sign in</a> &nbsp;<i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>
            <div className="profile">
              <img src="wishlist.svg" alt="Wishlist" style={{ height: '35px', margin: '8px' }} />&nbsp;&nbsp;<a className="w"> wishlist</a>
            </div>
            <div className="cart">
              <img src="cart.svg" alt="Cart" style={{ height: '35px', marginTop: '10px' }} />&nbsp;<a className="w">Cart</a>
            </div>
          </div>
        </div>

        <div className="navbar-row3">
          <div href="#" className="search1" style={{ width: '100%' }}>
            <input type="search" placeholder="search" />
            <div className="search_icon">
              <img className="icon" src="search.svg" alt="Search" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="navbar-row2">
          <div className="dropdown">
            <button className="dropbtn"><a>&nbsp;Shop</a> &nbsp;<i className="fa fa-angle-down" aria-hidden="true"></i></button>
            <div className="dropdown-content">
              {/* Dropdown content here */}
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn"><a>&nbsp;Brand</a> &nbsp;<i className="fa fa-angle-down" aria-hidden="true"></i></button>
            <div className="dropdown-content">
              {/* Dropdown content here */}
            </div>
          </div>
        </div>

        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
 )};
export default Navbar;


// class SideNavigation extends React.Component {
//   openNav = () => {
//     document.getElementById("mySidenav").style.width = "250px";
//   };

//   closeNav = () => {
//     document.getElementById("mySidenav").style.width = "0";
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.openNav}>Open Nav</button>
//         <div id="mySidenav" style={{ width: '0' }}>
//           {/* Your side navigation content here */}
//           <button onClick={this.closeNav}>Close Nav</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default SideNavigation;
