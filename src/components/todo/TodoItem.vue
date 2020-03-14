<template>
	<div
		class="flex items-center px-6 py-4 pb-4 whitespace-no-wrap border-b border-gray-300 rounded-sm hover:bg-purple-200"
	>
		<!-- <input
			:checked="isComplete"
			v-on:click="isComplete = !isComplete"
			type="checkbox"
			class="form-checkbox"
		/>
		<span class="w-full">
			<div class="pl-6">
				<p class="w-11/12 text-sm leading-5 text-gray-900 truncate">{{ title }}</p>
				<p class="w-11/12 text-sm leading-5 text-gray-500 truncate">{{ description }}</p>
			</div>
		</span>-->
		<svg viewBox="0 0 0 0" style="position: absolute; z-index: -1; opacity: 0;">
			<defs>
				<linearGradient id="boxGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="25" y2="25">
					<stop offset="0%" stop-color="#27FDC7" />
					<stop offset="100%" stop-color="#0FC0F5" />
				</linearGradient>

				<linearGradient id="lineGradient">
					<stop offset="0%" stop-color="#0FC0F5" />
					<stop offset="100%" stop-color="#27FDC7" />
				</linearGradient>

				<path id="todo__line" stroke="url(#lineGradient)" d="M21 12.3h168v0.1z" />
				<path
					id="todo__box"
					stroke="url(#boxGradient)"
					d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
				/>
				<path id="todo__check" stroke="url(#boxGradient)" d="M10 13l2 2 5-5" />
				<circle id="todo__circle" cx="13.5" cy="12.5" r="10" />
			</defs>
		</svg>

		<div class="todo-list">
			<label class="todo">
				<input
					class="todo__state"
					type="checkbox"
					:checked="isComplete"
					v-on:click="isComplete = !isComplete"
				/>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 200 25"
					class="todo__icon"
				>
					<use xlink:href="#todo__line" class="todo__line" />
					<use xlink:href="#todo__box" class="todo__box" />
					<use xlink:href="#todo__check" class="todo__check" />
					<use xlink:href="#todo__circle" class="todo__circle" />
				</svg>

				<div class="todo__text">
					<h1>{{ title }}</h1>
				</div>
			</label>
		</div>
	</div>
</template>
<script>
export default {
	name: 'TodoItem',
	props: {
		title: {
			type: String,
		},
		description: {
			type: String,
		},
		isComplete: {
			type: Boolean,
			default: false,
		},
		dueDate: {
			type: Date,
		},
		assignees: {
			type: Array,
		},
		id: {
			type: Number,
		},
	},
};
</script>
<style scoped>
.todo-list {
	font-size: 1.2rem;
	/* max-width: 15em; */
}
.todo {
	display: block;
	position: relative;
	padding: 1em 1em 1em 16%;
	margin: 0 auto;
	cursor: pointer;
}
.todo__state {
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
}
.todo__text {
	-webkit-transition: all 0.3s linear 0.3s;
	transition: all 0.3s linear 0.3s;
}
.todo__icon {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: auto;
	margin: auto;
	fill: none;
	stroke: #27fdc7;
	stroke-width: 2;
	stroke-linejoin: round;
	stroke-linecap: round;
}
.todo__line,
.todo__box,
.todo__check {
	-webkit-transition: stroke-dashoffset 0.6s cubic-bezier(0.9, 0, 0.5, 1);
	transition: stroke-dashoffset 0.6s cubic-bezier(0.9, 0, 0.5, 1);
}
.todo__circle {
	stroke: #27fdc7;
	stroke-dasharray: 1 6;
	stroke-width: 0;
	-webkit-transform-origin: 13.5px 12.5px;
	transform-origin: 13.5px 12.5px;
	-webkit-transform: scale(0.4) rotate(0deg);
	transform: scale(0.4) rotate(0deg);
	-webkit-animation: none 0.6s linear;
	animation: none 0.6s linear;
}
@-webkit-keyframes explode {
	30% {
		stroke-width: 3;
		stroke-opacity: 1;
		-webkit-transform: scale(0.8) rotate(40deg);
		transform: scale(0.8) rotate(40deg);
	}
	100% {
		stroke-width: 0;
		stroke-opacity: 0;
		-webkit-transform: scale(1.1) rotate(60deg);
		transform: scale(1.1) rotate(60deg);
	}
}
@keyframes explode {
	30% {
		stroke-width: 3;
		stroke-opacity: 1;
		-webkit-transform: scale(0.8) rotate(40deg);
		transform: scale(0.8) rotate(40deg);
	}
	100% {
		stroke-width: 0;
		stroke-opacity: 0;
		-webkit-transform: scale(1.1) rotate(60deg);
		transform: scale(1.1) rotate(60deg);
	}
}
.todo__box {
	stroke-dasharray: 56.1053, 56.1053;
	stroke-dashoffset: 0;
	-webkit-transition-delay: 0.12s;
	transition-delay: 0.12s;
}
.todo__check {
	stroke: #27fdc7;
	stroke-dasharray: 9.8995, 9.8995;
	stroke-dashoffset: 9.8995;
	-webkit-transition-duration: 0.24s;
	transition-duration: 0.24s;
}
.todo__line {
	stroke-dasharray: 168, 1684;
	stroke-dashoffset: 168;
}
.todo__circle {
	-webkit-animation-delay: 0.42s;
	animation-delay: 0.42s;
	-webkit-animation-duration: 0.42s;
	animation-duration: 0.42s;
}
.todo__state:checked ~ .todo__text {
	-webkit-transition-delay: 0s;
	transition-delay: 0s;
	color: #5ebec1;
	opacity: 0.6;
}
.todo__state:checked ~ .todo__icon .todo__box {
	stroke-dashoffset: 56.1053;
	-webkit-transition-delay: 0s;
	transition-delay: 0s;
}
.todo__state:checked ~ .todo__icon .todo__line {
	stroke-dashoffset: -8;
}
.todo__state:checked ~ .todo__icon .todo__check {
	stroke-dashoffset: 0;
	-webkit-transition-delay: 0.36s;
	transition-delay: 0.36s;
}
.todo__state:checked ~ .todo__icon .todo__circle {
	-webkit-animation-name: explode;
	animation-name: explode;
}
</style>