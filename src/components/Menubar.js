import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Dropdown,Container } from 'rsuite';
import { FaRegUserCircle,FaBalanceScale } from 'react-icons/fa';
import { AiOutlineHeart,AiOutlineShoppingCart } from 'react-icons/ai';
import axios from 'axios'

const Menubar = () => {
  let [logo,setLogo] = useState({})

  useEffect(async()=>{
    let logoData = await axios.get('http://localhost:8000/logo')
    setLogo(logoData.data.img)
  },[])
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
            </Nav>
            <Nav pullRight>
            <div className='icon'>
            <FaRegUserCircle className='icon_item'/>
            <AiOutlineHeart className='icon_item'/>
            <FaBalanceScale className='icon_item'/>
            <AiOutlineShoppingCart className='icon_item cart'/>
            <div className='round'>
                <p>15</p>
            </div>
            </div>
            </Nav>
        </Navbar>
    </div>
    </>
  )
}

export default Menubar