import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Error from './pages/Error';
import ProfilePage from './pages/ProfilePage';
import { popularProducts } from './static/data';
import Home from './pages/Home';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PaymentSuccess from './pages/PaymentSuccess';
import { Auth } from 'aws-amplify';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setIsLogin(true);
      console.log(user);
    } catch (error) {
      setIsLogin(false);
      console.log(error);
    }
  };

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route path="/" element={<Home popularProducts={popularProducts} />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category/:id" element={<ProductList popularProducts={popularProducts} />} />
        <Route path="/cart" element={<Cart />} />
        {isLogin ? (
          <>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/login" element={<Navigate to="/profile" />} />
            <Route path="/register" element={<Navigate to="/profile" />} />
          </>
        ) : (
          <>
            <Route path="/profile" element={<Navigate to="/login" />} />
            <Route path="/orders" element={<Navigate to="/login" />} />
            <Route path="/paymentsuccess" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
          </>
        )}
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
