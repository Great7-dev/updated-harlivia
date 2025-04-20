"use client";

import { ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../ui/tabs";
import { Link } from "react-router-dom";
import { cards } from "../cards";

// Dummy data for tabs and cards
type TabValue = "all" | "marketing" | "company" | "resources";

const tabs: { label: string; value: TabValue }[] = [
  { label: "All", value: "all" },
  { label: "Marketing", value: "marketing" },
  { label: "Company", value: "company" },
  { label: "Resources", value: "resources" },
];

export default function TabSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8 bg-transparent p-0 h-auto space-x-6">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="data-[state=active]:bg-[#005FB8] data-[state=active]:text-white rounded-full px-4 py-2 text-sm font-medium"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cards[tab.value]?.length > 0 ? (
                cards[tab.value].map((card, index) => (
                  <div key={index} className="space-y-4">
                    <div className="bg-gray-200 rounded-lg aspect-video w-full" />
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-[#525866] dark:text-white">
                          {card.date}
                        </span>
                        <span className="text-sm text-[#005FB8] font-medium">
                          {card.category}
                        </span>
                      </div>
                      <h3 className="text-[40px] font-bold">{card.title}</h3>
                      <p className="text-[#525866] dark:text-white max-w-[600px]">
                        {card.description}
                      </p>
                      <Link
                        to={card.link}
                        className="inline-flex items-center text-[#005FB8] hover:text-blue-800 font-medium group transition-colors"
                      >
                        Read the story
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500 col-span-full">
                  No content available
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
