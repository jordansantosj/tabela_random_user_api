import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap'

export default function App() {
    const [users, setUsers] = useState([]);

    useEffect(async () => {
        const response = await fetch('https://randomuser.me/api?results=10')
        const data = await response.json()

        setUsers(data.results);
    }, [])

    console.log(users)

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
                        {users.map(info => (
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
    );
}

