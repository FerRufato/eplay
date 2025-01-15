// src/models/Game.ts
class Game {
  category: string
  description: string
  image: string
  infos: string[]
  title: string
  system: string
  id: number

  constructor(
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    title: string,
    id: number
  ) {
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos // Padronizado com letra minúscula
    this.system = system
    this.title = title
    this.id = id
  }
}

export default Game
