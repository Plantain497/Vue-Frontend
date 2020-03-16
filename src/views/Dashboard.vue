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
	data: function() {
		return {
			currentUser: firebase.auth().currentUser,
		};
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
		addTodo: function(title, isComplete) {
			firebase
				.firestore()
				.collection('users')
				.doc(this.currentUser.uid)
				.collection('todos')
				.add({
					title: title,
					createdAt: new Date(),
					isCompleted: isComplete,
				});
		},
		getTodos: async function() {
			let todosRef = await firebase
				.firestore()
				.collection('users')
				.doc(this.currentUser.uid)
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
	created() {
		this.getTodos();
	},
};
</script>
