<script lang="ts">
  import { Chart, type ChartType } from "chart.js/auto";
  import { onMount, afterUpdate } from "svelte";

  export let results;

  let chartEl;

  const chartType: ChartType = "doughnut";
  let chart = null;

  const data = {
    labels: ["Success after changing door", "Success after not changing door"],
    datasets: [
      {
        data: getData(),
      },
    ],
  };
  const config = {
    type: chartType,
    data: data,
  };

  onMount(() => {
    const ctx = chartEl.getContext("2d");
    chart = new Chart(ctx, config);
  });

  afterUpdate(() => {
    console.log(getData());
    chart.data.datasets[0].data = getData();
    chart.update();
  });

  function getData() {
    return [
      results.filter((r) => r.doorSwapWins).length,
      results.filter((r) => !r.doorSwapWins).length,
    ];
  }
</script>

<div class="text-center">
  <div class="w-2/4 inline-block">
    <canvas bind:this={chartEl} />
  </div>
</div>
