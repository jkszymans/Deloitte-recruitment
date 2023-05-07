import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const USERS_LIST_ENDPOINT = "http://127.0.0.1:8000/users/";

function UserForm(props) {
  const [usernameInput, setUsernameInput] = useState(
    props.user.user.username ? props.user.user.username : ""
  );
  const [emailInput, setEmailInput] = useState(
    props.user.user.email ? props.user.user.email : ""
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleUserUpdate(props.user.user.id, {
      username: usernameInput,
      email: emailInput,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.target.value)}
      />
      <label>Email:</label>
      <input
        type="text"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

function User(props) {
  const [usersToUpdate, setUsersToUpdate] = useState([]);

  const displayUserUpdateForm = (user) => {
    if (
      usersToUpdate.filter((toUpdateUser) => toUpdateUser.id !== user.id)
        .length === 0
    ) {
      const newUsersToUpdate = [...usersToUpdate, { user }];
      setUsersToUpdate(newUsersToUpdate);
    }
  };

  const handleUserDelete = (userId) => {
    axios
      .delete(`${USERS_LIST_ENDPOINT}${userId}/`)
      .then((res) => {
        props.loadUsersList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUserUpdate = (userId, data) => {
    axios
      .put(`${USERS_LIST_ENDPOINT}${userId}/`, data)
      .then((res) => {
        props.loadUsersList();
      })
      .catch((err) => {
        console.log(err);
      });
    let newUsersToUpdate = [...usersToUpdate].filter(
      (user) => user.id === userId
    );
    setUsersToUpdate(newUsersToUpdate);
  };

  return (
    <div>
      username: {props.user.username} email: {props.user.email}{" "}
      <Button variant="primary" onClick={() => handleUserDelete(props.user.id)}>
        delete
      </Button>
      <Button
        variant="primary"
        onClick={() => displayUserUpdateForm(props.user)}
      >
        update
      </Button>
      {usersToUpdate
        ? usersToUpdate.map((user) => (
            <UserForm
              user={user}
              handleUserUpdate={handleUserUpdate}
              setUsersToUpdate={setUsersToUpdate}
              usersToUpdate={usersToUpdate}
            />
          ))
        : ""}
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  const loadUsersList = () => {
    axios
      .get(USERS_LIST_ENDPOINT)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadUsersList();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ListGroup>
        {users.map((user) => (
          <ListGroup.Item key={user.id}>
            <User user={user} loadUsersList={loadUsersList} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Users;
