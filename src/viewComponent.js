import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

 export class ViewComponent extends Component {
  constructor(props){
    super(props)
    this.editDetails = this.editDetails.bind(this)
  }
  editDetails(){
      this.props.editStoredDetails(this.props.data)
  }
  render() {
      console.info(this.props.data)
      console.info(this.props.keyValue)
    return (
      <div className="App">
        <h1> View Data :</h1>
        <table onClick={this.editDetails}  border='2' id={this.props.keyValue}>
        <tbody>
        <tr>
                <th>Name :</th>
                <td>{this.props.data.name}</td>
            </tr><tr>
                <th>DOB :</th>
                <td>{this.props.data.dob}</td>
            </tr><tr>
                <th>EMAIL :</th>
                <td>{this.props.data.email}</td>
            </tr><tr>
                <th>Mobile :</th>
                <td>{this.props.data.mbNo}</td>
            </tr><tr>
                <th>Picture :</th>
                <td><img src={this.props.data.imgprvw}  height="142" width="142"/></td>
            </tr>
        </tbody>
        </table>         
      </div>
    );
  }
}


