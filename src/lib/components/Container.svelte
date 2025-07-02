<script lang="ts">
	let { children, ...props } = $props();
</script>

<section class="container" {...props}>
	<div class="content">
		{@render children()}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		background-color: white;
		min-width: 400px;
		min-height: 400px;
		max-width: 400px;
		padding: 2rem;
		border-radius: 10px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.content {
		display: flex;
		flex-direction: column;
		border: 1px solid rgb(217, 217, 217);
		border-radius: 10px;
		height: 100%;
		flex: 1;
	}
</style>
