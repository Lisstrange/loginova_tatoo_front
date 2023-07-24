
import React from "react";
import styles from "./ServicePage.module.scss"



import SneakerIcon from "@/pages/AboutPage/icons/sneaker1.svg";
import TatooIcon from "@/pages/AboutPage/icons/arm.svg"
import ClothesIcon from "@/pages/AboutPage/icons/clothing.svg"
import TreeIcon from "@/pages/AboutPage/icons/tree.svg"


const ServicesPage: React.FC = () => (
<div className="container">
    <div className={styles.headerText}>
        А это страница об моих услугах
    </div>
    
    <div className={styles.serviceList}>

        <div className={styles.serviceItem}>
            <SneakerIcon className={styles.icon} />
            <p className={styles.serviceItemName}>Кастом одежды и обуви</p>
            <ul>
                <li>Создание эксизов для вашей модели</li>
                <li>Работа по коже и ткани</li>
                <li>Роспись по обуви, одежде, аксессуаров</li>
            </ul>
        </div>

        <div className={styles.serviceItem}>
            <TatooIcon className={styles.icon} />
            <p className={styles.serviceItemName}>Тату в стиле реализм</p>
            <ul>
                <li>Создание эксизов для вашей модели</li>
                <li>Работа по коже и ткани</li>
                <li>Роспись по обуви, одежде, аксессуаров</li>
            </ul>
        </div>



        <div className={styles.serviceItem}>
            <ClothesIcon className={styles.icon} />
            <p className={styles.serviceItemName}>Реставрация аксессуаров</p>
            <ul>
                <li>Создание эксизов для вашей модели</li>
                <li>Работа по коже и ткани</li>
                <li>Роспись по обуви, одежде, аксессуаров</li>
            </ul>
        </div>


        <div className={styles.serviceItem}>
            <TreeIcon className={styles.icon} />
            <p className={styles.serviceItemName}>Проектирование ландшафтного дизайна</p>
            <ul className={styles.skillsList}>
                <li>Создание эксизов для вашей модели</li>
                <li>Работа по коже и ткани</li>
                <li>Роспись по обуви, одежде, аксессуаров</li>
            </ul>
        </div>


    </div>


</div>);

export default ServicesPage;
