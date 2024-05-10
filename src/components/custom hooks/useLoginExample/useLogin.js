import { useState } from "react";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("use login");

  return { email, password, setEmail, setPassword };
};

export default useLogin;
