<script>
  import { check_outros } from 'svelte/internal';
    import { grid, currentRow } from '../store.js';

    export let x;
    export let y;
    $: letter = $grid[y][x];
</script>

<div class="letter">
    {letter}
</div>

<style>
    .letter {
        text-transform: uppercase;
        background-color: #222;
        color: #fff;
        width: 75px; height: 75px;
        display: flex;
        justify-content: center; align-items: center;
        font-size: 2em;
        margin: 3px;
    }
</style>