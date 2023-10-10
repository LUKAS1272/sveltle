<script>
	import Keyboard from './components/Keyboard.svelte';
	import { text, solution } from './store.js';
	import Board from './components/Board.svelte';

	import { grid, currentRow, currentCol, isSolved } from './store.js';

	function KeyClicked(event) {
		if (event.repeat || $isSolved) { return; }

		if (event.keyCode >= 65 && event.keyCode <= 90 && $currentCol <= 4) {
			$text += event.key;
			$grid[$currentRow][$currentCol] = event.key;
			$currentCol++;
		} else if (event.key === "Backspace" && $currentCol != 0) {
			console.log("Backspace");
			$currentCol--;
			$grid[$currentRow][$currentCol] = '';
		} else if (event.key === "Enter" && $currentCol == 5) {
			console.log("Enter");
			if ($grid[$currentRow].join('') == $solution) { $isSolved = true; }
			$currentRow++;
			$currentCol = 0;
		}
	}
</script>

<p>Input: {$text}</p>
<Board />
<Keyboard />

<svelte:window on:keydown={KeyClicked} />