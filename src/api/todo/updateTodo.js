import { db } from '@/firebaseConfig';

// This function still needs work since we probably have to talk about what "updating" means
const updateTodo = function(uid, docId, newTodoData) {
	db.collection('users')
		.doc(uid)
		.collection('todos')
		.doc(docId)
		.update({
			title: newTodoData.title,
			description: newTodoData.description,
			isCompleted: newTodoData.isCompleted,
			dueDate: newTodoData.dueDate,
		});
};

export { updateTodo };
