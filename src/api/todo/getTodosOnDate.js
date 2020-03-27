import { db } from '@/firebaseConfig';
import { startOfDay, endOfDay } from 'date-fns';

const getTodosOnDate = async function(uid, date, todoCallback) {
	const start = startOfDay(date);
	const end = endOfDay(date);
	const todosRef = await db
		.collection('users')
		.doc(uid)
		.collection('todos')
		.where('dueDate', '>=', start)
		.where('dueDate', '<=', end);
	todosRef.onSnapshot(snap => {
		snap.forEach(doc => {
			const todo = doc.data();
			const id = doc.id;
			todoCallback(id, todo);
		});
	});
};

const getTodosForRange = async function(uid, startDate, endDate, todoCallback) {
	const start = startOfDay(startDate);
	const end = endOfDay(endDate);
	const rangeTodoRef = await db
		.collection('users')
		.doc(uid)
		.collection('todos')
		.where('dueDate', '>=', start)
		.where('dueDate', '<=', end);
	rangeTodoRef.onSnapshot(snap => {
		snap.forEach(doc => {
			const todo = doc.data();
			const id = doc.id;
			todoCallback(id, todo);
		});
	});
};

export { getTodosOnDate, getTodosForRange };
