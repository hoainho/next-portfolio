import { useState } from "react";

type AlertType = {
  show?: boolean;
  text: string;
  type: string;
};

interface AlertHookResponse {
  alert: AlertType;
  showAlert: ({ show, text, type }: AlertType) => void;
  hideAlert: () => void;
}
const useAlert = (): AlertHookResponse => {
  const [alert, setAlert] = useState<AlertType>({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({ text, type = "danger" }: AlertType) =>
    setAlert({ show: true, text, type });
  const hideAlert = () => setAlert({ show: false, text: "", type: "danger" });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
