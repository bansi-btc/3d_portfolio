import {useState, useRef} from 'react'
import {motion} from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import SectionWrapper from './SectionWrapper'
import { slideIn } from '../utils/motion'

// template_ppaq3kg
// service_jq8nftb
// S1z0mxLrpLRwEpDAe

const Contact = () => {

  const formRef=useRef();
  const [form, setform] = useState({
    name: '',
    email: '',
    message:'',
  })

  const [loading, setloading] = useState(false);

  const handleChange=(e)=>{

    setform((prev)=>{
      return {
        ...prev,
        [e.target.name]:e.target.value,
      }
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setloading(true);

    emailjs.send('service_78hajc6', 
    'template_ppaq3kg', 
    
    {
      form_name:form.name,
      to_name:"Himanshu",
      from_email:form.email,
      to_email:"hg343860@gmail.com",
      message:form.message

    },
    'S1z0mxLrpLRwEpDAe',
    )
    .then(()=>{
      setloading(false);
      setform({
        name:'',
        email:'',
        message:'',
      })
      alert("Thank you. I will get back to you ASAP")
      
    })
    .catch((err)=>{
      setloading(false);
      // console.log(err)
      setform({
        name:'',
        emai:'',
        password:''
      })
      alert(err);

      
    })


  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
      variants={slideIn("left","tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8 '>

          <label htmlFor="" className='flex flex-col '>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input type="text" name="name" id="" value={form.name} onChange={handleChange}
            placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white
            rounded-lg outline-none border-none font-medium' />
          </label>

          <label htmlFor="" className='flex flex-col '>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input type="text" name="email" id="" value={form.email} onChange={handleChange}
            placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white
            rounded-lg outline-none border-none font-medium' />
          </label>

          <label htmlFor="" className='flex flex-col '>
            <span className='text-white font-medium mb-4'>Your message</span>
            <input type="text" name="message" id="" value={form.message} onChange={handleChange}
            placeholder="What's your message?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white
            rounded-lg outline-none border-none font-medium' />
          </label>

          <button type='Submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white
          font-bold shadow-md shadow-primary rounded-xl'>{loading?"Sending":"Send"}</button>

        </form>
      </motion.div>
     
     <motion.div
     variants={slideIn("right","tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>

        <EarthCanvas/>
     </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")