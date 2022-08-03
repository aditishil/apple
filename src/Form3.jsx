import React from "react";
function Form3()
{
    return(
        <>
        <form>
        <h1>Subscribe to our mailing list</h1>
        <label>First Name</label>
        <input type="text"/>
        <br/>
        <label>Last Name</label>
        <input type="text"/>
        <br/>
        <label>Address</label>
        <input type="text"/>
        <br/>
        <label>Address Letter 2</label>
        <input type="text"/>
        <br/>
        <label>City</label>
        <input type="text"/>
        <br/>
        <label>State/Province/Region</label>
        <input type="text"/>
        <label>Postal Zip Code</label>
        <input type="number"/>
        <label>Country</label>
        <div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Country</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">United States of America</a></li>
    <li><a class="dropdown-item" href="#">India</a></li>
    <li><a class="dropdown-item" href="#">Australia</a></li>
  </ul>
</div>
<label>Email Address</label>
<input type="email"/>
<br/>
<label>What best describes you?</label>
<input type="text"/>
</form>
        </>
    );
}
export default Form3;