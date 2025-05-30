"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { roles } from '@/src/utils/role.select'
import { employeeFormSchema } from '../schema/employee.schema'
import { EmployeeFormValues } from '../interface/employee.interface'


interface AddEmployeeModalProps {
    isOpen: boolean
    onClose: () => void
    onSave: (employee: Omit<IEmployee, 'id'>) => void
}

export const AddEmployeeModal = ({ isOpen, onClose, onSave }: AddEmployeeModalProps) => {
    const form = useForm<EmployeeFormValues>({
        resolver: zodResolver(employeeFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            role: 'Developer',
            joiningDate: new Date().toISOString().split('T')[0]
        }
    })

    useEffect(() => {
        if (isOpen) {
            form.reset({
                name: '',
                email: '',
                phone: '',
                role: 'Developer',
                joiningDate: new Date().toISOString().split('T')[0]
            })
        }
    }, [isOpen, form])

    const handleSubmit = async (values: EmployeeFormValues) => {
        try {
            const employees = JSON.parse(localStorage.getItem('employees') || '[]');
            const newEmployee = { ...values, id: Date.now().toString() };
            localStorage.setItem('employees', JSON.stringify([...employees, newEmployee]));

            onSave(newEmployee);

            const emailParams = {
                name: values.name,
                email: values.email,
                joiningDate: values.joiningDate,
                role: values.role,
                phone:values.phone
            };

            await emailjs.send(
                'service_8ebh55h',
                'template_p0b42e9',
                emailParams,
                {
                publicKey: 'YKtg2gEdaNShDXKac',
                }

            );

            console.log('Email sent successfully!');
        } catch (error) {
            console.error('Error saving employee or sending email:', error);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Add New Employee</DialogTitle>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="john@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="1234567890" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a role" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {roles.map((role) => (
                                                    <SelectItem key={role} value={role}>
                                                        {role}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="joiningDate"
                            render={({ field }) => {
                                const today = new Date();
                                const offset = today.getTimezoneOffset();
                                const localToday = new Date(today.getTime() - (offset * 60 * 1000));
                                const todayString = localToday.toISOString().split('T')[0];
                                return (
                                    <FormItem>
                                        <FormLabel>Joining Date</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="date"
                                                {...field}
                                                max={todayString}
                                                onKeyDown={(e) => e.preventDefault()}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />

                        <div className="flex justify-end gap-2 pt-4">
                            <Button variant="outline" onClick={onClose} type="button">
                                Cancel
                            </Button>
                            <Button type="submit">Add Employee</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}