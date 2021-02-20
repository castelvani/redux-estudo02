import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import api from "../service/api";

import { addNewUser } from "../store/modules/user/actions";

import { IUser } from "../store/modules/user/types";

// import { Container } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get("students").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleAddUsers = useCallback(
    (user: IUser) => {
      dispatch(addNewUser(user));
    },
    [dispatch]
  );

  return (
    <div>
      <h1>Hello Accenture</h1>
      {users.map((user, index) => (
        <div key={index}>
          <p>
            {user.id} {user.name} {user.email} {user.age}
          </p>
          <button onClick={() => handleAddUsers(user)}>Adicionar</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
