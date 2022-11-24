import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import ModalOrgan from '../Modal';
import './style.css';

function GetOrgans(props) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Doador</th>
                    <th>Instituição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
            {props.organs.map((organ) => (
                <tr className='table-body-row' key={organ.id}>
                    <td>{organ.organ_types.name}</td>
                    <td>{organ.users_organs_donorTousers.name}</td>
                    <td>{organ.users_organs_institutionTousers.name}</td>
                    <td>
                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <ModalOrgan buttonLabel="View" organ={organ} action={props.updateOrgan} />
                            <ModalOrgan buttonLabel="Edit" organ={organ} action={props.updateOrgan} />
                            <ModalOrgan buttonLabel="Delete" organ={organ} action={props.deleteOrgan}/>
                        </ButtonGroup>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default GetOrgans
