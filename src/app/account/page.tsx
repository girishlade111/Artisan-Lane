import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-headline font-bold">My Account</h1>
        <p className="text-muted-foreground">Manage your profile, subscriptions, and orders.</p>
      </div>

      <Tabs defaultValue="subscriptions" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Order History</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
        </TabsList>
        <TabsContent value="subscriptions">
          <Card>
            <CardHeader>
              <CardTitle>Your Subscriptions</CardTitle>
              <CardDescription>Manage your active coffee subscriptions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center p-4 border rounded-lg gap-4">
                    <div>
                        <h3 className="font-semibold">Artisan's Choice Subscription</h3>
                        <p className="text-sm text-muted-foreground">Next delivery: July 30, 2024</p>
                    </div>
                    <Button variant="outline">Manage</Button>
                </div>
                 <div className="flex flex-col sm:flex-row justify-between sm:items-center p-4 border rounded-lg gap-4">
                    <div>
                        <h3 className="font-semibold">Single Origin Explorer</h3>
                        <p className="text-sm text-muted-foreground">Next delivery: August 5, 2024</p>
                    </div>
                    <Button variant="outline">Manage</Button>
                </div>
            </CardContent>
            <CardFooter>
                <Button>Explore New Subscriptions</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Make changes to your personal information here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="jane.doe@example.com" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="orders">
           <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>View your past orders.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">You have no past orders.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="payment">
           <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your saved payment methods.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center p-4 border rounded-lg gap-4">
                    <div>
                        <h3 className="font-semibold">Visa ending in 4242</h3>
                        <p className="text-sm text-muted-foreground">Expires 12/2026</p>
                    </div>
                    <Button variant="outline" className="text-destructive hover:text-destructive">Remove</Button>
                </div>
            </CardContent>
             <CardFooter>
              <Button>Add a new payment method</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
