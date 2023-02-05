import useFetch from "../../Hooks/useFetch";
import Error from "../Error";
import Loading from "../Loading/Loading";
import { PHOTO_DELETE } from "../service/api";
import styles from "./photodelete.module.css";

const PhotoDelete = ({ id }) => {
  const { loading, request, error } = useFetch();

  async function handleDelete() {
    const confirm = window.confirm('Tem certeza que deseja deletar?')
    if(confirm){
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      <button onClick={handleDelete} className={styles.photodelete}>
        Delete
      </button>
      {loading && <Loading/>}
      {error && <Error error={error} />}
    </>
  );
};

export default PhotoDelete;
