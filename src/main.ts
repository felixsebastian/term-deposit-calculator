import { calculateTermDepositValue } from "./calculateTermDepositValue";
import { cliDataCollector } from "./cliDataCollector";

async function main() {
  const responses = await cliDataCollector();
  if (!responses) return;
  const finalBalance = calculateTermDepositValue(responses);

  console.log(
    `\nAt the end of your term deposit, you should have $${finalBalance.toFixed(
      2
    )}`
  );
}

main();
