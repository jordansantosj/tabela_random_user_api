import React, { useState, useEffect } from 'react';

interface User {
    name: UserName;
    id: UserId;
    location: UserLocation;
    dob: UserDateOfBirth;
    gender: string;
    email: string;
    phone: string;
}

interface UserId{
    value: string;
}

interface UserLocation{
    city: string;
    state: string;
    country: string;
}

interface UserName {
    first: string;
    last: string;
    title: string;
}

interface UserDateOfBirth{
    date: string;
}

export default function App() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        async function fetchapi() {
            const response = await fetch('https://randomuser.me/api?results=10');
            const data = await response.json();

            setUsers(data.results);
            console.log(data.results)
        }
        fetchapi()
    }, []);

    return (
        <div>
            <table>
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
                    {users.map(user => (
                        <tr key={user.id.value}>
                            <th scope="row">{}</th>
                            <td>{user.name.first} {user.name.last}</td>
                            <td>{user.dob.date}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.location.city}/{user.location.state}/{user.location.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}


        //     <div>
        //         <Table>
        //             <thead>
        //                 <tr>
        //                     <th>#</th>
        //                     <th>Nome</th>
        //                     <th>Data de nascimento</th>
        //                     <th>Genero</th>
        //                     <th>Email</th>
        //                     <th>Telefone</th>
        //                     <th>Location</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {console.log(usuario)}
        //                 {usuario.map(info => (
        //                     <tr key={info.id.value}>
        //                         <th scope="row">{}</th>
        //                 <td>{info.name.first} { info.name.last}</td>
        //                         <td>{info.dob.date}</td>
        //                         <td>{info.gender}</td>
        //                         <td>{info.email}</td>
        //                         <td>{info.phone}</td>
        //                         <td>{info.location.city}/{info.location.state}/{info.location.country}</td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </Table>

        //     </div>