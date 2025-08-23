<template>
	<div class="topbar d-flex flex-wrap items-center justify-between">
		<div class="crumbs d-flex items-center">
			<a nohref class="link">Candidates</a>
			<span class="separator items-center justify-center">
				<i class="bx bx-chevron-right"></i>
			</span>
			<span class="id">Robert Hardy</span>
			<span class="muted">ID - 231</span>
		</div>
		<div class="actions d-flex flex-wrap items-center">
			<button class="btn btn-border">Request Profile Update</button>
			<button class="btn btn-border">Previous</button>
			<button class="btn btn-border">Next</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.topbar {
	position: sticky;
	top: 60px;
	z-index: 9;
	background-color: #f8f9fa;
	border-bottom: 1px solid #e9ecef;
	padding: 9px 16px;
	gap: 12px;
}
.crumbs {
	font-size: 13px;
	line-height: 1.55;
	color: #495057;
	font-weight: 600;
	gap: 10px;
	.link {
		color: #1f5fac;
	}
	.muted {
		font-size: 12px;
		color: #343a40;
		font-weight: 500;
		text-transform: uppercase;
		padding: 3px 6px;
		border: 1px solid #e9ecef;
		border-radius: 4px;
	}
	.separator {
		width: 12px;
		display: inline-flex;
		font-size: 24px;
		line-height: 1;
		color: #1f5fac;
	}
}
.actions {
	gap: 10px;
}
.pill {
	background-color: #0f67ff;
	color: white;
	border: none;
	border-radius: 999px;
	padding: 8px 14px;
	cursor: pointer;
}
.avatar {
	width: 32px;
	height: 32px;
	border-radius: 999px;
	background-color: #e5e7eb;
	border: 1px solid #d1d5db;
}
@media (max-width: 991px) {
	.topbar {
		top: 52px;
	}
}
@media (max-width: 767px) {
	.topbar {
		top: 51px;
	}
}
</style>
