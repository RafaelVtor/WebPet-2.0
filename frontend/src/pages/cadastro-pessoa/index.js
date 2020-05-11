import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import api from '../../services/api'

export default function CadastroDono () {
  const [nome, setNome] = useState([])
  const [email, setEmail] = useState([])
  const [tel, setTel] = useState([])
  const [endereco, setEndereco] = useState([])
  const [senha, setSenha] = useState([])
  const history = useHistory()

  async function cadastro (e) {

    e.preventDefault()
    try{

      const response = api.put('/usuarios/novo', {
        nome,
        email,
        tel,
        endereco,
        senha
      })
      console.log(response)
      alert('Você foi cadastrado com sucesso!')
      history.push('/animais')
    } catch{
      alert('Usuário não cadastrado')
    }

  }

  return (
    <div className='corpo'>
      <div className='container'>
        <section className='form'></section>
        <form onSubmit={cadastro}>
          <h4>
            Nome:
            <input
              type='text'
              placeholder='Ex: Manolo dos Santos'
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
          </h4>
          <h4>
            
            E-mail:
            <input
              type='text'
              placeholder='Ex: fulano@hotmail.com'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </h4>
          <h4>
           
            Telefone:
            <input
              type='text'
              placeholder='Ex: fixo ou celular'
              value={tel}
              onChange={e => setTel(e.target.value)}
            />
          </h4>
          <h4>
            Endereço:
            <input
              type='text'
              placeholder='Ex: Rua dos bobos, nº 0'
              value={endereco}
              onChange={e => setEndereco(e.target.value)}
            />
          </h4>
          <h4>
            Senha:
            <input
              type='password'
              placeholder='Cuidado'
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
          </h4>
          <div className='botao'>
              <button className='button'>Acessar</button>
            </div>
        </form>
      </div>
    </div>
  )
}
