import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { handleCancel2 } from "../reducers/signin";

function SignIn() {
  const signin = useSelector((state) => state.signin.value);
  const dispatch = useDispatch();

  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  return (
    <div>
      <Modal
        title="Connect to Hackatweet"
        open={signin}
        onCancel={() => dispatch(handleCancel2())}
        footer={
          <Button key="submitIn" onClick={() => dispatch(handleCancel2())}>
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
