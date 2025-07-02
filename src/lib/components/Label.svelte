<script lang="ts">
	let { children, ...props } = $props();
</script>

<label {...props}>
	{@render children()}
</label>

<style>
	label {
		font-size: 0.9rem;
		margin-left: 5px;
	}
</style>
