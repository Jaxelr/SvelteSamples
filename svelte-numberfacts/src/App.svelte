<script>
import Card from './Card.svelte';

let query = "";
let result;

async function getResult() {

	let response = await fetch(`http://numbersapi.com/${query}`);
	let text = await response.text();
	let data = text;

	return data;
}

function submitHandler(e) {
	result = getResult();
}
</script>

<div class="container mt-5">
    <div class="row">
        <div class="col-md"></div>
        <div class="col-md-8 text-center">
            <h1 class="display-4">Random Number Facts</h1>
            <form class="form-inline" on:submit|preventDefault={submitHandler}>
                <input class="w-75 form-control" type="number" bind:value={query}>
                <button class="w-25 btn btn-dark">Submit</button>
            </form>

            {#if result===undefined}

            <p></p>

            {:else}

            {#await result}

            <p>Loading...</p>

            {:then value}

            <Card data={value} />

            {:catch error}

             <Card data={error.message}/>

            {/await}

            {/if}
        </div>
        <div class="col-md"></div>
    </div>
</div>