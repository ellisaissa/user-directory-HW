import React from "react";
import Container from "./Container";
import * as moment from "moment";

function Table(props) {
  const { employees, matchSearch } = props;

  let sortedEmployees = [...matchSearch].flat();

  if (props.value === "") {
    sortedEmployees = [...employees];
  }

  if (props.direction === "Ascending") {
    sortedEmployees.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return -1;
      } else if (a.name.last > b.name.last) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (props.direction === "Descending") {
    sortedEmployees.sort((a, b) => {
      if (a.name.last > b.name.last) {
        return -1;
      } else if (a.name.last < b.name.last) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  return (
    <Container>
      <div className="table-responsive">
        <table className="table table-hover text-center">
          <thead className="bg-info text-white">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">
                <button
                  className="btn btn-secondary"
                  onClick={props.reverseOrder}
                >
                  Name
                </button>
              </th>
              <th scope="col">Location</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Birthday(MM/DD/YYY)</th>
            </tr>
          </thead>
          <tbody>
            {sortedEmployees.map((employee) => {
              

              const imgSrc = employee.picture.thumbnail;

              const { first, last } = employee.name;
              const fullName = `${first} ${last}`;

              const { city, state } = employee.location;
              const fullLocation = `${city}, ${state}`;

              const phoneNumber = employee.phone;

              const email = employee.email;

              const birthDate = moment(employee.dob.date).format(
                "MM/DD/YYYY"
              );

              return (
                <tr key={employee.login.username}>
                  <th scope="row">
                    <img src={imgSrc} alt="Employee portrait" />
                  </th>
                  <td className="align-middle">{fullName}</td>
                  <td className="align-middle">{fullLocation}</td>
                  <td className="align-middle">{phoneNumber}</td>
                  <td className="align-middle">{email}</td>
                  <td className="align-middle">{birthDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default Table;