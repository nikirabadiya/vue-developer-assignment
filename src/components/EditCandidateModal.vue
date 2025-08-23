<template>
	<div
		class="overlay d-flex items-center justify-center"
		@click.self="$emit('close')"
	>
		<div class="dialog card">
			<div class="title-block d-flex items-center justify-between">
				<h3>Edit Candidate Details</h3>
				<button
					class="icon-btn cursor-pointer"
					@click="$emit('close')"
					aria-label="Close"
				>
					✕
				</button>
			</div>

			<form @submit.prevent="submit">
				<div class="form-wrap d-flex flex-wrap">
					<div class="form-group d-flex flex-column">
						<label>Current Organization</label>
						<input v-model="form['Current Organization']" type="text" />
					</div>

					<div class="form-group d-flex flex-column">
						<label>Skills</label>
						<input v-model="form['Skills']" type="text" />
					</div>

					<div class="form-group d-flex flex-column">
						<label>Available From</label>
						<input v-model="form['Available From']" type="date" />
					</div>

					<div class="form-group d-flex flex-column">
						<label>Current Salary</label>
						<input v-model="form['Current Salary']" type="text" />
					</div>

					<div class="form-group d-flex flex-column">
						<label>Notice Period</label>
						<select v-model="form['Notice Period']">
							<option value="">Select</option>
							<option
								v-for="option in noticePeriodOptions"
								:key="option"
								:value="option"
							>
								{{ option }}
							</option>
						</select>
					</div>

					<div class="form-group d-flex flex-column">
						<label>Full Address</label>
						<input v-model="form['Full Address']" type="text" />
					</div>

					<div class="form-group d-flex flex-column">
						<label>Resume</label>
						<input v-model="form['Resume']" type="text" />
					</div>

					<div class="form-group d-flex flex-column">
						<label>Total Experience</label>
						<input v-model="form['Total Experience']" type="text" />
					</div>

					<div class="form-group form-group-full d-flex flex-column">
						<label>Summary</label>
						<textarea v-model="form['Summary']" rows="3"></textarea>
					</div>

					<div class="form-group d-flex flex-column">
						<label>Current Employment Status</label>
						<select v-model="form['Current Employment Status']">
							<option value="">Select</option>
							<option
								v-for="option in employmentStatusOptions"
								:key="option"
								:value="option"
							>
								{{ option }}
							</option>
						</select>
					</div>

					<div class="form-group d-flex flex-column">
						<label>Date of Birth</label>
						<input v-model="form['Date of Birth']" type="date" />
					</div>

					<div class="form-group d-flex flex-column">
						<label>Relevant Experience</label>
						<input v-model="form['Relevant Experience']" type="text" />
					</div>

					<div class="form-group d-flex flex-column">
						<label>Salary Expectation</label>
						<input v-model="form['Salary Expectation']" type="text" />
					</div>

					<div class="form-group d-flex flex-column">
						<label>Status</label>
						<select v-model="form['Status']">
							<option value="">Select</option>
							<option
								v-for="option in statusOptions"
								:key="option"
								:value="option"
							>
								{{ option }}
							</option>
						</select>
					</div>

					<div class="form-group d-flex flex-column">
						<label>Salary Type</label>
						<select v-model="form['Salary Type']">
							<option value="">Select</option>
							<option
								v-for="option in salaryTypeOptions"
								:key="option"
								:value="option"
							>
								{{ option }}
							</option>
						</select>
					</div>

					<div class="form-group form-group-full d-flex flex-column">
						<label>Language Skills</label>
						<input v-model="form['Language Skills']" type="text" />
					</div>
				</div>

				<div class="form-actions d-flex justify-end">
					<button type="button" class="btn btn-border" @click="$emit('close')">
						Cancel
					</button>
					<button type="submit" class="btn btn-fill">Save</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, watch, nextTick, ref, type Ref } from "vue";

type Candidate = {
	fields?: Record<string, any>;
} & Record<string, any>;

const props = defineProps<{
	candidate: Candidate;
}>();

const emit = defineEmits<{
	(e: "close"): void;
	(e: "save", payload: Record<string, any>): void;
}>();

const noticePeriodOptions = ref<string[]>([
	"Immediate",
	"15 Days",
	"30 Days",
	"60 Days",
	"90 Days",
]);
const employmentStatusOptions = ref<string[]>([
	"Employed",
	"Unemployed",
	"Freelancer",
	"Student",
]);
const statusOptions = ref<string[]>(["Active", "Inactive", "On Hold"]);
const salaryTypeOptions = ref<string[]>(["Monthly", "Annual", "Hourly"]);

function ensureOptionExists(optionsRef: Ref<string[]>, value: unknown) {
	if (typeof value !== "string" || !value) return;
	if (!optionsRef.value.includes(value)) {
		optionsRef.value = [value, ...optionsRef.value];
	}
}

function formatDateForInput(dateString: string): string {
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

		if (isNaN(date.getTime())) return "";

		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const day = String(date.getDate()).padStart(2, "0");

		return `${year}-${month}-${day}`;
	} catch {
		return "";
	}
}

const form = reactive<Record<string, any>>({
	"Current Organization": "",
	Skills: "",
	"Available From": "",
	"Current Salary": "",
	"Notice Period": "",
	"Full Address": "",
	Resume: "",
	"Total Experience": "",
	Summary: "",
	"Current Employment Status": "",
	"Date of Birth": "",
	"Relevant Experience": "",
	"Salary Expectation": "",
	Status: "",
	"Salary Type": "",
	"Language Skills": [],
});

function initializeForm() {
	const fields = props.candidate?.fields || {};
	Object.keys(form).forEach((key) => {
		let value = fields[key] ?? props.candidate[key] ?? "";
		if ((key === "Available From" || key === "Date of Birth") && value) {
			value = formatDateForInput(value);
		}
		form[key] = value;
	});

	ensureOptionExists(statusOptions, form["Status"]);
	ensureOptionExists(salaryTypeOptions, form["Salary Type"]);
	ensureOptionExists(noticePeriodOptions, form["Notice Period"]);
	ensureOptionExists(
		employmentStatusOptions,
		form["Current Employment Status"]
	);
}

watch(
	() => props.candidate,
	() => {
		nextTick(() => {
			initializeForm();
		});
	},
	{ immediate: true, deep: true }
);

function submit() {
	const updatedFields = { ...form };
	emit("save", updatedFields);
}
</script>

<style scoped>
.overlay {
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 999;
}
.dialog {
	background-color: #fff;
	border-radius: 12px;
	width: 90%;
	max-width: 900px;
	max-height: 90%;
	padding: 20px 24px 24px;
	overflow-y: auto;
	overflow-x: hidden;
	overscroll-behavior: contain;
	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}
}
.title-block {
	margin: 0 0 20px;

	h3 {
		font-size: 20px;
		line-height: 1.25;
		color: #343a40;
		font-weight: 600;
	}

	.icon-btn {
		font-size: 18px;
		border: 0;
		padding: 8px;
		background-color: transparent;
	}
}
.form-wrap {
	row-gap: 16px;
	margin: 0 -8px;

	.form-group {
		gap: 4px;
		flex: 0 0 auto;
		width: 50%;
		padding: 0 8px;
	}
	.form-group-full {
		width: 100%;
	}
	label {
		font-size: 12px;
		line-height: 1.3;
		color: #343a40;
	}
}
.form-actions {
	gap: 10px;
	margin-top: 20px;
}
@media (max-width: 767px) {
	.form-group {
		width: 100%;
	}
}
</style>
