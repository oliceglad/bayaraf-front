import { Title } from "../components/Title/Title";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { DownloadButton } from "../components/UI/downloadButton/downloadButton";
import { ListOfCalc } from "../components/ListOfCalc/ListOfCalc";
import { InfoOfCalc } from "../components/InfoOfCalc/InfoOfCalc";
import { calcList, ordererList } from "../data/data";


export const MainPage = () => {
  return (
    <div className="main">
      <InfoOfCalc infoList={calcList} />
    </div>
  );
};
