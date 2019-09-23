import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Pai from './componentes/Pai';
import Filho from './componentes/Filho';
// import Primeiro from './componentes/Primeiro';
// import BomDia from './componentes/BomDia';
// import { BoaTarde, BoaNoite } from './componentes/Multiplos';
// import Saudacao from './componentes/Saudacao';

// ReactDOM.render(
//     <Fragment>
//         <BomDia nome="Matheus"/>
//         <BoaTarde nome="Matheus"/>
//         <BoaNoite nome="Matheus"/>
//     </Fragment>, document.getElementById('root')
// )

// ReactDOM.render(
//     <Fragment>
//         <Saudacao tipo="Bom dia" nome="Matheus"></Saudacao>
//     </Fragment>,
//     document.getElementById('root')
// )

ReactDOM.render(
    <Fragment>
        <Pai nome="Matheus" sobrenome="Oliveira">
            <Filho nome='Pedro'/>
            <Filho nome='Paulo'/>
            <Filho nome='Carla'/>
        </Pai>
    </Fragment>,
    document.getElementById('root')
)