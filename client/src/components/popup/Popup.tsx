import React, { useRef } from 'react';
import { IoCloseOutline  } from 'react-icons/io5';

import './popup.css';

interface PopupProps {
    popupState: boolean;
    setPopupState: () => void;
    children?: React.ReactNode;
};

const Popup: React.FC<PopupProps> = ({ popupState, setPopupState, children }) => {

    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const handleClose: React.MouseEventHandler<HTMLDivElement> = () => {
        if(dialogRef.current) {
            dialogRef.current.close();
        }
        setPopupState();
        console.log(popupState);
    }

return (
    <dialog className="dialog" ref={dialogRef} open={popupState} onClick={(e) => e.stopPropagation()}>
        <div className="popup-container">
            <div className="popup-close" onClick={handleClose} autoFocus>
                <IoCloseOutline color='#fff' size={25}/>
            </div>
            <div className="popup-content">
                {children}
            </div>
        </div>
    </dialog>
)
}

export default Popup;