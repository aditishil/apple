import React from "react";
function Form()
{
    return(
        <>
         <form method="post">
        <label><b>First Name:</b></label>
        <input type="text"/>
        <br/>
        <label><b>Last Name:</b></label>
        <input type="text"/>
        <br/>
        <p>Address</p>
        <br/>
         <label><b>Street:</b></label>
         <input type="text"/>
         <br/>
         <label><b>City:</b></label>
         <input type="text"/>
         <br/>
         <label><b>State:</b></label>
         <input type="text"/>
         <br/>
         <label><b>Zip Code:</b></label>
         <input type="text"/>
         <br/>
         <p>Complete the form to enable button.</p>
          <input type="submit"/>
         </form>
          </>
    );
}
export default Form;