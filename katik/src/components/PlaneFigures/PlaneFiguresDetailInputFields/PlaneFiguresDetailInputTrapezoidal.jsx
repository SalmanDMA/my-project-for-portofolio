import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './PlaneFiguresDetailInputFields.css';
import { useRef, useState } from 'react';

const PlaneFiguresDetailInputTrapezoidal = () => {
 const [inputValues, setInputValues] = useState({
  a: '',
  b: '',
  t: '',
  ab: '',
  bc: '',
  cd: '',
  da: '',
 });
 const [editById, setEditById] = useState(null);
 const [data, setData] = useState([]);
 const inputRef = useRef();

 const handleSubmit = (e) => {
  e.preventDefault();
  const { a, b, t, ab, bc, cd, da } = inputValues;
  const luasResult = hitungLuas(parseFloat(a), parseFloat(b), parseFloat(t));
  const kelilingResult = hitungKeliling(parseFloat(ab), parseFloat(bc), parseFloat(cd), parseFloat(da));

  if (editById !== null) {
   const newData = [...data];
   newData.forEach((item) => {
    if (item.id === editById) {
     item.a = a;
     item.b = b;
     item.t = t;
     item.ab = ab;
     item.bc = bc;
     item.cd = cd;
     item.da = da;
     item.luas = luasResult;
     item.keliling = kelilingResult;
    }
   });
   setData(newData);
   setEditById(null);
  } else {
   setData([...data, { id: data.length + 1, a, b, t, ab, bc, cd, da, luas: luasResult, keliling: kelilingResult }]);
  }
  setInputValues({ a: '', b: '', t: '', ab: '', bc: '', cd: '', da: '' });
 };

 const hitungLuas = (a, b, t) => {
  return (1 / 2) * (a + b) * t;
 };

 const hitungKeliling = (ab, bc, cd, da) => {
  return ab + bc + cd + da;
 };

 const handleEdit = (id) => {
  const newData = [...data];
  const editData = newData.find((item) => item.id === id);
  inputRef.current.focus();
  setInputValues({ a: editData.a, b: editData.b, t: editData.t, ab: editData.ab, bc: editData.bc, cd: editData.cd, da: editData.da });
  setEditById(id);
 };

 const handleDelete = (id) => {
  const newData = data.filter((item) => item.id !== id);
  setData(newData);
 };

 const handleReset = () => {
  setInputValues({ a: '', b: '', t: '', ab: '', bc: '', cd: '', da: '' });
  inputRef.current.focus();
 };

 return (
  <div className='w-100 py-5 d-flex flex-lg-row flex-column gap-5'>
   <form className='form-container d-flex flex-column gap-3' onSubmit={handleSubmit}>
    <div className='mb-3 d-flex flex-column w-100 '>
     <h3 className='my-font-verdana fw-bold'>Enter a value</h3>
     <input type='number' className='form-control' placeholder='Type here' value={inputValues.a} onChange={(e) => setInputValues({ ...inputValues, a: e.target.value })} ref={inputRef} required />
    </div>
    <div className='mb-3 d-flex flex-column w-100 '>
     <h3 className='my-font-verdana fw-bold'>Enter b value</h3>
     <input type='number' className='form-control' placeholder='Type here' value={inputValues.b} onChange={(e) => setInputValues({ ...inputValues, b: e.target.value })} required />
    </div>
    <div className='mb-3 d-flex flex-column w-100 '>
     <h3 className='my-font-verdana fw-bold'>Enter t value</h3>
     <input type='number' className='form-control' placeholder='Type here' value={inputValues.t} onChange={(e) => setInputValues({ ...inputValues, t: e.target.value })} required />
    </div>
    <div className='mb-3 d-flex flex-column w-100 '>
     <h3 className='my-font-verdana fw-bold'>Enter ab value</h3>
     <input type='number' className='form-control' placeholder='Type here' value={inputValues.ab} onChange={(e) => setInputValues({ ...inputValues, ab: e.target.value })} required />
    </div>
    <div className='mb-3 d-flex flex-column w-100 '>
     <h3 className='my-font-verdana fw-bold'>Enter bc value</h3>
     <input type='number' className='form-control' placeholder='Type here' value={inputValues.bc} onChange={(e) => setInputValues({ ...inputValues, bc: e.target.value })} required />
    </div>
    <div className='mb-3 d-flex flex-column w-100 '>
     <h3 className='my-font-verdana fw-bold'>Enter cd value</h3>
     <input type='number' className='form-control' placeholder='Type here' value={inputValues.cd} onChange={(e) => setInputValues({ ...inputValues, cd: e.target.value })} required />
    </div>
    <div className='mb-3 d-flex flex-column w-100 '>
     <h3 className='my-font-verdana fw-bold'>Enter da value</h3>
     <input type='number' className='form-control' placeholder='Type here' value={inputValues.da} onChange={(e) => setInputValues({ ...inputValues, da: e.target.value })} required />
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
        <th scope='col'>A Values</th>
        <th scope='col'>B Values</th>
        <th scope='col'>T Values</th>
        <th scope='col'>AB Values</th>
        <th scope='col'>BC Values</th>
        <th scope='col'>CD Values</th>
        <th scope='col'>DA Values</th>
        <th scope='col'>Area </th>
        <th scope='col'>Circumference</th>
        <th scope='col'>Action</th>
       </tr>
      </thead>
      <tbody className='my-font-courier-new'>
       {data.map((item) => (
        <tr key={item.id}>
         <th scope='row'>{item.a}</th>
         <td>{item.b}</td>
         <td>{item.t}</td>
         <td>{item.ab}</td>
         <td>{item.bc}</td>
         <td>{item.cd}</td>
         <td>{item.da}</td>
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

export default PlaneFiguresDetailInputTrapezoidal;
