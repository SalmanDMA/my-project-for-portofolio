import { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { linkAskMe, linkHome, linkPlaneFigures } from '../../../../helper/linkData';

const Navbar = () => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const overlayRef = useRef();

 useEffect(() => {
  if (isSidebarOpen) {
   overlayRef.current.focus();
  }
 }, [isSidebarOpen]);

 const handleCloseSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
 };

 const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
 };

 const handleOutsideClick = (e) => {
  if (e.target.classList.value === 'sidebar-nav') return setIsSidebarOpen(!isSidebarOpen);
 };

 const handleKeyDown = (e) => {
  if (e.key === 'Escape') return setIsSidebarOpen(!isSidebarOpen);
 };

 return (
  <nav className='bg-primary px-2'>
   <div className='container d-flex justify-content-between align-items-center py-3 my-font-verdana fw-semibold h-100 '>
    <div>
     <a className='navbar-title fs-2' href='/'>
      Katik
     </a>
    </div>
    <div className='d-flex align-items-center'>
     <div className='d-lg-none'>
      <button className='navbar-toggle' onClick={toggleSidebar}>
       <span className={`navbar-toggle-icon ${isSidebarOpen ? 'open' : ''}`}></span>
      </button>
     </div>
     <ul className='mt-3 mt-lg-0 mb-0  flex-wrap row-gap-1 column-gap-3 list-unstyled fs-5 d-none d-lg-flex'>
      <li>
       <Link className='navbar-link' to={linkHome}>
        Home
       </Link>
      </li>
      <li>
       <Link className='navbar-link' to={linkPlaneFigures}>
        Plane Figures
       </Link>
      </li>
      <li>
       <Link className='navbar-link' to={linkAskMe}>
        Ask Me ?
       </Link>
      </li>
     </ul>
    </div>
   </div>
   {isSidebarOpen && <Sidebar handleClose={handleCloseSidebar} handleOutsideClick={handleOutsideClick} handleKeyDown={handleKeyDown} overlayRef={overlayRef} />}
  </nav>
 );
};

export default Navbar;
