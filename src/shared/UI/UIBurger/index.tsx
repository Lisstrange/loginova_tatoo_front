import React, { MouseEvent } from "react";
import clsx from "clsx";

import styles from "./index.module.scss";

interface IUIBurgerProps {
  className?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  active: boolean;
}

const UIBurger: React.FC<IUIBurgerProps> = ({ className, onClick, active }) => {
  return (
    <div
      className={clsx(styles.plate, active && styles.active, className)}
      onClick={(e) => {
        onClick?.(e);
      }}
    >
      <svg
        className={clsx(styles.burger, styles.svg)}
        version="1.1"
        viewBox="0 0 100 100"
      >
        <path className={clsx(styles.line, styles.line1)} d="M 30,65 H 70" />
        <path
          className={clsx(styles.line, styles.line2)}
          d="M 70,50 H 30 C 30,50 18.644068,50.320751 18.644068,36.016949 C 18.644068,21.712696 24.988973,6.5812347 38.79661,11.016949 C 52.604247,15.452663 46.423729,62.711864 46.423729,62.711864 L 50.423729,49.152542 L 50.423729,16.101695"
        />
        <path
          className={clsx(styles.line, styles.line3)}
          d="M 30,35 H 70 C 70,35 80.084746,36.737688 80.084746,25.423729 C 80.084746,19.599612 75.882239,9.3123528 64.711864,13.559322 C 53.541489,17.806291 54.423729,62.711864 54.423729,62.711864 L 50.423729,49.152542 V 16.101695"
        />
      </svg>
      <svg
        className={clsx(styles.x, styles.svg)}
        version="1.1"
        viewBox="0 0 100 100"
      >
        <path className={styles.line} d="M 34,32 L 66,68" />
        <path className={styles.line} d="M 66,32 L 34,68" />
      </svg>
    </div>
  );
};

export default UIBurger;
