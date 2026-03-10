import { cn } from '@/lib/utils'

interface StatusBadgeProps {
  status: 'good' | 'moderate' | 'high'
  label?: string
}

export default function StatusBadge({ status, label }: StatusBadgeProps) {
  const statusConfig = {
    good: {
      bg: 'bg-green-100 dark:bg-green-900/30',
      text: 'text-green-700 dark:text-green-300',
      dot: 'bg-green-500',
      label: 'Good'
    },
    moderate: {
      bg: 'bg-yellow-100 dark:bg-yellow-900/30',
      text: 'text-yellow-700 dark:text-yellow-300',
      dot: 'bg-yellow-500',
      label: 'Moderate'
    },
    high: {
      bg: 'bg-red-100 dark:bg-red-900/30',
      text: 'text-red-700 dark:text-red-300',
      dot: 'bg-red-500',
      label: 'High'
    },
  }

  const config = statusConfig[status]

  return (
    <div className={cn('inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium', config.bg, config.text)}>
      <span className={cn('w-2 h-2 rounded-full', config.dot)} />
      {label || config.label}
    </div>
  )
}
