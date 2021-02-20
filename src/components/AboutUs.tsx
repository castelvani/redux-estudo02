import React from "react";
import { useSelector } from "react-redux";
import { IState } from "../store/modules/user/types";

// import { Container } from './styles';

const AboutUs: React.FC = () => {
  const state = useSelector((state: IState) => state.users);
  console.log(state);

  // useEffect(() => {
  //   setUsers();
  // }, []);

  return (
    <div>
      <h1>Alunos matriculados:</h1>
      <hr />
      {state.map((user, index) => (
        <div key={index}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
