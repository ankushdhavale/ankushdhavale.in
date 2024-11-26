import { SOCIAL_MEDIA_LINKS } from '../constants'
const Footer = () => {
  return (
    <div className="mb-8 mt-20">
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
