"use client";

import React from "react";
import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
// import image1 from "../assets/Frame 36880.png"
// import image2 from "../assets/Frame 36881.png"
// import image3 from "../assets/Frame 36882.png"
// import image4 from "../assets/Frame 36883.png"
// import image5 from "../assets/Frame 36895.png";
// import nigeria from "../assets/Nigeria.png";
import { countryCodes } from "./lib/utils";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [countryCode, setCountryCode] = useState("+234");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, phone: `${countryCode} ${phone}`, message });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] sm:max-w-[500px] p-0 overflow-hidden bg-[#e8f0fe] dark:bg-black">
        {/* Decorative header */}
        <div className="relative h-24 backdrop-blur-md bg-white/40 dark:bg-[#e8f0fe]">
          {/* <div className="absolute inset-0 z-0 overflow-hidden dark:bg-black">
            <img src={image5} alt="" className="object-cover w-full h-full" />
          </div> */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 py-4 h-full text-center">
            <h2 className="text-lg font-semibold mt-8 dark:text-black">
              Do you want to talk to us?
            </h2>
            <p className="text-sm text-[#767676] dark:text-black font-medium">
              Speak to our seasoned customer relations team to get all your{" "}
              <br className="hidden sm:block" />
              questions answered.
            </p>
            <button
              onClick={() => onOpenChange(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer dark:bg-black dark:text-white"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </div>
        </div>

        {/* Form section */}
        <div className="px-4 sm:px-6 py-4 sm:py-6">
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
              <div className="flex flex-col sm:flex-row gap-2">
                <Select value={countryCode} onValueChange={setCountryCode}>
                  <SelectTrigger className="w-full sm:w-[100px]">
                    <SelectValue placeholder="+234" />
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        <span className="flex items-center gap-2">
                          <span>{country.flag}</span>
                          <span>{country.code}</span>
                        </span>
                      </SelectItem>
                    ))}
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
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#335CFF] hover:bg-blue-700"
            >
              Submit
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
