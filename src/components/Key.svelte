<script>
    export let letter = '';
    import { grid, currentRow, currentCol, isSolved } from '../store.js';
    import { solution } from '../wordStore.js';
    import { isAvailable } from '../keyStore.js';

    function KeyClicked(key) {
		if (key.charCodeAt(0) >= 97 && key.charCodeAt(0) <= 122 && $currentCol < 5 && key.length === 1) {
			$grid[$currentRow][$currentCol] = key;
			$currentCol++;
		} else if (key == "del" && $currentCol != 0) {
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

{#if $isAvailable[letter] === -2}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="key notKnown" on:click={KeyClicked(letter.toLowerCase())}>{letter}</div>
{:else if $isAvailable[letter] === -1}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="key notAvailable" on:click={KeyClicked(letter.toLowerCase())}>{letter}</div>
{:else if $isAvailable[letter] === 0}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="key differentPlace" on:click={KeyClicked(letter.toLowerCase())}>{letter}</div>
{:else if $isAvailable[letter] === 1}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="key rightPlace" on:click={KeyClicked(letter.toLowerCase())}>{letter}</div>
{/if}

<style>
    .key {
        text-transform: uppercase;
        color: var(--text);
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

    .notKnown { background-color: var(--cellsBg); }
    .notAvailable { background-color: var(--bg); }
    .differentPlace { background-color: var(--different); }
    .rightPlace { background-color: var(--right); }
</style>