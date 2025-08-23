<template>
	<div class="shell">
		<div class="left-nav" :class="{ show: isMenuOpen }">
			<Sidebar :is-menu-open="isMenuOpen" />
			<div
				class="overlay"
				:class="{ show: isMenuOpen }"
				@click="toggleMenu"
			></div>
		</div>

		<header class="global">
			<GlobalHeader @toggle-mobile-menu="toggleMenu" />
		</header>

		<main class="center">
			<Topbar />
			<CandidateDetails />
		</main>

		<div class="right-rail">
			<RightPanel />
		</div>
	</div>
</template>

<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import GlobalHeader from "@/components/GlobalHeader.vue";
import Topbar from "@/components/Topbar.vue";
import CandidateDetails from "@/views/CandidateDetails.vue";
import RightPanel from "@/components/RightPanel.vue";
import { ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
	isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped lang="scss">
.shell {
	min-height: 100vh;
}

.left-nav {
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	z-index: 10;
}

.global {
	position: fixed;
	left: 56px;
	right: 0;
	top: 0;
	z-index: 999;
}

.center {
	margin-left: 56px;
	padding-top: 60px;
	margin-right: 430px;
	min-height: 100vh;
}

.right-rail {
	position: fixed;
	top: 60px;
	right: 0;
	bottom: 0;
	max-width: 430px;
	background-color: #f8f9fa;
	border-left: 1px solid #e9ecef;
	overflow-y: auto;
	overflow-x: hidden;
	overscroll-behavior: contain;
	z-index: 10;
	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}
}

.overlay {
	display: none;
}

@media (max-width: 1400px) {
	.right-rail {
		max-width: 370px;
	}

	.center {
		margin-right: 370px;
	}
}

@media (max-width: 1200px) {
	.center {
		margin-right: 0;
	}
	.right-rail {
		position: static;
		max-width: 100%;
		height: 515px;
		margin-left: 56px;
		border-top: 1px solid #e9ecef;
		padding: 0 0 24px;
		overflow: hidden;
	}
}

@media (max-width: 991px) {
	.center {
		padding-top: 52px;
	}
}

@media (max-width: 767px) {
	.center {
		padding-top: 50px;
	}
	.global {
		left: 0;
	}
	.center,
	.right-rail {
		margin: 0;
	}
	.left-nav {
		z-index: -1;

		&.show {
			z-index: 10;
		}
	}
	.overlay {
		display: block;
		position: fixed;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.5);
		opacity: 0;
		visibility: hidden;
		z-index: -1;
		transition: all 0.3s;

		&.show {
			opacity: 1;
			visibility: visible;
			z-index: 1;
		}
	}
}
</style>
