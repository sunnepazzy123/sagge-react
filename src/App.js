import Navbar from "./Navbar";
import "./App.css";
import Reports from "./Reports";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [employees, setEmployees] = useState();
  const [trends, setTrends] = useState();

  useEffect(() => {
    async function getEmployees() {
      const employees = await axios.get("http://localhost:8000/employees");
      setEmployees(employees.data);
    }

    async function getTrends() {
      const trends = await axios.get("http://localhost:8000/trends");
      setTrends(trends.data);
    }
    getTrends();
    getEmployees();
  }, []);


  return (
    <div className="app">
      <Navbar />
      <Reports employees={employees} trends={trends} />
    </div>
  );
};

export default App;
