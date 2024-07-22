import React from "react"
import { useForm, Resolver } from "react-hook-form"
import { validateEmail, validatePassword } from "../utilities/helpers"

type FormValues = {
  firstName: string
  lastName: string
  email: string
  password: string
}

const resolver: Resolver<FormValues> = async (values) => {
  let errors = {};
  
  if (!values.firstName) {
    errors = {
      ...errors,
      firstName: {
        type: "required",
        message: "First Name is required.",
      },
    };
  }

  if (!values.lastName) {
    errors = {
      ...errors,
      lastName: {
        type: "required",
        message: "Last Name is required.",
      },
    };
  }

  const validEmail: boolean = validateEmail(values.email);
  if (!validEmail) {
    errors = {
      ...errors,
      password: {
        type: "required",
        message: "Must be a valid email address.",
      },
    };
  }

  const validPassword: boolean = validatePassword(values.password);
  if (!validPassword) {
    errors = {
      ...errors,
      password: {
        type: "required",
        message: "Password must contain at least 1 capital letter, lower case letter, number, special character #?!@$%^&*- and be at least 8 characters long.",
      },
    };
  }

  return {
    values: {
      ...(values.firstName ? values : {}),
      ...(values.lastName ? values : {}),
      ...(validEmail ? values : {}),
      ...(validPassword ? values : {}),
    },
    errors: errors,
  };
};

export default function SignUpForm() {
  const { register, handleSubmit, formState: { errors },} = useForm<FormValues>({resolver})
  const onSubmit = handleSubmit((data) => console.log(data))

  // const onSubmit = handleSubmit((data) => {
  //   const 
  // })

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//         const mutationResponse = await login({
//             variables: {
//                 email: formState.email,
//                 password: formState.password,
//             },
//         });
//         const token = mutationResponse.data.login.token;
//         Auth.login(token);
//     } catch (e) {
//         console.log(e);
//     }
// };

  return (
    <form onSubmit={onSubmit}>
      <input {...register("firstName")} placeholder="First Name" />
      {errors?.firstName && <p>{errors.firstName.message}</p>}
      <input {...register("lastName")} placeholder="Last Name"/>
      {errors?.lastName && <p>{errors.lastName.message}</p>}
      <input type="email" {...register("email")} placeholder="Email"/>
      {errors?.email && <p>{errors.email.message}</p>}
      <input type="password" {...register("password")} placeholder="Password"/>
            {errors?.password && <p>{errors.password.message}</p>}

      <input type="submit" />
    </form>
  )
}