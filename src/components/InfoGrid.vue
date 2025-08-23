<template>
	<div class="info bg-white border-bottom">
		<div class="row d-flex flex-wrap">
			<div class="col">
				<div class="d-flex flex-column gap-1">
					<div
						v-for="item in left"
						:key="item.label"
						class="inner-row d-flex gap-2"
					>
						<span class="label">{{ item.label }}</span>
						<span class="value">{{ item.value || "-" }}</span>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="d-flex flex-column gap-1">
					<div
						v-for="item in right"
						:key="item.label"
						class="inner-row d-flex gap-2"
					>
						<span class="label">{{ item.label }}</span>
						<span class="value">{{ item.value || "-" }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	left: { label: string; value?: string }[];
	right: { label: string; value?: string }[];
}>();
</script>

<style scoped lang="scss">
.info {
	padding: 10px 16px;

	.row {
		row-gap: 4px;
		margin: 0 -6px;

		.col {
			width: 50%;
			flex: 0 0 auto;
			padding: 0 6px;
		}
	}

	.inner-row {
		font-size: 13px;
		line-height: 1.55;
		padding: 6px 0;
		margin: 0 -8px;

		* {
			width: 50%;
			flex: 0 0 auto;
			padding: 0 8px;
		}

		.label {
			color: #343a40;
			font-weight: 600;
		}

		.value {
			color: #495057;
			font-weight: 500;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
}
@media (max-width: 991px) {
	.info {
		.row {
			.col {
				width: 100%;
			}
		}
	}
}
@media (max-width: 768px) {
	.info {
		.inner-row {
			padding: 2px 0;
		}
	}
}
</style>
