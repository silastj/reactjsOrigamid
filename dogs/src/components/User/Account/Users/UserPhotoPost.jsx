import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import Input from "../../../Input/index";
import useForm from "../../../../Hooks/useForm";
import useFetch from "../../../../Hooks/useFetch";
import { PHOTO_POST } from "../../../service/api";
import Error from "../../../Error";
import Head from "../../../Head";

const LoginPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);

    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={styles.photoPost}>
      <Head
      title="Post sua foto!"
      />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ? <button disabled>Enviando</button> : <button>Enviar</button>}
        <Error error={error} />
      </form>
      <div className={styles.containerPreview}>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default LoginPhotoPost;
