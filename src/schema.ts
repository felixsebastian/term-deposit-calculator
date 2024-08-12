import { z } from "zod";
import { InterestPaidSchedule } from "./types";

export const interestPaidSchedules = [
  "monthly",
  "quarterly",
  "annually",
  "atMaturity",
] as const;

export const interestPaidScheduleLabels: Record<InterestPaidSchedule, string> =
  {
    monthly: "Monthly",
    quarterly: "Quarterly",
    annually: "Annually",
    atMaturity: "At maturity",
  };

const percentageSchema = z
  .number()
  .min(0, { message: "Must be a valid percentage" })
  .max(100, { message: "Must be a valid percentage" });

const integerSchema = z
  .number()
  .multipleOf(1, { message: "Must be a whole number" });

export const termDepositInputSchema = z.object({
  startDeposit: integerSchema.min(0),
  interestRate: percentageSchema,
  investmentTerm: integerSchema.min(1),
  interestPaid: z.enum(interestPaidSchedules),
});
