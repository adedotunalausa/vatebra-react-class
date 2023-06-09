import { useState, useRef } from "react";

const Form = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const emailRef = useRef("");

    const submitForm = (e) => {
        e.preventDefault();
        alert(`Form submitted successfully::: ${firstname}, ${lastname}, ${email}`);
    }

    const onFirstnameChange = (e) => {
        setFirstname(e.target.value);
    }
    const onLastnameChange = (e) => {
        setLastname(e.target.value);
    }
    const onEmailChange = (e) => {
        console.log("Email current ref", emailRef.current.value);
        setEmail(emailRef.current.value);
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="firstname">
                    <input
                        onChange={onFirstnameChange}
                        name="firstname"
                        placeholder="Firstname"
                        type="text"
                        id="firstname"
                    />
                </label>
                <label htmlFor="lastname">
                    <input
                        onChange={onLastnameChange}
                        name="lastname"
                        placeholder="Lastname"
                        type="text"
                        id="lastname"
                    />
                </label>
                <label htmlFor="email">
                    <input
                        onChange={onEmailChange}
                        name="email"
                        placeholder="Email"
                        type="text"
                        id="email"
                        ref={emailRef}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Form