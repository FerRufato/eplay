import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e, diferentemente de seus antecessores, ação-aventura e tiro em terceira pessoa, desenvolvido e lançado pela Capcom.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil Village segue a história de Ethan Winters enquanto enfrenta novos horrores.',
    title: 'Resident Evil Village',
    system: 'PlayStation',
    infos: ['15%', 'R$ 200,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 3 é um remake do clássico jogo de survival horror.',
    title: 'Resident Evil 3',
    system: 'Windows',
    infos: ['20%', 'R$ 180,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 2 é um jogo que redefiniu o gênero survival horror.',
    title: 'Resident Evil 2',
    system: 'Windows',
    infos: ['25%', 'R$ 150,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo 4 é um RPG de ação para computador desenvolvido pela Blizzard Entertainment, o terceiro título da série Diablo.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'Aventura',
    description:
      'The Legend of Zelda é uma franquia icônica de RPG e aventura criada pela Nintendo.',
    title: 'Zelda',
    system: 'Nintendo Switch',
    infos: ['20/06'],
    image: zelda
  },
  {
    id: 7,
    category: 'Ficção Científica',
    description:
      'Star Wars é um RPG de ação baseado no universo icônico criado por George Lucas.',
    title: 'Star Wars',
    system: 'PlayStation',
    infos: ['05/07'],
    image: starWars
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo III é um RPG de ação para computador desenvolvido pela Blizzard Entertainment, o terceiro título da série Diablo.',
    title: 'Diablo III',
    system: 'Windows',
    infos: ['10/08'],
    image: diablo
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
