import React, { Component } from "react";
import Table from "./table";
import API from "../utils/api";
import Search from "./search";

class EmployeeResults extends Component {
  state = {
    employees: [],
    search: "",
    matchSearch: [],
    direction: "Ascending",
  };

  componentDidMount() {
    API.fetchRandomEmployees()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          matchSearch: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ search: value });
    this.searchEmployees(value.trim());
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployees(this.state.search.trim());
  };

  searchEmployees = (event) => {
    if (event) {
     
      let formattedSearch = event.charAt(0).toUpperCase() + event.slice(1);

     
      let confirmedMatch = [];

      
      this.state.employees.filter((employee) => {
        if (
          employee.name.first.includes(formattedSearch) ||
          employee.name.last.includes(formattedSearch)
        ) {
          
          confirmedMatch.push(employee);

          
          this.setState({ matchSearch: [confirmedMatch] });

          return `${employee.name.first} ${employee.name.last}`;
        } else {
          return "No employees found.";
        }
      });
    }
  };

  reverseOrder = (event) => {
    if (this.state.direction === "Ascending") {
      this.setState({ direction: "Descending" });
    } else if (this.state.direction === "Descending") {
      this.setState({ direction: "Ascending" });
    }
  };

  render() {
    return (
      <div>
        <Search
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Table
          employees={this.state.employees}
          matchSearch={this.state.matchSearch}
          value={this.state.search}
          direction={this.state.direction}
          reverseOrder={this.reverseOrder}
        />
      </div>
    );
  }
}

export default EmployeeResults;