import { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Counter() {
  const [count, setCount] = useState(0);
  useDocumentTitle(`Count: ${count}`);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <div className="p-8 rounded-2xl bg-white bg-opacity-10 backdrop-blur-lg shadow-2xl border border-white border-opacity-20">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
            Counter
          </h1>
          <div className="mt-4 text-6xl font-mono font-bold text-white">
            {count}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">

           <button
            className="px-6 py-3 font-bold rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-yellow-500/50"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button
            className="px-6 py-3 font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-cyan-500/50"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          
         
          
          <button
            className="px-6 py-3 font-bold rounded-xl bg-gradient-to-r from-rose-500 to-red-500 text-white shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-red-500/50"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Counter;