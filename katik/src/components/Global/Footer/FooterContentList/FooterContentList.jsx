import { Link } from 'react-router-dom';
import './FooterContentList.css';

const FooterContentList = ({ title, type, link }) => {
 return (
  <section className='flex flex-column justify-content-center my-font-verdana'>
   <h3 className='mb-3 text-center'>{title}</h3>
   <ul className='list-unstyled d-flex flex-column gap-1 justify-content-center   '>
    {type === 'link'
     ? link.map(({ id, link, text }) => (
        <li key={id}>
         <Link to={link} className='link text-white text-decoration-none ps-3 '>
          {text}
         </Link>
        </li>
       ))
     : link.map(({ id, link, text }) => (
        <li key={id}>
         <a href={link} target='_blank' rel='noreferrer' className='link text-white text-decoration-none ps-3'>
          {text}
         </a>
        </li>
       ))}
   </ul>
  </section>
 );
};

export default FooterContentList;
