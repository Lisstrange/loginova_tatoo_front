import { Link } from "react-router-dom";
import styles from "./style.module.scss";

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <h1>
      {/* className={styles.logo}  Стили у меня не оплучилось подключить, жалуется на ипорты с next js*/}
      <Link to="/">Тут будет логотип</Link>
    </h1>
  );
};
