'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { mockMenus } from '@/lib/mockData'
import { Trash2, Plus } from 'lucide-react'

interface MenuItem {
  id: string
  date: string
  mealType: 'breakfast' | 'lunch' | 'dinner'
  items: string[]
  cuisine: string
}

export default function MenuSection() {
  const [menus, setMenus] = useState<MenuItem[]>(mockMenus)
  const [newItem, setNewItem] = useState('')
  const [cuisine, setCuisine] = useState('Indian')
  const [mealType, setMealType] = useState('breakfast')
  const { toast } = useToast()

  const handleAddMenu = () => {
    toast({
      title: 'Menu added',
      description: `New menu for ${mealType} has been created.`,
    })
    setNewItem('')
  }

  const handleDeleteMenu = (id: string) => {
    setMenus(menus.filter(m => m.id !== id))
    toast({
      title: 'Menu deleted',
      description: 'Menu item has been removed.',
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Menu Management</h1>
        <p className="text-muted-foreground mt-2">Plan and manage daily menus for all meals</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Menus</CardTitle>
              <CardDescription>All planned menus for this week</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {menus.map((menu) => (
                <div key={menu.id} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-medium capitalize">{menu.mealType}</p>
                      <p className="text-sm text-muted-foreground">{menu.date} • {menu.cuisine}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteMenu(menu.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {menu.items.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Add New Menu</CardTitle>
              <CardDescription>Create a new menu</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Meal Type</label>
                <select
                  value={mealType}
                  onChange={(e) => setMealType(e.target.value as 'breakfast' | 'lunch' | 'dinner')}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Cuisine Type</label>
                <select
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="Indian">Indian</option>
                  <option value="South Indian">South Indian</option>
                  <option value="Continental">Continental</option>
                  <option value="Asian">Asian</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Add Items</label>
                <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  placeholder="Type and press enter..."
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && newItem.trim()) {
                      handleAddMenu()
                    }
                  }}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Button onClick={handleAddMenu} className="w-full gap-2">
                <Plus className="w-4 h-4" />
                Create Menu
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
