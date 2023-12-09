import React from 'react'
import { RiCloseLine } from 'react-icons/ri';

import './popup.css';

interface PopupProps {
    isOpened: boolean;
    onClose: () => void;
    children: React.ReactNode;
} ;

const Popup: React.FC<PopupProps> = ({ isOpened, onClose, children }) => {
    const overlayClick = ({target, currentTarget}: React.MouseEvent<HTMLDivElement>) => {
        if (target === currentTarget) onClose();
    }

    if (!isOpened) return null;

  return (
    <div className="popupOverlay" onClick={overlayClick}> 
        <div className="popupContainer">
            <div className="popupClose scaleOnHover" onClick={() => onClose()}>
                <RiCloseLine color='#fff' size={27} />
            </div>
            <div className="popupContent">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Popup;