import { RotatingLines } from "react-loader-spinner";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={s.loader}>
      <RotatingLines
        visible={true}
        height="50"
        width="50"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;