import { Link } from 'react-router-dom';
import './styles.scss';
import image from '../../images/image-1.png';
import image2 from '../../images/image-2.png';
import image3 from '../../images/image-3.png';
import image4 from '../../images/image-4.png';

const Exercise = () => {
  return (
    <div className="exercise">
      <div className="exercise__content">
        <Link to='/weight' className="exercise__name">
          <img className='exercise__image' src={image} alt="Gool" />
        </Link>
        <Link to='/weight' className="exercise__name">
          <img className='exercise__image' src={image2} alt="Gool" />
        </Link>
      </div>
      <div className="exercise__content">
        <Link to='/weight' className="exercise__name">
          <img className='exercise__image' src={image3} alt="Gool" />
        </Link>
        <Link to='/weight' className="exercise__name">
          <img className='exercise__image' src={image4} alt="Gool" />
        </Link>
      </div>
    </div>
  )
}

export default Exercise;
