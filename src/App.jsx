import React from 'react';
import TodoList from './TodoList';

const App = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '40px' }}>
      <TodoList />
    </div>
  );
};

export default App;
