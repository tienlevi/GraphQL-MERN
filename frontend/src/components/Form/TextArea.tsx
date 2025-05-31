import { forwardRef, type TextareaHTMLAttributes } from "react";
import "./Input.css"; // Reusing the same styles

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: any;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="input-container">
        <label className="input-label">{label}</label>
        <textarea
          ref={ref}
          className={`input-field ${error ? "input-error" : ""}`}
          rows={4}
          {...props}
        />
        {error && <p className="error-message">{error.message}</p>}
      </div>
    );
  }
);

export default TextArea;
