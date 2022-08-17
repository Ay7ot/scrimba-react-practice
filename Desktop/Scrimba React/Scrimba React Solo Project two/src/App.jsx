import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './components/data'

function App() {

  const destination = data.map(places => {
    return <Card key={places.id} {...places}/>
  });

  return (
    <div className='app'>
      <div className="container">
        <Navbar />
        <div>
          {destination}
        </div>
      </div>
    </div>
  )
}

export default App
