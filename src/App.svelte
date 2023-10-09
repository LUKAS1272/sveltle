<script>
	import Keyboard from './components/Keyboard.svelte';
	import { text } from './store.js';

	function Aaa(event) {
		if (event.repeat) { return; }

		if (event.keyCode >= 65 && event.keyCode <= 90) {
			$text += event.key;
		} else if (event.key === "Shift") {
			console.log("Shift");
		} else if (event.key === "Enter") {
			console.log("Enter");
		}
	}
</script>

<p>Input: {$text}</p>
<Keyboard />

<svelte:window on:keydown={Aaa} />