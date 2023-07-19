import React from "react";
import styles from "./AboutPage.module.scss";

import { FileSlider } from "@/features/FileSlider";

const AboutPage: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.fileslider}>
        <div className={styles.slider}>
          <FileSlider />
        </div>

        <div className={styles.technics}>
          Чем я занимаюсь:
          <div> - Тату в стиле реализм</div>
          <div> - Кастом одежды и обуви</div>
          <div> - Реставрация аксессуаров</div>
          <div> - Проектирование ландшафтного дизайна</div>
          <div> - Тату в стиле реализм</div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
