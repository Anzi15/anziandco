"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutDashboard, FileText, MessageSquare, ImageIcon, Users, Settings, LogOut } from "lucide-react"

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
            <CardDescription>Enter your credentials to access the admin dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setIsLoggedIn(true)
              }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="admin@anziandco.com" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col bg-white shadow-md lg:flex">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/admin" className="flex items-center gap-2 font-bold">
            <span className="text-xl">
              Anzi <span className="text-primary">&</span> Co.
            </span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            {[
              { name: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" />, href: "#dashboard" },
              { name: "Services", icon: <FileText className="h-4 w-4" />, href: "#services" },
              { name: "Blog", icon: <FileText className="h-4 w-4" />, href: "#blog" },
              { name: "Testimonials", icon: <MessageSquare className="h-4 w-4" />, href: "#testimonials" },
              { name: "Case Studies", icon: <ImageIcon className="h-4 w-4" />, href: "#case-studies" },
              { name: "Users", icon: <Users className="h-4 w-4" />, href: "#users" },
              { name: "Settings", icon: <Settings className="h-4 w-4" />, href: "#settings" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto border-t p-4">
          <Button variant="outline" className="w-full justify-start gap-2" onClick={() => setIsLoggedIn(false)}>
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white px-4 sm:px-6">
          <Button variant="outline" size="sm" className="lg:hidden" onClick={() => {}}>
            <span className="sr-only">Toggle Menu</span>
            <LayoutDashboard className="h-4 w-4" />
          </Button>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden lg:flex" onClick={() => setIsLoggedIn(false)}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <Button>Add New</Button>
          </div>

          <Tabs defaultValue="services">
            <TabsList className="mb-4">
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="blog">Blog</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Services Management</CardTitle>
                  <CardDescription>Add, edit, or remove services from your website.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">Website Development</h3>
                        <p className="text-sm text-gray-500">
                          Custom, responsive websites designed to convert visitors into customers.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">Social Media Marketing</h3>
                        <p className="text-sm text-gray-500">
                          Strategic social media campaigns to build your brand and engage your audience.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">Graphic Design</h3>
                        <p className="text-sm text-gray-500">
                          Eye-catching visuals that communicate your brand message effectively.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="blog" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Blog Management</CardTitle>
                  <CardDescription>Publish and edit blog posts.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">10 Tips for Effective Social Media Marketing</h3>
                        <p className="text-sm text-gray-500">Published on April 1, 2023</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">Why Your Business Needs a Responsive Website</h3>
                        <p className="text-sm text-gray-500">Published on March 15, 2023</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">The Power of Email Marketing for Small Businesses</h3>
                        <p className="text-sm text-gray-500">Published on February 28, 2023</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="testimonials" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Testimonials Management</CardTitle>
                  <CardDescription>Approve, edit, or delete testimonials.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">Sarah Johnson - Retail Solutions Inc.</h3>
                        <p className="text-sm text-gray-500">
                          "Anzi & Co. transformed our online presence completely. Our website traffic has increased by
                          200% and our leads have doubled since working with them."
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">Michael Chen - Tech Innovations</h3>
                        <p className="text-sm text-gray-500">
                          "The team at Anzi & Co. is incredibly knowledgeable and responsive. They've helped us navigate
                          the complex world of digital marketing with ease."
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">Emily Rodriguez - Sunshine Realty</h3>
                        <p className="text-sm text-gray-500">
                          "As a realtor, my online presence is crucial. Anzi & Co. has helped me stand out in a
                          competitive market with their tailored marketing strategies."
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="case-studies" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Case Studies Management</CardTitle>
                  <CardDescription>Add new case studies dynamically.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">Retail Solutions Inc. - E-commerce Transformation</h3>
                        <p className="text-sm text-gray-500">
                          How we helped a retail business increase online sales by 150%.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">Sunshine Realty - Lead Generation Campaign</h3>
                        <p className="text-sm text-gray-500">
                          How we generated 200+ qualified leads for a real estate agency.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <h3 className="font-medium">Tech Innovations - Brand Refresh</h3>
                        <p className="text-sm text-gray-500">
                          How we revitalized a tech company's brand identity and online presence.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

