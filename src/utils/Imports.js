// Icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// React modules
import React, { useState, useEffect } from 'react';

// React Router DOM
import { Routes, useSearchParams, Route, useLocation, useNavigate, Link, Navigate } from 'react-router-dom';

// React Redux
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../redux/cartRedux';

// Components
import ProductInfo from '../components/ProductInfo';
import AdditionalDetails from '../components/AdditionalDetails';
import MainImage from '../components/MainImage';
import ProductImages from '../components/ProductImages';
import QuantityControls from '../components/QuantityControls';
import MiniNavbar from '../components/MiniNavbar';
import Newsletter from '../components/Newsletter';
import Categories from '../components/Categories';
import Slider from '../components/Slider';
import FeaturedProduct from '../components/FeaturedProduct';
import OrderCard from '../components/OrderCard';
import List from '../components/List';
import ProductFilter from '../components/ProductFilter';
import DataTable from '../components/DataTable';
import EditUserInfo from '../components/EditUserInfo';
import UserInfo from '../components/UserInfo';
import VerificationSection from '../components/VerificationSection';
import FormSection from '../components/FormSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Payment from '../components/Payment';

// Pages
import ProductPage from '../pages/ProductPage';
import ProductList from '../pages/ProductList';
import Cart from '../pages/Cart';
import Error from '../pages/Error';
import ProfilePage from '../pages/ProfilePage';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Orders from '../pages/Orders';
import PaymentSuccess from '../pages/PaymentSuccess';

//aws-amplify

import { API, Auth } from 'aws-amplify';

//axios

import axios from 'axios';

export {
    // Icons
    AddShoppingCartIcon,
    AddIcon,
    RemoveIcon,
    DeleteOutlineIcon,

    // React modules
    React,
    useState,
    useEffect,

    // React Router DOM
    useLocation,
    useSearchParams,
    Navigate,
    Routes,
    Route,
    useNavigate,
    Link,

    // React Redux
    useDispatch,
    useSelector,
    addProduct,
    removeProduct,

    // Components
    ProductInfo,
    AdditionalDetails,
    MainImage,
    ProductImages,
    QuantityControls,
    MiniNavbar,
    Newsletter,
    Categories,
    Slider,
    FeaturedProduct,
    OrderCard,
    List,
    ProductFilter,
    DataTable,
    EditUserInfo,
    UserInfo,
    VerificationSection,
    FormSection,
    Navbar,
    Footer,
    Payment,

    // Pages
    ProductPage,
    ProductList,
    Cart,
    Error,
    ProfilePage,
    Home,
    SignUp,
    Login,
    Orders,
    PaymentSuccess,

    //aws-amplify
    Auth,
    API,

    //axios
    axios,
};
