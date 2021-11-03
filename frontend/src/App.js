import { Container, Row } from 'react-bootstrap';
import './style.css';

import HeaderSection from './components/Header/HeaderSection';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import CoursesDetailsScreen from './screens/CoursesDetailsScreen';
import AllCoursesScreen from './screens/AllCoursesScreen'
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';





function App() {
  return (
   <Router>
   <div class="main-wrapper">
      <HeaderSection />
      <main>
        
        <Route path='/' component={HomeScreen} exact />
        <Route path='/contact' component={ContactScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/courses' component={AllCoursesScreen} exact />
        <Route path='/courses/:id' component={CoursesDetailsScreen} exact />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/profile/' component={ProfileScreen} />
        
      </main>
      <Footer />
      <BackToTop />
    </div>
    </Router>
  );
}

export default App;
