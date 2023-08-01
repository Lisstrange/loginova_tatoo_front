import React, { useState } from "react";
import styles from "./ConstactsPage.module.scss";

interface InputProps {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

const ContactsPage: React.FC = () => (
  <div className="container">
    <div className={styles.headerText}>А это страница для связи со мной</div>

    <div className={styles.pageDescription}>
      Здесь вы можете задать свой вопрос и указать свою почту. Я отвечу вам,
      проанализировав вашу проблему в этом же письме.
    </div>
    <div className={styles.baseciForm}>
      <form>
        <div className={styles.contactForm}>
          <div className={styles.contactItem}>
            Имя
            <input
              className={styles.inputBtn}
              type="text"
              placeholder="Твоё имя"
            />
          </div>

          <div className={styles.contactItem}>
            Ссылка на страницу
            <input
              className={styles.inputBtn}
              type="text"
              placeholder="Ссылка на страницу для обратной связи"
            />
          </div>
        </div>
        Область вопроса
        <input
          className={styles.inputBtn}
          type="text"
          placeholder="По какой теме вопрос"
        />
        Вопрос
        <input
          className={styles.inputBtn}
          type="text"
          placeholder="Твой вопрос"
        />
      </form>
    </div>
  </div>
);

export default ContactsPage;
