import styles from "./Play.module.css";
import { Helmet } from "react-helmet";

function Play() {
  return (
    <>
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <Helmet>
          <title>QBuzzr - Play</title>
        </Helmet>
        <body>
          <div className={styles.container}>
            <div className={styles.sidebar}>
              <img id="logo" src="logos/logo_large.svg" />
              <span id="ultra">ULTRA</span>
              <div className={styles.sidebar_btns}>
                <div className={styles.sidebar_main}>
                  <div id="questions_btn">
                    <button className={styles.sidebar_btn}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className={styles["bi bi_question_square_fill"]}
                        viewBox="0 0 16 16"
                        width="30%"
                      >
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z" />
                      </svg>
                      <p className={styles.icon_label}>Questions</p>
                    </button>
                    <div className={styles.sidebar_btns_small}>
                      <button className={styles.sidebar_btn_small}>
                        Tossups
                      </button>
                      <button className={styles.sidebar_btn_small}>
                        Bonuses
                      </button>
                    </div>
                  </div>
                  <button className={styles.sidebar_btn}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className={styles["bi bi_people_fill"]}
                      viewBox="0 0 16 16"
                      width="30%"
                    >
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>
                    <p className={styles.icon_label}>Multiplayer</p>
                  </button>
                  <button className={styles.sidebar_btn}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className={styles["bi bi_database_fill"]}
                      viewBox="0 0 16 16"
                      width="30%"
                    >
                      <path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223Z" />
                      <path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972" />
                      <path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972" />
                      <path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972" />
                    </svg>
                    <p className={styles.icon_label}>Database</p>
                  </button>
                  <button id="qbot_btn" className={styles.sidebar_btn}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className={styles["bi bi_robot"]}
                      viewBox="0 0 16 16"
                      width="30%"
                    >
                      <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                      <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
                    </svg>
                    <p className={styles.icon_label}>QBot</p>
                  </button>
                </div>
                <button id="account-btn" className={styles.sidebar_btn}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={styles["bi bi_person_fill"]}
                    viewBox="0 0 16 16"
                    width="30%"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  Sign In
                </button>
              </div>
            </div>
            <div className={styles.sidebar_panel}>
              <div className={styles.settings}>
                <div className={styles.settings_header}>
                  <p>Settings</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className={styles["bi bi_arrow_left"]}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                  </svg>
                </div>
                <div className={styles.settings_main}>
                  <div>
                    <span className={styles.settings_main_header}>
                      Difficulties
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className={styles["bi bi_plus"]}
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                      </svg>
                    </span>
                    <span className={styles.tag}>MS</span>
                    <span className={styles.tag}>EASY HS</span>
                    <span className={styles.tag}>REG HS</span>
                  </div>
                  <div>
                    <span className={styles.settings_main_header}>
                      Categories
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className={styles["bi bi_plus"]}
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                      </svg>
                    </span>
                    <span className={styles.tag}>Geography</span>
                    <span className={styles.tag}>History</span>
                    <span className={styles.tag}>Trash</span>
                  </div>
                  <div>
                    <p className={styles.settings_main_header}>Years</p>
                  </div>
                  <div>
                    <p className={styles.settings_main_header}>Speed</p>
                    <input type="range" className={styles.speed_input} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.main}>
              <div className={styles.current_question}>
                <p className={styles.question_name}>Geography</p>
                <p className={styles.question_content}>
                  This city is home to a UFO-shaped ice cream parlor called
                  Coppelia, which was founded by a world leader. Nearly a
                  million people are buried in this city's Colón Cemetery,
                  including chess champion José Raúl Capablanca. The (#) Hershey
                  Electric Railway connects this city to Matanzas. A
                  constructivist building resembling a sword hilt contains this
                  city's Russian embassy. A presidential palace-turned-museum in
                  this city includes a glass enclosure protecting the yacht (*)
                  Granma. This city's Morro Castle can be seen in the background
                  of Watson and the Shark. Waterfront hotels in this city owned
                  by Meyer Lansky hosted a 1946 meeting of Mafia leaders during
                  a tourist-friendly period under Fulgencio Batista. For 10
                  points, José Martí International Airport serves what capital
                  of Cuba?
                </p>
                <div className={styles.question_footer}>
                  <p className={styles.question_answer}>
                    Havana, Cuba [or La Habana]
                  </p>
                  <div className={styles.question_answer_actions}>
                    <button className={styles.question_answer_action}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className={styles["bi bi_copy"]}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                        />
                      </svg>
                    </button>
                    <button className={styles.question_answer_action}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className={styles["bi bi_star"]}
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    </button>
                    <button className={styles.question_answer_action}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className={styles["bi bi_wikipedia"]}
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.835 3.003c.828-.006 2.688 0 2.688 0l.033.03v.288c0 .08-.045.12-.133.12-.433.02-.522.063-.68.29-.087.126-.258.393-.435.694l-1.52 2.843-.043.089 1.858 3.801.113.031 2.926-6.946c.102-.28.086-.478-.044-.595-.132-.114-.224-.18-.563-.195l-.275-.014a.161.161 0 0 1-.096-.035.1.1 0 0 1-.046-.084v-.289l.042-.03h3.306l.034.03v.29c0 .078-.045.117-.133.117-.433.02-.754.113-.962.281a1.64 1.64 0 0 0-.488.704s-2.691 6.16-3.612 8.208c-.353.672-.7.61-1.004-.019A224.05 224.05 0 0 1 8.044 8.81c-.623 1.285-1.475 3.026-1.898 3.81-.411.715-.75.622-1.02.019-.45-1.065-1.131-2.519-1.817-3.982-.735-1.569-1.475-3.149-1.943-4.272-.167-.4-.293-.657-.412-.759-.12-.1-.368-.16-.746-.18C.069 3.429 0 3.395 0 3.341v-.303l.034-.03c.615-.003 3.594 0 3.594 0l.034.03v.288c0 .08-.05.118-.15.118l-.375.016c-.322.013-.483.11-.483.288 0 .083.034.217.109.4.72 1.753 3.207 6.998 3.207 6.998l.091.023 1.603-3.197-.32-.71L6.24 5.095s-.213-.433-.286-.577l-.098-.196c-.387-.77-.411-.82-.865-.88-.137-.017-.208-.035-.208-.102v-.304l.041-.03h2.853l.075.024v.303c0 .069-.05.104-.15.104l-.206.03c-.523.04-.438.254-.09.946l1.057 2.163 1.17-2.332c.195-.427.155-.534.074-.633-.046-.055-.202-.144-.54-.158l-.133-.015a.159.159 0 0 1-.096-.034.099.099 0 0 1-.045-.085v-.288l.041-.03Z" />
                      </svg>
                    </button>
                    <button className={styles.question_answer_action}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className={styles["bi bi_google"]}
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.past_questions}>
                <div className={styles.past_question}>USA</div>
                <div className={styles.past_question}>Belarus</div>
                <div className={styles.past_question}>India</div>
                <div className={styles.past_question}>Texas</div>
              </div>
              <div className={styles.toolbar}>
                <button className={styles.toolbar_btn} id="settings_btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={styles["bi bi_gear_fill"]}
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                  </svg>
                </button>
                <input
                  type="text"
                  id="answer-field"
                  placeholder="Enter answer"
                />
                <button className={styles["buzz_btn toolbar_btn"]}>Buzz</button>
                <button className={styles["start_btn toolbar_btn"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={styles["bi bi_play_fill"]}
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                </button>
                <button className={styles["pause_btn toolbar_btn"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={styles["bi bi_pause_fill"]}
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5" />
                  </svg>
                </button>
                <button className={styles["skip_btn toolbar_btn"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className={styles["bi bi_skip_forward_fill"]}
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </body>
      </div>
    </>
  );
}

export default Play;
