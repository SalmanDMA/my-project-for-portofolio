import Layout from '../Global/Layout/Layout';
import PlaneFiguresContent from './PlaneFiguresContent';

const PlaneFigures = () => {
 return (
  <Layout>
   <div className='container py-5'>
    <h1 className='my-font-verdana fw-bold text-center text-lg-start'>Plane Figures</h1>
    <p className='my-font-courier-new w-50 mb-5 text-center text-lg-start mx-auto mx-lg-0 '>The definition of a Plane Figures is a flat plane that has a two-dimensional shape and is bounded by straight lines or curved lines.</p>
    <PlaneFiguresContent />
   </div>
  </Layout>
 );
};

export default PlaneFigures;
