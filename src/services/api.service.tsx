import axios from 'axios';

const instance = axios.create({
	headers: {
		'Content-Type': 'application/json',
	}
});

export const getAllItems = async () => {
	return await instance.get('/items.json');
}
