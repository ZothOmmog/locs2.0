const stateForEvents = () => {
    let str = "Съешь ещё этих сладких французских булок и выпей чаю ";
	let eventInfo = str.repeat(23);

	let Events = []
	for (let i = 0; i < 25; i++) {
		Events.push(
			{ name: `Мероприятие ${i}`, 
			  type: `Тип мероприятия ${i}`, 
			  info: eventInfo }
		);
	}
	return Events;
}

let state = {
    stateLenta: {
        stateEvents: stateForEvents()
    },
    stateSearch: {
        stateTags: ["tag1", "tag2", "tag3", "tag4", "tag5"]
    }
};

export default state;