import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>🔧 برنامج الصيانة</h1>
      <p>مرحبا بك، الواجهة تعمل الآن على React 🚀</p>
      <button onClick={() => alert("تم الضغط على الزر!")}>
        اضغط هنا
      </button>
    </div>
  );
}

export default App;
