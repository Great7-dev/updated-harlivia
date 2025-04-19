// "use client";

// import { ArrowRight } from "lucide-react";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../ui/tabs";
// import { Link } from "react-router-dom";

// export default function TabSection() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Tabs defaultValue="all" className="w-full">
//         <TabsList className="mb-8 bg-transparent p-0 h-auto space-x-6">
//           <TabsTrigger
//             value="all"
//             className="data-[state=active]:bg-[#005FB8] data-[state=active]:text-white rounded-full px-4 py-2 text-sm font-medium"
//           >
//             All
//           </TabsTrigger>
//           <TabsTrigger
//             value="marketing"
//             className="data-[state=active]:bg-[#005FB8] data-[state=active]:text-white rounded-full px-4 py-2 text-sm font-medium"
//           >
//             Marketing
//           </TabsTrigger>
//           <TabsTrigger
//             value="company"
//             className="data-[state=active]:bg-[#005FB8] data-[state=active]:text-white rounded-full px-4 py-2 text-sm font-medium"
//           >
//             Company
//           </TabsTrigger>
//           <TabsTrigger
//             value="resources"
//             className="data-[state=active]:bg-[#005FB8] data-[state=active]:text-white rounded-full px-4 py-2 text-sm font-medium"
//           >
//             Resources
//           </TabsTrigger>
//         </TabsList>

//         <TabsContent value="all" className="mt-0">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* First Card */}
//             <div className="space-y-4">
//               <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-[#525866]">20 Dec, 2025</span>
//                   <span className="text-sm text-[#005FB8] font-medium">
//                     Marketing
//                   </span>
//                 </div>
//                 <h3 className="text-[40px] font-bold">
//                   Driven by Purpose, Built for Impact
//                 </h3>
//                 <p className="text-[#525866] dark:text-white max-w-[600px]">
//                   We started with one idea: that Africans everywhere deserve
//                   more access. More dignity in where they live.
//                 </p>
//                 <Link
//                   to="#"
//                   className="inline-flex items-center text-[#005FB8] hover:text-blue-800 font-medium group transition-colors"
//                 >
//                   Read the story
//                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             </div>

//             {/* Second Card */}
//             <div className="space-y-4">
//               <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-[#525866]">20 Dec, 2025</span>
//                   <span className="text-sm text-[#005FB8] font-medium">
//                     Marketing
//                   </span>
//                 </div>
//                 <h3 className="text-[40px] font-bold">
//                   Driven by Purpose, Built for Impact
//                 </h3>
//                 <p className="text-[#525866] dark:text-white max-w-[600px]">
//                   We started with one idea: that Africans everywhere deserve
//                   more access. More dignity in where they live.
//                 </p>
//                 <Link
//                   to="#"
//                   className="inline-flex items-center text-[#005FB8] hover:text-blue-800 font-medium group transition-colors"
//                 >
//                   Read the story
//                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             </div>

//             {/* Second Card */}
//             <div className="space-y-4">
//               <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-[#525866]">20 Dec, 2025</span>
//                   <span className="text-sm text-[#005FB8] font-medium">
//                     Marketing
//                   </span>
//                 </div>
//                 <h3 className="text-[40px] font-bold">
//                   Driven by Purpose, Built for Impact
//                 </h3>
//                 <p className="text-[#525866] dark:text-white max-w-[600px]">
//                   We started with one idea: that Africans everywhere deserve
//                   more access. More dignity in where they live.
//                 </p>
//                 <Link
//                   to="#"
//                   className="inline-flex items-center text-[#005FB8] hover:text-blue-800 font-medium group transition-colors"
//                 >
//                   Read the story
//                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             </div>

//             {/* Second Card */}
//             <div className="space-y-4">
//               <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-[#525866]">20 Dec, 2025</span>
//                   <span className="text-sm text-[#005FB8] font-medium">
//                     Marketing
//                   </span>
//                 </div>
//                 <h3 className="text-[40px] font-bold">
//                   Driven by Purpose, Built for Impact
//                 </h3>
//                 <p className="text-[#525866] dark:text-white max-w-[600px]">
//                   We started with one idea: that Africans everywhere deserve
//                   more access. More dignity in where they live.
//                 </p>
//                 <Link
//                   to="#"
//                   className="inline-flex items-center text-[#005FB8] hover:text-blue-800 font-medium group transition-colors"
//                 >
//                   Read the story
//                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </TabsContent>

