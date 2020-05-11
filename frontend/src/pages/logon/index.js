import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'
import '../../global.css'

export default function Logon () {
  const [usuario, setUsuario] = useState([])
  const [id, setNome] = useState([])
  const [senha, setSenha] = useState([])
  const history = useHistory()

  async function login (e) {
    e.preventDefault()

    try {
      const response = await api.post('http://localhost:3333/sessions', {
        id,
        senha
      })
      console.log(response)
      alert('Olá ' + response.data.nome)
      history.push('/animais')
    } catch {
      alert('Usuário ou senha incorreta')
    }
  }

  console.log(usuario)

  return (
    <div className='corpo'>
      <div className='container'>
        <section className='form'>
          <form onSubmit={login}>
            <h1>Acesse o seu Login</h1>
            <input
              type='text'
              placeholder=' Seu login '
              value={id}
              onChange={e => setNome(e.target.value)}
            />

            <h1>Digite sua senha</h1>
            <input
              type='password'
              placeholder='senha'
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
            <div className='botao'>
              <button className='button'>Acessar</button>
            </div>
          </form>
        </section>
      </div>
        <div>
          <p>Não é cadastrado? Acesse <Link to="/cadastro">aqui</Link>
            
          </p>
        </div>
    </div>
  )
}
