import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Animais from '../animais'
import './styles.css'

export default function Animal (req) {
  const { id } = req.match.params
  const [animal, setAnimal] = useState([])
  useEffect(() => {
    api.get(`http://localhost:3333/animais/animal/${id}`).then(response => {
      setAnimal(response.data)
    })
  }, [id])

  animal.map(animal => {
    console.log(animal.nome)
  })
  return (
    <div>
      {animal.map(animal => {
        return (
          <div key={animal.id} className="container">
            <div className='img'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyadif9JWZTSrXOqPs4pvNPzSp6Envg9TGLZGzM-Prg3LQFm_c&usqp=CAU'
                alt=''
              />
            </div>
            <div>
              <h2>{animal.nome}</h2>
              <ul> 
                <li>Idade: {animal.idade}</li>
                <li>Tipo: {animal.tipo}</li>
                <li>Vacinas: {animal.vacinas}</li>
                <li>Observações: {animal.obs}</li>
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}
