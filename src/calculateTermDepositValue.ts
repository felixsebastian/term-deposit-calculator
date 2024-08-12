import { TermDepositInput } from "./schema";

export const calculateTermDepositValue = (inputs: TermDepositInput) => {
  // Compound interest equation taken from this website:
  // https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php

  const p = inputs.startDeposit;
  const R = inputs.interestRate;
  const r = R / 100;
  const n = getNumberOfCompoundingPeriods(inputs);
  const t = inputs.investmentTerm;

  // Solve for A
  const A = p * (1 + r / n) ** (n * t);

  return A;
};

const getNumberOfCompoundingPeriods = (inputs: TermDepositInput) => {
  // The equation takes an input 'n' which is the number of compounding periods per year.
  // In the case of atMaturity, this will be 1 / years.
  // That means at the end of the investment term there will have been exactly 1 compounding period.
  if (inputs.interestPaid === "atMaturity") return 1 / inputs.investmentTerm;

  const periodsInAYear = {
    annually: 1,
    monthly: 12,
    quarterly: 4,
  };

  return periodsInAYear[inputs.interestPaid];
};
