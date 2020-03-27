import { db } from '@/firebaseConfig';

const getTodos = async function(uid, todoCallback) {
	const todosRef = await db
		.collection('users')
		.doc(uid)
		.collection('todos')
		.orderBy('dueDate');
	todosRef.onSnapshot(snap => {
		snap.forEach(doc => {
			const todo = doc.data();
			const id = doc.id;
			todoCallback(id, todo);
		});
	});
};

export { getTodos };
