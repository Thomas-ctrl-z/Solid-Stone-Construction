import { useState } from "react";
import React from "react";
import { generateQuotation } from "../assets/utils/generateQuotation";

export default function Quote() {

    //project type
    const [service, setService] = useState("");

    const quoteForm = React.useRef<HTMLFormElement>(null);

    const generatePDF = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!quoteForm.current) return;

        const formData = new FormData(quoteForm.current);

        const data = {
             clientName: formData.get("client-name") as string,
             companyName: formData.get("company-name") as string,
             phoneNumber: formData.get("phone-number") as string,
             email: formData.get("email") as string,
             projectName: formData.get("project-name") as string,
             projectSize: formData.get("project-size") as string,
             siteAddress: formData.get("site-address") as string,
             startDate: formData.get("start-date") as string,
             endDate: formData.get("completion-date") as string,
             projectDescription: formData.get("project-description") as string,
             companyAddress: formData.get("company-address") as string,

            selectedService: service,
        };

        generateQuotation(data);
        
        showPopup();
    }

    const popupMsg = document.getElementById("popup-msg");

    function showPopup(): void {
            if (!popupMsg) return;

            popupMsg.classList.add("active");

            setTimeout(() => {
                popupMsg.classList.remove("active");
            }, 2000);
        }

    return(
        <main>
            <aside id="popup-msg">
                <p>Form Submitted Succesfully</p>
            </aside>

            <section className="section-style">
            <div className="form-container">

                <div id="quote-header">
                    <h1>Quotation Form</h1>
                    <p>Please fill out the following information and a representative will contact you
                        for more proceedings.
                    </p>

                </div>

                {/* Add placeholder values for easy submit. */}
            
                
                <form action="" id="quote-form" ref={quoteForm} onSubmit={generatePDF}>

                    <h2 className="form-section-headers">Client Information</h2>

                    <label className="form-label" htmlFor="client-name"> Client Name: 
                        <input className="form-input" id="client-name" name="client-name" type="text" defaultValue={"Thomas Cutler"}/>
                    </label>

                    <label className="form-label" htmlFor="company-name" > Company Name: 
                        <input className="form-input" id="company-name" name="company-name" type="text" defaultValue={"Studying Institute"}/>
                    </label>

                    <label className="form-label" htmlFor="company-address"> Company Address: 
                        <input className="form-input" type="text" id="company-address" name="company-address" defaultValue={"123 Example Street, Kingston, Jamaica"}/>
                    </label>
                    
                    <label className="form-label" htmlFor="phone-number"> Phone Number: 
                        <input className="form-input" id="phone-number" name="phone-number" type="tel" defaultValue={"(123) 456-7890"}/>
                    </label>

                    <label className="form-label" htmlFor="email"> Email Address: 
                        <input className="form-input" id="email" name="email" type="email" defaultValue={"studyinstitute@gmail.com"}/>
                    </label>


                    <h2 className="form-section-headers">Project Information</h2>


                    <label className="form-label" htmlFor="project-name"> Project Name: 
                        <input className="form-input" type="text" name="project-name" id="project-name" defaultValue={"Construction Project"}/>
                    </label>

                    <label className="form-label" htmlFor="project-size"> Project Size: 
                        <input className="form-input" type="text" name="project-size" id="project-size" defaultValue={"100x100ft"}/>
                    </label>


                    <label htmlFor="project-type" className="form-label">
                        Project Type:

                         <select className="form-input"
                        id="project-type"
                        name="project-type"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        required
                        >
                            <option value="">Select a service...</option>
                            <option value="Residential">Residential</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Industrial">Industrial</option>
                        </select>
                        
                    </label>

        

                    <label className="form-label" htmlFor="site-address"> Site Address: 
                        <input className="form-input" type="text" name="site-address" id="site-address" defaultValue={"12 Lander Street, Kingston, Jamaica"}/>
                    </label>

                    <label className="form-label" htmlFor="start-date"> Start Date: 
                        <input className="form-input" type="date" name="start-date" id="start-date" />
                    </label>

                    <label className="form-label" htmlFor="completion-date"> Completion Date: 
                        <input className="form-input" type="date" name="completion-date" id="completion-date" />
                    </label>

                     <label className="form-label form-label-6" htmlFor="project-description"> Project Description: 
                        
                        <textarea name="project-description" className="form-textarea" id="project-description" defaultValue={"I would like to construct a large mansion with multiple bedrooms, spacious bathrooms, a modern kitchen, and expansive living areas. The design should feature high-quality materials, elegant finishes, and large windows. I would also like a spacious driveway, adequate parking, and a landscaped outdoor area suitable for relaxation and family gatherings."}></textarea>
                    </label>
                    
                    <button type="submit" className="form-btn">Submit</button>


                </form>
            </div>
        </section>
        </main>
        
    )
}