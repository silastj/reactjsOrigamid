import { useState } from "react";
import styles from "./photocommentsform.module.css";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../service/api";
import Error from "../Error";
import Loading from "../Loading/Loading";

const PhotoCommentsForm = ({ id, setComments}) => {
  const [comment, setComment] = useState("")
  const {request, loading, error} = useFetch()

  async function handleSubmit(event){
    event.preventDefault()
    const {url, options} = COMMENT_POST(id, {comment})
    const {response, json} = await request(url, options)
    if(response.ok){
      setComment('')
      setComments((comments) => [...comments, json])
    }
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
        {loading && <Loading/>}
        <Error error={error}/>
      </form>
  );
};

export default PhotoCommentsForm;
