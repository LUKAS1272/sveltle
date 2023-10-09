<script>
    export let letter = '';
</script>

<div class="key">
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