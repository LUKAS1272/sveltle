<script>
    export let letter = '';
    import { text } from "../store.js";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="key" on:click={() => $text += letter}>
    {letter}
</div>

<style>
    .key {
        text-transform: uppercase;
        color: #fff;
        background-color: #222;
        width: 75px; height: 75px;
        min-width: fit-content;
        display: flex;
        justify-content: center; align-items: center;
        margin: 5px;
    }
</style>