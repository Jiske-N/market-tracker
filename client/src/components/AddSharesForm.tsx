import { useForm, Resolver } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { ADD_SHARES } from "../utilities/mutations";
import { useUserContext } from "../utilities/UserContext";
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';

type FormValues = {
    // stock: string;
    portfolio: string;
    quantity: string;
    purchasePrice: string;
};

const resolver: Resolver<FormValues> = async (values) => {
    let errors = {};

    // if (!values.stock) {
    //     errors = {
    //         ...errors,
    //         stock: {
    //             type: "required",
    //             message: "Stock ID is required.",
    //         },
    //     };
    // }
    if (!values.portfolio || values.portfolio === "") {
        errors = {
            ...errors,
            portfolio: {
                type: "required",
                message: "Portfolio ID is required.",
            },
        };
    }

    if (!values.quantity) {
        errors = {
            ...errors,
            quantity: {
                type: "required",
                message: "Must be a valid quantity.",
            },
        };
    }
   
    if (!values.purchasePrice) {
        errors = {
            ...errors,
            purchasePrice: {
                type: "required",
                message:
                    "Must be a valid purchase price",
            },
        };
    }

    return {
        values: {
            // ...(values.stock ? values : {}),
            ...(values.portfolio ? values : {}),
            ...(values.quantity ? values : {}),
            ...(values.purchasePrice ? values : {}),
        },
        errors: errors,
    };
};

export default function AddSharesForm() {
    const {palette} = useTheme()
    const navigate = useNavigate()
    const { portfolios } = useUserContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver });
    // const onSubmit = handleSubmit((data) => console.log(data))
    const [addShares, {error}] = useMutation(ADD_SHARES);

    const onSubmit = handleSubmit(async (data) => {
        try {
            const stock = await localStorage.getItem('stockQuery')
            console.log("AddSharesForm.tsx pre mutation response",typeof stock,typeof data.portfolio,typeof parseFloat(data.purchasePrice), typeof parseInt(data.quantity), data);
            // const quantity: string = data.quantity //"17"
            // const purchasePrice: string = data.purchasePrice
            const mutationResponse = await addShares({
                variables: {
                    stock: stock,
                    portfolio: data.portfolio,
                    quantity: parseInt(data.quantity),
                    purchasePrice: parseFloat(data.purchasePrice),
                },
            });
            console.log(mutationResponse, typeof mutationResponse);

            if (mutationResponse) {
                // Redirect to the new stock page
                navigate(`/dashboard`);
            } else {
                console.error("Failed to retrieve ID from mutation response");
            }

        } catch (error) {
            console.log(error);
        }
    });

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                maxWidth: 1000,
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
                    flexShrink: 0, // Prevent the title from shrinking
                    minWidth: "200px", // Ensure there's enough space for the title
                }}
            >
                Add to Portfolio
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
                    flexWrap: "wrap", // Allow wrapping of form elements if necessary
                }}
            >
                <Select
                    {...register("portfolio", { required: "Portfolio is required" })}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select portfolio' }}
                    fullWidth
                    variant="outlined"
                    sx={{ flex: 1 }}
                >
                    <MenuItem value="">
                        <em>Select a portfolio</em>
                    </MenuItem>
                    {portfolios.map((portfolio) => (
                        <MenuItem value={portfolio._id} key={portfolio._id}>
                            {portfolio.name}
                        </MenuItem>
                    ))}
                </Select>
                {errors.portfolio && (
                    <Typography color="error" variant="body2">
                        {errors.portfolio.message}
                    </Typography>
                )}

                <TextField
                    type="number"
                    {...register("quantity", { required: "Quantity is required" })}
                    label="Quantity"
                    variant="outlined"
                    fullWidth
                    error={!!errors.quantity}
                    helperText={errors.quantity ? errors.quantity.message : ""}
                    sx={{ flex: 1 }}
                />

                <TextField
                    type="number"
                    {...register("purchasePrice", { required: "Purchase price is required" })}
                    label="Purchase Price"
                    variant="outlined"
                    fullWidth
                    error={!!errors.purchasePrice}
                    helperText={errors.purchasePrice ? errors.purchasePrice.message : ""}
                    sx={{ flex: 1 }}
                />

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
                        minWidth: "8rem", // Ensure button has a minimum width
                    }}
                >
                    Submit
                </Button>
            </Box>
            {error && (
                <Typography color="error" variant="body2" sx={{ marginTop: 2 }}>
                    {error}
                </Typography>
            )}
        </Box>
    );
}

{/* <form onSubmit={onSubmit}>
    {portfolios && portfolios.length > 0 ? (
        <>
            <select {...register("portfolio")}>
                <option value="">Select a portfolio</option>
                {portfolios.map((portfolio) => (
                    <option value={portfolio._id} key={portfolio._id}>
                        {portfolio.name}
                    </option>
                ))}
            </select>
            {errors?.portfolio && <p>{errors.portfolio.message}</p>}

            <input
                type="number"
                {...register("quantity")}
                placeholder="Quantity"
            />
            {errors?.quantity && <p>{errors.quantity.message}</p>}

            <input
                type="number"
                {...register("purchasePrice")}
                placeholder="Purchase Price"
            />
            {errors?.purchasePrice && <p>{errors.purchasePrice.message}</p>}

            <input type="submit" value="Submit" />
        </>
    ) : (
        <Typography>Please create a portfolio in order to add shares.</Typography>
    )}
</form> */}