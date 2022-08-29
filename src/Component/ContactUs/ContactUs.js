import React from 'react';
import { useForm } from '@formspree/react';
import './ContactUs.css'
import {FaAddressCard} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall} from 'react-icons/bi';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const [state, handleSubmit] = useForm("mvolpkpz");
  if (state.succeeded) {
    toast(`Thank you. I've received your message.`)
    for(const form of document.getElementsByTagName('form')) {
        form.reset();
      }
  }
    return (
        <div>
            <div className='bg-base-200'>
            <div style={{ width: '90%', margin: 'auto' }}>
                <h1 className='text-5xl text-center font-bold pt-14'>GET IN TOUCH</h1>
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="text-center lg:text-left">
                            <h1 class="text-5xl font-bold">DON'T BE SHY !</h1>
                            <p class="py-6 contact-info">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                            <div>
                                <div className='contact-address'>
                                    <h3><FaAddressCard/></h3>
                                    <p><span>ADDRESS POINT:</span> Satkania,Chittagong,Bangladesh</p>
                                </div>
                                <div className='contact-mail'>
                                    <h3><AiOutlineMail/></h3>
                                    <p><span>MAIL ME:</span> jonied.mirza.shakib1@gmail.com</p>
                                </div>
                                <div className='contact-call'>
                                    <h3><BiPhoneCall/></h3>
                                    <p><span>CALL ME:</span> +880 1881880049</p>
                                </div>
                            </div>
                        </div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body contact-form">
                                <form onSubmit={handleSubmit}>
                                    <input placeholder="Your Name" name='name' class="input input-bordered input-warning w-full max-w-xs" />
                                    <input type="email" placeholder="Your Email" name='email' class="input input-bordered input-warning w-full max-w-xs" />
                                    <input type="text" placeholder="Your Subject" name='subject' class="input input-bordered input-warning w-full max-w-xs" />
                                    <textarea rows="10" name='message' placeholder='Your Message'></textarea>
                                    <br />
                                    <input type="submit" value='SEND' className='btn btn-outline btn-secondary submit w-full' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContactUs;