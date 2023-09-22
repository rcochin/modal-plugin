import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Modal from './lib/components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} autoClose={false} >
        Hello, I'm a modal!
      </Modal>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
