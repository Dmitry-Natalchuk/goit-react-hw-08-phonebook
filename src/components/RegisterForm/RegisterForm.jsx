import { useDispatch } from "react-redux";
import { register } from "redux/auth/operation";

const RegisterForm = () => {
const dispatch = useDispatch()

const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name
            <input 
             name="name"
             type="text"
             placeholder="Enter user name"
             required
            />
      </label>
      <label>
        Email
            <input 
            type="email"
            name="email"
            placeholder="Enter user email"
            required
            />
      </label>
      <label>
        Password
            <input 
            type="password" 
            name="password"
            placeholder="Enter user password (min 6 symbols)"
            required 
            />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm