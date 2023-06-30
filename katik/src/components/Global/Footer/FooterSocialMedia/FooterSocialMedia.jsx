import './FooterSocialMedia.css';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
const FooterSocialMedia = () => {
 return (
  <section className='py-4'>
   <span className='footer-social my-font-verdana'>
    <span>CONNECT </span> <span className='footer-social-small'>with</span> <span>Me</span>
   </span>
   <span className='footer-social mt-1 mt-sm-3 pb-3'>
    <a href='https://www.linkedin.com/in/salmandma/' target='_blank' rel='noreferrer' className='footer-social-icon'>
     <BsLinkedin />
    </a>
    <a href='https://github.com/SalmanDMA' target='_blank' rel='noreferrer' className='footer-social-icon'>
     <BsGithub />
    </a>
    <a href='https://www.instagram.com/salmandma/' target='_blank' rel='noreferrer' className='footer-social-icon'>
     <BsInstagram />
    </a>
   </span>
  </section>
 );
};

export default FooterSocialMedia;
