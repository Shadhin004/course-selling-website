import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { saveShippingAddress } from '../actions/cartActions'

import { useSelector, useDispatch } from 'react-redux'

function ShippingScreen({ history }) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const userLogin = useSelector(state=> state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const [name,setName] = useState(userInfo.name)
    const [email,setEmail] = useState(userInfo.email)
    const [address,setAddress] = useState(shippingAddress.address)
    const [city,setCity] = useState(shippingAddress.city)
    const [photograph,setPhotograph] = useState(shippingAddress.photograph)


    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(saveShippingAddress({address, city, photograph}))
        history.push('/payment')
        console.log ('Submitted')
    }
     return (
        <div>
            <div class="section page-banner mb-5">
                <img class="shape-1 animation-round" src="/images/shape/shape-8.png" alt="Shape" />
                <img class="shape-2" src="/images/shape/shape-23.png" alt="Shape" />
                <Container>
                    <div class="page-banner-content">
                        <ul class="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li class="active">Shipping</li>
                        </ul>
                        <h2 class="title">Ship<span>ping</span></h2>
                    </div>
                </Container>
                <div class="shape-icon-box">

                <img class="icon-shape-1 animation-left" src="/images/shape/shape-5.png" alt="Shape" />

                <div class="box-content">
                    <div class="box-wrapper">
                    <i class="fas fa-cart-plus"></i>
                    </div>
                </div>

                <img class="icon-shape-2" src="/images/shape/shape-6.png" alt="Shape" />

                </div>
                    <img class="shape-3" src="/images/shape/shape-24.png" alt="Shape" />
                    <img class="shape-author" src="/images/author/author-11.jpg" alt="Shape" />            
            </div>

            <Container className="mb-5">
                <Form onSubmit={submitHandler}>
                <Row>
                    <Col md={6} lg={6} sm={12}>
                        <div class="single-form" controlID="name">
                            <p> Name: </p><input type="text" value={name} required placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <div class="single-form" controlID="email">
                            <p> Email: </p><input type="email" value={email} required placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6} sm={12}>
                        <div class="single-form" controlID="address">
                            <p> Address: </p><input type="text" required placeholder="Address" value={address ? address : ''} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <div class="single-form" controlID="name">
                            <p> City: </p><input type="text" class="form-control" required placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div class="single-form" controlID="name">
                            <p> Most Recent Photograph: </p><input type="file" class="form-control"  required placeholder="Upload Photo" accept="image/png, image/gif, image/jpeg" onChange={(e) => setPhotograph(e.target.value)} />
                        </div>
                    </Col>                    
                </Row>
                <div class="col-12">
                    <div class="form-check py-5">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Agree to Terms & Conditions
                        </label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Continue</button>
                </div>
                </Form>
            </Container>

        </div>
    )
}

export default ShippingScreen
