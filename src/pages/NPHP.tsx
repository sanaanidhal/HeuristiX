import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Card from "../components/Card.tsx";
import {
    Route,
    Network,
    Equal,
    Package,
    Hourglass,
} from "lucide-react";

const npHardProblems = [
    {
        id: "TSP",
        title: "Traveling Salesman Problem",
        description: "Find the shortest possible route that visits each city exactly once and returns to the original city",
        icon: Route,
        color: "bg-gradient-to-r from-cyan-500 to-blue-600", // Updated gradient
    },
    {
        id: "SAT",
        title: "Boolean Satisfiability Problem",
        description: "Determine if there exists an assignment of boolean values that makes a given boolean formula true",
        icon: Equal,
        color: "bg-gradient-to-r from-green-500 to-teal-600", // Updated gradient
    },
    {
        id: "GraphColoring",
        title: "Graph Coloring Problem",
        description: "Assign colors to graph vertices such that no two adjacent vertices share the same color",
        icon: Network,
        color: "bg-gradient-to-r from-purple-500 to-pink-600", // Updated gradient
    },
    {
        id: "Knapsack",
        title: "Knapsack Problem",
        description: "Select items with maximum total value while keeping total weight within a constraint",
        icon: Package,
        color: "bg-gradient-to-r from-orange-500 to-yellow-600", // Updated gradient
    },
    {
        id: "VRP",
        title: "Vehicle Routing Problem",
        description: "Optimize delivery routes for a fleet of vehicles serving multiple destinations",
        icon: Route,
        color: "bg-gradient-to-r from-red-500 to-yellow-700", // Updated gradient
    },
    {
        id: "JSSP",
        title: "Job Shop Scheduling Problem",
        description: "Schedule jobs on machines to minimize total completion time",
        icon: Hourglass,
        color: "bg-gradient-to-r from-pink-500 to-red-700", // Updated gradient
    },
];

const gifs = [
    "src/assets/theme/images/gifs/bin_pack.gif",
    "src/assets/theme/images/gifs/game_2048.gif",
    "src/assets/theme/images/gifs/mmst.gif",
    "src/assets/theme/images/gifs/tsp.gif",
];

const NPHP = () => {
    const [hoveredCard] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleCardClick = (probId: string) => {
        navigate(`/NPHP/${probId}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
                NP-Hard Problems Explorer
            </h1>

            {/* Carousel for GIFs with Abstract Aesthetic */}
            <div className="mb-12">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20} // Adjust the spacing between slides
                    slidesPerView={2} // Default to 2 slides
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // 1 slide for small screens
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3, // 2 slides for medium screens
                            spaceBetween: 15,
                        },
                        1690: {
                            slidesPerView: 4, // 3 slides for large screens
                            spaceBetween: 20,
                        },
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    className="w-full md:w-2/3 lg:w-1/2 mx-auto"
                >
                    {gifs.map((gif, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                                <img
                                    src={gif}
                                    alt={`GIF ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-50 z-10"
                                />
                                <div className="absolute bottom-4 left-4 z-20 text-white font-bold text-xl">
                                    GIF {index + 1}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Description */}
            <div className="w-full text-center mb-12">
                <p className="text-gray-600 text-lg">
                    Explore the visual representations of NP-Hard problems in the carousel above. Each animation illustrates different challenges and complexities associated with these problems.
                </p>
            </div>

            {/* Problem Cards */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3 w-full max-w-8xl">
                    {npHardProblems.map((problem) => (
                        <Card
                            key={problem.id}
                            className={`relative ${problem.color} transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden rounded-xl shadow-md`}
                            onClick={() => handleCardClick(problem.id)} // Add click handler to navigate
                            header={
                                <div className="flex items-center justify-between">
                                    <problem.icon
                                        size={40}
                                        strokeWidth={1.5}
                                        className={`text-white transition-transform duration-300 ${hoveredCard === problem.id ? "rotate-12 scale-110" : ""}`}
                                    />
                                    <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
                                </div>
                            }
                            content={<p className="text-white">{problem.description}</p>}
                            footer={
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-white">Complexity:</span>
                                    <span
                                        className={`text-sm font-bold transition-colors duration-300 ${hoveredCard === problem.id
                                            ? "text-red-800"
                                            : "text-red-600"
                                            }`}
                                    ></span>
                                </div>
                            }
                        >
                            <div
                                className="absolute top-0 left-0 w-full h-full opacity-20 z-0"
                                style={{
                                    background: `radial-gradient(circle at center, 
                                        rgba(255,255,255,0.8) 0%, 
                                        rgba(0,0,0,0.1))`,
                                }}
                            />
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NPHP;
