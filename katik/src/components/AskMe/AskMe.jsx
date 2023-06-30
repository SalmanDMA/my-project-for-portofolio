import ButtonScrollToTop from '../Global/ButtonScrollToTop/ButtonScrollToTop';
import Layout from '../Global/Layout/Layout';
import AskMeForm from './AskMeForm';

const AskMe = () => {
 return (
  <Layout>
   <div className='container py-5'>
    <div>
     <h1 className='my-font-verdana fw-bold text-center text-lg-start'>Ask Me ???</h1>
     <p className='my-font-courier-new w-50 mb-5 text-center text-lg-start mx-auto mx-lg-0'>You can ask me anything about this website or you can give me feedback and I will answer you as soon as I can</p>
    </div>
    <AskMeForm />
   </div>
   <ButtonScrollToTop type='askMe' />
  </Layout>
 );
};

export default AskMe;
