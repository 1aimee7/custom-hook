import { useState } from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';

function Counter() {
  const [count, setCount] = useState(0);
  useDocumentTitle(`Count: ${count}`);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="p-10 bg-white rounded-2xl shadow-xl transform transition-all duration-300 hover:shadow-2xl">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
            Counter
          </h1>
          
          <div className="relative mb-10 mt-4">
            <div className="text-7xl font-bold text-gray-800 transition-all duration-300 transform">
              {count}
            </div>
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              className="px-6 py-3 text-lg font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transform transition-all duration-200 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onClick={() => setCount(count - 1)}
            >
              Decrement
            </button>
            
            <button
              className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transform transition-all duration-200 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setCount(count + 1)}
            >
              Increment
            </button>
            
            <button
              className="px-6 py-3 text-lg font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transform transition-all duration-200 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-sm text-gray-500">
        Click the buttons to change the counter value
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;