<template>
	<div class="container">
		<CandidateHeader
			v-if="candidate"
			:name="candidate.name"
			:title="candidate.title"
			:email="candidate.email"
			:phone="candidate.phone"
			:country="candidate.country"
			:city="candidate.city"
			:social-links="candidate.socialLinks"
			@edit="showEdit = true"
		/>
		<InfoGrid v-if="candidate" :left="leftFields" :right="rightFields" />

		<Tabs v-model="activeTab" :tabs="tabs" />

		<AssignedJobs
			v-if="candidate"
			:name="candidate.name"
			:jobs="candidate.jobs"
		/>

		<EditCandidateModal
			v-if="candidate && showEdit"
			:candidate="candidate"
			@close="showEdit = false"
			@save="handleSave"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from "vue";
import { useCandidate } from "@/composables/useCandidate";
import CandidateHeader from "@/components/CandidateHeader.vue";
import InfoGrid from "@/components/InfoGrid.vue";
import Tabs from "@/components/Tabs.vue";
import AssignedJobs from "@/components/AssignedJobs.vue";
import EditCandidateModal from "@/components/EditCandidateModal.vue";

const { candidate, save, store } = useCandidate("cand-001");

const updateTrigger = ref(0);

function formatDateForDisplay(dateString: string): string {
	if (!dateString) return "";

	try {
		let date: Date;

		if (dateString.includes("-") && dateString.split("-").length === 3) {
			date = new Date(dateString);
		} else if (dateString.includes("/")) {
			date = new Date(dateString);
		} else {
			date = new Date(dateString);
		}

		if (isNaN(date.getTime())) return dateString;

		const day = String(date.getDate()).padStart(2, "0");
		const monthNames = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		const month = monthNames[date.getMonth()];
		const year = date.getFullYear();

		return `${day} ${month} ${year}`;
	} catch {
		return dateString;
	}
}

const leftFields = computed(() => {
	updateTrigger.value;
	const fields = candidate.value?.fields ?? {};
	return [
		{ label: "Current Organization", value: fields["Current Organization"] },
		{ label: "Skills", value: fields["Skills"] },
		{
			label: "Available From",
			value: formatDateForDisplay(fields["Available From"]),
		},
		{ label: "Current Salary", value: fields["Current Salary"] },
		{ label: "Notice Period", value: fields["Notice Period"] },
		{ label: "Full Address", value: fields["Full Address"] },
		{ label: "Resume", value: fields["Resume"] },
		{ label: "Total Experience", value: fields["Total Experience"] },
	];
});

const rightFields = computed(() => {
	updateTrigger.value;
	const fields = candidate.value?.fields ?? {};
	return [
		{ label: "Summary", value: fields["Summary"] },
		{
			label: "Current Employment Status",
			value: fields["Current Employment Status"],
		},
		{
			label: "Date of Birth",
			value: formatDateForDisplay(fields["Date of Birth"]),
		},
		{ label: "Relevant Experience", value: fields["Relevant Experience"] },
		{ label: "Salary Expectation", value: fields["Salary Expectation"] },
		{ label: "Status", value: fields["Status"] },
		{ label: "Salary Type", value: fields["Salary Type"] },
		{ label: "Language Skills", value: fields["Language Skills"] },
	];
});

watchEffect(() => {
	if (store.data) {
		updateTrigger.value++;
	}
});

const activeTab = ref("Assigned Jobs");
const tabs = [
	"All Details",
	"Assigned Jobs",
	"Related Emails",
	"Candidate Questions",
	"Hotlists",
	"Related Deals",
	"Contact(s) Pitched",
];

const showEdit = ref(false);

async function handleSave(updatedFields: Record<string, any>) {
	if (!candidate.value) return;

	try {
		const updatePayload = {
			id: candidate.value.id,
			fields: {
				...candidate.value.fields,
				...updatedFields,
			},
		};

		await save(updatePayload);

		updateTrigger.value++;

		showEdit.value = false;
	} catch (error) {
		console.error("Failed to update candidate:", error);
	}
}
</script>

<style scoped lang="scss">
.grid {
	gap: 16px;
}
</style>
