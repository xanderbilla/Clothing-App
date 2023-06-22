import { Auth, useState, useEffect, Navbar, Routes, Route, ProductList, ProductPage, Login, SignUp, Home, PaymentSuccess, Error, Footer, ProfilePage, Orders, Cart, Navigate } from './utils/Imports'
import { popularProducts } from './static/data';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setIsLogin(true);
      setUser(user)
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
        <Route path="/product/:id" element={<ProductPage isLogin={isLogin} setIsLogin={setIsLogin} user={user} />} />
        <Route path="/category/:id" element={<ProductList popularProducts={popularProducts} />} />
        <Route path="/cart" element={<Cart user={isLogin} />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        {isLogin ? (
          <>
          <Route path="/orders" element={<Orders user={user}/>} />
            <Route path="/profile" element={<ProfilePage />} />
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
