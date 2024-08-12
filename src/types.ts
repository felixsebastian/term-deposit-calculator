import { z } from "zod";
import { interestPaidSchedules, termDepositInputSchema } from "./schema";

export type InterestPaidSchedule = (typeof interestPaidSchedules)[number];
export type TermDepositInput = z.infer<typeof termDepositInputSchema>;
