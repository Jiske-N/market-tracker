// import React from "react";
import { useForm, Resolver } from "react-hook-form";
import { validateEmail, validatePassword } from "../utilities/helpers";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utilities/mutations";
import Auth from "../utilities/auth";

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

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
                message:
                    "Password must contain at least 1 capital letter, lower case letter, number, special character #?!@$%^&*- and be at least 8 characters long.",
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
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver });
    // const onSubmit = handleSubmit((data) => console.log(data))
    const [addUser] = useMutation(ADD_USER);

    const onSubmit = handleSubmit(async (data) => {
        try {
            console.log("signupform.tsx pre mutation response");
            const mutationResponse = await addUser({
                variables: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    password: data.password,
                },
            });
            console.log(mutationResponse, typeof mutationResponse);
            const token: string = mutationResponse.data.addUser
                ? mutationResponse.data.addUser.token
                : null;

            if (token) {
                console.log("type of token", typeof token);
                Auth.login(token);
            } else {
                console.log("Token not found in response");
            }

            Auth.login(token);
        } catch (error) {
            console.log(error);
        }
    });

    return (
        <form onSubmit={onSubmit}>
            <input {...register("firstName")} placeholder="First Name" />
            {errors?.firstName && <p>{errors.firstName.message}</p>}
            <input {...register("lastName")} placeholder="Last Name" />
            {errors?.lastName && <p>{errors.lastName.message}</p>}
            <input type="email" {...register("email")} placeholder="Email" />
            {errors?.email && <p>{errors.email.message}</p>}
            <input
                type="password"
                {...register("password")}
                placeholder="Password"
            />
            {errors?.password && <p>{errors.password.message}</p>}

            <input type="submit" />
        </form>
    );
}
