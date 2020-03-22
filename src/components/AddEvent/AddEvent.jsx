import React from 'react';
import s from './AddEvent.module.css';
import { updateNameNewEventActionCreator } from '../../redux/addEventReducer';

const AddEvent = (props) => {
    const onNameNewEventChange = (e) => {
        const newName = e.target.value;
        const changeNameNewEvent = updateNameNewEventActionCreator(newName);
        props.dispatch(changeNameNewEvent);
    }

    return (
        <div className={`${s.AddEvent}`}>
            <input
                type="text"
                placeholder="Название мероприятия"
                value={props.state.nameNewEvent}
                onChange={onNameNewEventChange}
            />

        </div>
    );
}

export default AddEvent;