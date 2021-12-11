import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Products from './Pages/Products/Products';
import Footer from './Pages/Common/Footer';
import SingleProduct from './Pages/Products/SingleProduct/SingleProduct';
import AuthProvider from './contexs/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import DashboardTogether from './Pages/Dashboard/MainContent/DashboardTogether';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import Pay from './Pages/Dashboard/Pay/Pay';
import ManageProduct from './Pages/Dashboard/ManageProduct/ManageProduct';
import Review from './Pages/Home/Review';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import Contact from './Pages/Home/Contact';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/products/:id" element={<SingleProduct />}></Route>
            <Route path="/products" element={<Products />}></Route>


            <Route path="/" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
            >
              <Route path="dashboard" element={<DashboardTogether />}></Route>
              <Route path="dashboard/my-order" element={<MyOrder />}></Route>
              <Route path="dashboard/pay" element={<Pay />}></Route>
              <Route path="dashboard/manage-product" element={<ManageProduct />}></Route>
              <Route path="dashboard/review" element={<Review />}></Route>
              <Route path="dashboard/manage-orders" element={<ManageOrders />}></Route>
              <Route path="dashboard/make-admin" element={<MakeAdmin />}></Route>
              <Route path="dashboard/add-product" element={<AddProduct />}></Route>

            </Route>




            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>

          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;