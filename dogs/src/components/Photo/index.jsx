import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Error from "../Error";
import Head from "../Head";
import Loading from "../Loading/Loading";
import PhotoContent from "../PhotoContent";
import { PHOTO_GET } from "../service/api";
import styles from "./photo.module.css";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div className={styles.Photo}>
        <Head
          title={data.photo.title}
        />
        <PhotoContent data={data} />
      </div>
    );
};

export default Photo;
