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
        },
        finishEdit = (e) => {
            if (e.keyCode == 13) {
                onBlurHandler(e);
            }
        },
        wrapperClasses;

    if (props.status == true) {
        wrapperClasses = `${s.inputWrapper} ${s.complete}`;
    } else {
        wrapperClasses = `${s.inputWrapper}`;
    }

    return (
        <div className={wrapperClasses}>
            <button 
                className={s.check}
                onClick={props.checkDeal}
                >
                <i className="far fa-check-circle"></i>
            </button>
            <input 
                disabled 
                type="text" 
                value={props.text} 
                className={s.dealItem} 
                onBlur={onBlurHandler}
                onChange={props.editOldDeal}
                onKeyDown={finishEdit}
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