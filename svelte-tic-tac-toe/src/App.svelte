<script>
	// creates an array with 9 undefined entries
  	let board = Array.from(new Array(9));
  	// player x is going to start
	let nextPlayer = "x";
	let winningPlayer = "";

	const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

	const possibleWinningCombinations = [
		// rows
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		// columns
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		// diagonals
		[0, 4, 8],
		[6, 4, 2]
	];

	let winningCombination;

	function checkWinningCondition() {
		return possibleWinningCombinations
		.filter(combination => {
			return (
			!!board[combination[0]] &&
			board[combination[0]] === board[combination[1]] &&
			board[combination[0]] === board[combination[2]]
			);
		})
		// will contain the winning combination or undefined
		.pop();
	}

	function getWinningPlayer() {
		return board[winningCombination[0]];
	}
	
	function getWinner() {
		winningCombination = checkWinningCondition();

		if (winningCombination) {
			winningPlayer = getWinningPlayer();
		}
	}

	function handleClick(i) {
		// return if the square at position i already has a value or the game already has a winner
		if (board[i] || winningCombination) {
			return;
		}

	    // set the symbol of the "current" player on the board
		board[i] = nextPlayer;

		// alternate between players
		nextPlayer = nextPlayer === "x" ? "o" : "x";	

		// check the winning combination if there is any
		getWinner();
	}
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Shadows+Into+Light&display=swap");

  :global(*),
  :global(button) {
    font-family: "Shadows Into Light", cursive;
    background: #2e5266;
    color: #e2c044;
    text-align: center;
    font-size: 48px;
  }

 .row {
    height: 45px;
    display: flex;
    justify-content: center;
  }

  .square {
    padding: 0;
    width: 45px;
    height: 45px;
    font-size: 24px;
    border: 1px solid #d3d0cb;
  }

  .winning-combination {
    background: #6e8898;
  }
</style>

<h1>
  next player
  <strong>{nextPlayer}</strong>
</h1>

{#each rows as row}
  <div class="row">
    {#each row as index}
      <button
        class="square {!!winningCombination && winningCombination.includes(index) ? 'winning-combination' : ''}"
        on:click={() => handleClick(index)}>
        {!!board[index] ? board[index] : '  '}
      </button>
    {/each}
  </div>
{/each}

{#if winningPlayer}
  <h1>
    winner
    <strong>{winningPlayer}</strong>
  </h1>
  {:else}
  <h1>no winner yet</h1>
{/if}