import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import './styles.css'

export default function Dono (props) {
  const [dados, setDados] = useState([])
  const [animais, setAnimais] = useState([])

  console.log(props.match.params.id)

  useEffect(() => {
    api.get(`/animais/dono/${props.match.params.id}`).then(response => {
      setDados(response.data)
    })
  }, [])

  useEffect(() => {
    api
      .get(`/animais/animal-usuario/${props.match.params.id}`)
      .then(response => {
        setAnimais(response.data)
      })
  }, [])

  console.log(animais)

  return (
    <div className='corpo-perfil'>
      <div className='dono'>
        {dados.map(dado => {
          return (
            <ul key={dado.id}>
              <li>Nome: {dado.nome}</li>
              <li>Tel: {dado.tel}</li>
              <li>E-mail: {dado.email}</li>
            </ul>
          )
        })}
      </div>
      <div className='corpo-animais'>
        <div className='lista-animais-dono'>
          {animais.map(animal => {
            return (
              <ul key={animal.id}>
                <li>{animal.foto}</li>
                <li>Nome: {animal.nome}</li>
                <li>Tipo: {animal.tipo}</li>
                <li>Idade: {animal.idade}</li>
              </ul>
            )
          })}
          <ul></ul>
        </div>
      </div>
    </div>
  )
}
