import React, { useEffect } from 'react';
import closeSVG from '../assets/close.png';
import './Modal.css';


function Modal(props) {
    const { autoClose, autoCloseDuration, onClose } = props;

    useEffect(() => {
        if (autoClose) {
            const timeout = setTimeout(() => {
                onClose();
            }, autoCloseDuration || 3000);
    
            return () => clearTimeout(timeout);
        }
    }, [autoClose, autoCloseDuration, onClose]);
    
    if (!props.isOpen) return null;

    return (
        <div className='modal-container'>
            <div className='modal-content' style={{ backgroundColor: props.color || 'white', borderRadius: props.border || '5px' }}>
                {props.children}
                {!props.autoClose && <button className='close-btn' onClick={props.onClose}><img className='close-img' src={closeSVG} alt='bouton de fermeture'/></button>}
            </div>
        </div>
    );
}

export default Modal;
