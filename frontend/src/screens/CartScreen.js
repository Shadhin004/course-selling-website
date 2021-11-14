import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import '../components/cart.css'

import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { addToCart, removeFromCart } from '../actions/cartActions'

function CartScreen({match, location, history}) {
    const courseId= match.params.id   
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    console.log('cartItems:' , cartItems)

    useEffect(() => {
        if(courseId){
            dispatch(addToCart(courseId))
        } 
    }, [dispatch, courseId])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push ('/login?redirect=shipping')
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
                    <li class="active">Cart</li>
                </ul>
                <h2 class="title">Ca<span>rt</span></h2>
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

            <Container>
            {cartItems.length === 0 ? (
                <div class="container-fluid mt-100 mb-5">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body cart">
                                    <div class="col-sm-12 empty-cart-cls text-center"> <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" class="img-fluid mb-4 mr-3" />
                                        <h3><strong>Your Cart is Empty</strong></h3>
                                        <h4>Add something to make me happy :)</h4> <Link to="/" class="btn btn-primary cart-btn-transform m-3" data-abc="true">Continue Browsing</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div  class="cart-part mb-5">
                    <div class="chart">
                        <div class="row">
                            <div class="col-md-8 cart">
                                <div class="title">
                                    <div class="row">
                                        <div class="col">
                                            <h4><b>Shopping Cart</b></h4>                                        
                                        </div>
                                        <div class="col" style={{textAlign: 'right'}}>Total - {cartItems.length} {cartItems.length === 1 ? ( <span >item </span> ) : ( <span> items </span> )}</div>
                                    </div>
                                </div>                    

                                { cartItems.map(item => (

                                <div class="row border-top border-bottom" key={item.course}>
                                    <div class="row main align-items-center">
                                        <div class="col-2"><img class="img-fluid item-image" src={`http://127.0.0.1:8000${item.image}`} alt={item.name} />
                                        </div>
                                        <div class="col-6">
                                            <div class="row"><Link to={`/courses/${item.course}`}> <b> {item.name} </b> </Link> 
                                            </div>

                                            <div class="row"> <span class="instructorName"> By - {item.instructorName} </span>
                                            </div>                                        
                                        </div>                                    
                                        <div class="col-2"  style={{textAlign: 'center'}}> ৳ {item.price} 
                                        </div>

                                        <div class="col-2"  style={{textAlign: 'center'}}> <a onClick={() => removeFromCartHandler(item.course)} class="close"><i class="fas fa-trash-alt"></i></a> 
                                        </div>
                                    </div>
                                </div>

                                ))}                

                                <div class="back-to-shop"><p>COUPON CODE</p> <input  class="coupon" id="code" placeholder="Enter your code" />
                                </div>
                            </div>
                            <div class="col-md-4 summary">
                                <div>
                                    <h5><b>Summary</b></h5>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col">{cartItems.length} {cartItems.length === 1 ? ( <span >COURSE</span> ) : ( <span> COURSES </span> )}</div>
                                    <div class="col text-right" style={{textAlign: 'center'}}> ৳ {cartItems.reduce((acc, item) => acc + Number(item.price), 0)}</div>
                                </div>
                                <form class="cart-input-form mt-5">
                                    <p>BATCH</p> <select>
                                        <option class="text-muted">Morning (10am - 12pm) </option>
                                        <option class="text-muted">Afternoon (3pm -5pm)</option>
                                    </select>                                
                                </form>
                                <div class="row">
                                    <div class="col">TOTAL</div>
                                    <div class="col" style={{textAlign: 'center'}}> ৳ {cartItems.reduce((acc, item) => acc + Number(item.price), 0)}</div>
                                </div> 
                                <button onClick={checkoutHandler} class="btn btn-primary btn-hover-dark w-100 mt-5">CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}        
            </Container>
        </div>
    )
}

export default CartScreen


