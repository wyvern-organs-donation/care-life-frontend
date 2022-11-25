import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/BlueNavbar";
import Search from "../components/Search";
import GetOrgans from "./components/users";
import CreationModal from "./components/CreationModal";
import "./style.css";
import api from "../../../services/api";

function AdminOrgan() {
  const [organs, setOrgan] = useState([]);
  const [filters, setFilters] = useState({});
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
  const filteredRows = filterRows(organs, filters);

  function filterRows(rows, filters) {
    if (filters == "") return rows;

    return rows.filter((row) => {
      return Object.keys(filters).every((accessor) => {
        const value = row[accessor]["name"];
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
    { accessor: "organ_types", label: "Tipo" },
    { accessor: "users_organs_donorTousers", label: "Doador" },
    { accessor: "users_organs_institutionTousers", label: "Instituição" },
  ];

  useEffect(() => {
    OrgansGet();
  }, []);

  const OrgansGet = () => {
    api
      .get("/organ")
      .then((response) => setOrgan(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  const UpdateOrgan = (id, data) => {
    api
      .put("/organ/" + id, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        OrgansGet();
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      });
  };

  const OrganDelete = (id) => {
    api
      .delete("/organ/" + id)
      .then(() => {
        OrgansGet();
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      });
  };

  const createOrgan = (data) => {
    api
      .post("/organ/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        OrgansGet();
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
          title="Órgãos"
          handler={handleSearch}
          options={columns}
          onClickRegisterButton={() => {
            setIsCreationModalOpen(true);
          }}
        />
        <GetOrgans
          organs={filteredRows}
          deleteOrgan={OrganDelete}
          updateOrgan={UpdateOrgan}
        />
      </div>

      <CreationModal
        isOpen={isCreationModalOpen}
        onClose={() => {
          setIsCreationModalOpen(false);
        }}
        onSubmit={createOrgan}
      />
    </div>
  );
}

export default AdminOrgan;
