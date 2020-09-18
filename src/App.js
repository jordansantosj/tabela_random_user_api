import React, { useState, useEffect } from 'react';

export default function App() {
    const [repositories, setRepositories] = useState([]);

    useEffect(async () => {
        const response = await fetch('https://api.github.com/users/jordansantosj/repos')
        const data = await response.json()

        setRepositories(data);
    }, [])

    useEffect(() => {
        const filtered = repositories.filter(repo => repo.favorite)
        document.title = `Você tem ${filtered.length} favoritos`
    },[repositories])

    function handleFavorite(id) {
        const newRepositories = repositories.map(repo => {
            return repo.id == id ? { ...repo, favorite: !repo.favorite } : repo
        });

        setRepositories(newRepositories);
    }

    return (
        <ul>
            {repositories.map(repo => (
                <li key={repo.id}>
                    {repo.name}{repo.favorite && <span>(Favorito)</span>}
                    <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
                </li>
            ))}
        </ul>
    );
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

