/*import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="py-3 bg-warning">
        <div className="container">
          <h4>Contact</h4>
        </div>
      </div>
      <div className="py-5 bg-light border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
            <h4>Contact Information</h4>
          <div className="divider"></div>
            <p>
            Lorem Ipsum is simply dummy text of 
            </p>

<div className="card card-body">



          <div class="row">
          <div class="col-md-6">
          <label>Full Name</label>
          <input type=""name=""className="form-control"/>
          </div>

          <div class="col-md-6">
          <label>Email ID</label>
          <input type=""name=""className="form-control"/>
          </div>


          <div class="col-md-6">
          <label>Phone Number</label>
          <input type=""name=""className="form-control"/>
          </div>



          <div class="col-md-6">
          <label>Subject</label>
          <input type=""name=""className="form-control"/>
          </div>

          <div class="col-md-12">
          <label>Message </label>
         
          <textarea row ="3"className="form-control"></textarea>
          </div>

<div class="col-md-12">
    <button type="" className='btn btn-primary px-5 py-2 mt-3'>Send Message</button>
</div>




          </div>  
        </div>
        </div>


          <div className="col-md-4">
          <div className="card card-body shadow">
              <p>Email Us: Info@Example.com</p>
              <p>Call Us: +1000000000</p>
              <p>Website: www.example.com</p>
              </div>
        </div>
      </div>
     
      </div>
    </div>
    </div>
  )
}

export default Contact*/
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      if (response.status === 201) {
        alert('Message sent successfully!');
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div>
      <div className="py-3 bg-warning">
        <div className="container">
          <h4>Contact</h4>
        </div>
      </div>
      <div className="py-5 bg-light border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h4>Contact Information</h4>
              <div className="divider"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="card card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        className="form-control"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Email ID</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        name="phoneNumber"
                        className="form-control"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label>Message</label>
                      <textarea
                        rows="3"
                        name="message"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn btn-primary px-5 py-2 mt-3">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-body shadow">
                <p>Email Us: Info@Example.com</p>
                <p>Call Us: +1000000000</p>
                <p>Website: www.example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
