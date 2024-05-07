import { Route, Routes } from "react-router-dom";

import CreateEventPage from "./pages/CreateEventPage";
import MainPage from "./pages/MainPage";
import TaskForm from "./pages/TaskForm";
import TablePage from "./pages/TablePage";
import ScanPage from "./pages/ScanPage";
import EventTable from "./pages/EventsPage";
import NotFound from "./pages/NotFound";
import { TaskContextProvider } from "./context/TaskProvider";
import Scanv2Page from "./pages/Scanv2Page";
import QRCodeForm from "./pages/Files"
import OnuMainPage from "./pages/OnuMainPage";
import BottomNav from "./components/Bottom_bar";
import Scan3Page from "./pages/Scan3page";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import TasksPage from "./pages/TasksPage";
import SingleTablePage from "./pages/SingleTablePage";
import Signin from "./pages/Signin";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
  

      <div className="container mx-auto py-4 px-10">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<OnuMainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tp" element={<TasksPage />} />
            <Route path="/signin" element={<Signin />} />

            <Route path="/table" element={<TablePage />} />
            <Route path="/Events" element={<EventTable />} />
            <Route path="/createvent" element={<CreateEventPage />} />
            <Route path="/edit:id" element={<TaskForm />} />

            <Route path="/new" element={<TaskForm />} />
            <Route path="/Scan" element={<ScanPage />} />
            <Route path="/Scan2" element={<Scanv2Page />} />
            <Route path="/Scan3" element={<Scan3Page />} />

            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="/QRevent/:id" element={<SingleTablePage />} />

            <Route path="/add" element={<QRCodeForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
      <BottomNav />

    </div>
  );
}

export default App;
