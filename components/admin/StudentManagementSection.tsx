import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { mockStudents } from '@/lib/mockData'
import { Mail, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function StudentManagementSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Student Management</h1>
        <p className="text-muted-foreground mt-2">Manage student accounts and memberships</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registered Students</CardTitle>
          <CardDescription>All active student members</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-muted/50">
                <tr>
                  <th className="px-6 py-3 text-left font-medium text-muted-foreground">Name</th>
                  <th className="px-6 py-3 text-left font-medium text-muted-foreground">Roll Number</th>
                  <th className="px-6 py-3 text-left font-medium text-muted-foreground">Email</th>
                  <th className="px-6 py-3 text-left font-medium text-muted-foreground">Join Date</th>
                  <th className="px-6 py-3 text-left font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockStudents.map((student) => (
                  <tr key={student.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{student.name}</td>
                    <td className="px-6 py-4">{student.rollNumber}</td>
                    <td className="px-6 py-4 text-muted-foreground">{student.email}</td>
                    <td className="px-6 py-4 text-muted-foreground">{student.joinDate}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
