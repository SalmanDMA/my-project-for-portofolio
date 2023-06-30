import { useForm } from 'react-hook-form';
import { askMeData } from '../../helper/askMedata';
import AskMeTextArea from './AskMeTextArea';
import AskMeInput from './AskMeInput';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { linkThankYouPage } from '../../helper/linkData';

const AskMeForm = () => {
 const [isSending, setIsSending] = useState(false);
 const navigate = useNavigate();

 const {
  register,
  handleSubmit,
  formState: { errors, isValid },
 } = useForm({
  mode: 'onChange',
 });

 const handleSubmitForm = async (data) => {
  setIsSending(true);

  try {
   const response = await axios.post('https://formspree.io/f/xzblpvzn', data);

   if (response.status === 200) {
    setIsSending(false);
    navigate(linkThankYouPage);
   } else {
    throw new Error('Form submission failed');
   }
  } catch (error) {
   setIsSending(false);
   console.log(error);
  }
 };

 return (
  <section className='py-5'>
   <form onSubmit={handleSubmit(handleSubmitForm)}>
    {askMeData.map((data) => {
     if (data.type === 'textarea') {
      return <AskMeTextArea key={data.id} {...data} errors={errors[data.name]} register={register(data.name, data.validation)} />;
     }

     return <AskMeInput key={data.id} {...data} errors={errors[data.name]} register={register(data.name, data.validation)} />;
    })}

    <button type='submit' className='btn btn-primary' disabled={!isValid}>
     {isSending ? 'Sending...' : 'Send'}
    </button>
   </form>
  </section>
 );
};

export default AskMeForm;
