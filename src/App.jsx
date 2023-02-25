import { BrowserRouter as Router} from 'react-router-dom'
import Layout from './layout/Layout'
import Rutas from './routes/Rutas'

function App() {


  return (
    <>
      <Router>
        <Layout>
          <Rutas/>
        </Layout>
      </Router>
    </>
  )
}

export default App
