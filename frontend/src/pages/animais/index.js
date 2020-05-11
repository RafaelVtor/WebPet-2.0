import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'
import '../../global.css'

export default function Animais () {
  const [animais, setAnimais] = useState([])

  useEffect(() => {
    api.get('http://localhost:3333/animais').then(response => {
      setAnimais(response.data)
    })
  }, [])

  //Paletas de cores: #D9F1B6,#C4D49F,#9EBF97,#53BAA3,#526B4F,#D9F1B6,#C4D49F,#9EBF97

  return (
    <div className='corpo'>
      <div className='container'>
        {animais.map(animal => {
          return (
            <div key={animal.id}>
              <div className='miolo'>
                <div className='img'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyadif9JWZTSrXOqPs4pvNPzSp6Envg9TGLZGzM-Prg3LQFm_c&usqp=CAU'
                    alt=''
                  />
                </div>
                <div className='textos'>
                  <h3>{animal.animal_nome}</h3>

                  <p>Idade: {animal.idade}</p>
                  <p>tipo: {animal.tipo}</p>

                  <p>
                    dono: 
                    <Link to={`/animais/dono/${animal.dono}`}>
                      {animal.dono_nome}
                    </Link>
                  </p>
                  <Link
                    to={`/animais/animal/${animal.animal_id}`}
                    className='link'
                  >
                    <p>mais...</p>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
