// src/components/ContactUs.js

import React from 'react';

const ContactUs = () => {
  return (
    <>
          <div className='container mt-5'>
            <div className='row mt-5'>
            <div className='col-2'></div>
            <div className='col-6'>
              <div className="card text-left shadow-lg">
                <div className="card-body">
                  <h4 className="card-title p-3">Contact Us</h4>
                  <div className="card-text p-5">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-2'>

            </div>

            </div>
            </div>
    </>
  )
};

export default ContactUs;
