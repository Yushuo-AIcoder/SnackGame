import { useSnakeGame } from '../hooks/useSnakeGame';

const SnakeGame = () => {
  const {
    snake,
    food,
    score,
    gameOver,
    isPlaying,
    gameSpeed,
    boardSize,
    startGame,
    pauseGame,
    resetGame,
    changeSpeed,
  } = useSnakeGame();

  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < boardSize; row++) {
      for (let col = 0; col < boardSize; col++) {
        const isSnake = snake.some(segment => segment.x === col && segment.y === row);
        const isFood = food.x === col && food.y === row;
        const isHead = snake[0]?.x === col && snake[0]?.y === row;

        let cellClass = 'w-6 h-6 border border-gray-300 transition-all duration-100';
        
        if (isSnake) {
          if (isHead) {
            cellClass += ' bg-green-600 rounded-sm';
          } else {
            cellClass += ' bg-green-400 rounded-sm';
          }
        } else if (isFood) {
          cellClass += ' bg-red-500 rounded-full';
        } else {
          cellClass += ' bg-gray-100 hover:bg-gray-200';
        }

        board.push(
          <div
            key={`${row}-${col}`}
            className={cellClass}
          />
        );
      }
    }
    return board;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">贪吃蛇游戏</h1>
          <div className="flex justify-center items-center gap-8 mb-4">
            <div className="text-xl font-semibold text-blue-600">
              分数: <span className="text-2xl">{score}</span>
            </div>
            {gameOver && (
              <div className="text-xl font-bold text-red-600">
                游戏结束！
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div 
            className="grid gap-1 p-4 bg-gray-50 rounded-xl shadow-inner"
            style={{ 
              gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))`,
              width: 'fit-content'
            }}
          >
            {renderBoard()}
          </div>

          <div className="flex gap-4 flex-wrap justify-center mb-6">
          {!isPlaying && !gameOver && (
            <button
              onClick={startGame}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
            >
              开始游戏
            </button>
          )}
          
          {isPlaying && (
            <button
              onClick={pauseGame}
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
            >
              暂停游戏
            </button>
          )}
          
          <button
            onClick={resetGame}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
          >
            重新开始
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <label className="text-gray-700 font-medium">游戏速度:</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => changeSpeed(250)}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                gameSpeed === 250 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              disabled={isPlaying}
            >
              慢速
            </button>
            <button
              onClick={() => changeSpeed(150)}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                gameSpeed === 150 
                  ? 'bg-yellow-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              disabled={isPlaying}
            >
              正常
            </button>
            <button
              onClick={() => changeSpeed(80)}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                gameSpeed === 80 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              disabled={isPlaying}
            >
              快速
            </button>
            <button
              onClick={() => changeSpeed(40)}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                gameSpeed === 40 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              disabled={isPlaying}
            >
              极速
            </button>
          </div>
        </div>

          <div className="text-center text-gray-600 max-w-md">
            <p className="mb-2">🎮 使用方向键控制蛇的移动</p>
            <p className="text-sm">
              吃到红色食物获得分数，避免撞墙和撞到自己的身体
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;