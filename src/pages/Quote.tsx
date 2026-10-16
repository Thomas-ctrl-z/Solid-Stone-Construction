
export default function Quote() {
    return(
        <section className="section-style">
            <div id="quote-container">

                <h1>Quotation Form</h1>
                <p>Please fill out the following information and a representative will contact you
                    for more proceedings.
                </p>
                
                <form action="" id="quote-form">

                    <h2>Client Information</h2>

                    <label htmlFor="client-name">
                        <input id="client-name" type="text" />
                    </label>

                    <label htmlFor="company-name" >
                        <input id="company-name" type="text" />
                    </label>
                    
                    <label htmlFor="phone-number">
                        <input id="phone-number" type="text" />
                    </label>

                    <label htmlFor="email">
                        <input id="email" type="text" />
                    </label>

                    <h2>Project Information</h2>

                    <label htmlFor="project-name">
                        <input type="text" name="" id="project-name" />
                    </label>

                    <label htmlFor="project-type">
                        <input type="text" name="" id="project-type" />
                    </label>

                    <label htmlFor="site-address">
                        <input type="text" name="" id="site-address" />
                    </label>

                    <label htmlFor="project-description">
                        <input type="text" name="" id="project-description" />

                    </label>

                    <label htmlFor="start-date">
                        <input type="text" name="" id="start-date" />
                    </label>

                    <label htmlFor="completion-date">
                        <input type="text" name="" id="completion-date" />
                    </label>

                    
                        {/* Generate:
                    <h2>Materials & Labour</h2>
                    <h2>Quotation Details</h2> */}

                </form>
            </div>
        </section>
    )
}