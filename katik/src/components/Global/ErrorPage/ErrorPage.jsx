import { Link } from 'react-router-dom';
import './ErrorPage.css';
import { linkHome } from '../../../helper/linkData';

const ErrorPage = () => {
 return (
  <div id='notfound'>
   <div className='notfound'>
    <div className='notfound-404'></div>
    <h1>404</h1>
    <h2>Oops! Page Not Be Found</h2>
    <p>Sorry but the page you are looking for does not exist, have been removed, name changed, or is temporarily unavailable</p>
    <Link to={linkHome}>Back to homepage</Link>
   </div>
  </div>
 );
};

export default ErrorPage;
