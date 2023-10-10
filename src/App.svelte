<script>
	import Keyboard from './components/Keyboard.svelte';
	import { text, solution } from './store.js';
	import Board from './components/Board.svelte';

	import { grid, currentRow, currentCol, isSolved } from './store.js';

	function KeyClicked(event) {
		if (event.repeat || $isSolved) { return; }
		let key = event.key.toLowerCase();

		if (key.charCodeAt(0) >= 97 && key.charCodeAt(0) <= 122 && $currentCol < 5 && key.length === 1) {
			$text += key;
			$grid[$currentRow][$currentCol] = key;
			$currentCol++;
		} else if (key == "backspace" && $currentCol != 0) {
			console.log("Backspace");
			$currentCol--;
			$grid[$currentRow][$currentCol] = '';
		} else if (key == "enter" && $currentCol == 5) {
			console.log("Enter");
			if ($grid[$currentRow].join('') == $solution) { $isSolved = true; }
			$currentRow++;
			$currentCol = 0;
		}
	}
</script>



{#if false}
	<p>Input: {$text}</p>
{/if}

<main>
	<nav>Sveltle</nav>
	<Board />
	<Keyboard />
</main>

<svelte:window on:keydown={KeyClicked} />

<style>
	nav {
		width: 100%;
		font-size: 2.5em;
		font-weight: 900;
		color: #fff;
		background-color: #111;
		text-align: center;
		padding: 25px 0;
	}

	main {
		height: fit-content;
	}
</style>