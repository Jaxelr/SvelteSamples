<script>
  import { onMount } from "svelte";
  import Continents from "./Continents.svelte";
  let continents;
</script>

<svelte:head>
  <title>Svelte Continent App</title>
</svelte:head>

<h1>The Seven Continents Svelte App</h1>
<main>
    <Continents {continents} />
</main>

<style>
main {
  background-color: lavenderblush;
  font-size: 15px;
}
  h1 {
    font-size: 25px;
	}
</style>