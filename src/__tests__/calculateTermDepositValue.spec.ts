import { calculateTermDepositValue } from "../calculateTermDepositValue";
import { TermDepositInput } from "../types";

describe("calculateTermDepositValue", () => {
  it("should calculate value correctly for annually interest payment", () => {
    const inputs: TermDepositInput = {
      startDeposit: 10000,
      interestRate: 5,
      investmentTerm: 3,
      interestPaid: "annually",
    };

    const result = calculateTermDepositValue(inputs);
    expect(result).toBeCloseTo(11576.25);
  });

  it("should calculate value correctly for monthly interest payment", () => {
    const inputs: TermDepositInput = {
      startDeposit: 10000,
      interestRate: 5,
      investmentTerm: 3,
      interestPaid: "monthly",
    };

    const result = calculateTermDepositValue(inputs);
    expect(result).toBeCloseTo(11614.72);
  });

  it("should calculate value correctly for quarterly interest payment", () => {
    const inputs: TermDepositInput = {
      startDeposit: 10000,
      interestRate: 5,
      investmentTerm: 3,
      interestPaid: "quarterly",
    };

    const result = calculateTermDepositValue(inputs);
    expect(result).toBeCloseTo(11607.55);
  });

  it("should calculate value correctly when interest is paid at maturity", () => {
    const inputs: TermDepositInput = {
      startDeposit: 10000,
      interestRate: 5,
      investmentTerm: 3,
      interestPaid: "atMaturity",
    };

    const result = calculateTermDepositValue(inputs);
    expect(result).toBeCloseTo(11500);
  });

  it("should return the initial deposit when interest rate is 0", () => {
    const inputs: TermDepositInput = {
      startDeposit: 10000,
      interestRate: 0,
      investmentTerm: 3,
      interestPaid: "annually",
    };

    const result = calculateTermDepositValue(inputs);
    expect(result).toBe(10000); // No interest, so it should be the same as the initial deposit
  });

  it("should handle negative interest rates correctly", () => {
    const inputs: TermDepositInput = {
      startDeposit: 10000,
      interestRate: -5,
      investmentTerm: 3,
      interestPaid: "annually",
    };

    const result = calculateTermDepositValue(inputs);
    expect(result).toBeCloseTo(8573.75);
  });
});
