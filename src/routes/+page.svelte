<script>
	import authStore from '../stores/authStore';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Welcome!" />
</svelte:head>

<section>
	<div class="text-column">
		<h1>Main Feed</h1>
		{#if $authStore.isLoggedIn}
			<p>You are signed in as {$authStore.user.email}</p>
		{/if}
	</div>
</section>

<style>
</style>
