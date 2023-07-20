import React from "react";

interface ToastProps {
  text: string;
}

export const Toast: React.FC<ToastProps> = ({ text }) => {
  return (
    <div className="toast toast-top toast-end z-50">
      <div className="alert alert-info">
        <span>{text}</span>
      </div>
    </div>
  );
};
