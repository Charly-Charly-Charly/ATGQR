import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
        p_name: "",
        p_nation: "",
        p_info: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadQRs = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setTask({
          p_name: task.p_name,
          p_nation: task_p_nation,
          p_info: task.p_info,
          
        });
      }
    };
    loadQRs();
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
            await createTask(values);
          }
          navigate("/table");
          setTask({
            p_name: "",
            p_nation: "",
            p_info: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-1"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Editar" : "Editar"}
            </h1>
            <label className="text-xs">Nombre</label>
            <input
              type="text"
              name="p_name"
              placeholder="Escriba su nombre"
              className=" py-1 mb-5  w-full border-b-2 border-gray-500"
              onChange={handleChange}
              value={values.p_name}
            />

<label className="text-xs">Identificación</label>
            <input
              type="text"
              name="p_nation"
              placeholder="Escriba su identificación"
              className=" py-1 mb-5   w-full border-b-2 border-gray-500 focus:border-b-clr2H"
              onChange={handleChange}
              value={values.p_nation}
            />
            <label className="text-xs">Teléfono</label>

            <input
              type="text"
              name="p_info"
              placeholder="Escriba su teléfono"
              className=" py-1 mb-5   w-full border-b-2 border-gray-500"
              onChange={handleChange}
              value={values.p_info}
            />


            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-clr1 px-2 py-1 mt-5 text-white w-full rounded-md mb-24 active:bg-clr1H md:mb-0"
            >
              {isSubmitting ? "Ingresando..." : "Ingresar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
