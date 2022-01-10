import React, { useRef } from "react";
import ErrorIcon from "./icons/error";
import InfoIcon from "./icons/info";
import SuccessIcon from "./icons/success";
import WarningIcon from "./icons/warning";
import styles from "./toast.module.css";

const useToast = (message, variant = "success", style = {}) => {
  const toastRef = useRef(null);
  const openToast = () => {
    toastRef.current.classList.add(styles.show);
    setTimeout(function () {
      toastRef.current.classList.remove(styles.show);
    },1000);
  };
  let toastStyle, icon;
  switch (variant) {
    case "success":
      toastStyle = {
        backgroundColor: "#adebad",
        borderTop: "5px solid #2db92d"
      };
      icon = <SuccessIcon className={styles.icon} fill="#2db92d" />;
      break;
    case "error":
      toastStyle = {
        backgroundColor: "#ffcccc",
        borderTop: "5px solid #ff0000"
      };
      icon = <ErrorIcon className={styles.icon} fill="#ff0000" />;
      break;
    case "info":
      toastStyle = {
        backgroundColor: "#ccf2ff",
        borderTop: "5px solid #33ccff"
      };
      icon = <InfoIcon className={styles.icon} fill="#33ccff" />;
      break;
    case "warning":
      toastStyle = {
        backgroundColor: "#fff0b3",
        borderTop: "5px solid #ffcc00"
      };
      icon = <WarningIcon className={styles.icon} fill="#ffcc00" />;
      break;
    default:
      break;
  }
  const ToastComponent = () => (
    <React.Fragment>
      <div
        ref={toastRef}
        className={styles.snackbar}
        style={{ ...toastStyle, ...style }}
      >
        <div className={styles.content}>
          {icon}
          {message}
        </div>
      </div>
    </React.Fragment>
  );
  return { openToast, ToastComponent };
};

export default useToast;
