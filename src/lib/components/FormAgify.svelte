<script lang="ts">
	import Input from './Input.svelte';
	import Label from './Label.svelte';
	import { goto } from '$app/navigation';
	let name: string = '';
	let error: boolean = false;
	let debounceTimeout: ReturnType<typeof setTimeout>;

	const changeName = (value: string) => {
		clearTimeout(debounceTimeout);
		if (!isNameValid()) {
			error = true;
		} else {
			error = false;
			debounceTimeout = setTimeout(() => {
				goto(`/?name=${encodeURIComponent(value)}`);
			}, 1000);
		}
	};

	const isNameValid = () => {
		return name !== '';
	};

	$: changeName(name);
</script>

<div class="container">
	<div class="input-field">
		<Label htmlFor="name">Digite um nome:</Label>
		<Input
			{error}
			errorMessage="Digite um nome válido."
			bind:value={name}
			name="name"
			placeholder="Gabriel..."
		/>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		row-gap: 20px;
		padding: 1.5rem;
	}

	.input-field {
		display: flex;
		flex-direction: column;
		row-gap: 10px;
	}
</style>
