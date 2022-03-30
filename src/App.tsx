import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Build from './pages/build/build';
import Cart from './pages/cart/cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="p-5">
        <Routes>
          <Route path='/' element={<Build />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
			<ToastContainer
				position="bottom-left"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
    </>
  );
}

export default App;
