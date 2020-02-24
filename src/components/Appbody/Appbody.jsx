import React from 'react';
import s from './Appbody.module.css';
import Deal from './Deal/Deal';
import EnterField from './EnterField/EnterField';

const Appbody = (props) => {
    let dealList = props.state.getState().deals.map(function(element, index){
        return (
            <Deal 
                text={element.text}
                key={index}
                editOldDeal={(event) => {
                    props.state.editOldDeal(event.target.value, index)
                }}
                removeDeal={() => {props.state.removeDeal(index)}}

            />
        )
    });


    return (
        <div>
            <EnterField 
                currentValue={props.state.getState().newDealText} 
                changeInput={props.state.inputNewDeal.bind(props.state)}
                addTask={props.state.addTask.bind(props.state)}
                />
            {dealList}
        </div>
    )
}

export default Appbody;