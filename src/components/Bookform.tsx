// components/book-form.tsx
'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { Send, Clock, Phone } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

interface BookFormProps {
    isOpen: boolean
    onClose: () => void
}

export function BookForm({ isOpen, onClose }: BookFormProps) {

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            projectType: formData.get('projectType') as string,
            budget: formData.get('budget') as string,
            message: formData.get('message') as string
        }

        console.log("Form data:", data)
        onClose() // Close modal after submission
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-h-screen sm:min-h-0 sm:max-w-lg">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-2xl">
                            <Send className="w-6 h-6" />
                            Let&apos;s Work Together
                        </DialogTitle>
                        <DialogDescription className="text-base">
                            Ready to start your project? Fill out the form below and I&apos;ll get back to you within 24 hours.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-6 py-4">
                        {/* Contact Info */}
                        <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>Response within 24h</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Phone className="w-4 h-4" />
                                <span>Available for calls</span>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="firstName">Name *</Label>
                                <Input id="name" name="name" required />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input id="email" name="email" type="email" required />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="grid-cols-1">
                                <Label htmlFor="projectType" className="mb-2">Project Type</Label>
                                <Select name="projectType" >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select project type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="web-app">Web Application</SelectItem>
                                        <SelectItem value="website">Website</SelectItem>
                                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                                        <SelectItem value="api">API Development</SelectItem>
                                        <SelectItem value="consultation">Consultation</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid-cols-1">
                                <Label htmlFor="budget" className="mb-2">Budget Range</Label>
                                <Select name="budget">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select budget range" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1k-5k">$1k - $5k</SelectItem>
                                        <SelectItem value="5k-15k">$5k - $15k</SelectItem>
                                        <SelectItem value="15k-30k">$15k - $30k</SelectItem>
                                        <SelectItem value="30k+">$30k+</SelectItem>
                                        <SelectItem value="discuss">Let&apos;s Discuss</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="message">Project Details *</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Describe your project, timeline, and any specific requirements..."
                                rows={5}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            className="flex-1"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}