import { motion } from "framer-motion";
const ContactForm = () => {
   
  return (
    <motion.div 
      initial={{ opacity:0, x:-20}}
      whileInView={{ opacity:1, x:0}}
      transition={{ duration:0.8 , delay:0.5}}
      className="p-1 text-center lg:w-3/4" id="contact">
        <h2 className="mt-2 my-8 text-center text-4xl font-semibold tracking-tighter">
            Let`s Connect
        </h2>
        <p className="text-start text-sm lg:text-2xl">Thankyou for visiting my portfolio! I'm always interested in working on new projects. Whether you want to collaborate or just want to say hi, I'll try my best to get back to you!</p>
        <button className="border m-4 rounded bg-transparent border-stone-50/30 px-3 py-1 hover:bg-purple-950">Say Hello</button>
    </motion.div>
  )
}

export default ContactForm;

