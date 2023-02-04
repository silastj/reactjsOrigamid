import { useState } from "react";
import styles from "./photocommentsform.module.css";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../service/api";

const PhotoCommentsForm = ({ id }) => {
  const [comment, setComment] = useState("")
  const {request, loading, error} = useFetch()

  async function handleSubmit(event){
    event.preventDefault()
    const {url, options} = COMMENT_POST(id, {comment})
    await request(url, options)
  }


  return (
      <form onSubmit={handleSubmit} className={styles.PhotoCommentsForm}>
        <textarea
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        ></textarea>
        <button>
          <Enviar />
        </button>
      </form>
  );
};

export default PhotoCommentsForm;
