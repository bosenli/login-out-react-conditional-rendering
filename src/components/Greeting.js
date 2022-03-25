import GuestGreeting from "./GuestGreeting"
import UserGreeting from "./UserGreeting"


// function Greeting() {
//     if (isLoggedIn){ // conditional render different components
//         return <UserGreeting/>
//     }
//     return <GuestGreeting/>
// }

// export default Greeting

export default function Greeting(props) {
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {
    return <UserGreeting />
  }
   return <GuestGreeting />
  }