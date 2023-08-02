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
    <div className={styles.basicForm}>
      <form>
        <div className={styles.contactForm}>
          <div className={styles.contactItem}>
            <div className={styles.tag}>Имя</div>
            <input
              className={styles.inputBtn}
              type="text"
              placeholder="Твоё имя"
            />
          </div>

          <div className={styles.contactItem}>
            <div className={styles.tag}>Ссылка на страницу</div>

            <input
              className={styles.inputBtn}
              type="text"
              placeholder="Для обратной связи"
            />
          </div>
        </div>
        <div className={styles.tag}>Область вопроса</div>
        <input
          className={styles.inputBtnM}
          type="text"
          placeholder="По какой теме вопрос"
        />

        <div className={styles.tag}>Вопрос</div>

        <textarea className={styles.inputBtnL} placeholder="Твой вопрос" />

        <div className={styles.submitBtn}>
          <input
            className={styles.inputBtnS}
            type="submit"
            value="Отправить Вопрос"
          />
        </div>
      </form>
    </div>
  </div>
);

export default ContactsPage;
