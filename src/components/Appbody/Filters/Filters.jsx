import React from 'react';
import s from './Filters.module.css';

const Filters = (props) => {


    return (
        <div className={s.filterWrapper}>
            <button className={s.accomplished}>
                Accomplished
            </button>
            <button className={s.inProcess}>
                In process
            </button>
            <button className={s.all}>
                All
            </button>
        </div>
    )
}

export default Filters;