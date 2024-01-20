import './styles.scss';
import girl from '../../images/active-girl.png';

const Physical = () => {
  return (
    <div className='physical'>
      <h1 className="physical__title">Physical exercise</h1>
      <p className="physical__desc">
        Physical exercise means a lot for a woman who <br />
        wants to lose kilos and works at the office
      </p>
      <p className="physical__ask">
        How active are you during the day?
      </p>
      <div className="physical__content">
        <img src={girl} alt="Girl" />
        <div className="physical__block">
          <a href="/" className="physical__answer">
            Hardly at all
          </a>
          <a href="/" className="physical__answer">
            Fitness 1-2 <br />
            times a week
          </a>
          <a href="/" className="physical__answer">
            Fitness 3-5 <br />
            times a week
          </a>
          <a href="/" className="physical__answer">
            Fitness 5-7 <br />
            times a week
          </a>
        </div>
      </div>
    </div>
  )
}

export default Physical;
