import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />{' '}
    {/* Corrigido o "alt" para refletir o título */}
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag> {/* Corrigido para mostrar a variável category */}
    <Tag>{system}</Tag> {/* Corrigido para mostrar a variável system */}
    <Descricao>{description}</Descricao>{' '}
    {/* Corrigido para mostrar a variável description */}
  </Card>
)

export default Product
