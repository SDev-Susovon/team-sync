"use client"

import MainLayout from '@/src/components/layouts/main-layout'
import { AgGridReact } from 'ag-grid-react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AddEmployeeModal } from '@/src/components/modal/addEmployee.modal'
import { ColDef, themeQuartz } from 'ag-grid-community'
import { ModuleRegistry } from 'ag-grid-community'
import { AllCommunityModule } from 'ag-grid-community'

// Register AG-Grid modules
ModuleRegistry.registerModules([AllCommunityModule])

interface Employee {
  id: number
  name: string
  email: string
  phone: string
  role: string
  joiningDate: string
}

const EmployeeManagementPage = () => {
  const [rowData, setRowData] = useState<Employee[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const loadEmployees = () => {
      try {
        const savedEmployees = localStorage.getItem('employees')
        if (savedEmployees) {
          const parsedEmployees = JSON.parse(savedEmployees)
          setRowData(parsedEmployees)
        } else {
          // Set default data if localStorage is empty
          const defaultEmployees = [{
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            phone: '123-456-7890',
            role: 'Developer',
            joiningDate: '2023-01-15'
          }]
          setRowData(defaultEmployees)
          localStorage.setItem('employees', JSON.stringify(defaultEmployees))
        }
      } catch (error) {
        console.error('Error loading employees from localStorage:', error)
      }
    }

    loadEmployees()
  }, [])

  const [colDefs] = useState<ColDef<Employee>[]>([
    {
      field: 'name',
      headerName: 'Name',
      filter: 'agTextColumnFilter',
      sortable: true
    },
    {
      field: 'email',
      headerName: 'Email',
      filter: 'agTextColumnFilter',
      sortable: true
    },
    {
      field: 'phone',
      headerName: 'Phone',
      filter: 'agTextColumnFilter',
      sortable: true
    },
    {
      field: 'role',
      headerName: 'Role',
      filter: 'agTextColumnFilter',
      sortable: true
    },
    {
      field: 'joiningDate',
      headerName: 'Joining Date',
      filter: 'agDateColumnFilter',
      sortable: true,
      valueFormatter: (params: { value: string }) =>
        new Date(params.value).toLocaleDateString()
    }
  ])


  const handleAddEmployee = (newEmployee: Omit<Employee, 'id'>) => {
    const updatedEmployees = [
      ...rowData,
      {
        ...newEmployee,
        id: rowData.length > 0 ? Math.max(...rowData.map(e => e.id)) + 1 : 1
      }
    ]

    setRowData(updatedEmployees)
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    setIsModalOpen(false)
  }
  const defaultColDef = {
    flex: 1,
  };

  return (
    <MainLayout>
      <div className="flex-1 space-y-4 p-8 pt-6 ml-2">
        <div className="flex items-center justify-between space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Employees</h1>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Employee
          </Button>
        </div>


        <div
          style={{ width: "100%", height: "100%" }}
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            pagination={true}
            theme={themeQuartz}
            paginationPageSize={50}
            modules={[AllCommunityModule]}
            domLayout='autoHeight'
          />
        </div>

        <AddEmployeeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddEmployee}
        />
      </div>
    </MainLayout>
  )
}

export default EmployeeManagementPage