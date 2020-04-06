import {
	mount
} from '@vue/test-utils';
import TextInput from '@/components/inputs/TextInput.vue';

describe('TextInput.vue', () => {
	it('should render input with id', () => {
		const testInputId = 'testId';
		// Pass in props
		const wrapper = mount(TextInput, {
			propsData: {
				inputId: testInputId,
			},
		});
		// Find the TextInput's attributes so we can test id or aria-label
		const attributes = wrapper.find('input').attributes();
		// Validate equality
		expect(attributes.id).toBe(testInputId);
		expect(attributes['aria-label']).toBe(testInputId);
	});
});