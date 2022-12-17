import React from 'react';

import { ToastContainer } from 'react-toastify';

function CustomToastContainer() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar
      closeOnClick
      draggable
      pauseOnHover
      theme="light"
    />
  );
}

export default CustomToastContainer;
