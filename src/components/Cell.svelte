<script>
  import { check_outros } from 'svelte/internal';
    import { grid, currentRow, solution } from '../store.js';

    export let x;
    export let y;
    $: letter = $grid[y][x];
</script>

{#if $currentRow > y}
    {#if $solution[x] === letter}
        <div class="letter no-border" style="background-color: var(--right);">{letter}</div>
    {:else if $solution.includes(letter)}
        <div class="letter no-border" style="background-color: var(--different);">{letter}</div> 
    {:else}
        <div class="letter no-border" style="background-color: var(--bg);">{letter}</div>
    {/if}
{:else}
    <div class="letter">{letter}</div>
{/if}

<style>
    .letter {
        text-transform: uppercase;
        background-color: var(--cellsBg);
        color: var(--text);
        width: 70px; height: 70px;
        display: flex;
        justify-content: center; align-items: center;
        font-size: 2em;
        margin: 3px;
        border: 2px solid var(--border);
        box-sizing: border-box;
        user-select: none;
    }

    .no-border {
        border: none;
    }
</style>