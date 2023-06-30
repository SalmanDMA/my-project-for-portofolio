const AskMeTextArea = ({ name, placeholder, register, errors, ...props }) => {
 return (
  <section>
   <div className='mb-3'>
    <label htmlFor={name} className='form-label text-capitalize my-font-verdana'>
     {name}
    </label>
    <textarea name={name} className='form-control' placeholder={placeholder} id={name} {...register} {...props}></textarea>
    {errors && <p className='text-danger my-font-courier-new'>{errors.message}</p>}
   </div>
  </section>
 );
};

export default AskMeTextArea;
