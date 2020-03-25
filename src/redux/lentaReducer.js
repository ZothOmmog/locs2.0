const stateForEvents = () => {
	let str = "Съешь ещё этих сладких французских булок и выпей чаю ";
	let eventInfo = str.repeat(23);

	let Events = []
	for (let i = 0; i < 25; i++) {
		Events.push(
			{
				name: `Мероприятие ${i}`,
				type: `Тип мероприятия ${i}`,
				info: eventInfo
			}
		);
	}
	return Events;
}

const initialState = {
    events: stateForEvents()
};

const lentaReducer = (state = initialState, action) => {
	let cloneState = {...state};

    switch(action.type) {
        case "ADD-NEW-EVENT":
			cloneState.events = {...state.events};
            cloneState.events.push(action.event);
			break;
		default:
			break;
	}
	
	return cloneState;
}

export default lentaReducer;