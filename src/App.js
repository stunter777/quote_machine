import { logDOM } from "@testing-library/react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [info, setInfo] = useState({});
  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setInfo({
          text: data.content,
          author: data.author,
        });
        console.log(data);
      });
  };
  return (
    <div class="wrapper">
      <div className="App">
        <div id="quote-box" className="quote-box">
          <h3 id="head">Random Quote Machine!</h3>
          <p id="text">{info.text}</p>
          <p id="author">{info.author}</p>
          <div class="buttons">
            <button onClick={getQuote} id="new-quote" class="new-quote">
              New Quote
            </button>
            <a
              target="_blank"
              id="tweet-quote"
              href={"twitter.com/intent/tweet" + info.text + info.author}
            >
              <i>
                <img src="twitter.svg" className="twitter" />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