//         <TabsContent value="marketing" className="mt-0">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Marketing content cards would go here - similar structure */}
//             <div className="space-y-4">
//               <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-[#525866]">15 Dec, 2025</span>
//                   <span className="text-sm text-[#005FB8] font-medium">
//                     Marketing
//                   </span>
//                 </div>
//                 <h3 className="text-[40px] font-bold">
//                   Marketing Strategies for Growth
//                 </h3>
//                 <p className="text-[#525866] dark:text-white max-w-[600px]">
//                   Effective marketing strategies that have helped businesses
//                   across Africa grow and reach new audiences.
//                 </p>
//                 <Link
//                   to="#"
//                   className="inline-flex items-center text-[#005FB8] hover:text-blue-800 font-medium group transition-colors"
//                 >
//                   Read the story
//                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-[#525866]">15 Dec, 2025</span>
//                   <span className="text-sm text-[#005FB8] font-medium">
//                     Marketing
//                   </span>
//                 </div>
//                 <h3 className="text-[40px] font-bold">
//                   Marketing Strategies for Growth
//                 </h3>
//                 <p className="text-[#525866] dark:text-white max-w-[600px]">
//                   Effective marketing strategies that have helped businesses
//                   across Africa grow and reach new audiences.
//                 </p>
//                 <Link
//                   to="#"
//                   className="inline-flex items-center text-[#005FB8] hover:text-blue-800 font-medium group transition-colors"
//                 >
//                   Read the story
//                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-[#525866]">15 Dec, 2025</span>
//                   <span className="text-sm text-[#005FB8] font-medium">
//                     Marketing
//                   </span>
//                 </div>
//                 <h3 className="text-[40px] font-bold">
//                   Marketing Strategies for Growth
//                 </h3>
//                 <p className="text-[#525866] dark:text-white max-w-[600px]">
//                   Effective marketing strategies that have helped businesses
//                   across Africa grow and reach new audiences.
//                 </p>
//                 <Link
//                   to="#"
//                   className="inline-flex items-center text-[#005FB8] hover:text-blue-800 font-medium group transition-colors"
//                 >
//                   Read the story
//                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-[#525866]">15 Dec, 2025</span>
//                   <span className="text-sm text-[#005FB8] font-medium">
//                     Marketing
//                   </span>
//                 </div>
//                 <h3 className="text-[40px] font-bold">
//                   Marketing Strategies for Growth
//                 </h3>
//                 <p className="text-[#525866] dark:text-white max-w-[600px]">
//                   Effective marketing strategies that have helped businesses
//                   across Africa grow and reach new audiences.
//                 </p>
//                 <Link
//                   to="#"
//                   className="inline-flex items-center text-[#005FB8] hover:text-blue-800 font-medium group transition-colors"
//                 >
//                   Read the story
//                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </TabsContent>

//         <TabsContent value="company" className="mt-0">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Company content would go here */}
//             <div className="space-y-4">
//               <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-[#525866]">10 Dec, 2025</span>
//                   <span className="text-sm text-[#005FB8] font-medium">
//                     Company
//                   </span>
//                 </div>
//                 <h3 className="text-[40px] font-bold">Our Company Journey</h3>
//                 <p className="text-[#525866] dark:text-white max-w-[600px]">
//                   The story of how we built our company with a focus on creating
//                   positive impact across Africa.
//                 </p>
//                 <Link
//                   to="#"
//                   className="inline-flex items-center text-[#005FB8] hover:text-blue-800 font-medium group transition-colors"
//                 >
//                   Read the story
//                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-[#525866]">10 Dec, 2025</span>
//                   <span className="text-sm text-[#005FB8] font-medium">
//                     Company
//                   </span>
//                 </div>
//                 <h3 className="text-[40px] font-bold">Our Company Journey</h3>
//                 <p className="text-[#525866] dark:text-white max-w-[600px]">
//                   The story of how we built our company with a focus on creating
//                   positive impact across Africa.
//                 </p>
//                 <Link
//                   to="#"
//                   className="inline-flex items-center text-[#005FB8] hover:text-blue-800 font-medium group transition-colors"
//                 >
//                   Read the story
//                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-[#525866]">10 Dec, 2025</span>
//                   <span className="text-sm text-[#005FB8] font-medium">
//                     Company
//                   </span>
//                 </div>
//                 <h3 className="text-[40px] font-bold">Our Company Journey</h3>
//                 <p className="text-[#525866] dark:text-white max-w-[600px]">
//                   The story of how we built our company with a focus on creating
//                   positive impact across Africa.
//                 </p>
//                 <Link
//                   to="#"
//                   className="inline-flex items-center text-[#005FB8] hover:text-blue-800 font-medium group transition-colors"
//                 >
//                   Read the story
//                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-[#525866]">10 Dec, 2025</span>
//                   <span className="text-sm text-[#005FB8] font-medium">
//                     Company
//                   </span>
//                 </div>
//                 <h3 className="text-[40px] font-bold">Our Company Journey</h3>
//                 <p className="text-[#525866] dark:text-white max-w-[600px]">
//                   The story of how we built our company with a focus on creating
//                   positive impact across Africa.
//                 </p>
//                 <Link
//                   to="#"
//                   className="inline-flex items-center text-[#005FB8] hover:text-blue-800 font-medium group transition-colors"
//                 >
//                   Read the story
//                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </TabsContent>

