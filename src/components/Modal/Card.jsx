import { react } from "react";

const Card = ({ children, styles }) => {
    return <div className={`card ${styles}`}>{children}</div>;
};

export default Card;
