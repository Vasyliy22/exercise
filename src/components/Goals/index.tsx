import Exercise from '../Exercise';
import './styles.scss';

const Goals = () => {
  return (
    <div className="goal">
      <div className="goal__banner">
        <p className="goal__description">
          <strong className='goal__title'>The Goal</strong><br />
          Focus on the health benefits you need.<br />
          Balanced nutrition will let you achieve them
        </p>
        <p className="goal__question"><strong>What are your goals?</strong></p>
      </div>
      <Exercise />
    </div>
  )
}

export default Goals;
