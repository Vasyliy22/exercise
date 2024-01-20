import React, { FC, useState } from 'react';
import Button from '../Button';
import './styles.scss';
import { TypeWeight } from '../../TypeWeight';

type Props = {
  onSubmit: (value: TypeWeight) => void,
  handleRedirect: () => void,
  setIsDisabled: (value: boolean) => void,
  data: TypeWeight,
  isDisabled: boolean,
}

const Weight: FC<Props> = ({ isDisabled, onSubmit, handleRedirect, setIsDisabled }) => {
  const [weight, setWeight] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');

  const handleChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value);
  }

  const handleChangeCurrentWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentWeight(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!weight || !currentWeight) {
      setIsDisabled(true);
      return;
    }

    setIsDisabled(false);
    onSubmit({ weight, currentWeight });
    setWeight('');
    setCurrentWeight('');
    handleRedirect();
  }

  return (
    <div className="weight">
      <div className="weight__content">
        <button className="weight__data weight__data--left">Imperial</button>
        <button className="weight__data weight__data--right">Metric</button>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <input
            placeholder="Height(ft)"
            value={weight}
            type="number"
            className="weight__choose"
            onChange={handleChangeWeight}
          />
        <input
          placeholder='Current Weight(ft)'
          value={currentWeight}
          type="number"
          className="weight__choose"
          onChange={handleChangeCurrentWeight}
        />

        <p className="weight__desc">
        <strong className='weight__title'>Measure Yourself</strong> <br />
        What are your height and body weight?
      </p>
        <Button disabled={!weight || !currentWeight ? !isDisabled : isDisabled}>Continue</Button>
      </form>
    </div>
  )
}

export default Weight;
