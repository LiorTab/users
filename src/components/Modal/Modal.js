import React, { useState } from 'react';
import './Modal.scss'

const Modal = ({ postData, onUpdate, onClose }) => {

    const [title, setTitle] = useState(postData.title)
    const [body, setBody] = useState(postData.body)
    return (
        <div onClick={(e) => { if (e.target === e.currentTarget) onClose(); }} className={'modal-wrapper'}>
            <div className={'modal-block'}>
                {/* onChange wait little bit before calling while onInput reacts to each individual key pressed*/}
                <span className={'input-label'}>Title</span>
                <input className={'title-input'} type={'text'} value={title} onChange={(e) => setTitle(e.target.value)} />
                <span className={'input-label'}>Body</span>
                <textarea className={'body-input'} type={'text'} value={body} onChange={(e) => setBody(e.target.value)} />
                <div className={'button-wrapper'}>
                    <button className={'update-button'} onClick={() => onUpdate({ title, body })}>Update</button>
                    <button className={'cancel-button'} onClick={() => onClose()}>Cancel</button>
                </div>
            </div>

        </div>
    );
};

export default Modal;