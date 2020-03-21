import React from 'react';
import s from './AddEvent.module.css';

const AddEvent = (props) => {
    const NameNewEventElement = React.createRef();
    const onNameNewEventChange = () => {
        props.state.changeCurrentName(NameNewEventElement.current.value);
    }

    return (
        <div className={`${s.AddEvent}`}>
            <input
                type="text"
                placeholder="Название мероприятия"
                ref={NameNewEventElement}
                value={props.state.currentName}
                onChange={onNameNewEventChange}
            />

        </div>
    );
}

export default AddEvent;