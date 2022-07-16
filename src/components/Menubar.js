import React, { useEffect, useState,useContext } from 'react'
import {Link} from "react-router-dom";
import { Navbar, Nav,Dropdown } from 'rsuite';
import { FaRegUserCircle,FaBalanceScale } from 'react-icons/fa';
import { AiOutlineHeart,AiOutlineShoppingCart } from 'react-icons/ai';
import { Store } from '../Store';
import axios from 'axios'

const Menubar = () => {
  let [logo,setLogo] = useState({})
  const {state,dispatch,cartstate} = useContext(Store)
  const {cart} = cartstate
  console.log('cartState', cartstate)

  useEffect(async()=>{
    let logoData = await axios.get('http://localhost:8000/logo')
    setLogo(logoData.data.img)
  },[])

  let handleLogout =()=>{
    dispatch({type: "USER_LOGOUT",})
    localStorage.removeItem('userInfo')
  }

  return (
    <>
    <div className='container'>
        <Navbar className='main_menu'>
            <Navbar.Brand href="#">
            <img src={logo}/>
            </Navbar.Brand>
            <Nav className='menu_item'>
            <Nav.Item>Home</Nav.Item>
            <Nav.Item>pages</Nav.Item>
            <Nav.Item>blog</Nav.Item>
            <Nav.Item>contacts</Nav.Item>
            {state.userInfo
            ?
            <Dropdown title={state.userInfo.Name}>
              {state.userInfo.isAdmin&&
                <Dropdown.Item><Link to='/admin'>Admin Dashboard</Link></Dropdown.Item>
              }
              <Dropdown.Item>About</Dropdown.Item>
                {state.userInfo.isVendor
                ?
                  <Dropdown.Item><Link to='/dashboard'>go to dashboard</Link></Dropdown.Item>
                :
                  <Dropdown.Item><Link to='/vendor'>become a vendor</Link></Dropdown.Item>
                }
              <Dropdown.Item onClick={handleLogout}>logout</Dropdown.Item>
            </Dropdown>
            :
              <Nav.Item>
                <Link to='/Registration'>
                sign up
                </Link>
              </Nav.Item>
            }
            </Nav>
            <Nav pullRight>
            <div className='icon'>
            <FaRegUserCircle className='icon_item'/>
            <AiOutlineHeart className='icon_item'/>
            <FaBalanceScale className='icon_item'/>
            <AiOutlineShoppingCart className='icon_item cart'/>
            <div className='round'>
                <p>4</p>
            </div>
            </div>
            </Nav>
        </Navbar>
    </div>
    </>
  )
}

export default Menubar