import React from 'react';
import { Component } from 'react';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
export class profili extends Component {
    render() {
        return (
            <Admin dataProvider={restProvider('http://localhost:3000/admin')}>
            <Resource name="Profili" ></Resource>
            <Resource name="Pushimet" ></Resource>
            <Resource name="Aplikimet" ></Resource>
        </Admin>
        )}
}