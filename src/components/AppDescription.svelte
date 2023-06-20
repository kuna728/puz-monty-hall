<script lang="ts">
  import { Button, Card, Heading, P } from "flowbite-svelte";
</script>

<Card size="xl">
  <Heading tag="h2">Monty Hall problem</Heading>
  <P class="mt-4 mb-5" weight="light" color="text-gray-800">
    Suppose you're on a game show, and you're given the choice of three doors:
    Behind one door is a car; behind the others, goats. You pick a door, say No.
    1, and the host, who knows what's behind the doors, opens another door, say
    No. 3, which has a goat. He then says to you, "Do you want to pick door No.
    2?" Is it to your advantage to switch your choice?
  </P>
  <Button
    color="blue"
    href="https://en.wikipedia.org/wiki/Monty_Hall_problem"
    target="”_blank”"
  >
    Learn more
  </Button>
</Card>
