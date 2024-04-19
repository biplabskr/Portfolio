import React, { useState } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        const serviceid = "service_eizje86";
        const templateid = "template_8gxbeeo";
        const publicKey = "7t_WjwC7oxjRVixnV";

        if (name.length != 0 && email.length != 0 && message.length != 0) {

            const templateParams = {

                from_name: name,
                from_email: email,
                to_name: "Biplab Sarkar",
                message: message,
            };

            emailjs.send(serviceid, templateid, templateParams, publicKey).then((response) => {

                console.log('Email sent Successfully', response);
                // alert("Your Message has been sent");
                setName("");
                setEmail("");
                setMessage("");
                setNumber("");
                setSubject("");
                alert("Your Message has been sent");


            }).catch((error) => { console.error('Error sending email', error) });

        }else{
            alert("Please fill the Required Fields");
        }




    }





    return (
        <div id='contact' className='Container'>
            <div className='contact'>
                <h2 className='heading'>Contact <span>Me</span></h2>
                <form action='' onSubmit={handleSubmit} className='emailform'>
                    <div className='input-box'>
                        <input type='text' name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type='Number' placeholder='Phone Number' value={number} onChange={(e) => setNumber(e.target.value)} required />
                        <input type='text' placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} required />
                    </div>
                    <textarea name='' id='' cols="30" rows="10" placeholder='Your Message' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    <input type='submit' value="send Message" className='btn' />
                </form>

            </div>

        </div>
    )
}
