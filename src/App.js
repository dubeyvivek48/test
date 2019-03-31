import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import ContactDetails from './components/ContactsDetails';
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
    errorarr.push(this.state.phone.match(regPhone)!=null);
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
     
      document.getElementById("name").value="";
      document.getElementById("phone").value="";
      document.getElementById("address").value="";
      document.getElementById("email").value="";
      //if form submitted change state
      console.log("IFF   zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
      console.log(this.state);
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
        <BrowserRouter>
        <Nav />
          <Switch>        
            <Route exact path="/"  render={()=><Home data={this.state} errorArray={this.state.errorArray}  onChangeHandler={this.onChangeHandler} onSubmit={this.onSubmit}/> } />
            <Route path="/contacts" render={()=> <ContactDetails contactDetails={this.state.contactDetails} />} />
          </Switch>
      </BrowserRouter> 
      
      
      </div>
    );
  }
}

export default App;
