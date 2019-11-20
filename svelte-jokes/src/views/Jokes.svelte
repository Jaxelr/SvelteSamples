<script>
  import axios from  'axios'
  let jokes = []
  let number = 0
  async function getJokes() {
        if (number === 0 || number === undefined) {
            alert('Enter a number')
        } 
        else {
            const data = await axios.get(
                `http://api.icndb.com/jokes/random/${number}`
            );

            jokes = data.data.value
        }
  }
</script>

<div class="row mt-5">
  <div class="container">
    <div class="input-group mb-3">
      <input
        type="number"
        class="form-control"
        bind:value="{number}"
        placeholder="Enter the number of jokes you want"
      />
    </div>
    <div class="row justify-content-center">
        <div>
        <button on:click="{getJokes}" class="btn btn-primary">Get Jokes</button>
        </div>
    </div>
  </div>
</div>
<div class="row mb-5 mt-3 justify-content-center">
  <div class="card" style="width: 18rem;">
    <div class="card-header">Jokes</div>
    <ul class="list-group list-group-flush">
    {#each jokes as joke, index}
    <li class="list-group-item">
        <b>{index + 1}</b>
        &nbsp; {joke.joke}
    </li>
    {/each}
    </ul>
  </div>
</div>
