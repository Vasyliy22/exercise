import { FC } from 'react';
import './styles.scss';

type Props = {
  children: string,
  onClick?: () => void,
  disabled?: boolean,
}

const Button: FC<Props> = ({ children, disabled, onClick }) => {
  return (
    <button onClick={onClick} type='submit' className="button" disabled={disabled}>
      {children}
    </button>
  )
}

export default Button;