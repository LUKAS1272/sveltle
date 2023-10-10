<script>
	import Keyboard from './components/Keyboard.svelte';
	import { text } from './store.js';
	import Board from './components/Board.svelte';

	import { grid, currentRow, currentCol, isSolved } from './store.js';
	import { check } from './components/Cell.svelte';

	function KeyClicked(event) {
		if (event.repeat || $isSolved) { return; }

		if (event.keyCode >= 65 && event.keyCode <= 90 && $currentCol <= 4) {
			$text += event.key;
			$grid[$currentRow][$currentCol] = event.key;
			$currentCol++;
		} else if (event.key === "Backspace") {
			console.log("Backspace");
			$currentCol--;
			$grid[$currentRow][$currentCol] = '';
		} else if (event.key === "Enter" && $currentCol == 5) {
			console.log("Enter");
			$currentRow++;
			$currentCol = 0;
			check();
		}
	}
</script>

<p>Input: {$text}</p>
<Board />
<Keyboard />

<svelte:window on:keydown={KeyClicked} />