<template>
	<div class="sidebar" :class="{ show: props.isMenuOpen }">
		<div class="sidebar-wrap">
			<ul class="nav nav-top d-flex flex-column items-center">
				<li
					v-for="item in topItems"
					:key="item"
					:class="[
						'd-flex items-center justify-center cursor-pointer',
						{ active: item === active },
					]"
					@click="active = item"
				>
					<i :class="item"></i>
				</li>
			</ul>
			<ul class="nav nav-bottom d-flex flex-column items-center">
				<li
					v-for="item in bottomItems"
					:key="item"
					:class="[
						'd-flex items-center justify-center cursor-pointer',
						{ active: item === active },
					]"
					@click="active = item"
				>
					<i :class="item"></i>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
	isMenuOpen: Boolean;
}>();

const topItems = [
	"bx bx-grid-alt",
	"bx bx-user",
	"bx bx-buildings",
	"bx bx-id-card",
	"bx bx-briefcase",
	"bx bx-envelope",
	"bx bx-calendar-event",
];

const bottomItems = [
	"bx bx-dollar-circle",
	"bx bx-pie-chart-alt",
	"bx bx-credit-card",
	"bx bx-cog",
	"bx bx-dots-horizontal-rounded",
];

const active = ref("bx bx-user");
</script>

<style scoped lang="scss">
.sidebar {
	height: 100vh;
	width: 56px;
	padding: 8px 0;
	background-color: #143e6f;
	color: #fff;
	position: relative;
	left: 0;
	z-index: 9;
	transition: all 0.3s;

	.sidebar-wrap {
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		overscroll-behavior: contain;
		-ms-overflow-style: none;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.nav {
		list-style: none;
		padding: 0;
		margin: 0;
		gap: 16px;

		&.nav-top {
			position: relative;
			margin: 0 0 16px;
			padding: 0 0 18px;

			&::after {
				content: "";
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				margin: 0 auto;
				width: 32px;
				height: 2px;
				border-radius: 2px;
				background-color: #1070ca;
			}
		}

		li {
			width: 38px;
			height: 38px;
			border-radius: 100%;
			color: #fff;
			transition: all 0.3s;

			&:hover {
				background-color: rgba(255, 255, 255, 0.05);
			}

			&.active {
				background-color: #195396;
			}

			i {
				font-size: 20px;
			}
		}
	}
}

@media (max-width: 767px) {
	.sidebar {
		left: -60px;
		&.show {
			left: 0;
		}
	}
}
</style>
