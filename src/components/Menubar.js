import React from 'react'
import { Navbar, Nav, Dropdown,Container } from 'rsuite';
import { FaRegUserCircle,FaBalanceScale } from 'react-icons/fa';
import { AiOutlineHeart,AiOutlineShoppingCart } from 'react-icons/ai';
import logo from '../assets/images/logo.png'

const Menubar = () => {
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