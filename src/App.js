import React, { useState } from 'react';
import { Modal } from './components/Modal';

function App() {
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  return (
    <div>
      { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
      <button onClick={() => setShow(true)} className="btn-openModal">Welcome to Abe</button>
      <Modal show={show} close={closeModalHandler} />
    </div>
  );
}

export default App;

