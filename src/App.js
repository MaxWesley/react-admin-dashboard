import Sidebar from './components/Sidebar'
import Card from './components/Card'

import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Sidebar />
      <div className="Main">
        <div className="cards-container">
          <Card type="small" color="#6150c4" icon="" text="Brenin" subText="Rodrigues" />
          <Card type="small" color="#ff0062" icon="" text="Brenin" subText="Rodrigues" />
          <Card type="small" color="#006eff" icon="" text="Brenin" subText="Rodrigues" />
        </div>

        <div className="cards-container">
          <Card
            type="large"
            color="#6150c4"
            title="Tabela de alguma coisa"
            text="Brenin"
            subText="Rodrigues" />
        </div>
      </div>
    </div>
  );
}

export default App;
