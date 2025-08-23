<template>
	<div class="tabs d-flex">
		<button
			v-for="tab in tabs"
			:key="tab"
			:class="['tab', { active: tab === modelValue }]"
			@click="$emit('update:modelValue', tab)"
		>
			{{ tab }}
		</button>
	</div>
</template>

<script setup lang="ts">
defineProps<{ modelValue: string; tabs: string[] }>();
defineEmits(["update:modelValue"]);
</script>

<style scoped lang="scss">
.tabs {
	background-color: #e9ecef;
	overflow-y: hidden;
	overflow-x: auto;
	white-space: nowrap;
	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}

	.tab {
		font-size: 13px;
		line-height: 1.4;
		font-weight: 600;
		padding: 16px;
		border-radius: 0;
		color: #343a40;
		cursor: pointer;
		border: none;
		background-color: transparent;
		position: relative;
		transition: all 0.3s;

		&:after {
			content: "";
			position: absolute;
			width: 100%;
			height: 0;
			bottom: 0;
			left: 0;
			background-color: #1170ca;
			transition: inherit;
		}

		&.active {
			color: #1170ca;
			background-color: #fff;

			&:after {
				height: 2px;
				transition-delay: 0.1s;
			}
		}
	}
}

@media (max-width: 767px) {
	.tabs {
		.tab {
			padding: 12px 16px;
		}
	}
}
</style>
