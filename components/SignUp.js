import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { handleCancel } from "../reducers/signup";

function SignUp() {
  const signup = useSelector((state) => state.signup.value);
  const dispatch = useDispatch();

  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  return (
    <div>
      <Modal
        title="Create your Hackatweet account"
        open={signup}
        onCancel={() => dispatch(handleCancel())}
        footer={
          <Button key="submitUp" onClick={() => dispatch(handleCancel())}>
            Sign Up
          </Button>
        }
      >
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
      </Modal>
    </div>
  );
}

export default SignUp;
