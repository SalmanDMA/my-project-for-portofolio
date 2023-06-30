const PlaneFiguresContentRemarks = ({ item }) => {
 return (
  <section>
   <h4 className='mt-4 my-font-verdana fw-semibold'>Remarks:</h4>
   <ul className='list-unstyled'>
    {Object.entries(item.remarks).map(([key, value]) => (
     <li key={key}>
      <strong>{key}:</strong> <span className='my-font-courier-new'>{value}</span>
     </li>
    ))}
   </ul>
  </section>
 );
};

export default PlaneFiguresContentRemarks;
