import React from 'react';
import s from './Deal.module.css';

const Deal = (props) => {
    let editThis = (e) => {
        let targetInput = e.target.closest(`.${s.inputWrapper}`).querySelector(`.${s.dealItem}`);
        targetInput.disabled = false;
        targetInput.focus();
    },
        onBlurHandler = (e) => {
            let targetInput = e.target.closest(`.${s.inputWrapper}`).querySelector(`.${s.dealItem}`);
            targetInput.disabled = true;
        }

    return (
        <div className={s.inputWrapper}>
            <input 
                disabled 
                type="text" 
                value={props.text} 
                className={s.dealItem} 
                onBlur={onBlurHandler}
                onChange={props.editOldDeal}
            />
            <div className={s.tools}>
                <span className={s.edit} onClick={editThis}>
                    <i className="fas fa-pen"></i>
                </span>
                <span className={s.close} onClick={props.removeDeal}></span>
            </div>
        </div>
    )
}

export default Deal;