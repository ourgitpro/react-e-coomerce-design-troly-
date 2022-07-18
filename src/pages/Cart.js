import React, { useContext } from 'react'
import {Grid,Row,Col} from 'rsuite'
import { Store } from '../Store'

const Cart = () => {

    const {cartstate,cartdispatch} = useContext(Store)
    const{ cart } = cartstate
  return (
    <div className='container'>
        <div className='cartpage'>
            <h1>cart page</h1>
        <Grid fluid>
            <Row className="show-grid">
                <Col xs={16}>
                    <Grid fluid>
                        <Row className="show-grid">
                            <Col className='subheading' xs={11}>item</Col>
                            <Col className='subheading' xs={3}>price</Col>
                            <Col className='subheading' xs={5}>quantity</Col>
                            <Col className='subheading' xs={4}>subtotal</Col>
                            <Col className='subheading' xs={1}></Col>
                        </Row>
                    </Grid>
                </Col>
                <Col xs={8}>payment</Col>
            </Row>

            {cart.cartItems.map(item=>(
                <Row className="show-grid" style={{marginTop:'20px'}}>
                    <Col xs={16}>
                        <Grid fluid>
                            <Row className="show-grid">
                                <Col xs={11}>
                                    <div className='box'>
                                        <div className='img'>
                                            <img src={item.image} width='124px'/>
                                        </div>
                                        <div className='details'>
                                            <h6 className='brand'>{item.brand}</h6>
                                            <h6 className='name'>{item.name}</h6>
                                            <h6 className='color'>Color<span style={{display:'inline-block',margin:'0 10px',width:'16px',height:'16px',borderRadius:'50%',background:`#${item.color}`}}></span></h6>
                                            <h6 className='color'>size</h6>
                                        </div>
                                    </div>
                                </Col>
                                <Col className='subheading' xs={3}>price</Col>
                                <Col className='subheading' xs={5}>quantity</Col>
                                <Col className='subheading' xs={4}>subtotal</Col>
                                <Col className='subheading' xs={1}></Col>
                            </Row>
                        </Grid>
                    </Col>
                    {/* <Col xs={8}>payment</Col> */}
                </Row>
            ))}
        </Grid>
        </div>
    </div>
  )
}

export default Cart