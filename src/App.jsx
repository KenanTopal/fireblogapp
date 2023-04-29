import { ToastContainer } from 'react-toastify';
import AuthContextProvider from './context/AuthContext';
import BlogContextProvider from './context/BlogContext';
import AppRouter from './Router/AppRouter';

function App() {
  return <div className="App">
    <AuthContextProvider>
      <BlogContextProvider>
        <AppRouter/>
        <ToastContainer/>
      </BlogContextProvider>
    </AuthContextProvider>
  </div>;
}

export default App;
