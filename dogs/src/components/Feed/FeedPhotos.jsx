import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { useEffect } from "react";
import { PHOTOS_GET } from "../service/api";
import Error from "../Error/index";
import Loading from "../Loading/Loading";
import styles from "./feed.module.css";

const FeedPhotos = ({setModalPhoto}) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 24, user: 0 });
      const { response, json } = await request(url, options);
      console.log("retorno ", response, json);
    }

    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={styles.listPhoto} >
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            img={photo.src}
            photo={photo}
            title={photo.title}
            acessos={photo.acessos}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
