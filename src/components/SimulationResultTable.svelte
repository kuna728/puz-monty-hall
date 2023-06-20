<script>
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte";
  export let results;

  $: first10Results = results.slice(0, 10);
</script>

<Table>
  <TableHead>
    <TableHeadCell>Experiment no.</TableHeadCell>
    <TableHeadCell>Changing door wins?</TableHeadCell>
  </TableHead>
  <TableBody>
    {#each first10Results as result, i}
      <TableBodyRow>
        <TableBodyCell>{i + 1}</TableBodyCell>
        <TableBodyCell>{result.doorSwapWins}</TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</Table>
{#if results.length > 10}
  <div class="text-gray-500 italic mt-2 px-4 text-md">
    Displaying only first 10 rows
  </div>
{/if}
