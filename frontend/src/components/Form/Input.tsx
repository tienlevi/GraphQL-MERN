import { forwardRef, type InputHTMLAttributes } from "react";
import "./Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: any;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="input-container">
        <label className="input-label">{label}</label>
        <input
          ref={ref}
          className={`input-field ${error ? "input-error" : ""}`}
          {...props}
        />
        {error && <p className="error-message">{error.message}</p>}
      </div>
    );
  }
);

export default Input;
