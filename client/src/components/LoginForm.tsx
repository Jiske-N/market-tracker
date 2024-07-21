// import ColumnFlexJustifyAlignCenter from "./ColumnFlexJustifyAlignCenter";
// import { Typography, Button, TextField } from "@mui/material";
// import { ChangeEvent, useState } from "react";

// interface Form {
//     name: string
//     email: string
//     message: string
// }

// const LoginForm = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");
//     const [errorMessage, setErrorMessage] = useState("");

//     const [isValid, setIsValid] = useState(false);

//     const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//         const { target } = event;
//         const inputType = target.name;
//         const inputValue = target.value;

//         if (inputType === "email") {
//             setEmail(inputValue);
//         } else if (inputType === "name") {
//             setName(inputValue);
//         } else {
//             setMessage(inputValue);
//         }

//         if (!name || !email || !message) {
//             setErrorMessage("Please ensure all fields are filled in correctly");
//             setIsValid(false);
//             return;
//         // } else if (!validateEmail(email)) {
//         //     setErrorMessage("Please ensure email address is valid");
//         //     setIsValid(false);
//         //     return;
//         } else {
//             setErrorMessage(" ");
//             setIsValid(true);
//         }
//     };

//     const handleFormSubmit = (e: ChangeEvent<Form>) => {
//         e.preventDefault();

//         alert(`Thanks ${name} ${email}, this form does nothing!`);

//         setName("");
//         setMessage("");
//         setEmail("");
//         setIsValid(false);
//     };


//     return (
//         <ColumnFlexJustifyAlignCenter>
//             <form style={{ width: "100%" }} onSubmit={handleFormSubmit}>
//                 <Typography
//                     sx={{
//                         color: "text.primary",
//                         fontSize: "1.8rem",
//                         fontWeight: "bold",
//                     }}
//                 >
//                     Contact
//                 </Typography>
//                 <Typography
//                     sx={{
//                         color: "text.primary",
//                         fontSize: "1.2rem",
//                         margin: "1rem 0",
//                     }}
//                 >
//                     Name:
//                 </Typography>
//                 <TextField
//                     fullWidth
//                     value={name}
//                     name="name"
//                     onChange={handleInputChange}
//                     type="text"
//                     placeholder="Name"
//                 />
//                 <Typography
//                     sx={{
//                         color: "text.primary",
//                         fontSize: "1.2rem",
//                         margin: "1rem 0",
//                     }}
//                 >
//                     Email address:
//                 </Typography>
//                 <TextField
//                     fullWidth
//                     value={email}
//                     name="email"
//                     onChange={handleInputChange}
//                     type="email"
//                     placeholder="Email"
//                 />
//                 <Typography
//                     sx={{
//                         color: "text.primary",
//                         fontSize: "1.2rem",
//                         margin: "1rem 0",
//                     }}
//                 >
//                     Message:
//                 </Typography>
//                 <TextField
//                     fullWidth
//                     multiline
//                     value={message}
//                     name="message"
//                     onChange={handleInputChange}
//                     type="text"
//                     placeholder="Message"
//                 />
//                 <Typography
//                     sx={{
//                         color: "text.primary",
//                         fontSize: "1.2rem",
//                         margin: "1rem 0",
//                     }}
//                 >
//                     {errorMessage && (
//                         <Typography
//                             sx={{
//                                 color: "text.primary",
//                                 fontSize: "1.2rem",
//                                 margin: "1rem 0",
//                             }}
//                         >
//                             {errorMessage}
//                         </Typography>
//                     )}
//                 </Typography>
//                 <Button disabled={!isValid} type="submit" variant="contained">
//                     Submit
//                 </Button>
//             </form>
//         </ColumnFlexJustifyAlignCenter>
//     )
// };

// export default LoginForm;

import * as React from 'react'

interface FormElements extends HTMLFormControlsCollection {
  usernameInput: HTMLInputElement
}
interface LoginFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

export default function LoginForm({
  onSubmitUsername,
}: {
  onSubmitUsername: (username: string) => void
}) {
  function handleSubmit(event: React.FormEvent<LoginFormElement>) {
    event.preventDefault()
    onSubmitUsername(event.currentTarget.elements.usernameInput.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
