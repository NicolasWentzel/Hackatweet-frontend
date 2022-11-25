import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { handleCancel2 } from "../reducers/signin";
import { login } from "../reducers/user";
import { useRouter } from "next/router";
import { styles } from "../styles/Modal.module.css";

function SignIn() {
  const signin = useSelector((state) => state.signin.value);
  const dispatch = useDispatch();
  const router = useRouter();

  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          dispatch(
            login({
              username: signInUsername,
              token: data.user.token,
              firstname: data.user.firstname,
            })
          );
          setSignInUsername("");
          setSignInPassword("");
          router.push("/main");
        }
      });
  };

  return (
    <div>
      <Modal
        title="Connect to Hackatweet"
        bodyStyle={{
          backgroundColor: 'black'
      }}
        open={signin}
        onCancel={() => dispatch(handleCancel2())}
        footer={
          <Button key="submitIn" onClick={() => handleConnection()}>
            Sign In
          </Button>
        }
      >
        <p>
          <input
            type="text"
            placeholder="Username"
            id="signInUsername"
            onChange={(e) => setSignInUsername(e.target.value)}
            value={signInUsername}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Password"
            id="signInPassword"
            onChange={(e) => setSignInPassword(e.target.value)}
            value={signInPassword}
          />
        </p>
      </Modal>
    </div>
  );
}

export default SignIn;
