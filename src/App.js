import { LanguageProvider } from './components/Tools/LanguageProvider';
import { AppRouter } from './routers/AppRouters';

function App() {
  return (
    <LanguageProvider>
      <AppRouter />
    </LanguageProvider>
  );
}

export default App;
