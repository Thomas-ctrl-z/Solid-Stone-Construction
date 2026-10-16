
export default function Contact() {
    return(

        // Add another section at the top just as filler information before the form?
        // Google Maps Location? 


        <section className="section-style">
            <div id="form-container">
                <div id="form-header">
                    <h1>CONTACT FORM</h1>
                    <p>For any Inquiries you may have.</p>

                </div>

                <form action="" id="contact-form" autoComplete="off">

                    <label htmlFor="Fname"> Enter your first name: 
                        <input id="Fname" type="text" />
                    </label>

                    <label htmlFor="Lname"> Enter your last name: 
                        <input id="Lname" type="text" />
                    </label>
                    
                    <label htmlFor="phoneNumber"> Enter your phone number:
                        <input id="phoneNumber" type="tel" />
                    </label>

                     <label htmlFor="Email"> Enter your email:
                        <input id="Email" type="email"  />
                    </label>

                     <label htmlFor="Organization"> Enter your organization:
                        <input id="organization" type="text" />
                    </label>

                     <label htmlFor="Message"> Message:
                        <textarea name="" id="Message"></textarea>
                    </label>

                    <button type="submit">Send Message</button>

                </form>
            </div>
        </section>
    )
}