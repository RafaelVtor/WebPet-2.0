import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import './styles.css'
import '../../global.css'

export default function Animais () {
  /*
  async function getAnimal(){
    try{
      const response = await api.get('http://localhost:3333/animais');
      const { nome } = response.data;
      console.log(response.data);
    } catch {
      console.error("erro");
    }
  }  
  
  getAnimal();
  
  */

  const [animais, setAnimais] = useState([])

  useEffect(() => {
    api.get('http://localhost:3333/animais').then(response => {
      setAnimais(response.data)
    })
  }, [])

  animais.map(a => {
    console.log(a.nome)
  })

  //Paletas de cores: #D9F1B6,#C4D49F,#9EBF97,#53BAA3,#526B4F,#D9F1B6,#C4D49F,#9EBF97

  return (
    <div className='corpo'>

    <div className='container'>
      {animais.map(animal => (
        <div key={animal.id}>
          <div className='miolo'>
            <div className='img'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyadif9JWZTSrXOqPs4pvNPzSp6Envg9TGLZGzM-Prg3LQFm_c&usqp=CAU'
                alt=''
              />
            </div>
            <div className='textos'>
              <h3>{animal.nome}</h3>
              <p>Idade: testesrer</p>
              <p>Idade: {animal.idade}</p>
              <p>Idade: {animal.tipo}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    </div>
  )
}
