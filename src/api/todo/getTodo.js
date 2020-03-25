import { db } from '@/firebaseConfig';

const getTodos = async function(uid, todos) {
	const todosRef = await db
		.collection('users')
		.doc(uid)
		.collection('todos');
	todosRef.onSnapshot(snap => {
		snap.forEach(doc => {
			const todo = doc.data();
			const id = doc.id;
			todos[id] = todo;
		});
	});
};

export { getTodos };
