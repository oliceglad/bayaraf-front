import { NavLink, useLocation } from "react-router-dom";
import s from "./Header.module.scss";
import { Button } from "../UI/Button/Button";
import { useState } from "react";
import { Burger } from "../Burger/Burger";

export const Header = ({ theme, handleThemeToggle }) => {
  const location = useLocation();
  const [burgerVisible, setBurgerVisible] = useState(false);

  return (
    <div className={s.flex}>

      <Burger isVisible={burgerVisible} theme={theme.theme}/>
      <header className={`${s.header} ${theme.theme}`}>
        <div className={s.header__left}>
          <a
            className={s.header__left__rect}
            href="#"
            onClick={() => setBurgerVisible(!burgerVisible)}
          >
            {burgerVisible ? (
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16113 4.48956L3.98956 1.66113L18.8388 16.5104L16.0104 19.3388L1.16113 4.48956Z"
                  fill={theme.theme === "light" ? "black" : "white"}
                />
                <path
                  d="M1.16113 16.5104L16.0104 1.66113L18.8388 4.48956L3.98956 19.3388L1.16113 16.5104Z"
                  fill={theme.theme === "light" ? "black" : "white"}
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.5"
                  width="4"
                  height="4"
                  fill={theme.theme === "light" ? "black" : "white"}
                />
                <rect
                  x="8"
                  y="0.5"
                  width="4"
                  height="4"
                  fill={theme.theme === "light" ? "black" : "white"}
                />
                <rect
                  x="16"
                  y="0.5"
                  width="4"
                  height="4"
                  fill={theme.theme === "light" ? "black" : "white"}
                />
                <rect
                  y="8.5"
                  width="4"
                  height="4"
                  fill={theme.theme === "light" ? "black" : "white"}
                />
                <rect
                  x="8"
                  y="8.5"
                  width="4"
                  height="4"
                  fill={theme.theme === "light" ? "black" : "white"}
                />
                <rect
                  x="16"
                  y="8.5"
                  width="4"
                  height="4"
                  fill={theme.theme === "light" ? "black" : "white"}
                />
                <rect
                  y="16.5"
                  width="4"
                  height="4"
                  fill={theme.theme === "light" ? "black" : "white"}
                />
                <rect
                  x="8"
                  y="16.5"
                  width="4"
                  height="4"
                  fill={theme.theme === "light" ? "black" : "white"}
                />
                <rect
                  x="16"
                  y="16.5"
                  width="4"
                  height="4"
                  fill={theme.theme === "light" ? "black" : "white"}
                />
              </svg>
            )}
          </a>

          <NavLink className={s.header__left__logo} to="/main">
            <svg
              width="156"
              height="15"
              viewBox="0 0 156 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.137784 14V0.909091H5.37926C6.34233 0.909091 7.1456 1.05185 7.78906 1.33736C8.43253 1.62287 8.91619 2.01918 9.24006 2.52628C9.56392 3.02912 9.72585 3.60866 9.72585 4.26491C9.72585 4.77628 9.62358 5.22585 9.41903 5.61364C9.21449 5.99716 8.93324 6.3125 8.57528 6.55966C8.22159 6.80256 7.81676 6.97514 7.3608 7.07741V7.20526C7.85938 7.22656 8.32599 7.36719 8.76065 7.62713C9.19957 7.88707 9.5554 8.25142 9.82812 8.72017C10.1009 9.18466 10.2372 9.73864 10.2372 10.3821C10.2372 11.0767 10.0646 11.6967 9.71946 12.2422C9.37855 12.7834 8.87358 13.2116 8.20455 13.527C7.53551 13.8423 6.71094 14 5.73082 14H0.137784ZM2.90554 11.7372H5.16193C5.93324 11.7372 6.49574 11.5902 6.84943 11.2962C7.20313 10.9979 7.37997 10.6016 7.37997 10.1072C7.37997 9.74503 7.29261 9.42543 7.1179 9.14844C6.94318 8.87145 6.69389 8.65412 6.37003 8.49645C6.05043 8.33878 5.66903 8.25994 5.22585 8.25994H2.90554V11.7372ZM2.90554 6.38707H4.95739C5.33665 6.38707 5.6733 6.32102 5.96733 6.18892C6.26563 6.05256 6.5 5.8608 6.67045 5.61364C6.84517 5.36648 6.93253 5.07031 6.93253 4.72514C6.93253 4.25213 6.7642 3.87074 6.42756 3.58097C6.09517 3.29119 5.62216 3.14631 5.00852 3.14631H2.90554V6.38707ZM14.2946 14H11.3287L15.8478 0.909091H19.4146L23.9274 14H20.9615L17.6824 3.90057H17.5801L14.2946 14ZM14.1092 8.8544H21.1149V11.0149H14.1092V8.8544ZM23.4 0.909091H26.5002L29.4853 6.54688H29.6131L32.5982 0.909091H35.6983L30.9235 9.37216V14H28.1749V9.37216L23.4 0.909091ZM38.1305 14H35.1646L39.6838 0.909091H43.2505L47.7633 14H44.7974L41.5183 3.90057H41.416L38.1305 14ZM37.9451 8.8544H44.9508V11.0149H37.9451V8.8544ZM49.339 14V0.909091H54.5037C55.4924 0.909091 56.3361 1.08594 57.035 1.43963C57.7381 1.78906 58.2729 2.28551 58.6394 2.92898C59.0101 3.56818 59.1955 4.32031 59.1955 5.18537C59.1955 6.05469 59.008 6.80256 58.633 7.42898C58.258 8.05114 57.7147 8.52841 57.003 8.8608C56.2956 9.19318 55.4391 9.35938 54.4334 9.35938H50.9753V7.13494H53.986C54.5144 7.13494 54.9533 7.0625 55.3027 6.91761C55.6522 6.77273 55.9121 6.5554 56.0826 6.26562C56.2573 5.97585 56.3446 5.61577 56.3446 5.18537C56.3446 4.75071 56.2573 4.38423 56.0826 4.08594C55.9121 3.78764 55.65 3.56179 55.2963 3.40838C54.9469 3.25071 54.5059 3.17188 53.9732 3.17188H52.1067V14H49.339ZM56.4086 8.04261L59.6621 14H56.6067L53.4235 8.04261H56.4086ZM63.4078 14H60.4419L64.9611 0.909091H68.5279L73.0407 14H70.0748L66.7956 3.90057H66.6934L63.4078 14ZM63.2225 8.8544H70.2282V11.0149H63.2225V8.8544ZM74.6163 14V0.909091H83.2839V3.19105H77.3841V6.31037H82.7086V8.59233H77.3841V14H74.6163Z"
                fill={theme.theme === "light" ? "black" : "white"}
              />
              <path
                d="M93.6667 7.78267C93.6326 7.43892 93.4863 7.17187 93.2278 6.98153C92.9693 6.79119 92.6184 6.69602 92.1752 6.69602C91.8741 6.69602 91.6199 6.73864 91.4125 6.82386C91.2051 6.90625 91.046 7.02131 90.9352 7.16903C90.8272 7.31676 90.7733 7.48438 90.7733 7.67188C90.7676 7.82812 90.8002 7.96449 90.8713 8.08097C90.9451 8.19744 91.046 8.2983 91.1738 8.38352C91.3017 8.46591 91.4494 8.53835 91.617 8.60085C91.7846 8.66051 91.9636 8.71165 92.1539 8.75426L92.938 8.94176C93.3187 9.02699 93.6681 9.14062 93.9863 9.28267C94.3045 9.42472 94.5801 9.59943 94.813 9.80682C95.046 10.0142 95.2264 10.2585 95.3542 10.5398C95.4849 10.821 95.5517 11.1435 95.5545 11.5071C95.5517 12.0412 95.4153 12.5043 95.1454 12.8963C94.8784 13.2855 94.492 13.5881 93.9863 13.804C93.4835 14.017 92.877 14.1236 92.1667 14.1236C91.4622 14.1236 90.8485 14.0156 90.3258 13.7997C89.8059 13.5838 89.3997 13.2642 89.1071 12.8409C88.8173 12.4148 88.6653 11.8878 88.6511 11.2599H90.4366C90.4565 11.5526 90.5403 11.7969 90.688 11.9929C90.8386 12.1861 91.0389 12.3324 91.2889 12.4318C91.5417 12.5284 91.8272 12.5767 92.1454 12.5767C92.4579 12.5767 92.7292 12.5312 92.9593 12.4403C93.1923 12.3494 93.3727 12.223 93.5005 12.0611C93.6284 11.8991 93.6923 11.7131 93.6923 11.5028C93.6923 11.3068 93.6341 11.142 93.5176 11.0085C93.4039 10.875 93.2363 10.7614 93.0147 10.6676C92.796 10.5739 92.5275 10.4886 92.2093 10.4119L91.2591 10.1733C90.5233 9.99432 89.9423 9.71449 89.5162 9.33381C89.09 8.95312 88.8784 8.44034 88.8812 7.79545C88.8784 7.26705 89.019 6.8054 89.3031 6.41051C89.59 6.01562 89.9835 5.70739 90.4835 5.4858C90.9835 5.2642 91.5517 5.15341 92.188 5.15341C92.8358 5.15341 93.4011 5.2642 93.8841 5.4858C94.3699 5.70739 94.7477 6.01562 95.0176 6.41051C95.2875 6.8054 95.4267 7.26278 95.4352 7.78267H93.6667ZM104.816 9.63636C104.816 10.5881 104.635 11.3977 104.274 12.0653C103.916 12.733 103.428 13.2429 102.808 13.5952C102.192 13.9446 101.499 14.1193 100.729 14.1193C99.9533 14.1193 99.2573 13.9432 98.6408 13.5909C98.0243 13.2386 97.5371 12.7287 97.1792 12.0611C96.8212 11.3935 96.6422 10.5852 96.6422 9.63636C96.6422 8.68466 96.8212 7.875 97.1792 7.20739C97.5371 6.53977 98.0243 6.03125 98.6408 5.68182C99.2573 5.32955 99.9533 5.15341 100.729 5.15341C101.499 5.15341 102.192 5.32955 102.808 5.68182C103.428 6.03125 103.916 6.53977 104.274 7.20739C104.635 7.875 104.816 8.68466 104.816 9.63636ZM102.945 9.63636C102.945 9.01989 102.852 8.5 102.668 8.0767C102.486 7.65341 102.229 7.33239 101.896 7.11364C101.564 6.89489 101.175 6.78551 100.729 6.78551C100.283 6.78551 99.8936 6.89489 99.5613 7.11364C99.2289 7.33239 98.9703 7.65341 98.7857 8.0767C98.6039 8.5 98.513 9.01989 98.513 9.63636C98.513 10.2528 98.6039 10.7727 98.7857 11.196C98.9703 11.6193 99.2289 11.9403 99.5613 12.1591C99.8936 12.3778 100.283 12.4872 100.729 12.4872C101.175 12.4872 101.564 12.3778 101.896 12.1591C102.229 11.9403 102.486 11.6193 102.668 11.196C102.852 10.7727 102.945 10.2528 102.945 9.63636ZM106.182 14V5.27273H111.961V6.79403H108.028V8.87358H111.577V10.3949H108.028V14H106.182ZM112.869 6.79403V5.27273H120.037V6.79403H117.365V14H115.541V6.79403H112.869ZM123.182 14L120.685 5.27273H122.7L124.145 11.3366H124.218L125.811 5.27273H127.537L129.127 11.3494H129.203L130.648 5.27273H132.664L130.166 14H128.368L126.706 8.29403H126.638L124.98 14H123.182ZM134.276 14H132.299L135.312 5.27273H137.69L140.698 14H138.721L136.535 7.26705H136.467L134.276 14ZM134.153 10.5696H138.823V12.0099H134.153V10.5696ZM141.749 14V5.27273H145.192C145.851 5.27273 146.414 5.39062 146.879 5.62642C147.348 5.85937 147.705 6.19034 147.949 6.61932C148.196 7.04545 148.32 7.54687 148.32 8.12358C148.32 8.70312 148.195 9.2017 147.945 9.61932C147.695 10.0341 147.333 10.3523 146.858 10.5739C146.387 10.7955 145.816 10.9062 145.145 10.9062H142.84V9.4233H144.847C145.199 9.4233 145.492 9.375 145.725 9.27841C145.958 9.18182 146.131 9.03693 146.244 8.84375C146.361 8.65057 146.419 8.41051 146.419 8.12358C146.419 7.83381 146.361 7.58949 146.244 7.39062C146.131 7.19176 145.956 7.04119 145.72 6.93892C145.487 6.83381 145.193 6.78125 144.838 6.78125H143.594V14H141.749ZM146.462 10.0284L148.631 14H146.594L144.472 10.0284H146.462ZM149.624 14V5.27273H155.504V6.79403H151.469V8.87358H155.202V10.3949H151.469V12.4787H155.521V14H149.624Z"
                fill="#6F7580"
              />
            </svg>
          </NavLink>

          <ul className={s.header__left__list}>
            <li className={s.header__left__list__item}>
              <NavLink
                className={s.header__left__list__item__link}
                to="/catalog"
              >
                Каталог
              </NavLink>
            </li>
            <li className={s.header__left__list__item}>
              <NavLink
                className={s.header__left__list__item__link}
                to="/tenders"
              >
                Тендеры
              </NavLink>
            </li>
          </ul>
        </div>

        <nav className={s.header__right}>
          <ul className={s.header__right__list}>
            <li className={s.header__right__list__item}>
              <label class="switch">
                <input type="checkbox" onChange={handleThemeToggle} />
                <span class="slider round"></span>
              </label>
            </li>
            <li className={s.header__right__list__item}>
              <a href="#">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 7.30276L11.9153 6.09926C11.0666 4.35211 9.27596 3.15 7.20585 3.15C4.31612 3.15 1.97353 5.49256 1.97349 8.38228L12.5 7.30276ZM12.5 7.30276L13.0846 6.09926M12.5 7.30276L13.0846 6.09926M13.0846 6.09926C13.9334 4.35211 15.724 3.15 17.7941 3.15C20.6839 3.15 23.0265 5.49261 23.0265 8.38236L23.0262 8.43236L23.0262 8.43269M13.0846 6.09926L23.0262 8.43269M23.0262 8.43269C23.0072 10.581 21.7731 13.3727 19.7572 15.955M23.0262 8.43269L19.7572 15.955M19.7572 15.955C17.8099 18.4493 15.2104 20.6475 12.5 21.797M19.7572 15.955L12.5 21.797M12.5 21.797C9.7784 20.6428 7.16865 18.4312 5.21892 15.9244C3.20028 13.329 1.97349 10.5277 1.97349 8.38229L12.5 21.797Z"
                    stroke={theme.theme === "light" ? "black" : "white"}
                    stroke-width="1.3"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {location.pathname === "/main" ? (
        <ul className={s.header__buttons}>
          <li className={s.header__buttons__item}>
            <Button
              style={{
                padding: "13.5px 35px",
                backgroundColor: "#0075FF",
                marginRight: "0px",
              }}
            >
              Сохранить
            </Button>
          </li>
          <li className={s.header__buttons__item}>
            <Button
              style={{
                padding: "13.5px 35px",
                backgroundColor: theme.theme === "light" ? "white" : "#2B2F38",
                color: theme.theme === "light" ? "#2B2F38" : "white",
                marginRight: "0px",
              }}
            >
              Очистить
            </Button>
          </li>
          <li className={s.header__buttons__item}>
            <Button
              style={{
                display: "inline-block",
                width: "45px",
                height: "42px",
                padding: 0,
                paddingTop: "10px",
                marginRight: "0px",
                backgroundColor: theme.theme === "light" ? "white" : "#2B2F38",
                color: theme.theme === "light" ? "#2B2F38" : "white",
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4.16138"
                  y="2.88123"
                  width="25"
                  height="1.75"
                  rx="0.875"
                  transform="rotate(45 4.16138 2.88123)"
                  fill={theme.theme === "light" ? "black" : "white"}
                />
                <rect
                  x="3.16138"
                  y="20.8812"
                  width="25"
                  height="1.75"
                  rx="0.875"
                  transform="rotate(-45 3.16138 20.8812)"
                  fill={theme.theme === "light" ? "black" : "white"}
                />
              </svg>
            </Button>
          </li>
        </ul>
      ) : (
        <div></div>
      )}
    </div>
  );
};
