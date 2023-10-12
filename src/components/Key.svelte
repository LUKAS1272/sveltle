<script>
    export let letter = '';
    import { grid, currentRow, currentCol, isSolved } from '../store.js';
    import { solution, words } from '../wordStore.js';
    import { isAvailable } from '../keyStore.js';

    function KeyClicked(key) {
		if (key.charCodeAt(0) >= 97 && key.charCodeAt(0) <= 122 && $currentCol < 5 && key.length === 1) {
			$grid[$currentRow][$currentCol] = key;
			$currentCol++;
		} else if (key == "del" && $currentCol != 0) {
			$currentCol--;
			$grid[$currentRow][$currentCol] = '';
		} else if (key == "enter") {
            if ($currentCol === 5) {
                if (words.includes($grid[$currentRow].join(''))) {
                    for (let i = 0; i < 5; i++) {
						if ($solution[i] === $grid[$currentRow][i]) {
							$isAvailable[$grid[$currentRow][i]] = 1;
						} else if ($solution.includes($grid[$currentRow][i]) && $isAvailable[$grid[$currentRow][i]] < 0) {
							$isAvailable[$grid[$currentRow][i]] = 0;
						} else if ($isAvailable[$grid[$currentRow][i]] < -1) {
							$isAvailable[$grid[$currentRow][i]] = -1;
						}
					}

                    if ($grid[$currentRow].join('') == $solution) { $isSolved = true; }
                    $currentRow++;
                    $currentCol = 0;
                } else {
                    console.log("Word not valid");
                }
            } else {
                console.log("Word not long enough");
            }
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