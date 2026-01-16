const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  while (true) {
    const x = await question("Inserisci l/dp: ");
    if (x.trim() === "l") {
      const aInput = await question("Inserisci dp: ");
      const a = parseInt(aInput);
      const b = await question("Inserisci m/cm: ");
      const c = parseInt(a * 2);
      console.log(`La l è di ${c} ${b}`);
      rl.close();
      return;  // Exit the main function after displaying the log
    } else if (x.trim() === "dp") {
      const zInput = await question("Inserisci l: ");
      const z = parseInt(zInput);
      const b = await question("Inserisci m/cm: ");
      const w = parseInt(z / 2);
      console.log(`La dp è di ${w} ${b}`);
      rl.close();
      return;  // Exit the main function after displaying the specified log
    } else {
      console.log("Input non valido, riprova");
    }
  }
}

main().catch(console.error);
