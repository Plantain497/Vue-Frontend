import { mount } from '@vue/test-utils';
import TextInput from 'TextInput.vue';

describe('testTextInput', function() {
	const wrapper = mount(TextInput);

	it('has the correct default values', function() {
		wrapper.setData({ label: 'testing input' });
		expect(wrapper.text()).toBe('testing input');
	});

	it('something', function() {
		expect(false).toBe(false);
	});
});
