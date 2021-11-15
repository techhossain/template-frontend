import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyOrder = () => {
  const { user, setUser } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, []);

  const singleUserOrder = orders.filter(order => order.email === user.email)



  const handleDelete = (id) => {
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        const remaining = orders.filter(order => order._id !== id);
        setOrders(remaining);
      })
  }

  // useEffect(() => {
  //   fetch('http://localhost:5000/orders/')
  //     .then(res => res.json())
  //     .then(data => {
  //       setOrders(data);
  //     })
  // }, []);


  return (
    <div className="container">
      <h2 className="my-5">My Order</h2>


      <ul className="list-group">
        {
          singleUserOrder.map(order => <li key={order._id} className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{order.email} | {order._id}</div>

              <small>Order Status: <span className="bg-info px-2 py-1 text-light">{order.status}</span></small>
            </div>
            <span className="bg-light">

              <button className="btn btn-danger mx-2" onClick={() => { handleDelete(order._id) }}>Delete</button>

            </span>
          </li>)
        }
      </ul>

    </div>
  );
};

export default MyOrder;