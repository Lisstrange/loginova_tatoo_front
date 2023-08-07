import React from "react";

import styles from "./TelegramPage.module.scss";
import { TelegramChatInputPanel } from "./components/TelegramChatInputPanel";

const TelegramPage: React.FC = () => (
  <div className="container">
    <div className={styles.wrapper}>
      <TelegramChatInputPanel />
    </div>
  </div>
);

export default TelegramPage;
