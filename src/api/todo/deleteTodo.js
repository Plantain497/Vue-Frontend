import firebase from 'firebase';

const deleteToDo = function (uid, docId) {
	firebase
		.firestore()
		.collection('users')
		.doc(uid)
		.collection('todos')
		.doc(docId)
		.delete();
};

export {
	deleteToDo
};