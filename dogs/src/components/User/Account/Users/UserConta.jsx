import styles from "./account.module.css";
import React, { useContext } from "react";
import UserContaHeader from "./UserContaHeader";
import Feed from "../../../Feed/Feed";
import LoginPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import { UserContext } from "../../../../UserContext";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../../404";
import Head from "../../../Head";

const UserConta = () => {
  const { data } = useContext(UserContext);
  return (
    <div className={styles.account}>
      <Head
        title="Minha Conta"
      />
      {data && (
        <div className={styles.acoountContainer}>
          <UserContaHeader />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/postar" element={<LoginPhotoPost />} />
            <Route path="/estatisticas" element={<UserStats />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default UserConta;
