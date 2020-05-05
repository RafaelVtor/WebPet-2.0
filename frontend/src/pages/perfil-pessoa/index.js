import React, { useEffect, useState } from 'react';
import api from '../../services/api';


export default function Dono(id){
  
  
  
  const [ dados, setDados] = useState([])

  useEffect(()=>{
    api.get(`http://localhost:3333/animais/dono/${id.match.params.id}`).then(response=>{
      setDados(response)
    })
  },[])
  

  console.log(dados)
  

  return '23213';
}