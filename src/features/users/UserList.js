import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";
import { Link } from "react-router-dom";

import React from 'react'

const UserList = () => {

    const users = useSelector(selectAllUsers)

    const renderedUsers = users.map(user => (
        <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link> <br />
          <strong>Ville :</strong> <span>{user.address.city}</span> <br />
          <strong>Email :</strong>   <span>{user.email}</span>
        </li>
    ))

  return (
       <>
            <h2>Users</h2>
          <section className="post-list">
              <ul>{renderedUsers}</ul>
          </section>
       </>
    
  );
};

export default UserList;
