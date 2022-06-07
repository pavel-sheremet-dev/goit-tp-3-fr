import LibraryPage from 'pages/LibraryPage';
import TrainingPage from 'pages/TrainingPage';
import Dashboard from './dashboard/Dashboard';

const Main = () => {
  return (
    <main>
      <LibraryPage/>
      <TrainingPage />
      <Dashboard />
    </main>
  );
};

export default Main;
