<script>
  import { check_outros } from 'svelte/internal';
    import { grid, currentRow, solution } from '../store.js';

    export let x;
    export let y;
    $: letter = $grid[y][x];
</script>

{#if $currentRow > y}
    {#if $solution[x] === letter}
        <div class="letter" style="background-color: var(--right);">{letter}</div>
    {:else if $solution.includes(letter)}
        <div class="letter" style="background-color: var(--different);">{letter}</div> 
    {:else}
        <div class="letter" style="background-color: var(--bg);">{letter}</div>
    {/if}
{:else}
    <div class="letter">{letter}</div>
{/if}

<style>
    .letter {
        text-transform: uppercase;
        background-color: #333;
        color: #fff;
        width: 75px; height: 75px;
        display: flex;
        justify-content: center; align-items: center;
        font-size: 2em;
        margin: 3px;
    }

    :root {
        --bg: #111;
        --right: #2e8300;
        --different: #dd8100;
    }
</style>