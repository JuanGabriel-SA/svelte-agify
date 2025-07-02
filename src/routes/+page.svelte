<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import FormAgify from '$lib/components/FormAgify.svelte';
	import Main from '$lib/components/Main.svelte';
	import Title from '$lib/components/Title.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<Main>
	<Container>
		<Title as="h1">Agify</Title>
		<Title as="h4">Estime sua idade baseada no seu primeiro nome</Title>
		<FormAgify />
		{#if data.info !== null}
			<div class="info-container">
				<Title as="h4">
					<strong>Nome: </strong>
					{data.info.name}
				</Title>
				{#if data.info.age == null}
					<p class="info-container__error-message">
						Nenhuma estimativa encontrada para o nome digitado.
					</p>
				{:else}
					<Title as="h4">
						<strong>Idade estimada:</strong>
						{data.info.age}
						anos
					</Title>
				{/if}
			</div>
		{/if}
	</Container>
</Main>

<style>
	.info-container {
		border-top: 1px solid rgb(217, 217, 217);
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.info-container__error-message {
		text-align: center;
		opacity: 0.7;
		color: rgb(175, 15, 15);
		font-weight: 500;
	}
</style>
