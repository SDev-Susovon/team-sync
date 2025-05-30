import { z } from "zod";
import { employeeFormSchema } from "../schema/employee.schema";

export type EmployeeFormValues = z.infer<typeof employeeFormSchema>;
