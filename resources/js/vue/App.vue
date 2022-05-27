<template>
	<div>
		<h1 class="text-white">Vue 3 App</h1>
		<Hello />
	</div>
</template>


<script>
import Hello from "./components/hello.vue";

export default {
	components: {
		Hello,
	},
	setup() {},
};
</script>
