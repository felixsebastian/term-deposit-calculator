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

export const termDepositInputSchema = z.object({
  startDeposit: z.number().positive(),
  interestRate: z.number().min(0),
  investmentTerm: z.number().positive(),
  interestPaid: z.enum(interestPaidSchedules),
});
