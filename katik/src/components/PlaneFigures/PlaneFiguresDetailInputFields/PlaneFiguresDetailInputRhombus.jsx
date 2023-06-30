import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './PlaneFiguresDetailInputFields.css';
import { useRef, useState } from 'react';

const PlaneFiguresDetailInputRhombus = () => {
 const [inputValues, setInputValues] = useState({
  s: '',
  d1: '',
  d2: '',
 });
 const [editById, setEditById] = useState(null);
 const [data, setData] = useState([]);
 const inputRef = useRef();

 const handleSubmit = (e) => {
  e.preventDefault();
  const { s, d1, d2 } = inputValues;
  const luasResult = hitungLuas(parseFloat(d1), parseFloat(d2));
  const kelilingResult = hitungKeliling(parseFloat(s));

  if (editById !== null) {
   const newData = [...data];
   newData.forEach((item) => {
    if (item.id === editById) {
     item.s = s;
     item.d1 = d1;
     item.d2 = d2;
     item.luas = luasResult;
     item.keliling = kelilingResult;
    }
   });
   setData(newData);
   setEditById(null);
  } else {
   setData([...data, { id: data.length + 1, s, d1, d2, luas: luasResult, keliling: kelilingResult }]);
  }
  setInputValues({ s: '', d1: '', d2: '' });
 };

 const hitungLuas = (d1, d2) => {
  return (d1 * d2) / 2;
 };

 const hitungKeliling = (s) => {
  return s * 4;
 };

 const handleEdit = (id) => {
  const newData = [...data];
  const editData = newData.find((item) => item.id === id);
  inputRef.current.focus();
  setInputValues({ s: editData.s, d1: editData.d1, d2: editData.d2 });
  setEditById(id);
 };

 const handleDelete = (id) => {
  const newData = data.filter((item) => item.id !== id);
  setData(newData);
 };

 const handleReset = () => {
  setInputValues({ s: '', d1: '', d2: '' });
  inputRef.current.focus();
 };

 return (
  <div className='w-100 py-5 d-flex flex-lg-row flex-column gap-5'>
   <form className='form-container d-flex flex-column gap-3' onSubmit={handleSubmit}>
    <div className='mb-3 d-flex flex-column w-100 '>
     <h3 className='my-font-verdana fw-bold'>Enter s value</h3>
     <input type='number' className='form-control' placeholder='Type here' value={inputValues.s} onChange={(e) => setInputValues({ ...inputValues, s: e.target.value })} ref={inputRef} required />
    </div>
    <div className='mb-3 d-flex flex-column w-100 '>
     <h3 className='my-font-verdana fw-bold'>Enter d1 value</h3>
     <input type='number' className='form-control' placeholder='Type here' value={inputValues.d1} onChange={(e) => setInputValues({ ...inputValues, d1: e.target.value })} required />
    </div>
    <div className='mb-3 d-flex flex-column w-100 '>
     <h3 className='my-font-verdana fw-bold'>Enter d2 value</h3>
     <input type='number' className='form-control' placeholder='Type here' value={inputValues.d2} onChange={(e) => setInputValues({ ...inputValues, d2: e.target.value })} required />
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
        <th scope='col'>S Values</th>
        <th scope='col'>D1 Values</th>
        <th scope='col'>D2 Values</th>
        <th scope='col'>Area </th>
        <th scope='col'>Circumference</th>
        <th scope='col'>Action</th>
       </tr>
      </thead>
      <tbody className='my-font-courier-new'>
       {data.map((item) => (
        <tr key={item.id}>
         <th scope='row'>{item.s}</th>
         <td>{item.d1}</td>
         <td>{item.d2}</td>
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

export default PlaneFiguresDetailInputRhombus;
