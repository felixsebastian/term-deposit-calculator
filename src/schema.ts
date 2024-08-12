import { z } from "zod";

export type InterestPaidSchedule = (typeof interestPaidSchedules)[number];
export type TermDepositInput = z.infer<typeof termDepositInputSchema>;

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
