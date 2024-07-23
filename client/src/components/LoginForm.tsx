import { useForm, Resolver } from "react-hook-form";
import { validateEmail, validatePassword } from "../utilities/helpers";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utilities/mutations";
import Auth from "../utilities/auth";

type FormValues = {
    email: string;
    password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
    let errors = {};

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
            ...(validEmail ? values : {}),
            ...(validPassword ? values : {}),
        },
        errors: errors,
    };
};

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver });
    const [login] = useMutation(LOGIN);

    const onSubmit = handleSubmit(async (data) => {
        try {
            console.log("signupform.tsx pre mutation response");
            const mutationResponse = await login({
                variables: {
                    email: data.email,
                    password: data.password,
                },
            });
            console.log(mutationResponse, typeof mutationResponse);
            const token = mutationResponse.data.addUser
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
