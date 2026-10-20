import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function Contact() {

    // Fix popup msg placement. 
    // See if you can make the contact message look better 
    // Add pdf convertor for quote form. 


    const form = React.useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_tqcfm6e', 'template_pg7vrkl', form.current, {
                publicKey: 'EUSaR7eqRl3oxuOyF',
            })
            .then(
                () => {
                    console.log("SUCCESS");
                    form.current?.reset();
                    showPopup();
                },
                (error) => {
                    console.log("FAILED", error.text);
                },
            );
    };

    const popupMsg = document.getElementById("popup-msg");

    function showPopup(): void {
        if (!popupMsg) return;

        popupMsg.classList.add("active");

        setTimeout(() => {
            popupMsg.classList.remove("active");
        }, 2000);
    }

    return(

        // Add another section at the top just as filler information before the form?
        // Google Maps Location? 

        <main>

                <aside id="popup-msg">
                    <p>Form Submitted Succesfully</p>
                </aside>


                <section className="section-style">
                <div className="form-container">

                    <div id="form-header">
                        <h1>CONTACT FORM</h1>
                        <p>For any Inquiries you may have.</p>

                    </div>

                    <form ref={form} action="" id="contact-form" autoComplete="off" onSubmit={sendEmail}>

                        <label className="form-label" htmlFor="first-name"> Enter your first name: 
                            <input className="form-input" id="first-name" type="text" name="first-name"/>
                        </label>

                        <label className="form-label" htmlFor="last-name"> Enter your last name: 
                            <input className="form-input" id="last-name" type="text" name="last-name"/>
                        </label>
                        
                        <label className="form-label" htmlFor="phone-number"> Enter your phone number:
                            <input className="form-input" id="phone-number" type="tel" name="phone-number"/>
                        </label>

                        <label className="form-label" htmlFor="email"> Enter your email:
                            <input className="form-input" id="email" type="email" name="email" />
                        </label>

                        <label className="form-label form-label-5" htmlFor="organization-name"> Enter your organization:
                            <input className="form-input" id="organization-name" type="text" name="organization-name"/>
                        </label>

                        <label className="form-label form-label-6" htmlFor="message"> Message:
                            <textarea className="form-textarea" name="message" id="message"></textarea>
                        </label>

                        <button type="submit" className="form-btn">Send Message</button>

                    </form>
                </div>
            </section>
        </main>

        
    )
}