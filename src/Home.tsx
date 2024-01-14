import styles from "./Home.module.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
        <link rel="stylesheet" href="Home.module.css" />
        <Helmet>
          <meta charSet="utf-8" />
          <title>QBuzzr - Home</title>
        </Helmet>
        <body>
          <img src="logos/logo_large.svg" className={styles.logo} />
          <a className={styles.play_now_btn} onClick={() => navigate("play")}>
            Play Now
          </a>
          <div className={styles.description}>
            <h1>Why QBuzzr?</h1>
            <h2>
              QBuzzr is simply the most sophisticated all-in-one QuizBowl
              practice tool. We aim to deliver the best practice experience with
              the help of our latest, hi-tech features that make the learning
              more effective and fun.
            </h2>
          </div>
          <h1>Our Features</h1>
          <div className={styles.features_container}>
            <div className={styles.one}>
              <h2>Advanced Categories</h2>
              <p>
                Want to prioritize a certain category over others? It's simple
                with our advanced categories. You can just change the
                percentages in one click.
              </p>
            </div>
            <div className={styles.two}>
              <h2>Text To Speech</h2>
              <p>
                Tired of reading? No worries. With built-in TTS functions, you
                can easily multitask, while playing QBuzzr. Enjoy countless
                varieties of voices that bring in a truly realistic experience.
              </p>
            </div>
            <div className={styles.three}>
              <h2>Multi Search</h2>
              <p>
                Utilize a variety of sources, including our extensive question
                database and popular sites like Google and Wikipedia. Or
                leverage our AI's capabilities to instantly find the information
                you need most.
              </p>
            </div>
            <div className={styles.four}>
              <h2>Super Customizable</h2>
              <p>
                QBuzzr is built with users in mind. This means you can adjust
                almost anything to your own preference including: question
                sorting, keyboard shortcuts, and even themes.
              </p>
            </div>
            <div className={styles.five}>
              <h2>Clue Highlighting</h2>
              <p>
                Find clues easier with the power of latest AI and QBot. Learn
                efficiently and intelligently with automatic clue highlighting,
                to identify the most common or the most rare clues for every
                question.
              </p>
            </div>
          </div>
        </body>
      </div>
    </>
  );
}

export default Home;
