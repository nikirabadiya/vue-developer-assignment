<template>
	<div class="card-header border-bottom bg-white">
		<div
			class="top-header border-bottom d-flex flex-wrap items-start justify-between"
		>
			<div class="details-wrap d-flex flex-wrap items-center">
				<div class="profile-avatar items-center justify-center">
					<img src="@/assets/images/avatar.svg" alt="Profile Avatar" />
				</div>
				<div class="meta">
					<div class="title-bar d-flex flex-wrap items-center">
						<h6>{{ name }}</h6>
						<ul class="social-links d-flex items-center gap-1">
							<li v-for="link in socialLinks" :key="link.name" class="d-flex">
								<a nohref class="d-flex" :title="link.name">
									<img :src="link.src" :alt="link.name" />
								</a>
							</li>
						</ul>
					</div>
					<div class="sub-info d-flex flex-wrap">
						<span>{{ title }}</span>
						<span>{{ country }}</span>
						<span>{{ city }}</span>
					</div>
				</div>
			</div>
			<div class="right-wrap d-flex flex-wrap items-center">
				<button class="btn contact-link">Contact Linked</button>
				<button class="btn btn-border btn-icon">
					<i class="bx bxs-star"></i>
				</button>
				<button class="btn btn-border btn-icon">
					<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="m17.55,6.17c-.35-.23-.8-.22-1.14.02-.34.25-.49.68-.37,1.08.27.95.75,3.7-.23,4.99-.38.5-.97.74-1.81.74-.6,0-1.4-.16-1.8-.91-.47-.88-.23-2.24.64-3.54,1.03-1.54,1.13-3.2.29-4.68-.6-1.05-1.47-1.65-1.56-1.71-.24-.16-.54-.21-.81-.13-.28.07-.51.26-.64.52-.58,1.17-1.86,2.22-3.09,3.23-.63.52-1.22,1-1.73,1.51-2.27,2.27-2.29,5.57-2.29,5.71,0,4.96,4.04,9,9,9s9-4.04,9-9c0-.19-.04-4.56-3.45-6.83Z"
						></path>
					</svg>
				</button>
				<button class="btn btn-border btn-icon" @click="$emit('edit')">
					<i class="bx bxs-pencil"></i>
				</button>
				<button class="btn btn-border btn-icon">
					<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M12 10a2 2 0 1 0 0 4 2 2 0 1 0 0-4M12 16a2 2 0 1 0 0 4 2 2 0 1 0 0-4M12 4a2 2 0 1 0 0 4 2 2 0 1 0 0-4"
						></path>
					</svg>
				</button>
			</div>
		</div>
		<div class="bottom-header d-flex flex-wrap items-center justify-between">
			<div class="contact-links d-flex flex-wrap items-center">
				<a :href="`mailto:${email}`" class="d-flex items-center link gap-2"
					><i class="bx bx-envelope link-icon"></i> {{ email }}</a
				>
				<a :href="`tel:${phone}`" class="d-flex items-center link gap-2"
					><i class="bx bx-phone link-icon"></i> {{ phone }}</a
				>
			</div>
			<div class="right-block d-flex flex-wrap items-center">
				<div class="sub-info d-flex item-center gap-2">
					<i class="bx bx-user-circle icon"></i>
					Phyllis Yang
				</div>
				<div class="sub-info d-flex item-center gap-2">
					<i class="bx bx-history icon"></i>
					Jul 14, 2023, 4:04 pm
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	name: string;
	title: string;
	email: string;
	phone: string;
	country: string;
	city: string;
	socialLinks: { name: string; src: string }[];
}>();
defineEmits(["edit"]);
</script>

<style scoped lang="scss">
.top-header {
	gap: 16px;
	padding: 16px;

	.details-wrap {
		gap: 8px;
		flex-grow: 1;
	}

	.profile-avatar {
		display: inline-flex;
		width: 64px;
		height: 64px;
		border-radius: 100%;
		background-color: #cce8dc;
		flex-shrink: 0;
	}

	.meta {
		.title-bar {
			gap: 8px;
			margin: 0 0 8px;
		}

		h6 {
			font-size: 18px;
			line-height: 1.25;
			font-weight: 600;
			color: #343a40;
		}

		.sub-info {
			font-size: 13px;
			line-height: 1.25;
			color: #495057;
			gap: 24px;
		}
	}
	.right-wrap {
		gap: 10px;
		flex-shrink: 0;

		.contact-link {
			padding: 6px 9px;
			font-weight: 500;
			color: #e03131 !important;
			border-color: #f6c1c1 !important;
			background-color: #fceaea !important;
		}
	}
}
.bottom-header {
	padding: 16px;
	gap: 16px;

	.contact-links,
	.right-block {
		gap: 20px;
		word-break: break-all;
	}

	.link,
	.sub-info {
		font-size: 13px;
		line-height: 1.55;
		font-weight: 600;
	}

	.link-icon,
	.sub-info .icon {
		font-size: 18px;
		line-height: 1;
		color: #656e7a;
	}

	.sub-info {
		color: #343a40;
	}
}

@media (max-width: 575px) {
	.top-header {
		.profile-avatar {
			width: 40px;
			height: 40px;

			img {
				width: 16px;
			}
		}
		.meta {
			.title-bar {
				margin: 0 0 4px;
			}
			h6 {
				font-size: 16px;
			}
			.sub-info {
				font-size: 12px;
				gap: 10px;
			}
		}
		.right-wrap {
			justify-content: flex-end;
			width: 100%;
			gap: 8px;
		}
	}
	.bottom-header {
		.contact-links,
		.right-block {
			gap: 10px;
		}
	}
}
</style>
