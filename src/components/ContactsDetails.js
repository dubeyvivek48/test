import React from 'react';
const ContactDetails=(props)=>{ 
    return(
      <div className="container mt-5">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {props.contactDetails.map((data,index)=>
                   
            <tr key={data.phone}>
              <td>{index +1}</td>              
               <td>{data.name}</td>
               <td>{data.phone}</td>
               <td>{data.address}</td>
               <td>{data.email}</td>
          </tr>
           
        )}          
        </tbody>
      </table>
      </div>
      
    )
}
export default ContactDetails;