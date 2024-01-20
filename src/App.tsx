import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.scss';
import Destructive from './components/Destructive';
import Weight from './components/Weight';
import Goals from './components/Goals';
import Header from './components/Header';
import Physical from './components/Physical';
import { useState } from 'react';
import { TypeWeight } from './TypeWeight';

function App() {
  const [data, setData] = useState<TypeWeight>({} as TypeWeight);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (value: TypeWeight) => {
    setData((prev) => {
      return {...prev, value };
    });
  }

  const handleRedirect = () => {
    navigate('/destructive');
  }

  const handleRedirectDestructive = () => {
    navigate('/physical');
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Goals />} />
          <Route path='/weight'
            element={
              <Weight
                onSubmit={onSubmit}
                data={data}
                handleRedirect={handleRedirect}
                isDisabled={isDisabled}
                setIsDisabled={setIsDisabled}
              />
            }
          />
          <Route path='/destructive' element={<Destructive handleRedirectDestructive={handleRedirectDestructive} />} />
          <Route path='/physical' element={<Physical />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
