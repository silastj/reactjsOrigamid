import styles from "./account.module.css";
import React, { useContext } from "react";
import { UserContext } from "../../../UserContext";

const LoginConta = () => {
  console.log("UserContext ", useContext(UserContext));
  const { data } = useContext(UserContext);
  return (
    <div className={styles.account}>
      {data && (
        <div className={styles.acoountContainer}>
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
