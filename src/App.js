import React, { Component } from 'react';
import api from './Api';
import { Table } from 'reactstrap'

class App extends Component {

    state = {
        usuario: [],
    }
    async componentDidMount() {
        const response = await api.get()
        this.setState({ usuario: response.data.results })
    }
    render() {

        const { usuario } = this.state;
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Data de nascimento</th>
                            <th>Genero</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(usuario)}
                        {usuario.map(info => (
                            <tr key={info.id.value}>
                                <th scope="row">{}</th>
                        <td>{info.name.first} { info.name.last}</td>
                                <td>{info.dob.date}</td>
                                <td>{info.gender}</td>
                                <td>{info.email}</td>
                                <td>{info.phone}</td>
                                <td>{info.location.city}/{info.location.state}/{info.location.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </div>
        )
    }
}

export default App;