import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { handleCancel } from "../reducers/signup";
import { login } from "../reducers/user";
import { useRouter } from "next/router";
import { styles } from "../styles/Modal.module.css";


function SignUp() {
  const signup = useSelector((state) => state.signup.value);
  const dispatch = useDispatch();
  const router = useRouter();

  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const handleSignUp = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: signUpFirstname,
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          dispatch(
            login({
              firstname: signUpFirstname,
              username: signUpUsername,
              token: data.token,
            })
          );
          router.push("/main");
        }
        setSignUpUsername("");
        setSignUpFirstname("");
        setSignUpPassword("");
      });
  };

  return (
    <div>
      <Modal
        title="Create your Hackatweet account"
        open={signup}
        bodyStyle={{
          backgroundColor: 'black'
      }}
      
        onCancel={() => dispatch(handleCancel())}
        footer={
          <Button key="submitUp" onClick={() => handleSignUp()}>
            Sign Up
          </Button>
        }
      >

        <div>
        <p>
          
          <input
          
            type="text"
            placeholder="Firstname"
            id="signUpFirstname"
            onChange={(e) => setSignUpFirstname(e.target.value)}
            value={signUpFirstname}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Username"
            id="signUpUsername"
            onChange={(e) => setSignUpUsername(e.target.value)}
            value={signUpUsername}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Password"
            id="signUpPassword"
            onChange={(e) => setSignUpPassword(e.target.value)}
            value={signUpPassword}
          />
        </p>

        </div>




      </Modal>
    

    </div>

  );
}

export default SignUp;
