const AskMeInput = ({ name, placeholder, register, errors, ...props }) => {
 return (
  <section>
   <div className='mb-3'>
    <label htmlFor={name} className='form-label text-capitalize my-font-verdana'>
     {name}
    </label>
    <input type='text' name={name} className='form-control' id={name} placeholder={placeholder} aria-describedby={`${name}Help`} {...register} {...props} />
   </div>
   {errors && <p className='text-danger my-font-courier-new'>{errors.message}</p>}
  </section>
 );
};

export default AskMeInput;
