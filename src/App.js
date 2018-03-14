import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ViewComponent} from './viewComponent.js';
import _ from 'lodash';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      imgFile:'',
      imgprvw:'',
      dataCount: 0,
      data:{},
    }
    this.handleImageUpload = this.handleImageUpload.bind(this)
    this.handleFormData = this.handleFormData.bind(this)
    this.editStoredDetails = this.editStoredDetails.bind(this)
  }
  handleImageUpload(e){
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        imgFile: file,
        imgprvw: reader.result
      });
    }
    reader.readAsDataURL(file)
  }
  handleFormData(){
    if(this.refs.name.value !== '' && this.refs.dob.value !== '' && this.refs.email.value !== '' && this.refs.mbNo.value !== '' && this.state.imgprvw !==''){
      let count = 'dataCount'+this.state.dataCount
      const data ={
        name: this.refs.name.value,
        dob : this.refs.dob.value,
        email: this.refs.email.value,
        mbNo: this.refs.mbNo.value,
        imgFile: this.state.imgFile,
        imgprvw: this.state.imgprvw,
      } 
        localStorage.setItem(this.state.dataCount,JSON.stringify(data))
      this.refs.name.value =''
      this.refs.dob.value=''
      this.refs.email.value=''
      this.refs.mbNo.value=''
      this.refs.uploaderimg.value=''
      this.setState({dataCount: this.state.dataCount+1, imgFile:'', imgprvw:''})

    }
    else {
      alert('All feilds are mandatory')
      return false
    }
    

  }
  editStoredDetails(data){
    this.refs.name.value =data.name
     this.refs.dob.value=data.dob
    this.refs.email.value=data.email
    this.refs.mbNo.value=data.mbNo
    this.setState({imgFile: data.imgFile, imgprvw: data.imgprvw})
  }
  render() {
    return (
      <div className="App">
        <h1> Enter Form Data:</h1>
      
        First name : <input type='text' ref='name' required/> <br/><br/>
        Date Of Birth :<input type='date' ref='dob' required/><br/><br/>
        Email :<input type='email' ref='email' required/><br/><br/>
        Mobile number :<input type='number' ref='mbNo'required/><br/><br/>
        Upload Picture : <input type='file' ref='uploaderimg' required  onChange={(e)=>this.handleImageUpload(e)} /><br/><br/>
        Preview Image : <img src={this.state.imgprvw} alt="Image will be previewed here" height="142" width="142"/>
        <br/><br/> 
        
          <button  onClick={this.handleFormData}>Save Data !</button>
          <div ref='dataShow' id='datashow'>
          {_.times(this.state.dataCount, i => <ViewComponent editStoredDetails={this.editStoredDetails} keyValue={i} data={JSON.parse(localStorage.getItem(i))}/>)}
            </div>
      </div>
    );
  }
}

export default App;
