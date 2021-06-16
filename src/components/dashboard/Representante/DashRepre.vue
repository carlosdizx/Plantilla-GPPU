<template>
	<v-app>
		<ToolbarRepre />
		<NavDrawerRepre />
    <div class="container">
      <HomeRepre />
    </div>
	</v-app>
</template>

<script>
	import ToolbarRepre from './ToolbarRepre.vue';
	import NavDrawerRepre from './NavDrawerRepre';
	import HomeRepre from './HomeRepre';
	export default {
		name: 'DashRepre',
		components: {
			ToolbarRepre,
			NavDrawerRepre,
			HomeRepre,
		},
	};
</script>

<style scoped></style>
