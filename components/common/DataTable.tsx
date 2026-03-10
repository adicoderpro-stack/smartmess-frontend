import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Column<T> {
  key: keyof T
  label: string
  render?: (value: T[keyof T], item: T) => React.ReactNode
  className?: string
}

interface DataTableProps<T> {
  title?: string
  columns: Column<T>[]
  data: T[]
  rowClassName?: string
}

export default function DataTable<T extends Record<string, any>>({
  title,
  columns,
  data,
  rowClassName,
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <Card>
        {title && <CardHeader><CardTitle>{title}</CardTitle></CardHeader>}
        <CardContent className="p-6 text-center text-muted-foreground">
          No data available
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      {title && <CardHeader><CardTitle>{title}</CardTitle></CardHeader>}
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                {columns.map((col) => (
                  <th
                    key={String(col.key)}
                    className="px-6 py-3 text-left font-medium text-muted-foreground"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr
                  key={idx}
                  className={cn(
                    'border-b border-border hover:bg-muted/50 transition-colors',
                    rowClassName
                  )}
                >
                  {columns.map((col) => (
                    <td
                      key={String(col.key)}
                      className={cn('px-6 py-4', col.className)}
                    >
                      {col.render
                        ? col.render(row[col.key], row)
                        : String(row[col.key])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
