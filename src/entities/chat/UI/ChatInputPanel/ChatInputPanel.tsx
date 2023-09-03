import React from "react";

import SendIcon from "../icons/send.svg";
// import SmilesIcon from "../icons/smiles.svg";
import UploadFileIcon from "../icons/paperclip.svg";

import styles from "./ChatInputPanel.module.scss";

export const ChatInputPanel: React.FC = () => {
  const txRef = React.useRef<HTMLTextAreaElement>(null);
  const [txValue, setTxValue] = React.useState<string>("");

  const onChangeTX = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTxValue(e.target.value);
  };

  React.useLayoutEffect(() => {
    if (txRef.current) {
      // Сбросить высоту - важно уменьшить при удалении
      txRef.current.style.height = "inherit";
      // Установить высоту
      txRef.current.style.height = `${txRef.current.scrollHeight}px`;
    }
  }, [txValue]);

  return (
    <div className={styles.ChatInputPanel}>
      <UploadFileIcon />

      <textarea
        className={styles.textarea}
        ref={txRef}
        onChange={onChangeTX}
        onKeyDown={(e): void => {
          if (e.key === "Enter") {
            setTxValue((prevState) => {
              const start = prevState.slice(0, txValue.length);
              const end = prevState.slice(txValue.length);
              return `${start}\r\n${end}`;
            });
          }
        }}
      />
      {/* <SmilesIcon /> */}
      <SendIcon />
    </div>
  );
};
