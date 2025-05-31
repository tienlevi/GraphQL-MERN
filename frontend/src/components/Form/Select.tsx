import { forwardRef, type SelectHTMLAttributes } from "react";
import "./Input.css"; // Reusing the same styles

interface Option {
  id: string;
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  error?: any;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, ...props }, ref) => {
    return (
      <div className="input-container">
        <label className="input-label">{label}</label>
        <select
          ref={ref}
          className={`input-field ${error ? "input-error" : ""}`}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="error-message">{error.message}</p>}
      </div>
    );
  }
);

export default Select;
