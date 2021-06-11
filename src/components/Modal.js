import React from 'react';
import Form from './Form'
import './Modal.css';

export const Modal = ({ show, close }) => {
  return (
    <div className="modal-wrapper"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}>
      <div className="modal-header">
        <p>Please enter your contact information</p>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">

          <Form />

        </div>
        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">Close</button>
        </div>
      </div>
    </div>
  )
};