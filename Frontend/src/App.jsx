import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import {AuthProvider} from "./features/auth/auth.context.jsx"
import { InterviewProvider } from "./features/interview/interview.context.jsx"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/toast.scss";

function App() {

  return (
    <AuthProvider>
      <InterviewProvider>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          newestOnTop
          pauseOnHover
          draggable
          theme="dark"
        />
      </InterviewProvider>
    </AuthProvider>
  )
}

export default App
