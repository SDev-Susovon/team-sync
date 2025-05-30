import { roles } from '@/src/utils/role.select'
import { z } from 'zod'

export const employeeFormSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().regex(/^\d{10,15}$/, {
        message: "Phone must be 10-15 digits.",
    }),
    role: z.enum(roles),
    joiningDate: z.string().refine((val) => {
        const selectedDate = new Date(val)
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        return selectedDate <= today
    }, 'Joining date must be today or in the past')
})