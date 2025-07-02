<script lang="ts">
	let { children, as, ...props } = $props();
</script>

<svelte:element this={as} class={'title'} {...props}>
	{@render children()}
</svelte:element>

<style>
	.title {
		font-weight: 700;
		color: rgb(62, 62, 62);
		margin-top: 0.5rem;
		text-align: center;
	}

	h1.title {
		font-size: 2.5rem;
		background: linear-gradient(90deg, var(--color-background), var(--color-primary));
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	h2.title {
		font-size: 2rem;
	}

	h3.title {
		font-size: 1.5rem;
	}

	h4.title {
		font-size: 1.25rem;
	}
</style>
