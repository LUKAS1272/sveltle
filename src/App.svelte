<script>
	import Keyboard from './components/Keyboard.svelte';
	let text = '';

	function Aaa(event) {
		if (event.repeat) { return; }

		if (event.keyCode >= 65 && event.keyCode <= 90) {
			text += event.key;
		} else if (event.key === "Shift") {
			console.log("Shift");
		} else if (event.key === "Enter") {
			console.log("Enter");
		}
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>{text}</p>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<Keyboard />

<svelte:window on:keydown={Aaa} />

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>