import { SOCIAL_MEDIA_LINKS } from '../constants'
import ankussh from "../assets/AnkushImg.jpeg"
const Footer = () => {
  return (
    <div className="mt-20">
      <div className='flex justify-center flex-col items-center mb-4 mt-4 gap-4'>
        <img src={ankussh} alt="" className='w-20 h-20 rounded-full bg-cover border border-stone-50/30'/>
        <h1>Ankush Dhavale</h1>
      </div>
        <div className='flex items-center justify-center gap-8'>
            {SOCIAL_MEDIA_LINKS.map((link,index)=>(
                <a key={index} href={link.href} target='_blank' rel='noopener noreferrer'>{link.icon}</a>
            ))}
        </div>
        <p className='mt-8 text-center text-sm tracking-wide text-gray-480'>
            <b>No&copy; copyright issues</b>
            <p>Feel free to copy, if you need any help,ping me !</p>
        </p>
    </div>
  )
}

export default Footer
