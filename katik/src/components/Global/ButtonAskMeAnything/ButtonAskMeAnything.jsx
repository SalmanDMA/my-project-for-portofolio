import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './ButtonAskMeAnything.css';
import { useEffect, useState } from 'react';
const ButtonAskMeAnything = ({ type }) => {
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
  <Link to='/ask-me'>
   <button type='button' aria-label='ask me' className={`ask-me ${type === 'home' ? '' : isVisible ? 'opacity-100' : 'opacity-0'}`} onClick={scrollToTop}>
    <BsFillQuestionCircleFill className='text-white fs-2 ask-me_icon' title='ask me' />
   </button>
  </Link>
 );
};

export default ButtonAskMeAnything;
