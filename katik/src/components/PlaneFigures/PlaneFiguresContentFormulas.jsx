const PlaneFiguresContentFormulas = ({ item }) => {
 return (
  <section>
   <h4 className='mt-4 my-font-verdana fw-semibold'>Formulas:</h4>
   <ul className='list-unstyled'>
    <li>
     <strong>Circumference :</strong> <span className='my-font-courier-new ms-2 '>{item.formula.keliling}</span>
    </li>
    <li>
     <strong>Area :</strong> <span className='my-font-courier-new ms-2 '>{item.formula.luas}</span>
    </li>
   </ul>
  </section>
 );
};

export default PlaneFiguresContentFormulas;
