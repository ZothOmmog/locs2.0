import React from 'react';
import s from './AddEvent.module.css';
import {changeNameNewEventActionCreator} from '../../redux/state.js';

const AddEvent = (props) => {
    const NameNewEventElement = React.createRef();

    const onNameNewEventChange = () => {
        const newName = NameNewEventElement.current.value;
        const changeNameNewEvent = changeNameNewEventActionCreator(newName);
        props.dispatch(changeNameNewEvent);
    }

    return (
        <div className={`${s.AddEvent}`}>
            <input
                type="text"
                placeholder="Название мероприятия"
                ref={NameNewEventElement}
                value={props.state.nameNewEvent}
                onChange={onNameNewEventChange}
            />

        </div>
    );
}

export default AddEvent;