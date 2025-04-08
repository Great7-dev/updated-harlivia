import { Separator } from "../../ui/separator";

const Policy = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Table of Contents - Sidebar */}
                <aside className="w-full md:w-64 shrink-0 bg-[#F9F9F9] dark:bg-gray-700 p-4 md:py-2 h-72">
                    <div className="sticky top-8">
                        <h2 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 mb-4 tracking-wide">
                            Table of Contents
                        </h2>
                        <nav className="flex flex-col space-y-2">
                            <a href="#intro" className="text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
                                Header copy
                            </a>
                            <a href="#developers" className="text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
                                Header copy
                            </a>
                            <a href="#what-we-do" className="text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
                                Header copy
                            </a>
                            <a href="#build" className="text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
                                Header copy
                            </a>
                            <a href="#manage" className="text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
                                Header copy
                            </a>
                            <a href="#shortcuts" className="text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
                                Header copy
                            </a>
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    <article className="prose prose-gray dark:prose-invert max-w-none">
                        <h1 className="text-3xl font-semibold mb-2 dark:text-white">Privacy Policy</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Last updated: April 9th, 2025</p>

                        <Separator className="mb-6" />

                        <section id="intro" className="mb-10">
                            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
                                Harlivia Properties – Redefining Luxury, One Home at a Time
                                At Harlivia Properties, we don’t just deal in real estate—we bring homes to life.
                                We’re builders, creators, and visionaries who take an empty plot of land and turn it into something worth living in, worth investing in, and worth calling home.
                                Whether you want to own a property, develop one from scratch, or find a shortlet that feels like home, we’re here to make that happen.
                            </p>
                        </section>

                        <section id="what-we-do" className="mb-10">
                            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
                                What We Do <br />
                                We Build from the Ground Up - We don’t resell properties that others have built—we construct them ourselves.
                                Every brick, every fixture, and every finish is carefully thought out to ensure top-tier quality, durability, and style.
                                Whether it’s a luxurious home, a smart investment property, or a commercial space, we handle everything from design to development, so you know exactly what you’re getting.
                                We Sell Homes & Investments - Property buying shouldn’t feel like a gamble.
                                We develop and sell high-value real estate that offers real returns—whether you’re looking for a dream home or a smart investment.
                                We don’t just sell properties; we ensure they’re worth your money, time, and future.
                                We Manage Shortlets - If you’re looking for a comfortable, well-maintained short-term stay, we’ve got you covered.
                                Whether you’re in town for a few days, a few weeks, or longer, our shortlets are designed to offer privacy, convenience, and a touch of luxury—without the headaches of hotels or unreliable hosts.
                            </p>
                        </section>
                    </article>
                </main>
            </div>
        </div>
    );
};

export default Policy;