//         <TabsContent value="resources" className="mt-0">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Resources content would go here */}
//             <div className="space-y-4">
//               <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-[#525866]">5 Dec, 2025</span>
//                   <span className="text-sm text-[#005FB8] font-medium">
//                     Resources
//                   </span>
//                 </div>
//                 <h3 className="text-[40px] font-bold">Helpful Resources</h3>
//                 <p className="text-[#525866] dark:text-white max-w-[600px]">
//                   A collection of resources and tools to help businesses and
//                   individuals across Africa thrive.
//                 </p>
//                 <Link
//                   to="#"
//                   className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group transition-colors"
//                 >
//                   Read the story
//                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-[#525866]">5 Dec, 2025</span>
//                   <span className="text-sm text-[#005FB8] font-medium">
//                     Resources
//                   </span>
//                 </div>
//                 <h3 className="text-[40px] font-bold">Helpful Resources</h3>
//                 <p className="text-[#525866] dark:text-white max-w-[600px]">
//                   A collection of resources and tools to help businesses and
//                   individuals across Africa thrive.
//                 </p>
//                 <Link
//                   to="#"
//                   className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group transition-colors"
//                 >
//                   Read the story
//                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-[#525866]">5 Dec, 2025</span>
//                   <span className="text-sm text-[#005FB8] font-medium">
//                     Resources
//                   </span>
//                 </div>
//                 <h3 className="text-[40px] font-bold">Helpful Resources</h3>
//                 <p className="text-[#525866] dark:text-white max-w-[600px]">
//                   A collection of resources and tools to help businesses and
//                   individuals across Africa thrive.
//                 </p>
//                 <Link
//                   to="#"
//                   className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group transition-colors"
//                 >
//                   Read the story
//                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm text-[#525866]">5 Dec, 2025</span>
//                   <span className="text-sm text-[#005FB8] font-medium">
//                     Resources
//                   </span>
//                 </div>
//                 <h3 className="text-[40px] font-bold">Helpful Resources</h3>
//                 <p className="text-[#525866] dark:text-white max-w-[600px]">
//                   A collection of resources and tools to help businesses and
//                   individuals across Africa thrive.
//                 </p>
//                 <Link
//                   to="#"
//                   className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group transition-colors"
//                 >
//                   Read the story
//                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }

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

// const cards = {
//   all: [
//     {
//       date: "20 Dec, 2025",
//       category: "Marketing",
//       title: "Empowering Communities, Shaping Tomorrow",
//       description:
//         "Our journey is driven by the belief that every African deserves better access to opportunities and improved living standards.",
//       link: "/blog/empowering-communities",
//     },
//     {
//       date: "20 Dec, 2025",
//       category: "Company",
//       title: "Innovating for a Brighter Future",
//       description:
//         "At the core of our mission is the desire to bring change. We focus on innovative solutions that uplift communities across the continent.",
//       link: "/blog/innovating-for-a-brighter-future",
//     },
//     {
//       date: "20 Dec, 2025",
//       category: "Marketing",
//       title: "Building Bridges, Not Walls",
//       description:
//         "We are committed to creating opportunities for Africans everywhere to access what they deserve, from basic services to dignified living.",
//       link: "/blog/building-bridges",
//     },
//     {
//       date: "20 Dec, 2025",
//       category: "Marketing",
//       title: "Access for All: The Future Starts Now",
//       description:
//         "By focusing on empowerment and dignity, we aim to ensure that access to essential services is a right, not a privilege.",
//       link: "/blog/access-for-all",
//     },
//   ],
//   marketing: [
//     {
//       date: "15 Dec, 2025",
//       category: "Marketing",
//       title: "Marketing Strategies for Growth",
//       description:
//         "Effective marketing strategies that have helped businesses across Africa grow and reach new audiences.",
//       link: "/blog/marketing-strategies-growth",
//     },
//     {
//       date: "15 Dec, 2025",
//       category: "Marketing",
//       title: "Marketing Strategies for Growth",
//       description:
//         "Effective marketing strategies that have helped businesses across Africa grow and reach new audiences.",
//       link: "/blog/marketing-strategies-growth",
//     },
//     {
//       date: "15 Dec, 2025",
//       category: "Marketing",
//       title: "Marketing Strategies for Growth",
//       description:
//         "Effective marketing strategies that have helped businesses across Africa grow and reach new audiences.",
//       link: "/blog/marketing-strategies-growth",
//     },
//     {
//       date: "15 Dec, 2025",
//       category: "Marketing",
//       title: "Marketing Strategies for Growth",
//       description:
//         "Effective marketing strategies that have helped businesses across Africa grow and reach new audiences.",
//       link: "/blog/marketing-strategies-growth",
//     },
//   ],
//   company: [],
//   resources: [],
// };

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
