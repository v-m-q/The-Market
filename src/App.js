import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {

  localStorage.setItem('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzMDQzNDI3LCJpYXQiOjE3MTMwMzk4MjcsImp0aSI6IjI0YTZmZDU5NjJmZTQyOTU4ZGY4NTE4NGNiNzQyMjY2IiwidXNlcl9pZCI6MSwiZW1haWwiOiJtb2hhbWVkQG1haWwuY29tIn0.NLmQwS8CzRxhiKeDB7946y5ToQgjC3Lm5sl6wXvr2Yg');
  
  return (
    <>
      <RouterProvider router={router} />
     </>
  );
}

export default App;
