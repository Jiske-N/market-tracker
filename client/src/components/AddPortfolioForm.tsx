// import { useForm, Resolver } from "react-hook-form";
// // import { validatename } from "../utilities/helpers";
// import { useMutation } from "@apollo/client";
// import { ADD_PORTFOLIO } from "../utilities/mutations";
// import { Box } from "@mui/material";

// type FormValues = {
//     name: string;
// };

// const resolver: Resolver<FormValues> = async (values) => {
//     let errors = {};

//     // add something letter checking it's unique, right number of characters etc
//     const validname: string = values.name;
//     if (!validname) {
//         errors = {
//             ...errors,
//             password: {
//                 type: "required",
//                 message: "Must be a valid name.",
//             },
//         };
//     }

//     return {
//         values: {
//             ...(validname ? values : {}),
//         },
//         errors: errors,
//     };
// };

// export default function AddPortfolioForm() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm<FormValues>({ resolver });
//     const [addPortfolio, { error }] = useMutation(ADD_PORTFOLIO);

//     const onSubmit = handleSubmit(async (data) => {
//         try {
//             console.log("AddPortfolioForm.tsx pre api request", data.name);
//             const mutationResponse = await addPortfolio({
//                 variables: {
//                     name: data.name,
//                 },
//             });
//             console.log(mutationResponse, typeof mutationResponse);

//             // code to probably rerender page to reflect new values
//         } catch (error) {
//             console.log(error);
//         }
//     });

//     return (
//         <Box>
//             <form onSubmit={onSubmit}>
//                 <input
//                     {...register("name")}
//                     placeholder="Enter Portfolio name"
//                 />
//                 {errors?.name && <p>{errors.name.message}</p>}
//                 {error ? (
//                     <div>
//                         <p className="error-text">
//                             Change This Error Message to Fit Better
//                         </p>
//                     </div>
//                 ) : null}
//                 <input type="submit" />
//             </form>
//         </Box>
//     );
// }

import { useForm, Resolver } from "react-hook-form";
// import { validatename } from "../utilities/helpers";
import { useMutation } from "@apollo/client";
import { ADD_PORTFOLIO } from "../utilities/mutations";
import { Box, TextField, Button, Typography, useTheme } from "@mui/material";
type FormValues = {
    name: string;
};

const resolver: Resolver<FormValues> = async (values) => {
    let errors = {};

    // add something letter checking it's unique, right number of characters etc
    const validname: string = values.name;
    if (!validname) {
        errors = {
            ...errors,
            password: {
                type: "required",
                message: "Must be a valid name.",
            },
        };
    }

    return {
        values: {
            ...(validname ? values : {}),
        },
        errors: errors,
    };
};

export default function AddPortfolioForm() {
    const { palette } = useTheme();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver });
    const [addPortfolio, { error }] = useMutation(ADD_PORTFOLIO);

    const onSubmit = handleSubmit(async (data) => {
        try {
            console.log("AddPortfolioForm.tsx pre api request", data.name);
            const mutationResponse = await addPortfolio({
                variables: {
                    name: data.name,
                },
            });
            console.log(mutationResponse, typeof mutationResponse);

            // code to probably rerender page to reflect new values
        } catch (error) {
            console.log(error);
        }
    });

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                maxWidth: 500,
                margin: "auto",
                padding: 2,
                boxShadow: 2,
                borderRadius: 2,
                backgroundColor: "background.paper",
                gap: 2,
            }}
        >
            <Typography
                variant="h5"
                component="h1"
                sx={{
                    color: palette.text.primary,
                    fontWeight: 'bold',
                    flexShrink: 0, // Prevent the heading from shrinking
                }}
            >
                New Portfolio
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2,
                    flexGrow: 1,
                }}
            >
                <TextField
                    {...register("name", {
                        required: "Portfolio name is required",
                    })}
                    label="Enter Portfolio Name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ""}
                    sx={{ flex: 1 }}
                />
                {errors.name && (
                    <Typography color="error" variant="body2">
                        {errors.name.message}
                    </Typography>
                )}
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
                    }}
                >
                    Create
                </Button>
            </Box>
        </Box>
    );
}
