import React from 'react';
const Home=(props)=>{
   console.log(props)
    return(
      <form className="contactForm mt-5">
        <div className="form-group">
          <label >Name</label>
          <input type="text" name="name" id="name" className={props.errorArray[0]?" form-control":" invalid form-control"} value={props.name
          
          } onChange={props.onChangeHandler} placeholder="Enter name" />
          <small  className={props.errorArray[0] ?"d-none":"form-text text-muted"}>invalid Name</small>
        </div>
        
        <div className="form-group">
          <label >Phone</label>
          <input type="text" name="phone" id="phone"  className={props.errorArray[1]?" form-control":" invalid form-control"} value={props.phone}  onChange={props.onChangeHandler}   placeholder="Enter hone no." />
          <small id="emailHelp" className={props.errorArray[1] ?"d-none":"form-text text-muted"}>Invalid Phone no</small>
        </div>
        <div className="form-group">
          <label >Address</label>
          <input type="text" name="address" id="address" className={props.errorArray[2]?" form-control":" invalid form-control"} value={props.address}  onChange={props.onChangeHandler} placeholder="Enter address." />
          <small id="emailHelp" className={props.errorArray[2] ?"d-none":"form-text text-muted"}>Invalid Address</small>
        </div>
        <div className="form-group">
          <label >Email</label>
          <input type="email" name="email" id="email" className={props.errorArray[3]?" form-control":" invalid form-control"} value={props.email}  onChange={props.onChangeHandler} placeholder="Enter email" />
          <small id="emailHelp" className={props.errorArray[3] ?"d-none":"form-text text-muted"}>Invalid Email</small>
        </div>      
        <div type="submit" onClick={props.onSubmit} className="btn btn-primary btn-block">Submit</div>
      </form>
    )
}
export default Home;

