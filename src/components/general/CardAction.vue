<template>
	<v-card class="mx-auto mt-12 mb-5" :max-width="ancho" outlined>
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
				<v-icon size="70" dark>{{ icon }}</v-icon>
			</v-avatar>
		</v-list-item>
		<v-card-actions>
			<v-btn @click="buttonAction" :color="color" outlined rounded>
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
		  ancho: null,
			title: String,
			subTitle: String,
			description: String,
			color: String,
			icon: String,
			buttonText: String,
			buttonAction: Function,
		},
	};
</script>

<style scoped></style>
