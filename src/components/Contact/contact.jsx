import React , {useState} from 'react';
import { useForm } from 'react-hook-form';
export const Contact = (props) => {

    const handleFormSubmit = (formData) => {

        console.log(formData);
    }
    const {register, handleSubmit, watch, formState : {errors}} = useForm();

    console.log(errors);
    return (
  
            <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-7">
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
           
                        <div className="form-floating mb-3">
                            <input className="form-control" type="text" {...register('FullName', {required: 'fullname is required'})} defaultValue='' />
                            <label>Full name</label>
                            <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control" type="email" placeholder="name@example.com" {...register('Email', {required: 'email is required'})} defaultValue=''  />
                            <label>Email address</label>
                            <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                            <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control" type="tel" placeholder="(123) 456-7890" {...register('phone', {required : 'Phone required'})} />
                            <label>Phone number</label>
                            <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                        </div>

                        <div className="form-floating mb-3">
                            <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} {...register('message' , {required : 'Message is required'} )}></textarea>
                            <label>Message</label>
                            <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                        </div>
                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center mb-3">
                                <div className="fw-bolder">Form submission successful!</div>
                                To activate this form, sign up at
                                <br />
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>
                        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                    
                        <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Send</button>
                    </form>
                </div>
  </div>
    )
}