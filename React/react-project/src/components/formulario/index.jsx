import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() =>{
        console.log('O estado mudou')
    }, [nome])

    const renderizaResultado = () =>{
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3

        if(media >= 7){
            return(
                <p>Olá {nome}! Você foi aprovado</p>
            )
        }else{
            return(
                <p>Olá {nome}! Você nao foi aprovado</p>
            )
        }
    }
    
    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Digite seu nome" onChange={({target}) => setNome(target.value)} />
            <input type="number" placeholder="Nota Materia A" onChange={evento => setMateriaA(Number(evento.target.value))} />
            <input onChange={evento => setMateriaB(Number(evento.target.value))} type="number" placeholder="Nota Materia B" />
            <input onChange={evento => setMateriaC(Number(evento.target.value))}type="number" placeholder="Nota Materia C" />
            {!nome == '' ? renderizaResultado() : ''}
        </form>
    )
}

export default Formulario;