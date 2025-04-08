"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent } from "../components/ui/dialog"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
// import image1 from "../assets/Frame 36880.png"
// import image2 from "../assets/Frame 36881.png"
// import image3 from "../assets/Frame 36882.png"
// import image4 from "../assets/Frame 36883.png"
import image5 from "../assets/Frame 36895.png"
import nigeria from "../assets/Nigeria.png"

interface AboutDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function AboutDialog({ open, onOpenChange }: AboutDialogProps) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [countryCode, setCountryCode] = useState("+234")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log({ name, email, phone: `${countryCode} ${phone}`, message })
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
                {/* Decorative elements at the top */}
                <div className="relative h-24 bg-white/40 backdrop-blur-md">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        {/* Top row - larger images that align with the top */}
                        {/* <img src={image1} alt="" className="absolute -top-6 -left-6 w-20 h-20 object-cover opacity-20" />
                        <img src={image3} alt="" className="absolute -top-8 left-16 w-16 h-16 object-cover opacity-20" />
                        <img src={image2} alt="" className="absolute -top-4 left-36 w-14 h-14 object-cover opacity-20" />
                        <img src={image4} alt="" className="absolute -top-6 right-20 w-18 h-18 object-cover opacity-20" />
                        <img src={image1} alt="" className="absolute -top-8 right-2 w-16 h-16 object-cover opacity-20" /> */}

                        {/* Middle row */}
                        {/* <img src={image2} alt="" className="absolute top-4 -left-4 w-14 h-14 object-cover opacity-20" />
                        <img src={image4} alt="" className="absolute top-6 left-12 w-12 h-12 object-cover opacity-20" />
                        <img src={image3} alt="" className="absolute top-8 left-28 w-16 h-16 object-cover opacity-20" />
                        <img src={image1} alt="" className="absolute top-4 right-36 w-18 h-18 object-cover opacity-20" />
                        <img src={image2} alt="" className="absolute top-6 right-12 w-14 h-14 object-cover opacity-20" />
                        <img src={image4} alt="" className="absolute top-2 -right-4 w-12 h-12 object-cover opacity-20" /> */}

                        {/* Bottom row - smaller images that align with the bottom */}
                        {/* <img src={image3} alt="" className="absolute bottom-0 -left-8 w-16 h-16 object-cover opacity-20" />
                        <img src={image1} alt="" className="absolute bottom-0 left-10 w-14 h-14 object-cover opacity-20" />
                        <img src={image4} alt="" className="absolute bottom-0 left-28 w-10 h-10 object-cover opacity-20" />
                        <img src={image2} alt="" className="absolute bottom-0 right-24 w-12 h-12 object-cover opacity-20" />
                        <img src={image3} alt="" className="absolute bottom-0 right-8 w-14 h-14 object-cover opacity-20" />
                        <img src={image1} alt="" className="absolute bottom-0 -right-6 w-16 h-16 object-cover opacity-20" /> */}
                        <img src={image5} alt="" />
                    </div>
                    <div className="relative z-10 flex items-center justify-between px-6 py-4 h-full">
                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-lg font-semibold text-center mt-8 dark:text-[#1A1A1A]">Do you want to talk to us?</h2>
                            <p className="text-sm text-[#767676] text-center dark:text-[#1A1A1A]">
                                Speak to our seasoned customer relations team to get all your <br /> questions answered.
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
                            <Label htmlFor="message">How can we help?</Label>
                            <Textarea
                                id="message"
                                placeholder="Tell us all the questions you have..."
                                className="min-h-[100px]"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
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