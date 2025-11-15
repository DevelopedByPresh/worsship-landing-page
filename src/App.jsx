import { useState } from 'react'
 import ChurchLandingPage from './components/church/ChurchLandingPage'
 import UserLandingPage from './components/user/UserLandingPage';



function App() {
    const [mode, setMode] = useState("church"); 


  return (
    <>

  <>
      {mode === "church" ? (
        <ChurchLandingPage mode={mode} setMode={setMode} />
      ) : (
        <UserLandingPage mode={mode} setMode={setMode} />
      )}
    </>








  



 
   

     
    </>
  )
}

export default App
