import PropTypes from "prop-types";
import './App.css';
function App({ headline }) {
  return (
    <div className="App">
      <svg viewBox="0 0 800 300">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="50%" dy=".35em">{headline}</text>
        </symbol>
        <use class="text" href="#s-text"></use>
        <use class="text" href="#s-text"></use>
        <use class="text" href="#s-text"></use>
        <use class="text" href="#s-text"></use>
        <use class="text" href="#s-text"></use>
      </svg>
    </div>
  );
}

App.propTypes = {
  headline: PropTypes.string,
}

App.defaultProps = {
  headline: 'Hello World',
}

export default App;
