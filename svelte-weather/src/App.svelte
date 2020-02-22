<script>
	import Header from './Header.svelte';
	import Search from  './Search.svelte';
	import Board from './Board.svelte';
</script>

<Header />

<main>
	<Search />
	<Board />
</main>

<style type="text/scss">
	main {
		text-align: center;
		width: 80%;
		margin-left: 10%;
	}

</style>