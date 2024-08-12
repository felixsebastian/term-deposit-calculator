import { prompt } from "enquirer";
import {
  interestPaidScheduleLabels,
  interestPaidSchedules,
  termDepositInputSchema,
} from "./schema";
import { fromError } from "zod-validation-error";

export const cliDataCollector = async () => {
  await prompt({
    type: "text",
    name: "welcome",
    message: "Thanks for using Term deposit calculator. Lets get started!",
  });

  const termDepositInput = await prompt([
    {
      type: "numeral",
      name: "startDeposit",
      message: "Enter a starting deposit amount",
    },
    {
      type: "numeral",
      name: "interestRate",
      message: "Enter an interest rate",
      format: (n) => `${n}%`,
    },
    {
      type: "numeral",
      name: "investmentTerm",
      message: "How long will your investment term be?",
      format: (n) => `${n} years`,
    },
    {
      type: "select",
      name: "interestPaid",
      message: "When will your interest be paid?",
      choices: interestPaidSchedules.map((id) => ({
        name: id,
        message: interestPaidScheduleLabels[id],
      })),
    },
  ]);

  const { error, data } = termDepositInputSchema.safeParse(termDepositInput);

  if (error) {
    console.error("The numbers you have given us dont make sense!:");
    console.error(fromError(error).toString());
    console.error("\nPlease check these details and try again.");
    return;
  }

  return data;
};
