import styles from "./photocomments.module.css";
import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "../PhotoCommentsForm";
import { useRef } from "react";
import { useEffect } from "react";

const PhotoComments = (props) => {
  const commentSection = useRef(null)
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight
  }, [comments])
  
  return (
    <>
      <ul  ref={commentSection} className={styles.comment}>
        {comments.map((comment, index) => (
          <li key={comment._ID}>
            <strong>qt: {index + 1}</strong>
            <b>- {comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
