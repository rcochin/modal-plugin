// Import the necessary modules and assets
import React, { useEffect } from 'react';
import closeSVG from '../assets/close.png';
import './Modal.css';

// Define the Modal functional component
function Modal(props) {
  // Destructure the props for easier access
  const { autoClose, autoCloseDuration, onClose } = props;

  // Use the useEffect hook to run logic when the component mounts or updates
  useEffect(() => {
    // Check if the modal should auto-close
    if (autoClose) {
      // Set a timer to close the modal
      const timeout = setTimeout(() => {
        onClose(); // Call the onClose function after the specified duration
      }, autoCloseDuration || 3000); // Use the duration from props, or default to 3 seconds

      // Cleanup function to clear the timer when the component is unmounted
      return () => clearTimeout(timeout);
    }
  }, [autoClose, autoCloseDuration, onClose]); // Declare dependencies for useEffect

  // If the modal isn't open, don't render anything
  if (!props.isOpen) return null;

  // Render the modal
  return (
    <div className='modal-container'>
      <div 
        className='modal-content' 
        style={{ 
          backgroundColor: props.color || 'white', 
          borderRadius: props.border || '5px' 
        }}
      >
        {props.children} {/* Render the children passed to the Modal component */}
        {
          // If autoClose is false, render the close button
          !props.autoClose && 
          <button className='close-btn' onClick={props.onClose}>
            <img className='close-img' src={closeSVG} alt='bouton de fermeture'/>
          </button>
        }
      </div>
    </div>
  );
}

// Export the Modal component for use in other files
export default Modal;
