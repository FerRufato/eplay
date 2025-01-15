import { ButtonContainer, ButtonLink } from './styles'

type ButtonProps = {
  type: 'Button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children?: string
}

const Button = ({ type, title, to, onClick, children }: ButtonProps) => {
  if (type === 'Button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} onClick={onClick}>
      {children}
    </ButtonLink>
  )
}

export default Button
