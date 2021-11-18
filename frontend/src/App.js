import { Container, Row } from 'react-bootstrap';
import './style.css';

import HeaderSection from './components/Header/HeaderSection';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop';
import MobileMenu from './components/MobileHeader/MobileMenu';
import MenuOverlay from './components/Overlay/MenuOverlay';
import Header from './components/Header';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import CoursesDetailsScreen from './screens/CoursesDetailsScreen';
import AllCoursesScreen from './screens/AllCoursesScreen'
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';





function App() {
  return (
   <Router>
   <div class="main-wrapper">
      <Header />
      <>
        
        <Route path='/' component={HomeScreen} exact />
        <Route path='/contact' component={ContactScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/courses' component={AllCoursesScreen} exact />
        <Route path='/courses/:id' component={CoursesDetailsScreen} exact />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/profile/' component={ProfileScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        
      </>
      <Footer />
      <BackToTop />
    </div>
    </Router>
  );
}

export default App;
