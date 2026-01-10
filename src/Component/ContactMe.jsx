import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // id add
    emailjs.sendForm(
      'service_8491bvj', 
      'template_51nllao', 
      form.current, 
      'JJUZojXLGnRlWY43F'
    )
      .then((result) => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'I will get back to you soon.',
            confirmButtonColor: '#4f46e5',
          });
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again.',
          });
      });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-4 text-3xl font-bold md:text-5xl text-slate-900 dark:text-white"
          >
            Get In <span className="text-indigo-600">Touch</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
          {/* Info Card */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-2xl border 
            border-slate-100 dark:border-slate-700 h-full flex flex-col justify-center">
              <h3 className="mb-8 text-2xl font-bold text-slate-800 dark:text-white">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="flex items-center justify-center text-xl text-indigo-600 bg-indigo-100 shadow-inner w-14 h-14 dark:bg-indigo-900/30 rounded-2xl"><FaEnvelope /></div>
                  <div><p className="text-sm font-medium text-slate-500">Email Me</p>
                  <p className="text-base font-bold dark:text-white">kauserhossendev@gmail.com</p></div>
                </div>
                <a href="https://wa.me/8801567951248" target="_blank" className="flex items-center gap-6 cursor-pointer group">
                  <div className="flex items-center justify-center text-2xl text-green-600 transition-all bg-green-100 shadow-inner w-14 h-14 dark:bg-green-900/30 rounded-2xl group-hover:bg-green-600 group-hover:text-white"><FaWhatsapp /></div>
                  <div><p className="text-sm font-medium text-slate-500">WhatsApp Me</p>
                  <p className="text-base font-bold transition-colors dark:text-white group-hover:text-green-600">+880 1567951248</p></div>
                </a>
                <div className="flex items-center gap-6">
                  <div className="flex items-center justify-center text-xl text-orange-600 bg-orange-100 shadow-inner w-14 h-14 dark:bg-orange-900/30 rounded-2xl"><FaMapMarkerAlt /></div>
                  <div><p className="text-sm font-medium text-slate-500">Location</p>
                  <p className="text-base font-bold dark:text-white">Rangpur, Bangladesh</p></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form - Input names aligned with EmailJS tags */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} 
          className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl 
          border border-slate-100 dark:border-slate-700">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <input 
                  type="text" 
                  name="from_name"
                  placeholder="Your Name" 
                  required
                  className="w-full p-4 border outline-none bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 dark:text-white"
                />
                <input 
                  type="email" 
                  name="reply_to"
                  placeholder="Your Email" 
                  required
                  className="w-full p-4 border outline-none bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 dark:text-white"
                />
              </div>
              <textarea 
                name="message"
                rows="5" 
                placeholder="Your Message" 
                required
                className="w-full p-4 border outline-none bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 dark:text-white"
              ></textarea>
              <button type="submit" className="flex items-center justify-center w-full gap-3 py-4 font-bold text-white transition-all bg-indigo-600 shadow-lg hover:bg-indigo-700 ounded-2xl active:scale-95 shadow-indigo-200 dark:shadow-none">
                Send Message <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;