<template>
	<v-card class="mx-auto pt-6 mt-12" max-width="344" outlined>
		<v-list-item three-line>
			<v-list-item-content>
				<div class="text-overline mb-4">
					{{ title }}
				</div>
				<v-list-item-title class="text-h6 mb-1">
					{{ subTitle }}
				</v-list-item-title>
				<v-list-item-subtitle>
					{{ description }}
				</v-list-item-subtitle>
			</v-list-item-content>
			<v-avatar size="80" :color="color">
				<v-icon size="80" dark>{{ icon }}</v-icon>
			</v-avatar>
		</v-list-item>
		<v-card-actions>
			<v-btn :color="color" outlined rounded>
				{{ buttonText }}
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	export default {
		name: 'CardAction',
		data: () => ({}),
		props: {
			title: String,
			subTitle: String,
			description: String,
			color: String,
			icon: String,
			buttonText: String,
		},
	};
</script>

<style scoped></style>
