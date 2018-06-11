import React, { Component } from "react";
import Table from "react-bootstrap/lib/Table";
import "./Hours.css";
class Hours extends Component {
  render() {
    return (
      <div className="hours">
           <div className="hours_head">Hours</div>
        <Table responsive>
          <tbody>
            <tr>
              <td>Mon - Thus</td>
              <td className="data">11.30AM - 9.30PM</td>
            </tr>
            <tr>
              <td>Fri - Sat</td>
              <td className="data">11.30AM - 10.00PM</td>
            </tr>
            <tr>
              <td>Sun</td>
              <td className="data">4PM - 9.30PM</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Hours;
