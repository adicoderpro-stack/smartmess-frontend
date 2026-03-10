import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  color?: 'primary' | 'accent' | 'destructive' | 'default'
  subtext?: string
}

export default function StatCard({ title, value, icon: Icon, color = 'default', subtext }: StatCardProps) {
  const colorConfig = {
    primary: 'text-primary',
    accent: 'text-accent',
    destructive: 'text-destructive',
    default: 'text-muted-foreground'
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground font-medium">{title}</p>
            <p className="text-2xl font-bold mt-2">{value}</p>
            {subtext && <p className="text-xs text-muted-foreground mt-1">{subtext}</p>}
          </div>
          <Icon className={`w-8 h-8 ${colorConfig[color]}`} />
        </div>
      </CardContent>
    </Card>
  )
}
