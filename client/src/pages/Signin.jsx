import axios from 'axios';
import Swal from 'sweetalert2'
import React,{useState} from 'react'


function Signin() {
const [values,setValues] =useState({user:"",password:""})

const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:3000/register', values)

   .then (res=>{
      if(res.data.Status==="success"){
        Swal.fire({
          title: 'Registro exitoso!',
          text: 'Tu cuenta ha sido creada con éxito',
          icon:'success',
          confirmButtonText: 'Ok'
        });
        setTimeout(()=> location.href="http://localhost:5173/login",3000);
      }else{
        Swal.fire({
          title: 'Error',
          text: 'No redirect',
          icon:'Error',
          confirmButtonText: 'Ok'
        });
      }
      
    })
   .then(err=> {console.log(err);
   Swal.fire({
    title: 'Error',
    text: 'No redirect',
    icon:'Error',
    confirmButtonText: 'Ok'
  });} );
}
  return (
    <div className='flex justify-center flex-col items-center'>
      <h1 className='text-4xl font-display mb-5'>Nuevo Usuario</h1>
      <form className='flex flex-col md:w-1/2' onSubmit={handleSubmit}>
        <input className='my-2 border-b-2 border-clr1 font-display'  name="user" onChange={e=>setValues({...values,user: e.target.value})} type="text" placeholder="Usuario" />
        <input className='my-2 border-b-2 border-clr1 font-display'  name="password" onChange={e=>setValues({...values,password: e.target.value})} type="password" placeholder="Contraseña" />
        <button className='px-4 py-2 bg-clr1 text-white rounded-lg font-display mt-10 active:bg-clr1H transition' type="submit">Crear Usuario</button>
      </form>
    </div>
  )
}

export default Signin