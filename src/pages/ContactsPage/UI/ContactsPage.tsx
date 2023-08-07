import React, { FormEvent, FormEventHandler, useState } from "react";
import styles from "./ConstactsPage.module.scss";

interface InputProps {
  placeholder: string;
}

type Message = {
  firstname: string;
  link: string;
  question: string;
  question_category: string;
};

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

const ContactsPage: React.FC = () => {
  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    const formDataFromHTMLFormElement = new FormData(
      e.target as HTMLFormElement
    );

    const formData: Message = Object.fromEntries(
      formDataFromHTMLFormElement
    ) as Message;

    console.log(formData);
  };

  return (
    <div className="container">
      <div className={styles.headerText}>А это страница для связи со мной</div>

      <div className={styles.pageDescription}>
        Здесь вы можете задать свой вопрос и указать свою почту. Я отвечу вам,
        проанализировав вашу проблему в этом же письме.
      </div>
      <div className={styles.basicForm}>
        <form onSubmit={onSubmitHandler}>
          <div className={styles.contactForm}>
            <div className={styles.contactItem}>
              <label htmlFor="firstname" className={styles.tag}>
                Имя
              </label>
              <input
                name="firstname"
                className={styles.inputBtn}
                type="text"
                placeholder="Твоё имя"
              />
            </div>

            <div className={styles.contactItem}>
              <label htmlFor="link" className={styles.tag}>
                Ссылка на страницу
              </label>
              <input
                name="link"
                className={styles.inputBtn}
                type="text"
                placeholder="Для обратной связи"
              />
            </div>
          </div>
          <label htmlFor="question_category" className={styles.tag}>
            Область вопроса
          </label>
          <input
            name="question_category"
            className={styles.inputBtnM}
            type="text"
            placeholder="По какой теме вопрос"
          />

          <label htmlFor="question" className={styles.tag}>
            Вопрос
          </label>
          <textarea
            name="question"
            className={styles.inputBtnL}
            placeholder="Твой вопрос"
          />

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
};

export default ContactsPage;
