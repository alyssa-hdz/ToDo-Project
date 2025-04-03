import React, {useState} from 'react';

function ContactForm(){
  const [formData,setformData] =useState({
    firstName: '',
    lastName: '',
    email:'',
    comments: ''
  });


const handleChange = (e) => {
    const {name,value} = e.target;
    setformData({...formData,[name]: value });
};
const handleSubmit =(e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setformData({
        firstName: '',
        lastName: '',
        email:'',
        comments: '',
    })
};

return (
    <form class="formContainer" onSubmit = {handleSubmit}>
        <div class="formtitles" >
            <label htmlFor ="firstName">First Name:</label><br></br>
            <input className="forminput"
            type="text"
            id="firstName"
            name="firstName"
            value ={formData.firstName}
            onChange={handleChange} required/>
        </div>
        <div class="formtitles" >
            <label htmlFor ="lastName">Last Name:</label><br></br>
            <input className="forminput"
            type="text"
            id="lastName"
            name="lastName"
            value ={formData.lastName}
            onChange={handleChange} required/>
        </div>
        <div class="formtitles" >
            <label htmlFor ="email">Email:</label> <br></br>
            <input className="forminput"
            type="email"
            id="email"
            name="email"
            value ={formData.email}
            onChange={handleChange} required/>
        </div>

        <div class="formtitles" >
            <label htmlFor ="comments">Comments:</label><br></br>
            <textarea className="forminput"
            id="comments"
            name="comments"
            value ={formData.comments}
            onChange={handleChange} required/>
        </div>
<button className="subbtn" type ="submit">Submit</button>
    </form>
)}

export default ContactForm;