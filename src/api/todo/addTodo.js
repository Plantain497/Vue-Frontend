import {
	db
} from '@/firebaseConfig';

const addTodo = function (uid, title, description, dueDate, isComplete) {
	db.collection('users')
		.doc(uid)
		.collection('todos')
		.add({
			title: title,
			description: description,
			updatedAt: new Date(),
			dueDate: dueDate,
			isCompleted: isComplete,
		});
};

export {
	addTodo
};