import React from "react";
import Table from "react-bootstrap/Table";
import moment from "moment/moment";

const EmployeesTable = ({ employees }) => {
  return (
    <Table responsive striped bordered hover variant="light" size="sm">
      <thead>
        <tr>
          <th style={{ padding: "10px 30px" }}>Employee</th>
          <th style={{ padding: "10px 30px" }}>Last login</th>
          <th style={{ padding: "10px 30px" }}>Department</th>
          <th style={{ padding: "10px 30px" }}>Status</th>
          <th> </th>
        </tr>
      </thead>
      {employees &&
        employees.map((employee) => (
          <tbody className="employees-details" key={employee.id}>
            <tr>
              <td>
                <img src="" alt="" />
                <div
                  className="employee-handle"
                  style={{ padding: "10px 20px", lineHeight: "3px" }}
                >
                  <h6 style={{ fontSize: "13px" }}>{employee.name}</h6>
                  <p style={{ opacity: "0.7" }}>{employee.email}</p>
                </div>
              </td>
              <td style={{ padding: "30px", lineHeight: "3px" }}>
                <h6 style={{ fontSize: "13px" }}>{employee.lastDay}</h6>
                <p style={{ opacity: "0.7" }}>
                  {moment(employee.lastDay).fromNow()}
                </p>
              </td>
              <td style={{ padding: "30px", fontWeight: "600" }}>
                {employee.department}
              </td>
              {employee.status === "Active" ? (
                <td
                  style={{ color: "green", padding: "30px", fontWeight: "600" }}
                >
                  {employee.status}
                </td>
              ) : (
                <td
                  style={{ color: "red", padding: "30px", fontWeight: "600" }}
                >
                  {employee.status}
                </td>
              )}
              <td style={{ padding: "30px" }}>^</td>
            </tr>
          </tbody>
        ))}
    </Table>
  );
};

export default EmployeesTable;
