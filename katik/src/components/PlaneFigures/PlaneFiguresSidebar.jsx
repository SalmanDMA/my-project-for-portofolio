const PlaneFiguresSidebar = ({ activeItem, planeFiguresContentData, onClick }) => {
 return (
  <div id='sidebar' className='position-sticky top-0 py-3 mb-5 mb-lg-0 '>
   <ul className='list-group'>
    <li className='list-group-item fw-bold user-select-none my-font-verdana'>Table of Contents</li>
    {planeFiguresContentData.map((item) => (
     <li style={{ cursor: 'pointer' }} key={item.id} className={`list-group-item ${activeItem === item.id ? 'active' : ''} my-font-verdana`} onClick={() => onClick(item.id)}>
      {item.id}. {item.title}
     </li>
    ))}
   </ul>
  </div>
 );
};

export default PlaneFiguresSidebar;
