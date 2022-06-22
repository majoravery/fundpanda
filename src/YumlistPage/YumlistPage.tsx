import { useGetYumlist } from "api/yumlist";
import Card from "components/Card/Card";
import { useNavigate } from "react-router-dom";
import back from "./assets/back.svg";

import "./YumlistPage.scss";

const YumlistPage = () => {
  const { data } = useGetYumlist({ cid: "1111" });
  const navigate = useNavigate();

  return (
    <div className="YumlistPage">
      <div className="header">
        <div className="left">
          <div className="back" onClick={() => navigate(-1)}>
            <img src={back} alt="back" />
          </div>
          <div className="text">
            <div className="title">Your Yumlist</div>
            <div className="subtitle">Add them to cart</div>
          </div>
        </div>
      </div>

      <div className="yumlist">
        {data?.map((yumlistItem) => (
          <div className="yumlistItem">
            <Card {...yumlistItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YumlistPage;
