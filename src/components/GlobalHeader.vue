<template>
	<div class="site-header">
		<div class="header-bar d-flex items-center justify-between">
			<div class="search-block d-flex items-center">
				<i class="bx bx-search"></i>
				<input placeholder="Search Pipedrive" />
			</div>
			<div class="menu-wrap d-flex items-center gap-2">
				<div class="mobile-menu cursor-pointer" @click="handleMobileMenuClick">
					<i class="bx bx-menu menu-icon"></i>
				</div>
				<div class="site-logo d-flex items-center cursor-pointer">
					<img src="@/assets/images/site-logo.svg" alt="Recruit CRM" />
				</div>
			</div>
			<div class="right-wrap d-flex items-center">
				<div class="btn-wrap d-mobile-none">
					<button
						class="icon-btn-circle blue d-flex items-center justify-center"
					>
						<i class="bx bx-plus icon"></i>
					</button>
				</div>
				<button
					class="icon-btn-circle d-flex items-center justify-center d-mobile-none"
				>
					<i class="bx bx-gift icon"></i>
				</button>
				<button
					class="icon-btn-circle d-flex items-center justify-center d-mobile-none"
				>
					<i class="bx bx-envelope icon"></i>
				</button>
				<button
					class="icon-btn-circle d-flex items-center justify-center d-mobile-none"
				>
					<i class="bx bx-bell icon"></i>
				</button>
				<div class="profile-block d-flex items-center cursor-pointer">
					<div class="avatar">
						<img src="@/assets/images/profile-img.png" alt="Profile" />
					</div>
					<div class="meta">
						<div class="name">Phyllis Yang</div>
						<div class="org">Silicon Links Inc</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
	(e: "toggle-mobile-menu"): void;
}>();
function handleMobileMenuClick() {
	emit("toggle-mobile-menu");
}
</script>

<style scoped lang="scss">
.site-header {
	background-color: #ffffff;
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.07),
		0px 1px 2px -2px rgba(0, 0, 0, 0.06), 0px 0px 1px 1px rgba(0, 0, 0, 0.05);
	padding: 10px 16px;
}
.header-bar {
	gap: 16px;
}
.site-logo {
	width: 155px;
	flex-shrink: 0;
	img {
		width: 100%;
	}
}
.search-block {
	gap: 8px;
	background-color: #f8f9fa;
	border: 1px solid #e9ecef;
	border-radius: 4px;
	padding: 9px 12px;
	width: 100%;
	max-width: 360px;
	input {
		font-size: 14px;
		line-height: 1.3;
		padding: 0;
		border: none;
		outline: none;
		background-color: transparent;
		width: 100%;
	}
}
.right-wrap {
	gap: 20px;
	flex-shrink: 0;
}
.btn-wrap {
	padding-right: 18px;
	position: relative;

	&::after {
		content: "";
		position: absolute;
		right: 0;
		top: 50%;
		width: 2px;
		height: 32px;
		transform: translateY(-50%);
		background-color: #c8ccd2;
		border-radius: 2px;
	}
}
.icon-btn-circle {
	width: 40px;
	height: 40px;
	font-size: 18px;
	color: #656e7a;
	border: 1px solid #c8ccd2;
	padding: 0;
	border-radius: 100%;
	background-color: transparent;
	transition: all 0.3s;

	&:hover {
		color: #fff;
		border-color: #2570ca;
		background-color: #2570ca;
	}

	&.blue {
		color: #fff;
		background-color: #1170ca;
		border-color: #1170ca;

		&:hover {
			color: #656e7a;
			border-color: #c8ccd2;
			background-color: transparent;
		}
	}
}
.profile-block {
	gap: 8px;
}
.avatar {
	width: 32px;
	height: 32px;
	border-radius: 100%;
	background-color: #e5e7eb;

	img {
		width: 100%;
		object-fit: contain;
	}
}
.meta {
	color: #192435;
	line-height: 1.25;
}
.meta .name {
	font-size: 12px;
	font-weight: 600;
}
.meta {
	.org {
		font-size: 13px;
	}
}
.mobile-menu {
	display: none;

	.menu-icon {
		font-size: 24px;
	}
}
@media (max-width: 991px) {
	.search-block {
		padding: 6px 8px;
	}
	.site-logo {
		width: 120px;
	}
	.right-wrap {
		gap: 8px;
	}
	.btn-wrap {
		padding-right: 10px;
		&::after {
			height: 20px;
		}
	}
	.icon-btn-circle {
		font-size: 14px;
	}
	.icon-btn-circle,
	.avatar {
		width: 28px;
		height: 28px;
	}
	.profile-block {
		gap: 4px;
	}
}
@media (max-width: 767px) {
	.mobile-menu {
		display: flex;
	}
	.site-logo {
		width: 100px;
	}
	.search-block,
	.d-mobile-none {
		display: none;
	}
}
</style>
