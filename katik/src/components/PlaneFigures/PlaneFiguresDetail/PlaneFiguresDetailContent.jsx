import PlaneFiguresContentFormulas from '../PlaneFiguresContentFormulas';
import PlaneFiguresContentRemarks from '../PlaneFiguresContentRemarks';
import PlaneFiguresDetailInputParallelogram from '../PlaneFiguresDetailInputFields/PlaneFiguresDetailInputParallelogram';
import PlaneFiguresDetailInputRectangle from '../PlaneFiguresDetailInputFields/PlaneFiguresDetailInputRectangle';
import PlaneFiguresDetailInputRhombus from '../PlaneFiguresDetailInputFields/PlaneFiguresDetailInputRhombus';
import PlaneFiguresDetailInputSquare from '../PlaneFiguresDetailInputFields/PlaneFiguresDetailInputSquare';
import PlaneFiguresDetailInputTrapezoidal from '../PlaneFiguresDetailInputFields/PlaneFiguresDetailInputTrapezoidal';
import PlaneFiguresDetailInputTriangle from '../PlaneFiguresDetailInputFields/PlaneFiguresDetailInputTriangle';

const PlaneFiguresDetailContent = ({ selectedItem }) => {
 let inputComponent = null;

 if (selectedItem.id === 1) {
  inputComponent = <PlaneFiguresDetailInputSquare />;
 } else if (selectedItem.id === 2) {
  inputComponent = <PlaneFiguresDetailInputTriangle />;
 } else if (selectedItem.id === 3) {
  inputComponent = <PlaneFiguresDetailInputParallelogram />;
 } else if (selectedItem.id === 4) {
  inputComponent = <PlaneFiguresDetailInputRectangle />;
 } else if (selectedItem.id === 5) {
  inputComponent = <PlaneFiguresDetailInputTrapezoidal />;
 } else if (selectedItem.id === 6) {
  inputComponent = <PlaneFiguresDetailInputRhombus />;
 }

 return (
  <section className='d-flex flex-column align-items-center justify-content-center'>
   <h1 className='my-font-verdana fw-bold'>{selectedItem.title}</h1>
   <img src={selectedItem.img} alt='' className='img-fluid' />
   <div className='d-flex flex-wrap justify-content-center row-gap-3 column-gap-5  w-100 border-bottom border-3 border-secondary-subtle pb-3'>
    <PlaneFiguresContentFormulas item={selectedItem} />
    <PlaneFiguresContentRemarks item={selectedItem} />
   </div>
   {inputComponent}
  </section>
 );
};

export default PlaneFiguresDetailContent;
