import { round } from "lodash";
import { calculateTermDepositValue } from "./calculateTermDepositValue";
import { cliDataCollector } from "./cliDataCollector";

async function main() {
  let responses = await cliDataCollector();
  if (!responses) return;
  const rounded = round(calculateTermDepositValue(responses), 2);
  const amount = rounded.toLocaleString("en");
  console.log(`\nAt the end of your term deposit, you should have $${amount}`);
}

main();
