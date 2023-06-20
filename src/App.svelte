<script lang="ts">
  import {
    Appbar,
    SimulationForm,
    AppDescription,
    SimulationResultCard,
    AppFooter,
  } from "./components";
  import { SimulationService } from "./lib";

  const simulationService = new SimulationService();
  let simulationResult = null;

  function createSimulation(event) {
    simulationResult = simulationService.prepareSimulation(event.detail);
  }

  function clearSimulation(event) {
    simulationResult = null;
  }
</script>

<div class="flex flex-col h-screen justify-between">
  <Appbar />

  <main class="container mx-auto max-w-screen-lg px-4 mb-auto">
    <div class="grid grid-cols-12 gap-3">
      <section class="col-span-12 md:col-span-6">
        <SimulationForm
          on:submit={createSimulation}
          on:clear={clearSimulation}
          simulationResultPresent={simulationResult != null}
        />
      </section>
      <section class="col-span-12 md:col-span-6">
        <AppDescription />
      </section>
      {#if simulationResult}
        {#key simulationResult}
          <section class="col-span-12">
            <SimulationResultCard results={simulationResult} />
          </section>
        {/key}
      {/if}
    </div>
  </main>

  <AppFooter />
</div>
