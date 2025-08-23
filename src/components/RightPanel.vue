<template>
	<div class="panel-container">
		<ul class="icons-list d-flex">
			<li
				v-for="icon in panelIcons"
				:key="icon"
				class="icon-circle items-center justify-center"
			>
				<i :class="[icon, 'icon']"></i>
			</li>
		</ul>
		<div class="tabs d-flex items-center">
			<button
				v-for="tab in tabs"
				:key="tab"
				:class="['tab', { active: tab === active }]"
				@click="active = tab"
			>
				{{ tab }}
			</button>
		</div>
		<div class="notes-list d-flex flex-column">
			<div v-for="note in notes" :key="note.id" class="note card">
				<div class="row d-flex">
					<div class="badge-text d-flex items-center">
						<div class="icon-circle items-center justify-center">
							<i class="bx bxs-note icon"></i>
						</div>
						Note
					</div>
					<div class="badge">To Do</div>
				</div>
				<p class="note-desc">{{ note.text }}</p>
				<a href="#" class="blue-link">1 Association(s)</a>
				<div class="note-footer d-flex items-center justify-between">
					<div class="sub-info d-flex items-center gap-1">
						<i class="bx bx-user-circle icon"></i>
						{{ note.author }}
					</div>
					<div class="sub-info d-flex items-center gap-1">
						<i class="bx bx-time-five icon"></i>
						{{ note.date }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useCandidateStore } from "@/stores/candidate";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";

const panelIcons = [
	"bx bxs-note",
	"bx bxs-phone",
	"bx bxs-check-circle",
	"bx bx-calendar-event",
];
const tabs = ["All", "Notes & Calls", "Tasks", "Meeting", "Files"];
const active = ref("All");

const store = useCandidateStore();
const { data } = storeToRefs(store);
const notes = computed(() => data.value?.notes ?? []);
</script>

<style scoped lang="scss">
.tabs {
	overflow-x: auto;
	overflow-y: hidden;
	gap: 36px;
	padding: 16px 24px;
	background-color: #f1f3f5;
	white-space: nowrap;
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}
	.tab {
		font-size: 13px;
		line-height: 1.25;
		font-weight: 600;
		color: #343a40;
		border: none;
		background-color: transparent;
		padding: 0;
		border-radius: 0;
		outline: none;
		box-shadow: none;
		cursor: pointer;
		transition: all 0.3s;

		&.active {
			color: #2570ca;
		}
	}
}
.icons-list {
	padding: 20px 16px;
	background-color: #fff;
	gap: 24px;

	.icon-circle {
		width: 40px;
		height: 40px;
		display: inline-flex;
		border-radius: 100%;
		background-color: #e6f1ff;
	}

	.icon {
		font-size: 18px;
		line-height: 1;
		color: #2570ca;
	}
}
.notes-list {
	padding: 24px 16px;
	gap: 12px;

	.note {
		padding: 16px 16px 20px;
	}

	.row {
		gap: 10px;
	}

	.badge-text {
		font-size: 13px;
		line-height: 1.25;
		color: #2570ca;
		font-weight: 600;
		gap: 8px;

		.icon-circle {
			display: inline-flex;
			width: 20px;
			height: 20px;
			border-radius: 100%;
			background-color: #e6f1ff;

			.icon {
				font-size: 10px;
				color: #2570ca;
			}
		}
	}

	.badge {
		font-size: 12px;
		line-height: 1.15;
		color: #343a40;
		padding: 3px 6px;
		background-color: #f1f3f5;
		border-radius: 5px;
	}

	.note-desc {
		font-size: 13px;
		line-height: 1.5;
		color: #343a40;
		margin: 12px 0;
	}

	.blue-link {
		font-size: 13px;
		line-height: 1.15;
		font-weight: 600;
		color: #2570ca;
		display: inline-block;
		margin: 0 0 14px;
	}

	.note-footer {
		font-size: 13px;
		line-height: 1.25;
		color: #000;

		.icon {
			font-size: 14px;
			color: #495057;
		}
	}
}
@media (max-width: 1200px) {
	.panel-container {
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		-ms-overflow-style: none;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}
	}
}
</style>
