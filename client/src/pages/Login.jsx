import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function Login() {
  return (
    <div className='flex justify-center flex-col items-center'>
      <h1 className='text-4xl font-display mb-5'>Ingresa</h1>
      <Formik
        initialValues={{ name: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Requerido';
          }
          if (!values.password) {
            errors.password = 'Requerido';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios.post('http://localhost:3000/login', values, {
            withCredentials: true
          })
            .then(res => {
              if (res.status === 200) {
                navigate('/');
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: res.data.error,
                });
              }
              setSubmitting(false);
            })
            .catch(err => {
              console.log(err);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ha ocurrido un error en el servidor',
              });
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className='flex flex-col md:w-1/2'>
            <Field className='my-2 border-b-2 border-clr1 font-display'  type="text" name='name' placeholder="Usuario" />
            <ErrorMessage name='name' component='div' />
            <Field className='my-2 border-b-2 border-clr1 font-display'  type="password" name='password' placeholder="Contraseña" />
            <ErrorMessage name='password' component='div' />
            <button className='px-4 py-2 bg-clr1 text-white rounded-lg font-display mt-10 active:bg-clr1H transition' type="submit" disabled={isSubmitting}>
              Ingresar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login