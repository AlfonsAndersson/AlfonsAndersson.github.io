<script>
  let clicks = 100;
  let multiplier = 1;
  let workers = [];
  let worker_multiplier = 1;

  let upgrades = [
    { cost: 15, name: "Add", multiplier: 1, worker: 0,},
    { cost: 5, name: "Worker", multiplier: 0, worker: 1,},
  ];

  function increment() {
    clicks = clicks + multiplier;
    console.log("click" + clicks);
  }
</script>

<h1>Pug Clicker</h1>

<article>
  <header>
    <div class="grid">
      {#each upgrades as upgrade}
        <button
          class="upgrade" id={upgrade.name} 
          on:click={() => {
            if (clicks >= upgrade.cost) {
              if (upgrade.multiplier) {
                multiplier += upgrade.multiplier;
                clicks -= upgrade.cost;
              }
              if (upgrade.worker && clicks) {
                worker_multiplier = worker_multiplier * 2;
                workers = [upgrade.name, ...workers];
                /* start "clicking" every 1000 ms */
                setInterval(increment, 1000);
                clicks -= upgrade.cost;
              }
              upgrade.cost = upgrade.cost * 2
            } else {
              alert("Du har ju inte tillräckligt många kakor!");
            }
          }}
        >
          <span>{upgrade.name}</span>
          <span>{upgrade.cost}</span>
        </button>
      {/each}
    </div>
  </header>
  <div class="game">
    <button on:click={increment} class="clicker">
      <div style="display:flex;flex-direction:column">
      <span class="clicks">{clicks}</span>
      <span class="PPC">PPC: {multiplier}</span>
    </div>
    </button>
  </div>
  <footer>
    <div class="panelright">
      <div>
        <span>Workers</span>
        <hr />
        <div class="shop">
          {#each workers as worker}
            <div class="worker">{worker}</div>
          {/each}
        </div>
      </div>
      <hr />
    </div>
  </footer>
</article>

<style>
  .shop {
    display: grid;
    grid-auto-flow: row; /* default */
    gap: 8px;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }

  .grid {
    display:flex;
    height: 170px;
    width: 100%;
    flex-direction: row;
    justify-self: center;
    align-items: center;
    align-self: center;
    justify-content: space-evenly;

  }

  .upgrade {
    width: 40%;
    height: 100%;
    border: 4px solid rgb(43, 43, 43);
    background-color: rgb(54, 28, 183);
    background-size: 100% 100%;
    background-image: url("https://media.gettyimages.com/id/1350537627/sv/foto/a-pug-dressed-as-a-construction-worker-is-seen-at-the-haute-dog-howloween-parade-at-marina.jpg?s=612x612&w=gi&k=20&c=2NA8EiVUK6PF_iu4Av5huhX-YgRicsAFF_5m5jtwnfg=");
    background-position: center;
    place-items: right;
    place-content: center;
    display: flex;
    flex-direction: column;
  }

  #Worker {
    background-image: url("https://media.gettyimages.com/id/1350537627/sv/foto/a-pug-dressed-as-a-construction-worker-is-seen-at-the-haute-dog-howloween-parade-at-marina.jpg?s=612x612&w=gi&k=20&c=2NA8EiVUK6PF_iu4Av5huhX-YgRicsAFF_5m5jtwnfg=");
    
  }

  #Add {
    background-image: url("https://i.pinimg.com/originals/76/c1/b4/76c1b4b85ef3f91808dbf0f1dfa02d7b.jpg");
    background-size: 100% 170%;
  }
  .worker {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    background-color: rgb(128, 141, 27);
    place-items: center;
    place-content: center;
    display: flex;
  }

  .game {
    height: 50vh;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
  }
  .clicker {
    height: 100%;
    width: 60%;
    background-color: rgb(94, 33, 33);
    flex-direction: column;
    place-items: center;
    place-content: center;
    background-image: url("https://c.files.bbci.co.uk/17444/production/_124800359_gettyimages-817514614.jpg");
    background-size: 95%;
    background-position: center;
  }

  .panelright {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .clicks {
    color: rgb(223, 223, 223);
    font-size: 100px;
  }

  .PPC {
    color: rgb(222, 222, 222);
    font-size: 25px;
    font-weight: bold;
  }
</style>
