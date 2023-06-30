import './HomeBanner.css';
import hero from '../../assets/images/hero.webp';

import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const HomeBanner = () => {
 return (
  <section className='banner bg-primary '>
   <div className='hero-wrapper flex-column-reverse d-flex flex-lg-row justify-content-center align-items-center gap-lg-5 text-white '>
    <div className='pe-none hero-container ps-lg-5'>
     <h1 className='fw-bolder my-font-verdana display-1 dis mb-0 hero-title'>Welcome to Katik</h1>
     <p className='fst-italic my-font-courier-new hero-subtitle'>Kalkulator Matematik</p>
     <p className='my-font-verdana opacity-75 hero-description'>It&apos;s all about math, and it&apos;s up to you to choose what you want to calculate.</p>
    </div>
    <div className='pe-lg-5'>
     <a href='http://www.freepik.com' title='Designed by brgfx / Freepik' target='_blank' rel='noreferrer'>
      <img src={hero} alt='hero' className='hero-image' />
     </a>
    </div>
   </div>
   <div className='d-flex flex-column mt-5 mt-lg-3 pt-5 pt-lg-0 justify-content-center align-items-center gap-lg-3 gap-1 '>
    <h3 className='text-white my-font-verdana pe-none hero-social'>Follow me on social media</h3>
    <div className='d-flex gap-3'>
     <a href='https://www.linkedin.com/in/salmandma/' target='_blank' rel='noreferrer'>
      <BsLinkedin className='fs-2 text-white social-link' />
     </a>
     <a href='https://github.com/SalmanDMA' target='_blank' rel='noreferrer'>
      <BsGithub className='fs-2 text-white social-link' />
     </a>
     <a href='https://www.instagram.com/salmandma/' target='_blank' rel='noreferrer'>
      <BsInstagram className='fs-2 text-white social-link' />
     </a>
    </div>
   </div>
   <div className='vertical-text_container pe-none'>
    <p className='text-white vertical-text my-font-courier-new'>Math is so fun.</p>
   </div>
  </section>
 );
};

export default HomeBanner;
