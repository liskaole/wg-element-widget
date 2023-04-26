import style from './App.module.css';
import Widget from './Widget';

function App() {
  return (
    <div className={style.app}>
      <header className={style.appHeader}>
        <h3>Select Items</h3>
      </header>

      <main>
        <Widget />
      </main>
    </div>
  );
}

export default App;
