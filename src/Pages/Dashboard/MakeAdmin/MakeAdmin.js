import React, { useState } from 'react';

const MakeAdmin = () => {

  const [email, setEmail] = useState('');


  const handleOnBlur = (e) => {
    setEmail(e.target.value);
    e.preventDefault();
  }

  const handleAdminSubmit = (e) => {
    const user = { email }
    fetch('http://localhost:5000/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

    e.preventDefault();
  }


  return (
    <div className="container">
      <h2 className="my-5">Make Admin</h2>

      <form onSubmit={handleAdminSubmit}>
        <input type="email" onBlur={handleOnBlur} />
        <input type="submit" />

      </form>
    </div>
  );
};

export default MakeAdmin;