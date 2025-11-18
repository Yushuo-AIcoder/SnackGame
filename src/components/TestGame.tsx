import { useState } from 'react';

const TestGame = () => {
  const [score, setScore] = useState(0);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">贪吃蛇游戏测试</h1>
        <div className="mb-6">
          <p className="text-xl text-blue-600 mb-4">当前分数: {score}</p>
          <button 
            onClick={() => setScore(score + 10)}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 mr-4"
          >
            增加分数
          </button>
          <button 
            onClick={() => setScore(0)}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
          >
            重置分数
          </button>
        </div>
        <div className="text-gray-600">
          <p className="mb-2">🎮 游戏组件加载成功！</p>
          <p className="text-sm">如果看到这个页面，说明React应用正常运行</p>
        </div>
      </div>
    </div>
  );
};

export default TestGame;