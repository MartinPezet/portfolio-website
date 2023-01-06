import React from 'react'
import { RiCloseLine } from 'react-icons/ri';

import './popup.css';

const Popup = ({ isOpened, onClose, children }) => {
    const overlayClick = ({target, currentTarget}) => {
        if (target === currentTarget) onClose();
    }

    if (!isOpened) return null;

  return (
    <div className="popupOverlay" onClick={overlayClick}> 
        <div className="popupContent">
            <div className="popupClose" onClick={() => onClose()}>
                <RiCloseLine color='#fff' size={27} />
            </div>
            {children}
        </div>
    </div>
  )
}

export default Popup