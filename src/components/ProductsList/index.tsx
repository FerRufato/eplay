import Game from '../../models/Game'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList: React.FC<Props> = ({ background, title, games }) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            title={game.title}
            image={game.image}
            description={game.description}
            infos={game.infos} // Padronizado com "infos"
            category={game.category}
            system={game.system}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
