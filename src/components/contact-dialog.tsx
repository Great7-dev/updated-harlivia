"use client"

import type React from "react"

import { useState } from "react"
import { X } from 'lucide-react'
import { Dialog, DialogContent } from "../components/ui/dialog"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import image5 from "../assets/Frame 36895.png"
import nigeria from "../assets/Nigeria.png"



interface ContactDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [countryCode, setCountryCode] = useState("+234")
    const [areaOfInterest, setAreaOfInterest] = useState("")
    const [additionalInfo, setAdditionalInfo] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log({
            name,
            email,
            phone: `${countryCode} ${phone}`,
            areaOfInterest,
            additionalInfo
        })
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
                {/* Decorative elements at the top */}
                <div className="relative h-24 bg-white/40 backdrop-blur-md">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <img src={image5} alt="" />
                    </div>
                    <div className="relative z-10 flex items-center justify-between px-6 py-4 h-full">
                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-lg font-semibold text-center mt-8 dark:text-[#1A1A1A]">Join us on this amazing journey</h2>
                            <p className="text-sm text-[#767676] text-center dark:text-[#1A1A1A]">
                                Wether you are an individual or a business looking to partner < br /> with us on what we are building, you are welcome.
                            </p>
                        </div>
                        <button
                            onClick={() => onOpenChange(false)}
                            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                </div>
                <div className="px-6 py-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                placeholder="Let us know what to call you"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Fill your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone number</Label>
                            <div className="flex gap-2">
                                <Select value={countryCode} onValueChange={setCountryCode}>
                                    <SelectTrigger className="w-[80px]">
                                        <SelectValue placeholder="+234" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="+234"><img src={nigeria} alt="Nigeria" /> +234</SelectItem>
                                        <SelectItem value="+1"><img src={nigeria} alt="USA" /> +1</SelectItem>
                                        <SelectItem value="+44"><img src={nigeria} alt="UK" /> +44</SelectItem>
                                        <SelectItem value="+49"><img src={nigeria} alt="Germany" /> +49</SelectItem>
                                        <SelectItem value="+33"><img src={nigeria} alt="France" /> +33</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="1000-000-000"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="areaOfInterest">Area of interest</Label>
                            <div className="relative">
                                <Select value={areaOfInterest} onValueChange={setAreaOfInterest}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Where do you want to partner with us?" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="properties">Properties</SelectItem>
                                        <SelectItem value="cargo">Cargo & Logistics</SelectItem>
                                        <SelectItem value="energy">Energy</SelectItem>
                                        <SelectItem value="agric">Agric</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="additionalInfo">Additional information (Optional)</Label>
                            <Textarea
                                id="additionalInfo"
                                placeholder="Do you have any additional information for us?"
                                className="min-h-[100px]"
                                value={additionalInfo}
                                onChange={(e) => setAdditionalInfo(e.target.value)}
                            />
                        </div>

                        <Button type="submit" className="w-full bg-[#335CFF] hover:bg-blue-700">
                            Submit
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
