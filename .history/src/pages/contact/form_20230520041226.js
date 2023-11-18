import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { addDoc, collection, getDocs } from 'firebase/firestore'
import Logo from '../../assets/brand/logo2.png'
import './form.css'
import emailjs from '@emailjs/browser';

export const Form = () => {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const sendEmail = (data) => {
        emailjs.send('service_mykfjno', 'template_uo3c3g3', data, 'Wz8QOl_kyPBr6ZQT1')
          .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
          }, (error) => {
              console.log('FAILED...', error);
          });
      } 

    const onSubmit = (data) => {
        sendEmail(data);
        setSuccess(true);
        
      }

    return (
        <form onSubmit={handleSubmit(onSubmit)} action="/submit-form" className="form-container">
            <header>
                <h2 className="form-title">CONTACT ME</h2>
                <img alt='logo' src={Logo}/></header>
            <div id='form-column' className="form-row">
                <fieldset id='fieldset-1'>
                    <label htmlFor="first-name" className="form-label">First Name</label>
                    <input type="text" id="first-name" className={`${errors.firstName ? 'input-error' : 'form-input'}`} {...register('firstName', { required: true })} />
                    {errors.firstName && <span className="error-message">Please enter your first name</span>}
                </fieldset>
        
                <fieldset id='fieldset-2'>
                    <label htmlFor="last-name" className="form-label">Last Name</label>
                    <input type="text" id="last-name" className={`${errors.lastName ? 'input-error' : 'form-input'}`} {...register('lastName', { required: true })} />
                    {errors.lastName && <span className="error-message">Please enter your last name</span>}
                </fieldset>

            </div>
            <div className="form-row">
                <fieldset id='checkbox-fieldset'>
                    <label htmlFor="checkbox" className="form-label">I CONFIRM THAT I AM AT LEAST 18yrs OF AGE</label>
                    <input type="checkbox" id="checkbox" className={`${errors.checkbox ? 'input-error' : 'form-input'}`} {...register('checkbox', { required: true })} />
                    {errors.checkbox && <span className="error-message">Please check the box</span>}
                </fieldset>
            </div>
            <div id='form-column' className="form-row">
                <fieldset>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className={`${errors.email ? 'input-error' : 'form-input'}`} {...register('email', { required: true, pattern: /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} />
                    {errors.email && <span className="error-message">Please enter your email</span>}
                </fieldset>
                <fieldset>
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input placeholder='eg: +1 123-456-7890 / (123) 456-7890' type="tel" id="phone" className={`${errors.phone ? 'input-error' : 'form-input'}`} {...register('phone', {  required: true, pattern: /^(?:\+1)?[ -]?\(?([2-9][0-9]{2})\)?[ -]?([2-9][0-9]{2})[ -]?([0-9]{4})$/ })} />
                    {errors.phone && <span className="error-message">Please enter a valid phone number</span>}
                </fieldset>
            </div>
            <div className="form-row">
                <fieldset>
                    <label htmlFor="avaliability" className="form-label">Times that you are avaliable for an appointment</label>
                    <input id='avaliability' placeholder='Thursday 2pm to 6pm / Sunday 9am to 6pm...' type="type" className={`${errors.avaliability ? 'input-error' : 'form-input'}`} {...register('avaliability',  { required: true })} />
                    {errors.avaliability && <span className="error-message">Please enter your avaliability</span>}
                </fieldset>
            </div>
            <div className="form-row">
                <fieldset>
                    <label className="form-label" htmlFor="placement">Placement of your new tattoo</label>
                    <input id="placement" className={`${errors.placement ? 'input-error' : 'form-input'}`} placeholder='Forearm, biceps, thigh' type="type" {...register('placement', { required: true })} />
                    {errors.placement && <span className="error-message">Please enter a placement</span>}
                </fieldset>
            </div>
            <div className="form-row">
                <fieldset>
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" className={`${errors.message ? 'input-error' : 'form-input'}`} {...register('message', { required: true })}></textarea>
                    {errors.message && <span className="error-message">Please enter message</span>}
                </fieldset>
            </div>
            <button type="submit" className="form-button">SUBMIT</button>
            {success ? (<p className='success'>Thanks for contacting! Keep an eye out for me on your email box :)</p>) : ('')}
        </form>
    );
};


