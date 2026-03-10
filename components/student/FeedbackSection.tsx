'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { mockMenus, mockMealFeedback } from '@/lib/mockData'
import { Star, Send } from 'lucide-react'

export default function FeedbackSection() {
  const [rating, setRating] = useState(4)
  const [mealType, setMealType] = useState('lunch')
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [suggestion, setSuggestion] = useState('')
  const [feedback, setFeedback] = useState(mockMealFeedback)
  const { toast } = useToast()

  const currentMenu = mockMenus.find(m => m.mealType === mealType)

  const handleItemToggle = (item: string) => {
    setSelectedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (selectedItems.length === 0) {
      toast({
        title: 'Selection required',
        description: 'Please select at least one food item or provide feedback.',
        variant: 'destructive',
      })
      return
    }

    const newFeedback = {
      id: String(feedback.length + 1),
      studentId: '1',
      studentName: 'You',
      mealType: mealType as any,
      date: new Date().toISOString().split('T')[0],
      rating,
      complainedItems: selectedItems,
      suggestion,
      submittedAt: new Date().toLocaleString(),
    }

    setFeedback([...feedback, newFeedback])

    toast({
      title: 'Feedback submitted!',
      description: 'Thank you for helping us improve the meal quality.',
    })

    setSuggestion('')
    setRating(4)
    setSelectedItems([])
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Meal Feedback</h1>
        <p className="text-muted-foreground mt-2">Rate meals and report food quality issues</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Submit Meal Feedback</CardTitle>
              <CardDescription>Help us improve meal quality and planning</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Meal</label>
                  <select
                    value={mealType}
                    onChange={(e) => {
                      setMealType(e.target.value)
                      setSelectedItems([])
                    }}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Rate the Meal</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setRating(val)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            val <= rating
                              ? 'fill-accent text-accent'
                              : 'text-muted-foreground'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {currentMenu && (
                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      Which food items were not good?
                    </label>
                    <div className="space-y-2 p-3 bg-muted rounded-lg">
                      {currentMenu.items.map((item) => (
                        <label key={item} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(item)}
                            onChange={() => handleItemToggle(item)}
                            className="w-4 h-4 rounded border-input cursor-pointer"
                          />
                          <span className="text-sm">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium mb-2 block">Suggestion or Feedback (Optional)</label>
                  <textarea
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    placeholder="Share your suggestions or feedback..."
                    rows={4}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                <Button type="submit" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Submit Feedback
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Your Recent Feedback</CardTitle>
              <CardDescription>Last 5 submissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {feedback.slice(-5).reverse().map((item) => (
                <div key={item.id} className="p-3 bg-muted rounded-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium capitalize">{item.mealType}</p>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((val) => (
                        <Star
                          key={val}
                          className={`w-3 h-3 ${
                            val <= item.rating
                              ? 'fill-accent text-accent'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                  {item.complainedItems.length > 0 && (
                    <p className="text-xs mt-1">
                      <span className="font-medium">Issues:</span> {item.complainedItems.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
