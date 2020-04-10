import { db } from '@/firebaseConfig';

const addTodo = function(uid, title, description, dueDate, isCompleted) {
	db.collection('users')
		.doc(uid)
		.collection('todos')
		.add({
			title: title,
			description: description,
			updatedAt: new Date(),
			dueDate: dueDate,
			isCompleted: isCompleted,
		});
};

export { addTodo };
