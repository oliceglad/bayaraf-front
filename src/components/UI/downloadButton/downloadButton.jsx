import s from './downloadButton.module.scss'

export const DownloadButton = ({theme}) => {
  return (
    <a className={`${s.downloadButton} ${theme}`} download href="../../../assets/img/download.svg">
      <div className={s.downloadButton__text}>
        Скачать файл <br/> расчета
      </div>

      <svg
        width="33"
        height="40"
        viewBox="0 0 33 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.5439 0H0.0114746V40H32.7387V9.1949L23.5439 0ZM30.3145 37.5757H2.43572V2.42424H22.5396L30.3145 10.199V37.5757Z"
          fill="#6F7580"
        />
        <path
          d="M17.587 24.1428V12.9307H15.1628V24.1428L11.0593 20.0392L9.34497 21.7534L16.3749 28.7833L23.4048 21.7534L21.6905 20.0392L17.587 24.1428Z"
          fill="#6F7580"
        />
      </svg>
    </a>
  );
};
