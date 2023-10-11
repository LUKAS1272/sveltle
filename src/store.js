import { writable } from "svelte/store";

export const text = writable('');

export const solution = writable('ratio');

export let grid = writable([]);
export let currentRow = writable(0);
export let currentCol = writable(0);

function SetupGrid(rows, columns) {
    let grid = [];

    for (let y = 0; y < 6; y++) {
        grid.push([]);
        for (let x = 0; x < 5; x++) {
            grid[y][x] = '';

        }
    }

    return grid;
}

grid = writable(SetupGrid(6,5));


export let isSolved = writable(false);