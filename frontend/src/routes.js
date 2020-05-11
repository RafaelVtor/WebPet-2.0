import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/logon';
import Animais from './pages/animais';
import Dono from './pages/perfil-pessoa';
import Animal from './pages/perfil-animal';
import CadastroDono from './pages/cadastro-pessoa';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/animais" exact component={Animais} />
        <Route path="/animais/dono/:id" exact component={Dono} />
        <Route path="/animais/animal/:id" exact component={Animal} />
        <Route path="/cadastro" exact component={CadastroDono} />
      </Switch>
    </BrowserRouter>
  );
}