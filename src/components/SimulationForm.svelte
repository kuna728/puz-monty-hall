<script lang="ts">
  import { Card, Range, Label, Button, Heading } from "flowbite-svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let simulationResultPresent;

  let numberOfDoors = 50;
  let numberOfExperiments = 100;

  function submit() {
    dispatch("submit", {
      numberOfDoors,
      numberOfExperiments,
    });
  }

  function clear() {
    dispatch("clear", {});
  }
</script>

<Card size="xl">
  <Heading tag="h2" class="mb-5">Simulation form</Heading>
  <div class="mb-3">
    <Label>Number of doors</Label>
    <Range
      id="range-steps"
      min="3"
      max="100"
      bind:value={numberOfDoors}
      step="1"
    />
    <p>Value: {numberOfDoors}</p>
  </div>
  <div class="mb-3">
    <Label>Number of experiments</Label>
    <Range
      id="range-steps"
      min="1"
      max="1000"
      bind:value={numberOfExperiments}
      step="1"
    />
    <p>Value: {numberOfExperiments}</p>
  </div>
  <div class="grid grid-cols-3 gap-2">
    <div class="col-span-3 md:col-span-2">
      <Button on:click={submit} color="green" class="w-full">Simulate</Button>
    </div>
    <div class="col-span-3 md:col-span-1">
      <Button
        disabled={!simulationResultPresent}
        on:click={clear}
        color="red"
        class="w-full">Clear</Button
      >
    </div>
  </div>
</Card>
