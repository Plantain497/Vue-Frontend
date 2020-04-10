<template>
	<div class="px-2 py-8 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
		<div
			class="flex justify-between w-full h-auto"
			v-click-outside="resetCurrentTodo"
		>
			<todo-container selected-view="Today" today-classes="text-2xl pb-3" />
			<div class="flex-1 hidden ml-8 md:block">
				<div class="w-full bg-gray-500 h-40vh">
					Calendar
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { auth } from '@/firebaseConfig';
import { getTodosOnDate } from '@/api/todo';
import TodoContainer from '@/components/todo/TodoContainer';

export default {
	name: 'Dashboard',
	components: {
		TodoContainer,
	},
	data: function() {
		return {
			currentUser: auth.currentUser,
			showModal: false,
		};
	},
	methods: {
		resetCurrentTodo: function() {
			store.dispatch('setCurrentSelectedTodo', {});
		},
	},
};
</script>
<style scoped>
.h-40vh {
	height: 40vh;
}
</style>
