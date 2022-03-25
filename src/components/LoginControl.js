import { useState } from 'react';
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'
import Greeting from './Greeting';


function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)//start with false as logout first
  //function change the state  
  const handleLoginClick = () => {
    setIsLoggedIn(true)
  }

  const handleLogoutClick = () => {
  setIsLoggedIn(false)
  }
  
  let button; //no value because want to reassign a value 

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick }/>
  } else {
    button = <LoginButton onClick={handleLoginClick} />
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  )
}


export default LoginControl