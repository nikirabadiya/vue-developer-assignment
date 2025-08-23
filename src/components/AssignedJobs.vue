<template>
	<div class="jobs-wrapper bg-white">
		<div class="title d-flex flex-wrap items-center justify-between">
			<h3>Assigned Job to {{ name }}</h3>
			<div class="toolbar d-flex flex-wrap items-center">
				<button class="btn btn-fill">Assign To Job</button>
				<button class="btn btn-border">View All Assigned Jobs</button>
			</div>
		</div>
		<div class="list d-flex flex-column">
			<div class="list-card" v-for="job in jobs" :key="job.id">
				<div class="inner-row d-flex items-center justify-between">
					<div class="job-info d-flex items-center gap-2">
						<div class="profile-img items-center justify-center">M</div>
						<div class="meta-info d-flex flex-column gap-1">
							<div class="job-title">{{ job.title }}</div>
							<div class="sub-info">Recruit CRM</div>
						</div>
					</div>
					<div class="time-info d-flex flex-column gap-1">
						<div class="d-flex items-center gap-2">
							<i class="bx bx-user-circle icon"></i>
							William Sample
						</div>
						<div class="d-flex items-center gap-2">
							<i class="bx bx-time icon"></i>
							{{ job.date }}
						</div>
					</div>
					<span class="status">{{ job.status }}</span>
					<button class="btn btn-border">View Files</button>
					<label class="toggle-btn">
						<input type="checkbox" checked />
						<span></span>
					</label>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	name: string;
	jobs: { id: string; title: string; date: string; status: string }[];
}>();
</script>

<style scoped lang="scss">
.jobs-wrapper {
	padding: 16px;

	.title {
		gap: 16px;
		margin: 0 0 16px;

		h3 {
			font-size: 13px;
			line-height: 1.25;
			color: #343a40;
			font-weight: 600;
		}
	}

	.toolbar {
		gap: 12px;
	}

	.list {
		gap: 16px;
		max-height: 280px;
		overflow-y: auto;
		overflow-x: hidden;
		overscroll-behavior: contain;
		-ms-overflow-style: none;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.list-card {
		border: 1px solid #e9ecef;
		border-radius: 5px;
		padding: 12px 16px;
		background-color: #fff;
	}

	.inner-row {
		gap: 24px;
		overflow-y: hidden;
		overflow-x: auto;
		white-space: nowrap;
		-ms-overflow-style: none;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.job-info {
		.profile-img {
			display: inline-flex;
			font-size: 16px;
			line-height: 1.25;
			color: #f08c00;
			font-weight: 600;
			width: 40px;
			height: 40px;
			border-radius: 100%;
			background-color: #fbddb3;
			flex-shrink: 0;
		}

		.meta-info {
			.job-title {
				font-size: 13px;
				line-height: 1.25;
				font-weight: 600;
				color: #000;
			}
			.sub-info {
				font-size: 12px;
				line-height: 1.25;
				color: #868e96;
				font-weight: 500;
			}
		}
	}

	.time-info {
		font-size: 12px;
		line-height: 1.25;
		color: #495057;
		font-weight: 500;

		.icon {
			font-size: 14px;
		}
	}

	.status {
		font-size: 13px;
		line-height: 1.25;
		color: #495057;
		font-weight: 500;
		background-color: #f8f9fa;
		border: 1px solid #f1f3f5;
		border-radius: 5px;
		padding: 3px 7px;
	}

	.toggle-btn {
		position: relative;
		display: inline-block;
		width: 30px;
		height: 16px;
		flex-shrink: 0;

		input {
			display: none;
		}
		span {
			position: absolute;
			inset: 0;
			background-color: #d1d5db;
			border-radius: 24px;
			transition: 0.2s;
			cursor: pointer;
		}
		span:before {
			content: "";
			position: absolute;
			width: 12px;
			height: 12px;
			border-radius: 100%;
			background-color: #fff;
			left: 2px;
			top: 2px;
			transition: 0.2s;
		}
		input:checked + span {
			background-color: #2570ca;
		}
		input:checked + span:before {
			transform: translateX(calc(100% + 2px));
		}
	}
}

@media (max-width: 575px) {
	.jobs-wrapper {
		.toolbar {
			gap: 8px;

			.btn {
				width: 100%;
			}
		}
	}
}
</style>
