import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { useProducts } from '../context/productContext';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const NewProductPage = () => {

  const {createProduct} = useProducts();
  const navigate = useNavigate(); //para redireccionar

  return (
    <div>
      <Formik initialValues={
        {
          name: '',
          description: '',
          price: '',
          stock: ''
        }
      } 
      validationSchema={Yup.object({ //validación de los campos por medio de yup
        name: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        price: Yup.number().required('Required'),
        stock: Yup.number().required('Required')
      })}
      onSubmit={async (values, actions) => { //función para enviar los datos al back
        await createProduct(values);
        navigate('/'); //redireccionar a la página principal cuando cree el producto
      }}

      >
      {
        ({handleSubmit}) => (
          <Form onSubmit={handleSubmit}>
            <Field name='name' type='text' placeholder='Name'/>
            <ErrorMessage name='name' />
            <Field  name='description' type='text' placeholder='Description'/>
            <ErrorMessage name='description' />
            <Field  name='price' type='number' placeholder='Price'/>
            <ErrorMessage name='price' />
            <Field  name='stock' type='number' placeholder='Stock'/>
            <ErrorMessage name='stock' /> {/* //mostrar el error */} 
            <button type="submit">Save product</button>
          </Form>

        )
      }

      </Formik>

    </div>
  )
}

export default NewProductPage 