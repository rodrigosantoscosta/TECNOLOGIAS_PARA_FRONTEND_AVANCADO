import './App.css'
import Title from './components'

import Home from './pages/home/Home'
import SimpleCounter from './SimpleCounter'

function App() {

  return (
    <>
      <div>
        Testando aplicação(isto roda em App.tsx numa div)
      </div>

      <Home />
      <Title title="Criando um titulo" />
      <SimpleCounter />
    </>
  )
}

export default App
