import React from 'react';
import { Component } from 'react';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import {usersi} from '../components/usersi'
export class profili extends Component {
    render() {
        return (
            <Admin dataProvider={restProvider('http://localhost:3000/admin')}>
            <Resource name='Profili' list={usersi} ></Resource>
            <Resource name="Ndrro Fjalkalimin " list={usersi} ></Resource>
            <Resource name="Aplikimet" ></Resource>
        </Admin>
        )}
}