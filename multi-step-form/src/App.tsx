import { useState } from 'react'
import Form from './components/form/Form'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Form />
    </div>
  )
}

export default App;
