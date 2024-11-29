


import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import CurrentTime from './components/ClockTime'

function App() {
  

  return (
    <>
      <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
      </center>
    </>
  )
}

export default App
