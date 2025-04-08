"use client";

import type React from "react";

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
import image5 from "../assets/Frame 36895.png";
import { countryCodes } from "./lib/utils";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PartnerDialog({ open, onOpenChange }: ContactDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+234");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      name,
      email,
      phone: `${countryCode} ${phone}`,
      areaOfInterest,
      additionalInfo,
    });
    onOpenChange(false);
  };

  return (
    // <Dialog open={open} onOpenChange={onOpenChange}>
    //   <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
    //     {/* Decorative elements at the top */}
    //     <div className="relative h-24 bg-white/40 backdrop-blur-md">
    //       <div className="absolute inset-0 z-0 overflow-hidden dark:bg-white/70">
    //         <img src={image5} alt="" />
    //       </div>
    //       <div className="relative z-10 flex items-center justify-between px-6 py-4 h-full">
    //         <div className="flex flex-col items-center w-full">
    //           <h2 className="text-lg font-semibold text-center mt-8 dark:text-[#1A1A1A]">
    //             Join us on this amazing journey
    //           </h2>
    //           <p className="text-sm text-[#767676] text-center dark:text-[#1A1A1A] font-medium">
    //             Wether you are an individual or a business looking to partner{" "}
    //             <br /> with us on what we are building, you are welcome.
    //           </p>
    //         </div>
    //         <button
    //           onClick={() => onOpenChange(false)}
    //           className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 "
    //         >
    //           <X className="h-4 w-4 cursor-pointer" />
    //           <span className="sr-only">Close</span>
    //         </button>
    //       </div>
    //     </div>
    //     <div className="px-6 py-4">
    //       <form onSubmit={handleSubmit} className="space-y-4">
    //         <div className="space-y-2">
    //           <Label htmlFor="name">Name</Label>
    //           <Input
    //             id="name"
    //             placeholder="Let us know what to call you"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //             required
    //           />
    //         </div>

    //         <div className="space-y-2">
    //           <Label htmlFor="email">Email</Label>
    //           <Input
    //             id="email"
    //             type="email"
    //             placeholder="Fill your email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             required
    //           />
    //         </div>

    //         <div className="space-y-2">
    //           <Label htmlFor="phone">Phone number</Label>
    //           <div className="flex gap-2">
    //             <Select value={countryCode} onValueChange={setCountryCode}>
    //               <SelectTrigger className="w-[100px]">
    //                 <SelectValue placeholder="+234" />
    //               </SelectTrigger>
    //               <SelectContent>
    //                 {countryCodes.map((country) => (
    //                   <SelectItem key={country.code} value={country.code}>
    //                     <span className="flex items-center gap-2">
    //                       <span>{country.flag}</span>
    //                       <span>{country.code}</span>
    //                     </span>
    //                   </SelectItem>
    //                 ))}
    //               </SelectContent>
    //             </Select>

    //             <Input
    //               id="phone"
    //               type="tel"
    //               placeholder="1000-000-000"
    //               value={phone}
    //               onChange={(e) => setPhone(e.target.value)}
    //               required
    //             />
    //           </div>
    //         </div>

    //         <div className="space-y-2">
    //           <Label htmlFor="areaOfInterest">Area of interest</Label>
    //           <div className="relative">
    //             <Select
    //               value={areaOfInterest}
    //               onValueChange={setAreaOfInterest}
    //             >
    //               <SelectTrigger className="w-full">
    //                 <SelectValue placeholder="Where do you want to partner with us?" />
    //               </SelectTrigger>
    //               <SelectContent>
    //                 <SelectItem value="properties">Properties</SelectItem>
    //                 <SelectItem value="cargo">Cargo & Logistics</SelectItem>
    //                 <SelectItem value="energy">Energy</SelectItem>
    //                 <SelectItem value="agric">Agric</SelectItem>
    //               </SelectContent>
    //             </Select>
    //           </div>
    //         </div>

    //         <div className="space-y-2">
    //           <Label htmlFor="additionalInfo">
    //             Additional information (Optional)
    //           </Label>
    //           <Textarea
    //             id="additionalInfo"
    //             placeholder="Do you have any additional information for us?"
    //             className="min-h-[100px]"
    //             value={additionalInfo}
    //             onChange={(e) => setAdditionalInfo(e.target.value)}
    //           />
    //         </div>

    //         <Button
    //           type="submit"
    //           className="w-full bg-[#335CFF] hover:bg-blue-700"
    //         >
    //           Submit
    //         </Button>
    //       </form>
    //     </div>
    //   </DialogContent>
    // </Dialog>
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-[90%] sm:max-w-[500px] p-0 overflow-hidden rounded-xl">
        {/* Decorative Header */}
        <div className="relative h-32 sm:h-24 bg-white/40 backdrop-blur-md">
          <div className="absolute inset-0 z-0 overflow-hidden dark:bg-white/70">
            <img src={image5} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center px-4 py-4 h-full text-center">
            <h2 className="text-base sm:text-lg font-semibold dark:text-[#1A1A1A] mt-2">
              Join us on this amazing journey
            </h2>
            <p className="text-sm text-[#767676] dark:text-[#1A1A1A] font-medium">
              Whether you are an individual or a business looking to partner
              <br className="hidden sm:block" />
              with us on what we are building, you are welcome.
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

        {/* Form */}
        <div className="px-4 py-6 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
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

            {/* Email */}
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

            {/* Phone Number */}
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

            {/* Area of Interest */}
            <div className="space-y-2">
              <Label htmlFor="areaOfInterest">Area of interest</Label>
              <Select value={areaOfInterest} onValueChange={setAreaOfInterest}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Where do you want to partner with us?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="properties">Properties</SelectItem>
                  <SelectItem value="cargo">Cargo & Logistics</SelectItem>
                  <SelectItem value="energy">Energy</SelectItem>
                  <SelectItem value="agric">Agric</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Additional Info */}
            <div className="space-y-2">
              <Label htmlFor="additionalInfo">
                Additional information (Optional)
              </Label>
              <Textarea
                id="additionalInfo"
                placeholder="Do you have any additional information for us?"
                className="min-h-[100px]"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
              />
            </div>

            {/* Submit */}
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
