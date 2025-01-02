import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPlay } from 'react-icons/fa';
import TSPImage from '../../../../public/TSP.webp';
import 'tailwindcss/tailwind.css';

const TSP = () => {
    const [selectedSolution, setSelectedSolution] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('python');
    const [code, setCode] = useState('');
    const [benchmarkResults, setBenchmarkResults] = useState<any>(null);

    const currentProblem = {
        title: "Traveling Salesman Problem",
        description: "The Traveling Salesman Problem (TSP) is a classic optimization problem in computer science. Find the shortest path that visits all cities and returns to the origin.",
        imageUrl: TSPImage,
        solutions: [
            { id: 'greedy', name: 'Greedy Algorithm', complexity: 'O(n²)' },
            { id: 'genetic', name: 'Genetic Algorithm', complexity: 'O(n × generations)' },
            { id: 'dp', name: 'Dynamic Programming', complexity: 'O(n² × 2ⁿ)' },
            { id: 'branch', name: 'Branch and Bound', complexity: 'O(n!)' },
            { id: 'approx', name: 'Approximation Algorithm', complexity: 'O(n log n)' },
            { id: 'brute', name: 'Brute Force', complexity: 'O(n!)' }
        ]
    };

    const handleCodeSubmit = async () => {
        try {
            const response = await fetch('/api/benchmark', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ solutionId: selectedSolution, language: selectedLanguage, code })
            });
            const results = await response.json();
            setBenchmarkResults(results);
        } catch (error) {
            console.error('Benchmarking failed:', error);
        }
    };

    return (
        <div className="flex min-h-screen bg-gradient-to-r from-white via-blue-100 to-blue-200">
            {/* Sidebar with Tab Navigation */}
            <div className="w-1/4 bg-blue-800 p-6 text-white flex flex-col items-start">
                <h2 className="text-3xl font-bold mb-6">Algorithms</h2>
                {currentProblem.solutions.map((solution) => (
                    <motion.button
                        key={solution.id}
                        className={`w-full text-left p-4 rounded-md mb-4 text-lg hover:bg-orange-600 transition-colors duration-200 ${selectedSolution === solution.id ? 'bg-orange-600' : ''}`}
                        onClick={() => setSelectedSolution(solution.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {solution.name}
                    </motion.button>
                ))}
                <motion.button
                    className="w-full text-left p-4 rounded-md text-lg mt-4 hover:bg-orange-600 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSolution('submit')}
                >
                    <FaCode className="inline-block mr-2" /> Submit Code
                </motion.button>
            </div>

            {/* Content Area with Solution Display and Code Submission */}
            <div className="w-3/4 p-6 overflow-auto">
                {/* Solution Panels */}
                {selectedSolution !== 'submit' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto mb-10 text-gray-800"
                    >
                        <h2 className="text-4xl font-bold mb-4">{currentProblem.title}</h2>
                        <p className="text-lg mb-6">{currentProblem.description}</p>

                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">Visualizing {currentProblem.solutions.find(s => s.id === selectedSolution)?.name}</h3>
                            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                                <p>Algorithm Animation for {currentProblem.solutions.find(s => s.id === selectedSolution)?.name}</p>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Code Submission Panel */}
                {selectedSolution === 'submit' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg"
                    >
                        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Submit Your Code</h3>

                        {/* Language Dropdown */}
                        <div className="mt-4">
                            <label htmlFor="language" className="block text-lg font-medium text-gray-700">Select Language</label>
                            <select
                                id="language"
                                value={selectedLanguage}
                                onChange={(e) => setSelectedLanguage(e.target.value)}
                                className="mt-2 block w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            >
                                <option value="python">Python</option>
                                <option value="cpp">C++</option>
                                <option value="java">Java</option>
                                <option value="go">Go</option>
                                <option value="javascript">JavaScript</option>
                                <option value="ruby">Ruby</option>
                                <option value="swift">Swift</option>
                                <option value="csharp">C#</option>
                                <option value="rust">Rust</option>
                                <option value="typescript">TypeScript</option>
                                <option value="php">PHP</option>
                                <option value="kotlin">Kotlin</option>
                            </select>
                        </div>

                        <textarea
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full h-64 p-4 border rounded-lg bg-gray-50 font-mono text-sm mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Paste your code here..."
                        />
                        <button
                            onClick={handleCodeSubmit}
                            className="mt-6 w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transform transition-all duration-300"
                        >
                            <FaPlay className="inline-block mr-2" /> Run Benchmark
                        </button>

                        {/* Benchmark Results */}
                        {benchmarkResults && (
                            <div className="mt-6 bg-gray-100 p-6 rounded-lg">
                                <h3 className="text-2xl font-semibold text-gray-800">Benchmark Results</h3>
                                <pre className="bg-gray-100 p-6 rounded-lg overflow-x-auto text-sm text-gray-700">
                                    {JSON.stringify(benchmarkResults, null, 2)}
                                </pre>
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default TSP;
