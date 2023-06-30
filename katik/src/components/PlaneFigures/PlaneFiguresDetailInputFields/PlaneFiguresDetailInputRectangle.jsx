import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './PlaneFiguresDetailInputFields.css';
import { useRef, useState } from 'react';

const PlaneFiguresDetailInputRectangle = () => {
 const [inputValues, setInputValues] = useState({
  p: '',
  l: '',
 });
 const [editById, setEditById] = useState(null);
 const [data, setData] = useState([]);
 const inputRef = useRef();

 const handleSubmit = (e) => {
  e.preventDefault();
  const { p, l } = inputValues;
  const luasResult = hitungLuas(parseFloat(p), parseFloat(l));
  const kelilingResult = hitungKeliling(parseFloat(p), parseFloat(l));

  if (editById !== null) {
   const newData = [...data];
   newData.forEach((item) => {
    if (item.id === editById) {
     item.p = p;
     item.l = l;
     item.luas = luasResult;
     item.keliling = kelilingResult;
    }
   });
   setData(newData);
   setEditById(null);
  } else {
   setData([...data, { id: data.length + 1, p, l, luas: luasResult, keliling: kelilingResult }]);
  }
  setInputValues({ p: '', l: '' });
 };

 const hitungLuas = (p, l) => {
  return p * l;
 };

 const hitungKeliling = (p, l) => {
  return 2 * (p + l);
 };

 const handleEdit = (id) => {
  const newData = [...data];
  const editData = newData.find((item) => item.id === id);
  inputRef.current.focus();
  setInputValues({ p: editData.p, l: editData.l });
  setEditById(id);
 };

 const handleDelete = (id) => {
  const newData = data.filter((item) => item.id !== id);
  setData(newData);
 };

 const handleReset = () => {
  setInputValues({ p: '', l: '' });
  inputRef.current.focus();
 };

 return (
  <div className='w-100 py-5 d-flex flex-lg-row flex-column gap-5'>
   <form className='form-container d-flex flex-column gap-3' onSubmit={handleSubmit}>
    <div className='mb-3 d-flex flex-column w-100 '>
     <h3 className='my-font-verdana fw-bold'>Enter p value</h3>
     <input type='number' className='form-control' placeholder='Type here' value={inputValues.p} onChange={(e) => setInputValues({ ...inputValues, p: e.target.value })} ref={inputRef} required />
    </div>
    <div className='mb-3 d-flex flex-column w-100 '>
     <h3 className='my-font-verdana fw-bold'>Enter l value</h3>
     <input type='number' className='form-control' placeholder='Type here' value={inputValues.l} onChange={(e) => setInputValues({ ...inputValues, l: e.target.value })} required />
    </div>
    <div className='button-container d-flex gap-3'>
     <button type='submit' className='btn btn-primary w-100'>
      Hitung
     </button>
     <button type='button' className='btn btn-warning w-100' onClick={handleReset}>
      Reset
     </button>
    </div>
   </form>
   {data.length > 0 && (
    <div className='result-container'>
     <h3 className='text-center fw-bold my-font-verdana'>Result</h3>
     <table className='table w-100 text-center'>
      <thead>
       <tr className='my-font-verdana'>
        <th scope='col'>P Values</th>
        <th scope='col'>L Values</th>
        <th scope='col'>Area </th>
        <th scope='col'>Circumference</th>
        <th scope='col'>Action</th>
       </tr>
      </thead>
      <tbody className='my-font-courier-new'>
       {data.map((item) => (
        <tr key={item.id}>
         <th scope='row'>{item.p}</th>
         <td>{item.l}</td>
         <td>{item.luas}</td>
         <td>{item.keliling}</td>
         <td>
          <BiEdit className='me-2 fs-4 icon text-warning border border-warning-subtle border-2 rounded' title='Edit values' onClick={() => handleEdit(item.id)} />
          <RiDeleteBin6Line className='fs-5 icon text-danger border border-danger-subtle border-2 rounded' title='Delete row' onClick={() => handleDelete(item.id)} />
         </td>
        </tr>
       ))}
      </tbody>
     </table>

     <div className='d-flex justify-content-end '>
      <button className='btn btn-danger' type='button' onClick={() => setData([])}>
       Clear All Data
      </button>
     </div>
    </div>
   )}
  </div>
 );
};

export default PlaneFiguresDetailInputRectangle;
