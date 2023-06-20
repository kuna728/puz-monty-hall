<script lang="ts">
  import { Card, Heading, Tabs, TabItem } from "flowbite-svelte";
  import SimulationResultTable from "./SimulationResultTable.svelte";
  import SimulationResultChart from "./SimulationResultChart.svelte";

  export let results;
</script>

<Card size="xl">
  <Heading tag="h2">Simulation result</Heading>
  <Tabs style="underline" contentClass="p-4 rounded-lg mt-2">
    <TabItem title="List">
      <SimulationResultTable {results} />
    </TabItem>
    <TabItem title="Chart" open>
      <SimulationResultChart {results} />
    </TabItem>
  </Tabs>
</Card>
