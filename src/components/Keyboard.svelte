<script>
    import Key from './Key.svelte';

    const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const row3 = ['enter', 'y', 'x', 'c', 'v', 'b', 'n', 'm', 'del'];
</script>

<div class="keyboard">
    <div class="row">
        {#each row1 as letter}
             <Key {letter} />
        {/each}
    </div>
    
    <div class="row">
        {#each row2 as letter}
             <Key {letter} />
        {/each}
    </div>
    
    <div class="row">
        {#each row3 as letter}
             <Key {letter} />
        {/each}
    </div>
</div>

<style>
    .row {
        display: flex;
    }

    .keyboard {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>