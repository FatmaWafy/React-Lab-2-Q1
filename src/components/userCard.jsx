/* eslint-disable */
import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className='col-md-4 mb-4'>
      <div className='card p-3'>
        <img
          src={user.image}
          alt={user.username}
          className='card-img-top rounded-circle mx-auto'
          style={{ width: "100px", height: "100px" }}
        />
        <div className='card-body text-center'>
          <h5 className='card-title d-flex justify-content-center align-items-center'>
            {user.username}
            <span
              className={`ms-2 ${
                user.role === "admin" ? "text-success" : "text-danger"
              }`}
            >
              ★
            </span>
          </h5>
          <p className='card-text'>{user.email}</p>
          <p className='card-text'>{user.phone}</p>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
