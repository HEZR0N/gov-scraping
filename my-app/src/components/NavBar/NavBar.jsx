import React, {useState, useContext,useEffect} from 'react'
import './NavBar.css'
import { NavLink, Link, Outlet } from 'react-router-dom'
import game from '../../assets/trace-icon.jpg'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {BiPackage} from 'react-icons/bi'
import { useCart } from "react-use-cart";
import {BsFillPersonFill} from 'react-icons/bs'
import {GrUserAdmin} from 'react-icons/gr'
import {AiFillLock} from 'react-icons/ai'
// import {
//   onAuthStateChanged,
// } from "firebase/auth";
// import { auth } from "../../firebaseconfig";

const NavBar = () => {
  const [user, setUser] = useState({});
  // useEffect(() => {
  //   onAuthStateChanged(auth, (currentUser) => {
  //       setUser(currentUser);
  //     });
  // }, []) 
  const isadmin=null;
  const isauthenicated=null;
  const { totalItems } = useCart();
  return (
    <>
    <div id="navbaronly">
    <nav class="menu-container">
    <input type="checkbox" aria-label="Toggle menu" />
    <span></span>
    <span></span>
    <span></span>
    <a href="/" class="menu-logo"><img src={game} alt="hello"/></a>
    <div class="menu">
      <ul>
        <li><NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/" end> Home </NavLink></li>
        {/* <li><NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/Shop" end> Shop </NavLink></li> */}
        {/* <li><NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/About" end> About </NavLink></li> */}
        <li><NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/Visuals" end > Visuals </NavLink></li>
        <li><NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/CCFAward2023-04-11" end > CCF </NavLink></li>
        <li><NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/CICIAward2023-04-10" end > CICI </NavLink></li>
        <li><NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/CSSIAward2023-04-16" end > CSSI </NavLink></li>
        <li><NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/DIBBSAward2023-04-13" end > DIBBS </NavLink></li>
        <li><NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/MRIAward2023-04-16" end > MRI </NavLink></li>
        <li><NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/OACAward2023-04-18" end > OAC </NavLink></li>
        <li><NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/SI2Award2023-04-24" end > SI2 </NavLink></li>
        <li><NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/About" end > About Us </NavLink></li>
      </ul>
      <ul>
       {/* <li> { user?.email==('marco@gmail.com') && <NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/Admin" end ><AiFillLock/>Admin</NavLink>}</li> */}
        {/* <li> { !user ? <NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/Cart" end ><HiOutlineShoppingCart />cart {totalItems}</NavLink>:<NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/Orders" end ><BiPackage/> orders </NavLink>}</li> */}
        {/* <li> { !user ? <NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/SignUp" end > Signup </NavLink> : <NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/Cart" end ><HiOutlineShoppingCart />cart {totalItems}</NavLink>}</li> */}
        {/* <li> { !user ? <NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/Login" end > Login </NavLink> : <NavLink style={({ isActive}) => { return isActive ? { color: "red"} : {}}} to="/Signout" end ><BsFillPersonFill/>{user?.email} </NavLink>}</li> */}
      </ul>
    </div>
  </nav>
  </div>
    </>
  )
}

export default NavBar