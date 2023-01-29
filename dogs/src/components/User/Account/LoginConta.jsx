import styles from "./account.module.css";
import React, { useContext } from "react";
import LoginContaHeader from "./LoginContaHeader";
import Feed from "../../Feed/Feed";
import LoginPhotoPost from "./LoginPhotoPost";
import LoginStats from "./LoginStats";
import { UserContext } from "../../../UserContext";
import { Route, Routes } from "react-router-dom";

const LoginConta = () => {
  console.log("UserContext ", useContext(UserContext));
  const { data } = useContext(UserContext);
  return (
    <div className={styles.account}>
      {data && (
        <div className={styles.acoountContainer}>
          <LoginContaHeader />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/postar" element={<LoginPhotoPost />} />
            <Route path="/estatisticas" element={<LoginStats />} />
          </Routes>
          <h2>
            Logado com a conta: <span>{data.nome}</span>
          </h2>
          <h3>
            Seu email: <span>{data.email}</span>
          </h3>
        </div>
      )}
    </div>
  );
};

export default LoginConta;
