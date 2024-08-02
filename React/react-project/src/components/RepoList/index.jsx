import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [ estaCarregando, setEstaCarregando] = useState(false);
    const [errorSearch, setErrorSearch] = useState(false);

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(resposta =>{
                if(!resposta.ok){
                    setErrorSearch(true)
                    console.log(resposta)
                    console.log('odio')
                }
                return resposta.json()
            })
            .then(resJson => {
                setEstaCarregando(false)
                setRepos(resJson);
        })
    }, [nomeUsuario])

    console.log(errorSearch)
    console.log(repos)
    return (
        <div className="container">
            {errorSearch ? (
                <>
                    <img src="./src/components/RepoList/404-error-lost-in-space-animate.svg" alt="" />
                </>
            ) : (
                <ul className={styles.list}>
                    {repos.map(repositorio => (
                        <>
                        <li className={styles.listItem} key={repositorio.id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b>
                                {repositorio.name}
                            </div> 
                            <div className={styles.itemLanguage}>
                                <b>Linguagem: </b> {repositorio.language}
                            </div> 
                            <a className={styles.itemLink} href={repositorio.html_url}>visitar no github</a>
                        </li>
                        </>
                    ))}
                </ul>
            )}
        </div>
    )
}


export default ReposList;


