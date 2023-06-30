import footerData from '../../../helper/footerData';
import FooterContentList from './FooterContentList/FooterContentList';
import FooterSocialMedia from './FooterSocialMedia/FooterSocialMedia';

const Footer = () => {
 return (
  <footer className='bg-primary '>
   <div className='container d-flex flex-wrap justify-content-evenly  align-items-center pt-5 pb-3  text-white gap-lg-5 gap-md-4 gap-2 '>
    {footerData.map(({ id, title, link, type }) => (
     <FooterContentList key={id} title={title} link={link} type={type} />
    ))}
   </div>
   <FooterSocialMedia />
   <div className='py-4 mt-2 d-flex flex-wrap justify-content-between px-5 text-white my-font-courier-new'>
    <p>© 2022 Katik - All rights reserved - </p>
    <p>
     Build with{' '}
     <a href='https://reactjs.org/' target='_blank' rel='noreferrer' className='text-white me-1'>
      React
     </a>
     ft.
     <a href='https://getbootstrap.com/' target='_blank' rel='noreferrer' className='text-white ms-1'>
      Bootstrap
     </a>
    </p>
   </div>
  </footer>
 );
};

export default Footer;
