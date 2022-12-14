import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/BlueNavbar";
import Search from "../components/Search";
import UserTable from "../components/UserTable";
import CreationModal from "../components/UserCreationModal";
import api from "../../../services/api";

function AdminInstitution() {
  const [users, setInstituicao] = useState([]);
  const [userTypes, setUserTypes] = useState([]);
  const [filters, setFilters] = useState({});
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
  const filteredRows = filterRows(users, filters);

  function filterRows(rows, filters) {
    if (filters == "") return rows;

    return rows.filter((row) => {
      return Object.keys(filters).every((accessor) => {
        var value = row[accessor];
        if (accessor == "user_types") {
          value = row[accessor]["name"];
        }

        const searchValue = filters[accessor];

        if (typeof value === "string" || value instanceof String) {
          return value.toLowerCase().includes(searchValue.toLowerCase());
        }

        if (typeof value === "boolean" || value instanceof Boolean) {
          return (
            (searchValue === "true" && value) ||
            (searchValue === "false" && !value)
          );
        }

        if (typeof value === "number" || value instanceof Number) {
          return value == searchValue;
        }

        return false;
      });
    });
  }

  const handleSearch = (value, accessor) => {
    if (value) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [accessor]: value,
      }));
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters[accessor];

        return updatedFilters;
      });
    }
  };

  const columns = [
    { accessor: "name", label: "Nome" },
    { accessor: "email", label: "Email" },
    { accessor: "birth_date", label: "Data" },
    { accessor: "user_types", label: "Tipo" },
    { accessor: "phone_number", label: "Contato" },
  ];

  useEffect(() => {
    UsersGet();
  }, []);

  useEffect(() => {
    api
      .get("/typeUser/")
      .then((response) => {
        setUserTypes(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const InstituicaoGet = (id) => {
    api
      .get("/user/filter", { params: { user_type_id: id } })
      .then((response) => setInstituicao(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  const UsersGet = () => {
    api
      .get("/typeUser")
      .then((response) => {
        var typeid = 1;
        response.data.forEach((type) => {
          if (type.name == "Institui????es") {
            typeid = type.id;
            InstituicaoGet(typeid);
          }
        });
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  const UpdateUser = (id, data) => {
    api
      .put("/user/" + id, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        UsersGet();
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      });
  };

  const UserDelete = (id) => {
    api
      .delete("/user/" + id)
      .then(() => {
        UsersGet();
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      });
  };

  const createUser = (data) => {
    api
      .post("/user/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        UsersGet();
        setIsCreationModalOpen(false);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      });
  };

  return (
    <div className="rowC">
      <Navbar />
      <div className="admin-background">
        <Header />
        <Search
          title="Institui????es"
          handler={handleSearch}
          options={columns}
          onClickRegisterButton={() => {
            setIsCreationModalOpen(true);
          }}
        />
        <UserTable
          users={filteredRows}
          userDelete={UserDelete}
          updateUser={UpdateUser}
        />
      </div>

      <CreationModal
        isOpen={isCreationModalOpen}
        userTypes={userTypes}
        onClose={() => {
          setIsCreationModalOpen(false);
        }}
        onSubmit={createUser}
      />
    </div>
  );
}

export default AdminInstitution;
