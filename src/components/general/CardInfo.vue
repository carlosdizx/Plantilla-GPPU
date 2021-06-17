<template>
	<v-card class="mx-auto" :max-width="ancho">
		<v-card-text>
			<div>{{ title }}</div>
			<p class="text-h4 text--primary">
				{{ subTitle }}
			</p>
			<div class="text--primary">
				{{ description }}
			</div>
		</v-card-text>
	</v-card>
</template>

<script>
	export default {
		name: 'CardInfo',
		props: {
			ancho: null,
			title: String,
			subTitle: String,
			description: String,
		},
	};
</script>

<style scoped></style>
