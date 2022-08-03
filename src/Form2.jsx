import React from "react";
function Form2()
{
    return(
        <>
        <form>
        <h1>Account Information</h1>
        <label>Username</label>
        <input type="text"/>
        <br/>
        <label>E-mail address</label>
        <input type="email"/>
        <br/>
        <label>Password</label>
        <input type="password"/>
        <br/>
        <label>Confirm Password</label>
        <input type="password"/>
        <br/>
        <h1>Personal Information</h1>
        <label>First Name</label>
        <input type="text"/>
        <br/>
        <label>Last Name</label>
        <input type="text"/>
        <br/>
        <label>Country</label>
        <div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Countries</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">India</a></li>
    <li><a class="dropdown-item" href="#">United States of America </a></li>
    <li><a class="dropdown-item" href="#">Australia</a></li>
    <li><a class="dropdown-item" href="#">Bangladesh</a></li>
    <li><a class="dropdown-item" href="#">China</a></li>
  </ul>
</div>
<br/>
<label>State</label>
<div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">States</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Agartala</a></li>
    <li><a class="dropdown-item" href="#">Kolkata </a></li>
    <li><a class="dropdown-item" href="#">Bangalore</a></li>
    <li><a class="dropdown-item" href="#">New Delhi</a></li>
    <li><a class="dropdown-item" href="#">Chennai</a></li>
  </ul>
</div>
<br/>
<label>PIN Code</label>
<input type="number"/>
<br/>
<label>Education</label>
<div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Education</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Graduate/Post Graduate-Professional</a></li>
    <li><a class="dropdown-item" href="#">Graduate/Post Graduate-General </a></li>
    <li><a class="dropdown-item" href="#">Vocational</a></li>
    <li><a class="dropdown-item" href="#">Higher Secondary Education</a></li>
    <li><a class="dropdown-item" href="#">Secondary Education</a></li>
    <li><a class="dropdown-item" href="#">Elementary Education</a></li>
  </ul>
</div>
<br/>
<label>Subscribe to our Newsletter</label>
<input type="checkbox"/>
<br/>
<button type="button" class="btn btn-warning">Create new account</button>
    </form>
        </>
    );
}
export default Form2;