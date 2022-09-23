import React, { useEffect, useState } from "react";
import "./Employees.css";
import EmployeesTable from "./EmployeesTable";
import Loader from "./Loader";

const Employees = ({ employees }) => {
  const [loader, setLoader] = useState(true);
  useEffect(()=> {
      setLoader(false)
  }, [employees])
  return (
    <div className="employees-card">
      <h2>Employees</h2>
      {loader ? 
        ( <div className="loader-wrapper">
            <Loader />
          </div>
        ):
        (
          <EmployeesTable className="table" employees={employees} />
        )
    }
    </div>
  );
};

export default Employees;
