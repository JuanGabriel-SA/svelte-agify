<script>
	let { children, ...props } = $props();
</script>

<main class="main-component" {...props}>
	{@render children()}
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		background: linear-gradient(90deg, var(--color-background), black);
	}
</style>
