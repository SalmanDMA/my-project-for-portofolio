import PlaneFiguresSidebar from './PlaneFiguresSidebar';
import { useEffect, useRef, useState } from 'react';
import planeFiguresContentData from '../../helper/planeFiguresContentData';
import { Link } from 'react-router-dom';
import { linkPlaneFiguresDetail } from '../../helper/linkData';
import PlaneFiguresContentFormulas from './PlaneFiguresContentFormulas';
import PlaneFiguresContentRemarks from './PlaneFiguresContentRemarks';

const PlaneFiguresContent = () => {
 const [activeItem, setActiveItem] = useState(null);
 const contentRefs = useRef([]);

 const scrollToContent = (itemId) => {
  const index = planeFiguresContentData.findIndex((item) => item.id === itemId);
  if (index !== -1 && contentRefs.current[index]) {
   contentRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
 };

 useEffect(() => {
  const handleScroll = () => {
   const contentElements = document.querySelectorAll('.content-item');
   let activeItemId = null;

   contentElements.forEach((contentElement) => {
    const rect = contentElement.getBoundingClientRect();

    if (rect.top <= 0 && rect.bottom > 0) {
     activeItemId = parseInt(contentElement.getAttribute('data-id'), 10);
    }
   });

   setActiveItem(activeItemId);
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
   window.removeEventListener('scroll', handleScroll);
  };
 }, []);

 return (
  <div className='container'>
   <div className='row'>
    <div className='col-lg-4'>
     <PlaneFiguresSidebar activeItem={activeItem} planeFiguresContentData={planeFiguresContentData} onClick={scrollToContent} />
    </div>
    <div className='col-lg-8'>
     {planeFiguresContentData.map((item, index) => (
      <div key={item.id} className='content-item border-bottom mb-3' data-id={item.id} ref={(ref) => (contentRefs.current[index] = ref)}>
       <h3 className='mb-3 my-font-verdana fw-bold'>
        {item.id}. {item.title}
       </h3>
       <p className='my-font-courier-new'>{item.description}</p>
       <PlaneFiguresContentFormulas item={item} />
       <PlaneFiguresContentRemarks item={item} />
       <Link to={`${linkPlaneFiguresDetail}/${item.id}`}>
        <button type='button' className='btn btn-primary mb-3 w-25 my-font-verdana' aria-label='lets try it'>
         LETS TRY IT
        </button>
       </Link>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
};

export default PlaneFiguresContent;
