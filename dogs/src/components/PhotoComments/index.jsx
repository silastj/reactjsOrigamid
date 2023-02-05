import styles from "./photocomments.module.css";
import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "../PhotoCommentsForm";

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);
  return (
    <>
      <div className={styles.comment}>
        {comments.map((comment, index) => (
          <li key={comment._ID}>
            <strong>qt: {index + 1}</strong>
            <b>- {comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </div>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
