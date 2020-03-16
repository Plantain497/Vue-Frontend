<template>
	<div class="px-2 py-8 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import firebase from 'firebase';
import HelloWorld from '@/components/HelloWorld.vue';
export default {
	name: 'Dashboard',
	components: {
		HelloWorld,
	},
	methods: {
		getEvents: async function() {
			this.$gapi.getGapiClient().then(async gapi => {
				const res = await gapi.client.calendar.events.list({
					calendarId: 'primary',
					timeMin: new Date().toISOString(),
				});
				console.log(res.result.items);
			});
		},
		addTodo: async function(title, isComplete) {
			const currentUser = await firebase.auth().currentUser;
			if (currentUser) {
				firebase
					.firestore()
					.collection('users')
					.doc(firebase.auth().currentUser.uid)
					.collection('todos')
					.add({
						title: title,
						createdAt: new Date(),
						isCompleted: isComplete,
					});
			}
		},
		getTodos: async function() {
			let todosRef = await firebase
				.firestore()
				.collection('users')
				.doc(firebase.auth().currentUser.uid)
				.collection('todos');
			todosRef.onSnapshot(snap => {
				this.todos = [];
				snap.forEach(doc => {
					let todo = doc.data();
					console.log(todo);
					todo.id = doc.id;
					this.todos.push(todo);
				});
			});
		},
	},
	// created: function() {
	// 	this.uid = firebase.auth().currentUser.uid;
	// },
};
</script>
