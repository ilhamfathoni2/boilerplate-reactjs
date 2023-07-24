import { toast } from "react-toastify";
interface ToastMessageType {
  title: string;
  message?: string;
}

export const toastError = (title: string, message?: string) => {
  return toast(<ComponentToastBody title={title} message={message} />, {
    type: "error",
  });
};

export const toastWarning = (title: string, message?: string) => {
  return toast(<ComponentToastBody title={title} message={message} />, {
    type: "warning",
  });
};

export const toastInfo = (title: string, message?: string) => {
  return toast(<ComponentToastBody title={title} message={message} />, {
    type: "info",
  });
};

export const toastSuccess = (title: string, message?: string) => {
  return toast(<ComponentToastBody title={title} message={message} />, {
    type: "success",
  });
};

const ComponentToastBody = ({ title, message }: ToastMessageType) => {
  return (
    <div className="flex flex-col">
      <span className="font-semibold">{title}</span>
      {message && <span className="text-[#484E54] text-xs">{message}</span>}
    </div>
  );
};
