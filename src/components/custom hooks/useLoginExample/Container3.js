import React, { useState } from "react";
import useLogin from "./useLogin";

function Container3() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  console.log("container 3 mounted/rendered");
  const { email, password, setEmail, setPassword } = useLogin();
  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
  );
}

export default Container3;
