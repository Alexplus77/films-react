import Stars from "components/stars";
import "App.css";

function App() {
  const count = 5;
  return (
    count > 5 ||
    count < 1 || (
      <div>
        <Stars count={count} />
      </div>
    )
  );
}

export default App;
