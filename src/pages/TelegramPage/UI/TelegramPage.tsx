import React from "react";

import styles from "./TelegramPage.module.scss";
import { ChatInputPanel } from "@/entities/chat";

const TelegramPage: React.FC = () => (
  <div className="container">
    <div className={styles.wrapper}>
      <ChatInputPanel />
    </div>
  </div>
);

export default TelegramPage;
