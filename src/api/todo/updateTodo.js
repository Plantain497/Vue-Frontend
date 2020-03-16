import firebase from 'firebase';

// This function still needs work since we probably have to talk about what "updating" means
const updateTodo = function(uid, docId, checked) {
	firebase
		.firestore()
		.collection('users')
		.doc(uid)
		.collection('todos')
		.doc(docId)
		.update({
			isCompleted: isChecked,
		});
};

export { updateTodo };
