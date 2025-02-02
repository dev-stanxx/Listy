import { react } from "react";

const Overlay = ({ onclick }) => {
    return <div className={`Overlay`} onClick={onclick}></div>;
};

export default Overlay;
