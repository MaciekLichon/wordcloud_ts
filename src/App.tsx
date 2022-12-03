import { useState } from 'react';

import Container from './components/Container/Container';
import Game from './components/Game/Game';
import Home from './components/Home/Home';
import Result from './components/Result/Result';


const App: React.FC = () => {
  
  const [user, setUser] = useState<string>('');
  const [score, setScore] = useState<number | undefined>();

  return (
    <Container>
      { !user && <Home setUser={setUser} /> }
      { (user && score === undefined) && <Game setScore={setScore} /> }
      { (user && score !== undefined) && <Result user={user} score={score} setScore={setScore} /> }
    </Container>
  );
};

export default App;
