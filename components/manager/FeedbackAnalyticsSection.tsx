import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import StatusBadge from '@/components/common/StatusBadge'
import { Badge } from '@/components/ui/badge'
import { mockFeedback, mockMealFeedback, mockFoodItemComplaints } from '@/lib/mockData'
import { AlertCircle, Check, Flag } from 'lucide-react'

export default function FeedbackAnalyticsSection() {
  const complaints = mockFeedback.filter(f => f.category === 'complaint')
  const unresolved = mockFeedback.filter(f => !f.resolved)
  const avgRating = (mockFeedback.reduce((sum, f) => sum + f.rating, 0) / mockFeedback.length).toFixed(1)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Feedback Analytics</h1>
        <p className="text-muted-foreground mt-2">Monitor student feedback and address concerns</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{avgRating}/5</p>
            <p className="text-xs text-muted-foreground mt-2">From {mockFeedback.length} feedbacks</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Total Complaints</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-destructive">{complaints.length}</p>
            <p className="text-xs text-muted-foreground mt-2">Need attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Unresolved Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{unresolved.length}</p>
            <p className="text-xs text-muted-foreground mt-2">Pending resolution</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Feedback</CardTitle>
          <CardDescription>Latest student feedback submissions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {mockFeedback.map((feedback) => (
            <div key={feedback.id} className="p-4 border border-border rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-medium">{feedback.studentName}</p>
                  <p className="text-sm text-muted-foreground">
                    {feedback.date} • {feedback.mealType}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    {feedback.category.replace('-', ' ')}
                  </Badge>
                  {feedback.resolved ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-destructive" />
                  )}
                </div>
              </div>
              <p className="text-sm mb-3">{feedback.comment}</p>
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <div
                      key={val}
                      className={`w-4 h-4 rounded-full ${
                        val <= feedback.rating ? 'bg-yellow-400' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-auto">
                  {feedback.resolved ? 'Resolved' : 'Pending'}
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Most Complained Food Items</CardTitle>
          <CardDescription>Food items with highest complaint counts - consider reviewing or removing from menu</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockFoodItemComplaints.map((item) => (
            <div key={item.itemName} className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {item.complaintCount >= 40 && (
                    <Flag className="w-5 h-5 text-destructive" />
                  )}
                  {item.complaintCount >= 25 && item.complaintCount < 40 && (
                    <Flag className="w-5 h-5 text-orange-500" />
                  )}
                  <p className="font-medium">{item.itemName}</p>
                </div>
                <Badge variant={item.complaintCount >= 40 ? 'destructive' : 'secondary'}>
                  {item.complaintCount} complaints
                </Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    item.complaintCount >= 40
                      ? 'bg-destructive'
                      : item.complaintCount >= 25
                      ? 'bg-orange-500'
                      : 'bg-orange-400'
                  }`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {item.percentage}% of all complaints
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Meal Feedback</CardTitle>
          <CardDescription>Latest feedback from students about meals</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {mockMealFeedback.map((feedback) => (
            <div key={feedback.id} className="p-4 border border-border rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-medium">{feedback.studentName}</p>
                  <p className="text-sm text-muted-foreground">
                    {feedback.date} • {feedback.mealType.charAt(0).toUpperCase() + feedback.mealType.slice(1)}
                  </p>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <div
                      key={val}
                      className={`w-4 h-4 rounded-full ${
                        val <= feedback.rating ? 'bg-yellow-400' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
              {feedback.complainedItems.length > 0 && (
                <div className="mb-2">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Complained Items:</p>
                  <div className="flex flex-wrap gap-1">
                    {feedback.complainedItems.map((item) => (
                      <Badge key={item} variant="outline" className="bg-destructive/10 text-destructive border-destructive/30">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {feedback.suggestion && (
                <p className="text-sm text-muted-foreground italic">"{feedback.suggestion}"</p>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feedback Categories</CardTitle>
          <CardDescription>Breakdown of feedback types</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { category: 'Food Quality', count: 2, color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
            { category: 'Portion Size', count: 1, color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' },
            { category: 'Complaints', count: 2, color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' },
            { category: 'Suggestions', count: 1, color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' },
          ].map((item) => (
            <div key={item.category} className="flex items-center justify-between">
              <p className="font-medium">{item.category}</p>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full"
                    style={{ width: `${(item.count / 5) * 100}%` }}
                  />
                </div>
                <Badge className={`${item.color} border-0`}>{item.count}</Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
