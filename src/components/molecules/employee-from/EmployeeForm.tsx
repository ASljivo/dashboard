import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import { FormProps } from "models/form";

export const EmployeeForm: FC<FormProps> = ({callback}: FormProps) => {
  const [successMsg, setSuccessMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    callback(data);
    setSuccessMsg("User registration is successful.");
    reset();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        {successMsg && <p className="success-msg">{successMsg}</p>}
        <div className="form-control">
          <label>Full Name</label>
          <input
            type="text"
            {...register("fullName", {
              required: "Full Name is required.",
            })}
          />
          {errors?.fullName && (
            <p className="error-msg">{errors?.fullName?.message as string}</p>
          )}
        </div>

        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
          />
          {errors.email && (
            <p className="error-msg">{errors.email.message as string}</p>
          )}
        </div>

        <div className="form-control">
          <label>Phone</label>
          <input
            type="text"
            {...register("phone", {
              required: "Phone is required.",
              pattern: {
                value:
                  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                message: "Phone is not valid.",
              },
            })}
          />
          {errors.phone && (
            <p className="error-msg">{errors?.phone?.message as string}</p>
          )}
        </div>

        <div className="form-control">
          <label>Role</label>
          <select
            id="role"
            {...register("role", {
              required: "Salary is required.",
            })}
          >
            <option value="Manager 1">Manager 1</option>
            <option value="Manager 2">Manager 2</option>
            <option value="Manager 3">Manager 3</option>
            <option value="Manager 4">Manager 4</option>
            <option value="Manager 5">Manager 5</option>
            <option value="Manager 6">Manager 6</option>
          </select>
          {errors.role && (
            <p className="error-msg">{errors?.role?.message as string}</p>
          )}
        </div>

        <div className="form-control">
          <label>Salary</label>
          <input
            type="number"
            {...register("salary", {
              required: "Salary is required.",
            })}
          />
          {errors.salary && (
            <p className="error-msg">{errors?.salary?.message as string}</p>
          )}
        </div>
        <div className="form-control submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};