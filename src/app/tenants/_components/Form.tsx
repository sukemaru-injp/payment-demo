"use client";

import { FC, useState } from "react";
import { formStyle, inputContainer } from "./styles.css";

type Props = {
  submit: (val: { email: string, password: string, name: string }) => void;
}
export const Form: FC<Props> = ({ submit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <form
      className={formStyle}
      onSubmit={(e) => {
        e.preventDefault();
        submit({ email, password, name });
      }}>
      <div className={inputContainer}>
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
      </div>

      <div className={inputContainer}>
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
      </div>
      <div className={inputContainer}>
        <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}  />
      </div>

      <button style={{ width: "300px"}} type="submit">submit</button>
    </form>
  )
}