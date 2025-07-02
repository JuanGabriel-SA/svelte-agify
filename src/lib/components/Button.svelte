<script lang="ts">
	let { children, class: className = '', ...props } = $props();
</script>

<button class={`btn ${className}`} {...props}>
	{@render children()}
</button>

<style>
	.btn {
		padding: 0.6rem 1.5rem;
		font-size: 1rem;
		font-weight: 600;
		border: none;
		border-radius: 8px;
		background: linear-gradient(90deg, var(--color-secondary), var(--color-primary));
		color: white;
		cursor: pointer;
		transition: 0.2s ease;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.btn:hover {
		opacity: 0.8;
	}

	.btn:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
</style>
