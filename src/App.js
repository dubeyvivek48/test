import React, { Component } from 'react';
import Nav from './components/Nav';
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state={
      name:'',
      phone:'',
      address:'',
      email:'',
      contactDetails:[],      
      error:false,
      errorArray:[true,true,true,true,],
    }
  }
  onChangeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    this.setState({[name]:value});
  }
  onSubmit=(e)=>{
    e.preventDefault();
    let errorarr=[];
    let error;
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let regPhone=/^\d{10}$/;
    //check name is valid or not and push
    errorarr.push(this.state.name.length>=3);
    //check phone is valid or not and push    
    errorarr.push(this.state.phone.match(regPhone));
    ////check address is valid or not and push    
    errorarr.push(this.state.address.length>=10);    
    // check address is valid or not and push
    errorarr.push(reg.test(this.state.email));
    //check error in form
    error=!(this.state.name.length>=3 && 
      this.state.phone.length>=10 && 
      this.state.phone.length<=16 &&
      this.state.address.length>=10 && 
      reg.test(this.state.email ));

  
  // check error   
     if(!error){
      let contactDetails={
        name:this.state.name,
        phone:this.state.phone,
        address:this.state.address,
        email:this.state.email,
      }

      this.setState({
        contactDetails:[contactDetails , ...this.state.contactDetails],
        errorArray:errorarr,
        name:'',
        phone:'',
        address:'',
        email:''
      })
      console.log(this.state.contactDetails);
    }
    else{
      this.setState({
        errorArray:errorarr,
      })
      console.log("error" +this.state.errorArray);
      console.log(errorarr)
    }
  }

  render() {
    return (
      <div>
        <Nav />
      
      <form className="contactForm mt-5">
        <div className="form-group">
          <label >Name</label>
          <input type="text" name="name" className={this.state.errorArray[0]?" form-control":" invalid form-control"} value={this.state.name} onChange={this.onChangeHandler} placeholder="Enter name" />
          <small  className={this.state.errorArray[0] ?"d-none":"form-text text-muted"}>invalid Name</small>
        </div>
        
        <div className="form-group">
          <label >Phone</label>
          <input type="text" name="phone" className={this.state.errorArray[1]?" form-control":" invalid form-control"} value={this.state.phone}  onChange={this.onChangeHandler}   placeholder="Enter hone no." />
          <small id="emailHelp" className={this.state.errorArray[1] ?"d-none":"form-text text-muted"}>Invalid Phone no</small>
        </div>
        <div className="form-group">
          <label >Address</label>
          <input type="text" name="address" className={this.state.errorArray[2]?" form-control":" invalid form-control"} value={this.state.address}  onChange={this.onChangeHandler} placeholder="Enter address." />
          <small id="emailHelp" className={this.state.errorArray[2] ?"d-none":"form-text text-muted"}>Invalid Address</small>
        </div>
        <div className="form-group">
          <label >Email</label>
          <input type="email" name="email" className={this.state.errorArray[3]?" form-control":" invalid form-control"} value={this.state.email}  onChange={this.onChangeHandler} placeholder="Enter email" />
          <small id="emailHelp" className={this.state.errorArray[3] ?"d-none":"form-text text-muted"}>Invalid Email</small>
        </div>      
        <button type="submit" onClick={this.onSubmit} className="btn btn-primary btn-block">Submit</button>
      </form>
      </div>
    );
  }
}

export default App;
