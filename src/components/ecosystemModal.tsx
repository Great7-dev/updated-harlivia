// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import prop from "../assets/light.jpeg";
// import cargo from "../assets/cargo.jpeg";
// import energy from "../assets/energy.jpeg";
// import agric from "../assets/agric.png";

// type EcosystemModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// export default function EcosystemModal({
//   isOpen,
//   onClose,
// }: EcosystemModalProps) {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
//       <div className="bg-white dark:bg-gray-900 w-full max-w-3xl rounded-lg shadow-lg overflow-y-auto max-h-[90vh] p-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-bold dark:text-white">
//             Explore Our Ecosystem
//           </h2>
//           <button
//             onClick={onClose}
//             className="text-gray-700 dark:text-white text-xl"
//           >
//             &times;
//           </button>
//         </div>

//         {/* All services listed */}
//         <div className="space-y-4">
//           {/* Properties */}
//           <Link
//             to="/properties"
//             onClick={onClose}
//             className="block py-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//           >
//             <div className="flex items-start gap-3">
//               <img src={prop} alt="Properties" className="w-6 h-6" />
//               <div>
//                 <div className="font-semibold text-base text-gray-900 dark:text-white">
//                   Properties
//                 </div>
//                 <div className="text-sm text-gray-500 dark:text-gray-400">
//                   We do more than just real estate, We create elevated living
//                   experiences.
//                 </div>
//               </div>
//             </div>
//           </Link>

//           {/* Cargo */}
//           <Link
//             to="/cargo"
//             onClick={onClose}
//             className="block py-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//           >
//             <div className="flex items-start gap-3">
//               <img src={cargo} alt="Cargo" className="w-6 h-6" />
//               <div>
//                 <div className="font-semibold text-base text-gray-900 dark:text-white">
//                   Cargo & Logistics
//                 </div>
//                 <div className="text-sm text-gray-500 dark:text-gray-400">
//                   Our expertise ensures your goods reach their destination
//                   safely and on time.
//                 </div>
//               </div>
//             </div>
//           </Link>

//           {/* Energy */}
//           <Link
//             to="/energy"
//             onClick={onClose}
//             className="block py-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//           >
//             <div className="flex items-start gap-3">
//               <img src={energy} alt="Energy" className="w-6 h-6" />
//               <div>
//                 <div className="font-semibold text-base text-gray-900 dark:text-white">
//                   Energy
//                 </div>
//                 <div className="text-sm text-gray-500 dark:text-gray-400">
//                   We meet energy needs of communities and industries today and
//                   in the future.
//                 </div>
//               </div>
//             </div>
//           </Link>

//           {/* Agric */}
//           <Link
//             to="/agric"
//             onClick={onClose}
//             className="block py-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//           >
//             <div className="flex items-start gap-3">
//               <img src={agric} alt="Agric" className="w-6 h-6" />
//               <div>
//                 <div className="font-semibold text-base text-gray-900 dark:text-white">
//                   Agric
//                 </div>
//                 <div className="text-sm text-gray-500 dark:text-gray-400">
//                   We bring you the finest in quality, taste, and satisfaction.
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import prop from "../assets/building-2-fill.svg";
import agric from "../assets/Grain SVG Icon 1.svg";
import energy from "../assets/sun.svg";
import cargo from "../assets/log.svg";

type EcosystemModalProps = {
  isOpen: boolean;
  onClose: () => void;
  prop?: string;
  cargo?: string;
  energy?: string;
  agric?: string;
};

export default function EcosystemModal({
  isOpen,
  onClose,
}: EcosystemModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 text-left">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Explore Our Ecosystem
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Ecosystem Links */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <Link
                to="/properties"
                className="block py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={onClose}
              >
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 pt-1">
                    <img
                      src={prop || "/placeholder.svg"}
                      alt="Properties Icon"
                      className="w-6 h-6"
                    />
                  </span>
                  <div>
                    <div className="font-medium text-base text-gray-900 dark:text-gray-100">
                      <h1>Properties</h1>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      We do more than just real estate, we create elevated
                      living experiences.
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                to="/cargo"
                className="block py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={onClose}
              >
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 pt-1">
                    <img
                      src={cargo || "/placeholder.svg"}
                      alt="Cargo Icon"
                      className="w-6 h-6"
                    />
                  </span>
                  <div>
                    <div className="font-medium text-base text-gray-900 dark:text-gray-100">
                      Cargo & Logistics
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Our expertise ensures that your goods reach their
                      destination safely and on time.
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                to="/energy"
                className="block py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={onClose}
              >
                <div className="flex items-start gap-3">
                  <span className="text-amber-500 dark:text-amber-400 pt-1">
                    <img
                      src={energy || "/placeholder.svg"}
                      alt="Energy Icon"
                      className="w-6 h-6"
                    />
                  </span>
                  <div>
                    <div className="font-medium text-base text-gray-900 dark:text-gray-100">
                      Energy
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      We meet energy needs of communities and industries today
                      and in the future.
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                to="/agric"
                className="block py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={onClose}
              >
                <div className="flex items-start gap-3">
                  <span className="text-green-500 dark:text-green-400 pt-1">
                    <img
                      src={agric || "/placeholder.svg"}
                      alt="Agric Icon"
                      className="w-6 h-6"
                    />
                  </span>
                  <div>
                    <div className="font-medium text-base text-gray-900 dark:text-gray-100">
                      Agric
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      We bring you the finest in quality, taste, and
                      satisfaction.
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
