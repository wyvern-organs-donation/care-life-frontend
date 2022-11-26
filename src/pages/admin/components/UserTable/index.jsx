import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import ModalUser from "../UserEditionDeletionModal";
import "./style.css";

function UserTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Data</th>
          <th>Tipo</th>
          <th>Contato</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <tr className="table-body-row" key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.birth_date}</td>
            <td>{user.user_types.name}</td>
            <td>{user.phone_number}</td>
            <td className="action-td">
              <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
              >
                <ModalUser
                  buttonLabel="View"
                  user={user}
                  action={props.updateUser}
                />
                <ModalUser
                  buttonLabel="Edit"
                  user={user}
                  action={props.updateUser}
                />
                <ModalUser
                  buttonLabel="Delete"
                  user={user}
                  action={props.userDelete}
                />
              </ButtonGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
