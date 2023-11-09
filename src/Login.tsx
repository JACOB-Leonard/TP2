import './Login.css'
import Bowser from '../public/bowser.webp'
import { Button } from './design/Button'

function Login({connectUser}:{connectUser: ()=>void}) {

  return (
    <div className="cube">
        <div className='elypse'>
            <img src={Bowser} className='bowser'></img>
        </div>
        <p className='loginText'>Hey pas si vite ! Vous n'êtes pas connecté !</p>
        <Button onClick={connectUser}>Se connecter</Button>
    </div>
  )
}

export default Login