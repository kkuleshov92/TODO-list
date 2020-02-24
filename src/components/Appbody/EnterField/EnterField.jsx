import React from 'react';
import s from './EnterField.module.css';

const EnterField = (props) => {
    let inputBox = React.createRef();

    let changeInput = () => {
        let text = inputBox.current.value;

        props.changeInput(text)

    },
        addTask = () => {
            props.addTask();
        },
        enterEvent = (e) => {
            if (e.keyCode == 13) {
                addTask();
            }
        }


    return (
        <div>
            <input 
                type="text" 
                value={props.currentValue} 
                placeholder="Enter task" 
                className={s.enterInput} 
                onChange={changeInput}
                onKeyDown={enterEvent}
                ref={inputBox}
                />
        </div>
    )
}

export default EnterField;