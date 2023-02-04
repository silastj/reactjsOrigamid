import React, { useContext } from 'react';
import {UserContext} from '../../UserContext'
import PhotoCommentsForm from '../PhotoCommentsForm';

// import { Container } from './styles';

const PhotoComments = (props) => {
const {login} = useContext(UserContext)

  console.log('login' , login)
  return (
    <div>
      {login && <PhotoCommentsForm id={props.id}/>}   
    </div>
  )
}

export default PhotoComments;