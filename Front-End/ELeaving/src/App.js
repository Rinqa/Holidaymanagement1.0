import React from 'react'
import {Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import Users from './components/Users'
import Pushimet from './components/Pushimet'
import Departamenti from './components/Departamenti'
import Aplikimet from './components/Aplikimet'
function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000/admin')}>
      <Resource name="users" list={Users}></Resource>
      <Resource name="Pushimet" list={Pushimet}></Resource>
      <Resource name="Departamentet" list={Departamenti}></Resource>
      <Resource name="Aplikimet" list={Aplikimet}></Resource>
      <Resource name="Festat Zyrtare" list={Pushimet}></Resource>
      <Resource name="Kompania" list={Pushimet}></Resource>
      <Resource name="Pozitat" list={Pushimet}></Resource>
      <Resource name="Roli" list={Pushimet}></Resource>
      <Resource name="Pushimet e marrura" list={Pushimet}></Resource>
      <Resource name="Statusi Puntorit" list={Pushimet}></Resource>
      <Resource name="Kategorit e Pushimeve" list={Pushimet}></Resource>
    </Admin>
  );
}

export default App;
