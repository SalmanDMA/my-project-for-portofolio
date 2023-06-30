import { Link } from 'react-router-dom';
import './Sidebar.css';
import { linkAskMe, linkHome, linkPlaneFigures } from '../../../../helper/linkData';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = ({ handleClose, overlayRef, handleOutsideClick, handleKeyDown }) => {
 return (
  <div className='sidebar' onClick={handleOutsideClick} onKeyDown={handleKeyDown}>
   <AiOutlineClose className='sidebar-close' onClick={handleClose} />
   <ul className='sidebar-nav' ref={overlayRef} tabIndex={0}>
    <li>
     <Link className='sidebar-link' to={linkHome}>
      Home
     </Link>
    </li>
    <li>
     <Link className='sidebar-link' to={linkPlaneFigures}>
      Plane Figures
     </Link>
    </li>
    <li>
     <Link className='sidebar-link' to={linkAskMe}>
      Ask Me ?
     </Link>
    </li>
   </ul>
  </div>
 );
};

export default Sidebar;
