<script lang="ts">
	let { errorMessage, value = $bindable(), error, ...props } = $props();
</script>

<div class="input-container">
	<input bind:value class={{ error }} {...props} />
	{#if error}
		<span>
			<p>{errorMessage}</p>
		</span>
	{/if}
</div>

<style>
	.input-container {
		display: flex;
		row-gap: 10px;
		flex-direction: column;
	}

	span {
		color: var(--color-primary);
		border: 1px solid var(--color-primary);
		padding: 0.5rem 1rem;
		border-radius: 10px;
	}

	p {
		margin: 0;
		font-size: 0.8rem;
	}

	input {
		border: none;
		outline: 1px solid rgb(217, 217, 217);
		padding: 0.5rem;
		border-radius: 10px;
		background-color: rgb(247, 247, 247);
	}

	.error {
		outline: 1px solid var(--color-primary);
		background-color: rgb(254, 218, 218);
	}
</style>
