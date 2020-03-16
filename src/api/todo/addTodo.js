import firebase from 'firebase';

const addTodo = function(uid, title, description, dueDate, isComplete) {
	firebase
		.firestore()
		.collection('users')
		.doc(uid)
		.collection('todos')
		.add({
			title: title,
			description: description,
			updatedAt: new Date(),
			dueDate: date,
			isCompleted: isComplete,
		});
};

export { addTodo };
