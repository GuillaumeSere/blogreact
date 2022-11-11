import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";
import { Link } from "react-router-dom";

import React from 'react'

const UserList = () => {

    const users = useSelector(selectAllUsers)

    const renderedUsers = users.map(user => (
        <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
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
