import { useState } from 'react'

function App() {
  const [text, setText] = useState('This is the original Text');
  const changeColorAndText = () => {
    setText('The text has changed!');
  }

  return (
    <main className="grid place-items-center place-content-center h-screen">
      <p className={text.includes('original') ? 'text-slate-900' : 'text-red-600'}>
        {text}
      </p>
      <button
        className="bg-teal-100 p-2 rounded border border-blue-300 font-semibold text-teal-700 shadow"
        onClick={changeColorAndText}
      >
        Change Text and Color
      </button>
    </main>
  )
}

export default App
