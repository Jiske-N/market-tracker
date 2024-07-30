import { useForm, Resolver } from "react-hook-form";
import { validateEmail, validatePassword } from "../utilities/helpers";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utilities/mutations";
import Auth from "../utilities/auth";
import { Box, TextField, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";

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
    const { palette}= useTheme()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver });
    const [login, { error }] = useMutation(LOGIN);

    const onSubmit = handleSubmit(async (data) => {
        try {
            console.log("loginform.tsx pre mutation response");
            const mutationResponse = await login({
                variables: {
                    email: data.email,
                    password: data.password,
                },
            });
            console.log(mutationResponse, typeof mutationResponse);
            const token: string = mutationResponse.data.login
                ? mutationResponse.data.login.token
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
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                maxWidth: 500,
                margin: "auto",
                padding: 2,
                boxShadow: 2,
                borderRadius: 2,
                backgroundColor: "background.paper",
            }}
        >
            <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                    color: palette.text.primary,
                    fontWeight: 'bold',
                    marginBottom: 2,
                }}
            >
                Login
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <TextField
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                />
                <TextField
                    type="password"
                    {...register("password", { required: "Password is required" })}
                    label="Password"
                    variant="outlined"
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ""}
                />

                {error && (
                    <Typography color="error" variant="body2" sx={{ marginTop: 2 }}>
                        {error}
                    </Typography>
                )}

<Link to='/sign-up' color="primary">
                        Don't have an account? Signup instead.
                    </Link>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: palette.text.secondary,
                        color: palette.common.black,
                        borderRadius: "0.5rem",
                        fontWeight: "bold",
                        paddingX: 2,
                        paddingY: 1,
                        alignSelf: 'center',
                        minWidth: "10rem",
                        marginTop: 2,
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
}

{/* <form onSubmit={onSubmit}>
<input type="email" {...register("email")} placeholder="Email" />
{errors?.email && <p>{errors.email.message}</p>}
<input
    type="password"
    {...register("password")}
    placeholder="Password"
/>
{errors?.password && <p>{errors.password.message}</p>}
{error ? (
    <div>
        <p className="error-text">
            Username password combination does not exist.
        </p>
    </div>
) : null}
<input type="submit" />
</form> */}