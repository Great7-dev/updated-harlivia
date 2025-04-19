// import { ArrowRight } from "lucide-react"
// import { Link } from "react-router-dom"

// export default function Hero() {
//     return (
//         <section className="container mx-auto px-4 py-16 md:py-24">
//             <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
//                 <div className="w-full md:w-1/2 space-y-4">
//                     <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0E121B] dark:text-white">
//                         Driven by Purpose, Built for Impact
//                     </h2>
//                     <p className="text-[#525866] dark:text-white text-[24px]">
//                         We started with one idea: that Africans everywhere deserve more <br /> access. More dignity in where they live.
//                     </p>
//                     <Link
//                         to="#"
//                         className="inline-flex items-center text-[#005FB8] hover:text-[#005FB8] font-medium group transition-colors"
//                     >
//                         Read the story
//                         <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                     </Link>
//                 </div>
//                 <div className="w-full md:w-1/2">
//                     <div className="bg-gray-200 rounded-lg aspect-video w-full h-full">
//                         {/* Image placeholder - replace with your actual image */}
//                         <div className="w-full h-full flex items-center justify-center text-gray-400">
//                             <span className="sr-only">Featured image</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cards } from "../cards"; // Make sure this import path is correct

export default function Hero() {
  // Get the first blog post from the 'all' category
  const featuredPost = cards.all[0];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0E121B] dark:text-white">
            {featuredPost.title}
          </h2>
          <p className="text-[#525866] dark:text-white text-[24px]">
            {featuredPost.description}
          </p>
          <Link
            to={featuredPost.link}
            className="inline-flex items-center text-[#005FB8] hover:text-[#005FB8] font-medium group transition-colors"
          >
            Read the story
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-gray-200 rounded-lg aspect-video w-full h-full">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <span className="sr-only">Featured image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
