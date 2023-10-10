<script>
    import Cell from './Cell.svelte';
    import { grid } from '../store.js';
</script>

<div class="board">
    {#each $grid as row, y}
        <div class="row">
            {#each row as cell, x}
                <div class="cell"><Cell {x} {y} /></div>
            {/each}
        </div>
    {/each}
</div>

<style>
    .row {
        display: flex;
        justify-content: center;
    }

    .board {
        margin: 75px 0 30px;
    }
</style>