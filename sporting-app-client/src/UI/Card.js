import Styles from "./Card.module.css";
const Card = (props) => {
  return <div className={Styles.Card}>{props.children}</div>;
};

export default Card;
