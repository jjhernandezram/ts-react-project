import { Suspense } from 'react';
import { Navigation } from './routes/Navigation';

function App() {
  return (
    <>
      <Suspense fallback={<>Loading</>}>
        <Navigation />
      </Suspense>
    </>
  );
}

export default App;
