import styles from "./account.module.css";
import React, { useContext } from "react";
import UserContaHeader from "./UserContaHeader";
import Feed from "../../Feed/Feed";
import LoginPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import { UserContext } from "../../../UserContext";
import { Route, Routes } from "react-router-dom";

const UserConta = () => {
  const { data } = useContext(UserContext);
  return (
    <div className={styles.account}>
      {data && (
        <div className={styles.acoountContainer}>
          <UserContaHeader />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/postar" element={<LoginPhotoPost />} />
            <Route path="/estatisticas" element={<UserStats />} />
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

export default UserConta;
