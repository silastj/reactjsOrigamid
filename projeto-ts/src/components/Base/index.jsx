import React, { useState, useEffect, useCallback } from 'react';
import { GlobalContext } from '../GlobalContext';


const Base = () => {
    const global = useCallback(GlobalContext);
    console.log('global', global)
  return(
    <div><p>Dados: </p></div>
  )
}

export default Base;