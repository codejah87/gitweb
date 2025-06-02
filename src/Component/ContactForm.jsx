import React, { useState } from "react"; // Import useState
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_SERVICE_KEY,
            import.meta.env.VITE_EMAIL_TEMPLATE_KEY,
            e.target, // Still use e.target as emailjs.sendForm expects a form element
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
        )
        .then((result) => {
            if (result.status === 200) {
                Swal.fire({
                    title: "Good job!",
                    text: "Your message has been sent!",
                    icon: "success"
                });
                setFormData({ // Clear the form after successful submission
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                Swal.fire({
                    title: "Oops...",
                    text: `Something went wrong! EmailJS responded with status: ${result.status}`,
                    icon: "error"
                });
            }
        })
        .catch((error) => {
            Swal.fire({
                title: "Error!",
                text: `Failed to send message: ${error.text || error}`,
                icon: "error"
            });
            console.error('EmailJS error:', error);
        });
    };

    return(
        <div className="text-center flex items-center justify-center flex-col gap-4 mt-19">
            <span className="text-[20px] pop text-center text-gray-700 fer font-">We are glad to hear from you, send us a message through the form and we will reply you.</span>
            <form onSubmit={sendEmail} className="max-w-[570px] w-full p-6 rounded-md shadow-md">
                <div className="flex flex-col gap-4 md:flex-row md:justify-center md:items-center mb-3">
                    <input
                        type="text"
                        placeholder="*Full Name"
                        className="p-3 border border-gray-300 rounded-md w-full outline-indigo-400"
                        name="name"
                        value={formData.name} // Controlled component
                        onChange={handleChange}
                        required
                    />
                </div>

                <input type="hidden" name="subject" defaultValue="Hakuna Matata Energy Tech LTD. " />
                <div className="flex flex-col gap-4 md:flex-row md:justify-center md:items-center w-full mb-3">
                    <input
                        type="email"
                        placeholder="*Email Address"
                        className="p-3 border border-gray-300 w-full rounded-md outline-indigo-400"
                        name="email"
                        value={formData.email} // Controlled component
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="phone"
                        placeholder="*Phone Number"
                        className="p-3 border border-gray-300 w-full rounded-md outline-indigo-400"
                        name="phone"
                        value={formData.phone} // Controlled component
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:justify-center md:items-center w-full ">
                    <textarea
                        placeholder="*Text Message 😎"
                        className="p-3 border border-gray-300 rounded-md w-full h-[170px] resize-none outline-indigo-400"
                        name="message"
                        value={formData.message} // Controlled component
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="py-3 px-8 cursor-pointer hover:bg-indigo-500 bg-indigo-600 transition-all text-white rounded-md mt-4">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;