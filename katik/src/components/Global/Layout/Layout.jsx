import Navbar from './Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children, type }) => {
 return (
  <>
   <Navbar />
   {children}
   {type !== 'home' && <Footer />}
  </>
 );
};

export default Layout;
