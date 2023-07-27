import React from "react";
import styles from "./AboutPage.module.scss";

import { FileSlider } from "@/features/FileSlider";

import SneakerIcon from "../icons/sneaker1.svg";
import TatooIcon from "@/pages/AboutPage/icons/arm.svg";
import ClothesIcon from "@/pages/AboutPage/icons/clothing.svg";
import TreeIcon from "@/pages/AboutPage/icons/tree.svg";
import UI from "@/shared/UI";

const AboutPage: React.FC = () => {
  const [isOpenFirstModal, setIsOpenFirstModal] = React.useState(false);

  return (
    <div className="container">
      <div className={styles.title}>А это страница обо мне</div>
      <div className={styles.main}>
        <div className={styles.slider}>
          <FileSlider />
        </div>
        <div className={styles.tech}>
          Чем я занимаюсь:
          <ul className={styles.techList}>
            <li className={styles.techItem}>
              <TatooIcon className={styles.icon} />
              <p
                onClick={() => setIsOpenFirstModal(true)}
                className={styles.techItemText}
              >
                Тату в стиле реализм
              </p>
              <UI.Modal
                isOpen={isOpenFirstModal}
                onClose={() => setIsOpenFirstModal(false)}
              >
                Проектирование ландшафтного дизайна Проектирование ландшафтного
                дизайна Проектирование ландшафтного дизайна Проектирование
                ландшафтного дизайна Проектирование ландшафтного дизайна
                Проектирование ландшафтного дизайна
              </UI.Modal>
            </li>
            <li className={styles.techItem}>
              <SneakerIcon className={styles.icon} />
              <p className={styles.techItemText}>Кастом одежды и обуви</p>
            </li>
            <li className={styles.techItem}>
              <ClothesIcon className={styles.icon} />
              <p className={styles.techItemText}>Реставрация аксессуаров</p>
            </li>
            <li className={styles.techItem}>
              <TreeIcon className={styles.icon} />
              <p className={styles.techItemText}>
                Проектирование ландшафтного дизайна
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div>
        Тут будет текст от нелли про неё или чет тип такого, что она хочет
        написать Тут будет текст от нелли про неё или чет тип такого, что она
        хочет написать Тут будет текст от нелли про неё или чет тип такого, что
        она хочет написать Тут будет текст от нелли про неё или чет тип такого,
        что она хочет написать Тут будет текст от нелли про неё или чет тип
        такого, что она хочет написать Тут будет текст от нелли про неё или чет
        тип такого, что она хочет написать Тут будет текст от нелли про неё или
        чет тип такого, что она хочет написать Тут будет текст от нелли про неё
        или чет тип такого, что она хочет написать Тут будет текст от нелли про
        неё или чет тип такого, что она хочет написать Тут будет текст от нелли
        про неё или чет тип такого, что она хочет написать Тут будет текст от
        нелли про неё или чет тип такого, что она хочет написать Тут будет текст
        от нелли про неё или чет тип такого, что она хочет написать Тут будет
        текст от нелли про неё или чет тип такого, что она хочет написать Тут
        будет текст от нелли про неё или чет тип такого, что она хочет написать
        Тут будет текст от нелли про неё или чет тип такого, что она хочет
        написать Тут будет текст от нелли про неё или чет тип такого, что она
        хочет написать Тут будет текст от нелли про неё или чет тип такого, что
        она хочет написать Тут будет текст от нелли про неё или чет тип такого,
        что она хочет написать Тут будет текст от нелли про неё или чет тип
        такого, что она хочет написать Тут будет текст от нелли про неё или чет
        тип такого, что она хочет написать Тут будет текст от нелли про неё или
        чет тип такого, что она хочет написать
      </div>
    </div>
  );
};

export default AboutPage;
