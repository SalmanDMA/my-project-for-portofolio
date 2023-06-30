import { useState, useEffect } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import './ButtonScrollToTop.css';

const ButtonScrollToTop = ({ type }) => {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
   window.removeEventListener('scroll', handleScroll);
  };
 }, []);

 const handleScroll = () => {
  const scrollY = window.scrollY;
  if (scrollY > 100) {
   setIsVisible(true);
  } else {
   setIsVisible(false);
  }
 };

 const scrollToTop = () => {
  window.scrollTo({
   top: 0,
   behavior: 'smooth',
  });
 };

 return (
  <button type='button' aria-label='Scroll to top' title='Scroll to top' className={`${type === 'askMe' ? 'scroll scroll--askMe' : 'scroll'} ${isVisible ? 'opacity-100' : 'opacity-0'}`} onClick={scrollToTop}>
   <BsArrowUpCircleFill className='text-white fs-2' />
  </button>
 );
};

export default ButtonScrollToTop;
