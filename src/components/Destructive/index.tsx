import Button from '../Button';
import './styles.scss';
import image from '../../images/destructive/image-1.png';
import image1 from '../../images/destructive/image-2.png';
import image2 from '../../images/destructive/image-3.png';
import image3 from '../../images/destructive/image-4.png';
import image4 from '../../images/destructive/image-5.png';
import image5 from '../../images/destructive/image-6.png';
import { FC, useState } from 'react';

type Prop = {
  restEnough?: string,
  soda?: string,
  tooth?: string,
  snacks?: string,
  saltyFood?: string,
  none?: string,
}

type Props = {
  handleRedirectDestructive: () => void;
}

const Destructive: FC<Props> = ({ handleRedirectDestructive }) => {
  const [data, setData] = useState<Prop>({});
  const [restEnough, setRestEnough] = useState('');
  const [soda, setSoda] = useState('');
  const [tooth, setTooth] = useState('');
  const [snacks, setSnacks] = useState('');
  const [saltyFood, setSaltyFood] = useState('');
  const [none, setNone] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (value: Prop) => {
    setData((prev) => {
      return {...prev, value };
    });
  }

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      restEnough,
      soda,
      tooth,
      snacks,
      saltyFood,
      none,
    }

    if (!restEnough && !soda && !tooth && !snacks && !saltyFood && !none) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
    handleSubmit(data);
    setSoda('');
    handleRedirectDestructive();
  }

  console.log(data);


  return (
    <div className='destructive'>
      <h1 className="destructive__title">Destructive Behaviors</h1>
      <p className="destructive__ask">
        We all have them! Which are yours?
      </p>
          <form onSubmit={onSubmit}>
            <div className="destructive__content">
              <div className="destructive__block">
                <label className='destructive__label' htmlFor="1">
                  <img className="destructive__image" src={image} alt="image1" />
                  I don`t rest <br /> enough
                  <input
                    className='destructive__answer'
                    value='I don`t rest enough'
                    name='restEnough'
                    type="checkbox"
                    id='1'
                    onChange={({ target }) => setRestEnough(target.value)}
                  />
                </label>
                
                <label className='destructive__label' htmlFor="2">
                  <img className="destructive__image" src={image1} alt="image1" />
                  I have too <br /> much soda
                  <input
                    className='destructive__answer'
                    value='I have too much soda'
                    type="checkbox"
                    id='2'
                    onChange={({ target }) => setSoda(target.value)}
                  />
                </label>
                <label className='destructive__label' htmlFor="3">
                  <img className="destructive__image" src={image2} alt="image1" />
                  I enjoy <br /> midnight <br /> snacks
                  <input
                    className='destructive__answer'
                    value='I enjoy midnight snacks'
                    type="checkbox"
                    id='3'
                    onChange={({ target }) => setSnacks(target.value)}
                  />
                </label>
              </div>

              <div className="destructive__block">
                <label className='destructive__label' htmlFor="4">
                  <img className="destructive__image" src={image3} alt="image1"  />
                  I have a sweet <br /> tooth
                  <input
                    className='destructive__answer'
                    value='I have a sweet tooth'
                    type="checkbox"
                    id='4'
                    onChange={({ target }) => setTooth(target.value)}
                  />
                </label>
                <label className='destructive__label' htmlFor="5">
                  <img className="destructive__image" src={image4} alt="image1" />
                  I eat many <br /> salty foods
                  <input
                    className='destructive__answer'
                    value='I eat many salty foods'
                    type="checkbox"
                    id='5'
                    onChange={({ target }) => setSaltyFood(target.value)}
                  />
                </label>
                <label className='destructive__label' htmlFor="6">
                  <img className="destructive__image" src={image5} alt="image1" />
                  None of the <br /> above
                  <input
                    className='destructive__answer'
                    value='None of the above'
                    type="checkbox"
                    id='6'
                    onChange={({ target }) => setNone(target.value)}
                  />
                </label>
              </div>
            </div>
          <Button
            disabled={
              !restEnough && !soda && !tooth && !snacks && !saltyFood && !none
                ? !disabled
                : disabled}
          >
            Continue
          </Button>
          </form>
      
    </div>
  )
}

export default Destructive;
