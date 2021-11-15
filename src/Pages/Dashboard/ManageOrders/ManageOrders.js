import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageOrders = () => {

  const [orders, setOrders] = useState([]);

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

  const handleUpdate = id => {

    axios.put(`http://localhost:5000/orders/${id}`, {
      status: 'Approved'
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    fetch('http://localhost:5000/orders/')
      .then(res => res.json())
      .then(data => {
        setOrders(data);
      })
  }, []);

  return (
    <div className="container">
      <h2 className="my-5">Manage All Orders</h2>

      <ul className="list-group">
        {
          orders.map(order => <li key={order._id} className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{order.email} | {order._id}</div>

              <small>Order Status: <span className="bg-info px-2 py-1 text-light">{order.status}</span></small>
            </div>
            <span className="bg-light">
              {(order.status !== "Approved") ?
                <button className="btn btn-success mx-2" onClick={() => { handleUpdate(order._id) }}>Approve</button>
                :
                ""
              }


              <button className="btn btn-danger mx-2" onClick={() => { handleDelete(order._id) }}>Delete</button>

            </span>
          </li>)
        }
      </ul>

    </div>
  );
};

export default ManageOrders;