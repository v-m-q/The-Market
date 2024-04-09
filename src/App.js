import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {

  localStorage.setItem('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyNjc2ODA0LCJpYXQiOjE3MTI2NzMyMDQsImp0aSI6IjIyOTNiNzgyNWIzYzQ3MmQ5ZTNmZTVjZGY5MGEyNDljIiwidXNlcl9pZCI6MiwiZW1haWwiOiJtb2hhbWVkQG1haWwuY29tIn0.vuyDs1ZW5B6lQ1C4ZOh70zaabdXehWvkFRp0z1zoWFA');
  
  return (
    <>
      <RouterProvider router={router} />
     </>
  );
}

export default App;
