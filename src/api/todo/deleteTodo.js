import {
	db
} from '@/firebaseConfig';

const deleteToDo = function (uid, docId) {
	db.collection('users')
		.doc(uid)
		.collection('todos')
		.doc(docId)
		.delete();
};

export {
	deleteToDo
};