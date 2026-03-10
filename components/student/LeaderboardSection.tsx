import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { mockLeaderboard } from '@/lib/mockData'
import { Trophy, Award, Target } from 'lucide-react'

export default function LeaderboardSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Leaderboard</h1>
        <p className="text-muted-foreground mt-2">Top performers in waste reduction and sustainability</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Performers</CardTitle>
          <CardDescription>Based on monthly waste reduction and attendance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockLeaderboard.map((entry) => (
              <div
                key={entry.rank}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent">
                    {entry.rank === 1 ? (
                      <Trophy className="w-5 h-5 text-white" />
                    ) : entry.rank === 2 ? (
                      <Award className="w-5 h-5 text-white" />
                    ) : (
                      <span className="font-bold text-white">{entry.rank}</span>
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{entry.name}</p>
                    <p className="text-sm text-muted-foreground">{entry.rollNumber}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-bold text-lg">{entry.points}</p>
                    <p className="text-xs text-muted-foreground">points</p>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      entry.status === 'excellent'
                        ? 'bg-green-100 text-green-700 border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700'
                        : entry.status === 'good'
                        ? 'bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700'
                        : 'bg-yellow-100 text-yellow-700 border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700'
                    }
                  >
                    {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Your Rank</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">#1</p>
            <p className="text-xs text-muted-foreground mt-1">Keep up the great work!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Your Points</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">950</p>
            <p className="text-xs text-muted-foreground mt-1">Highest this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Next Milestone</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1000</p>
            <p className="text-xs text-muted-foreground mt-1">50 points away</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
