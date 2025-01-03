/* eslint-disable */
import React, { useState } from "react";
import { userList } from "../data/users";
import UserCard from "./userCard";

const UsersList = () => {
  const [searchEmail, setSearchEmail] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userList);

  const handleSearch = () => {
    const filtered = userList.filter((user) =>
      user.email.toLowerCase().includes(searchEmail.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleReset = () => {
    setSearchEmail("");
    setFilteredUsers(userList);
  };

  return (
    <div className='container mt-4'>
      <div className='mb-3 d-flex justify-content-center align-items-center'>
        <input
          type='text'
          className='form-control w-25'
          placeholder='Search by email'
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
        />
        <button className='btn btn-dark mx-2' onClick={handleSearch}>
          Search
        </button>

        {searchEmail && (
          <button className='btn btn-secondary ms-0' onClick={handleReset}>
            Reset
          </button>
        )}
      </div>

      <div className='row'>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p className='text-center'>No users found!</p>
        )}
      </div>
    </div>
  );
};
export default UsersList;
