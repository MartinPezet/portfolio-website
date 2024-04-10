import React, { useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { IoCloseOutline  } from 'react-icons/io5';

import './popup.css';

interface PopupProps {
    popupState: boolean;
    updatePopupState: Dispatch<SetStateAction<boolean>>;
    children?: React.ReactNode;
};

const Popup: React.FC<PopupProps> = ({ popupState, updatePopupState, children }) => {

    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const handleClose = () => {
        if(dialogRef.current) {
            dialogRef.current.close();
        }
        updatePopupState(!dialogRef.current);
    }

    useEffect(() => {
        if(popupState) {
            dialogRef.current.showModal();
        }

        document.body.style.overflow = popupState ? 'hidden' : 'unset';
    }, [popupState])

return (
    <dialog className="dialog" ref={dialogRef} onClick={(e) => e.stopPropagation()}>
        <div className="popup-container">
            <div className="popup-close" onClick={handleClose}>
                <IoCloseOutline color='#fff' size={25}/>
            </div>
            <div className="popup-content" autoFocus>
                {children}
            </div>
        </div>
    </dialog>
)
};

export default Popup;