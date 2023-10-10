<script>
    export let letter = '';
    import { grid, currentRow, currentCol, isSolved, text, solution } from '../store.js';

    function KeyClicked(key) {
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

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="key" on:click={KeyClicked(letter.toLowerCase())}>
    {letter}
</div>

<style>
    .key {
        text-transform: uppercase;
        color: var(--text);
        background-color: #222;
        min-width: fit-content;
        display: flex;
        justify-content: center; align-items: center;
        margin: 5px;
        font-size: 1.3em;
        padding: 10px 20px;
        border-radius: 5px;
        font-family: monospace;
        user-select: none;
        cursor: pointer;
    }
</style>