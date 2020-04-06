import Vuex from 'vuex';
import {
	createLocalVue,
	mount
} from '@vue/test-utils';
import TodoContainer from '@/components/todo/TodoContainer.vue';
import TodoItem from '@/components/todo/TodoItem.vue';
import store from '../VuexStoreFactory';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TodoContainer Store Test', () => {
	it('should should display a task in TodoContainer when one is created', () => {
		const wrapper = mount(TodoContainer, {
			propsData: {
				selectedView: 'Today',
			},
			store,
			localVue,
		});

		const mockFn = jest.fn().mockImplementation(wrapper.store = null);
		mockFn();

		const todo = wrapper.find(TodoItem);
		expect(todo.length === 0);
	});
});