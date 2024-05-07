import React from "react";
import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function CreateEvent(){

    const { createEvent, getEvent, updateTask } = useTasks();
    const [task, setTask] = useState({
      Event_name: "",
      QRs: "",
      correlative:"",
    });
    const params = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      const loadTask = async () => {
        if (params.id) {
          const event = await getEvent(params.id);
          console.log(event);
          setTask({
            Event_name: event.Event_name,
            QRs: event.qrs,
            correlative: event.correlative
          });
        }
      };
      loadTask();
    }, []);
  
    return (
      <div>
        <Formik
          initialValues={task}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            console.log(values);
            if (params.id) {
              await updateTask(params.id, values);
            } else {
              await createEvent(values);
            }
            navigate("/");
            setTask({
              Event_name: "",
              QRs: "",
              correlative:""
            });
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form
              onSubmit={handleSubmit}
              className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
            >
              <h1 className="text-xl font-bold uppercase text-center">
                Evento Nuevo
              </h1>
        
              <input
                type="text"
                name="Event_name"
                placeholder="¿Cual es el nombre de tu evento?"
                className="px-2 py-2 rounded-l border-blackh w-full  bg-blackh bg-opacity-10 my-2"
                onChange={handleChange}
                value={values.Event_name}
              />
            <input
                type="number"
                name="QRs"
                placeholder="¿Cuantos QRs quieres?"
                className="px-2 py-2 rounded-l border-blackh w-full  bg-blackh bg-opacity-10 my-2"
                onChange={handleChange}
                value={values.QRs}
              />
  
            <input
                type="text"
                name="correlative"
                placeholder="Escribe el correlativo de tus QRs"
                className="px-2 py-2 rounded-l border-blackh w-full  bg-blackh bg-opacity-10 my-2"
                onChange={handleChange}
                value={values.correlative}
              />
  
              <button
                type="submit"
                disabled={isSubmitting}
                className="block bg-indigo-500 px-2 py-5 mt-6 text-white bg-clr2 w-full rounded-md"
              >
               Crear Evento
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
}
export default CreateEvent;