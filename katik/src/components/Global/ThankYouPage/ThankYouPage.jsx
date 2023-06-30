import { Link } from 'react-router-dom';
import { linkHome } from '../../../helper/linkData';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import './ThankYouPage.css';

const ThankYouPage = () => {
 return (
  <section className='d-flex flex-column align-items-center justify-content-center vh-100 '>
   <div className='d-flex flex-column align-items-center justify-content-center'>
    <h1 className='display-1 fw-bolder'>THANK YOU</h1>
    <IoCheckmarkDoneCircle className='text-primary thankyou-icon' />
    <h3>Your message has been sent successfully!!!</h3>
    <p>I will get back to you as soon as possible</p>
    <Link to={linkHome} className='btn btn-primary '>
     Back to homepage
    </Link>
   </div>
  </section>
 );
};

export default ThankYouPage;
