import React from 'react'
import { useParams } from 'react-router-dom'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import './form.css'
import { addForm, updateForm } from '../../redux/formSlice'
import { newuser } from '../../redux/tableslice'
function Form() {


  const { id } = useParams();
  // console.log("form start from first")

  const dispatch = useDispatch();
  const redux = useSelector((state) => state)


  function handle(e) {
    const { name, value } = e.target;
    const pass = { [name]: value };
    dispatch(updateForm({ id, pass }));
  }


  function submitdata() {
    dispatch(newuser(redux.form[id]))
    alert("Submitted")
  }


  const data = redux.form[id];
  return (
    <div className="formmain">
      <div className="form">

        <label >Name :</label>
        <input type='text' name="name" onChange={(e) => handle(e)} value={data?.name || ""} />

        <label >mail :</label>
        <input type='text' name="mail" onChange={(e) => handle(e)} value={data?.mail || ""} />

        <label >phone Number :</label>
        <input type='text' name="phno" onChange={(e) => handle(e)} value={data?.phno || ""} />

        <label >Gender :</label>
        <div className="gender">
          male<input type='radio' name="gender" value="male" onChange={(e) => handle(e)} checked={data?.gender === "male"} />
          Female<input type='radio' name="gender" value="female" onChange={(e) => handle(e)} checked={data?.gender === "female"} />
        </div>
        <label>City :</label>
        <select name="city" onChange={(e) => handle(e)} value={data?.city || ""}>
          <option>-select-</option>
          <option>Trichy</option>
          <option>coimbatore</option>
        </select>
        <button onClick={submitdata}> Submit </button>
      </div>
    </div>
  );
}
export default Form