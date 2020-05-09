import React, { useEffect, useState } from 'react'
import api from '../../services/api'

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
      {animal.map(animal => (
        <h3 key={animal.id}>{animal.nome}</h3>
      ))}
    </div>
  )
}
