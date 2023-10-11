<script>
    export let didWin = false;
    import { solution } from '../store.js';
</script>

<main>
    {#if didWin === true}
        You won!
    {:else if didWin === false}
        <p>You lost, the solution was</p>
        <p style="font-size: 1.5em;">{$solution.toUpperCase()}</p>
    {/if}
</main>

<style>
    main {
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.75);
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 3em;
        font-weight: 1000;
    }

    p {
        margin: 20px 0;
        text-align: center;
    }
</style>