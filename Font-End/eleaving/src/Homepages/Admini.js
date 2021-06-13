import React from 'react';
import { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import Users from '../components/Users'
import Pushimet from '../components/Pushimet'
import Departamenti from '../components/Departamenti'
import Aplikimet from '../components/Aplikimet'
import FestatZyrtare from '../components/Festatzyrtare'
import Kompania from '../components/Kompania'
import Pozitat from '../components/Pozitat'
import Roli from '../components/Roli'
import PushimetM from '../components/PushimeteMarrura'
import StatPuntori from '../components/StatusiPuntorit'
import KatPushimit from '../components/kategoriaPushimit'
import adminHome from './adminHome'
export class Admini extends Component {
    render() {
        return (
            <Admin dataProvider={restProvider('http://localhost:3000/admin')}>
                <Resource name="Home" list={adminHome}></Resource>
                <Resource name="Users" list={Users}></Resource>
                <Resource name="Pushimet" list={Pushimet}></Resource>
                <Resource name="Departamentet" list={Departamenti}></Resource>
                <Resource name="Aplikimet" list={Aplikimet}></Resource>
                <Resource name="Festat Zyrtare" list={FestatZyrtare}></Resource>
                <Resource name="Kompania" list={Kompania}></Resource>
                <Resource name="Pozitat" list={Pozitat}></Resource>
                <Resource name="Roli" list={Roli}></Resource>
                <Resource name="Pushimet e marrura" list={PushimetM}></Resource>
                <Resource name="Statusi Puntorit" list={StatPuntori}></Resource>
                <Resource name="Kategorit e Pushimeve" list={KatPushimit}></Resource>


            </Admin>
        )
    }
}