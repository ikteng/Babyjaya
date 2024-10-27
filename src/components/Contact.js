import React from 'react';
import './Contact.css'; // Make sure to create this CSS file for styling

const ContactSection = ({ title, children, warning }) => (
    <section className="contact-section">
        <div className="section-header">
            <h1>{title}</h1>
            {warning && <p className="warning">{warning}</p>} {/* Display warning if provided */}
        </div>
        {children}
    </section>
);

const Contact = () => {
    return (
        <div className="background-container"> {/* New background container */}
            <div className="contact-container"> {/* Contact container */}
                <ContactSection title="Contact Us">
                    <p>We would love to hear from you! Here’s how you can reach us:</p>
                    <div className="contact-info">
                        <p>
                            <i className="fab fa-whatsapp" aria-hidden="true"></i> {/* WhatsApp icon */}
                            WhatsApp: +60 11-1122 3599
                        </p>
                    </div>
                </ContactSection>
            </div>

            <div className="location-container"> {/* Location container */}  
                <ContactSection title="Our Location" warning="No Visitor or Walk-ins Strictly!">
                    <p>We are located at:</p>
                    <p>No. 16, Jalan Setia Utama U13/39C, Bandar Setia Alam, 40170 Shah Alam, Selangor</p>
                    <div className="map">
                        <iframe 
                            title="BabyJaya Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.883786543275!2d101.46362419999997!3d3.1254188000000034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc51dc2a5e34f1%3A0x71c7c540e9b8b669!2s16%2C%20Jln%20Setia%20Utama%20U13%2F39C%2C%20Setia%20Alam%2C%2040170%20Shah%20Alam%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1729991542618!5m2!1sen!2sus" 
                            width="600" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </ContactSection>
            </div>
        </div>
    );
};

export default Contact;
