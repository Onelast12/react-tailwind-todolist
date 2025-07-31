import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { text: input, done: false }]);
      setInput('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg bg-gradient-to-l from-gray-800 to-sky-500">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">To Do List</h1>
      <div className="flex gap-2 mb-4 sm:flex-col">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black focus:text-white"
          placeholder="Tambahkan tugas..."
          value={input}
          maxLength={25}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Tambah
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 rounded px-4 py-2 capitalize"
          >
            <span
              className={`flex-1 ${
                todo.done ? 'line-through text-gray-400' : ''
              } cursor-pointer`}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(index)}
              className="text-red-500 hover:text-red-700 ml-4"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
