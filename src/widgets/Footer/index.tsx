import React from "react";

import { ReferalLink } from "@/entities/projects";

import styles from "./index.module.scss";

import Avito from "@/shared/assets/icons/avito.svg";
import Telegramm from "@/shared/assets/icons/telegram.svg";
import Vk from "@/shared/assets/icons/vk.svg";
import Instagramm from "@/shared/assets/icons/instagram.svg";
import clsx from "clsx";

const Footer: React.FC = () => {
  const ReferalLinks: ReferalLink[] = [
    {
      id: 1,
      Icon: Avito,
      ref_link: "some_link.ru",
    },
    {
      id: 2,
      Icon: Telegramm,
      ref_link: "some_link.ru",
    },
    {
      id: 3,
      Icon: Vk,
      ref_link: "some_link.ru",
    },
    {
      id: 4,
      Icon: Instagramm,
      ref_link: "some_link.ru",
    },
  ];

  return (
    <div className={clsx(styles.footer_container)}>
      <footer className={styles.footer}>
        {ReferalLinks.map(({ id, Icon, ref_link }) => (
          <a key={id} href={ref_link}>
            <Icon className={clsx(styles.icon)} />
          </a>
        ))}
      </footer>
    </div>
  );
};

export default Footer;
