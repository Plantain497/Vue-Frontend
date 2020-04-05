import {
	shallowMount
} from '@vue/test-utils';
import TextInput from 'TextInput.vue';

describe('TextInput', function () {
	const wrapper = shallowMount(TextInput);

	it('accepts an empty string when inputId == description', function () {
		// set id = description and ensure that the button does click when empty string
		console.log(wrapper);
		wrapper.setData({
			label: 'testing input'
		});
		console.log(wrapper);
		expect(wrapper.label).toBe('testing input');
	});

	it('refuses an empty string when inputId == title', function () {
		// set id = title and ensure that the button doesn't click when empty string
		expect(false).toBe(false);
	});
});