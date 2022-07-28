import React, { useState } from 'react';

const useForm = () => {
  const [ value, setValue] = useState('')
  
  function Onchange({target}){
    setValue(target.value)
  }

  return{
    value,
    setValue,
    Onchange
  }
}

export default useForm;