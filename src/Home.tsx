import './Home.css'
import { Button } from './design/Button'
import characters from "./assets/characters.json"
import styled from '@emotion/styled'

function Home({connectUser}:{connectUser: ()=>void}) {

    const Grid = styled("div")`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-template-areas:
            "c1 c2 c3 c3"
            "c4 c4 c3 c3"
            "c5 c6 c7 c8";
    `

  return (
    <div>
  <Button onClick={connectUser}>Se déconnecter</Button>
  <Grid>
    {characters.map((character, index) => {
      return (
        <div className={"classe"+index} id='div'>
          <img src={character.imageUrl} width={40} height={40} alt={character.name} />
          <p>{character.name}</p>
          <p>{character.description}</p>
        </div>
      );
    })}
  </Grid>
</div>
  )
}

export default Home