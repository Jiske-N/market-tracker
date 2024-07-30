import { useForm, Resolver } from "react-hook-form";
import { validateTicker } from "../utilities/helpers";
import { useMutation } from "@apollo/client";
import { UPDATE_STOCK } from "../utilities/mutations";
import { useNavigate } from 'react-router-dom';
// import { useUserContext } from '../utilities/UserContext';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

type FormValues = {
    ticker: string;
};

const resolver: Resolver<FormValues> = async (values) => {
    //     const { stocks } = useUserContext();
    // const tickers = stocks.map(stock => (
        //   {  ticker: stock.ticker,}
        // ))
        
        let errors = {};
        
        const validTicker: boolean = validateTicker(values.ticker);
        if (!validTicker) {
            errors = {
                ...errors,
                password: {
                    type: "required",
                    message: "Must be a valid US ticker.",
                },
            };
        }
        
        return {
            values: {
            ...(validTicker ? values : {}),
        },
        errors: errors,
    };
};

export default function SearchStockForm() {
    const {palette} = useTheme()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver });
    const [updateStock, { error }] = useMutation(UPDATE_STOCK);
    
    const onSubmit = handleSubmit(async (data) => {
        try {
            console.log("AddStockForm.tsx pre api request");
            const mutationResponse = await updateStock({
                variables: {
                    ticker: data.ticker,
                },
            });
            console.log(mutationResponse, typeof mutationResponse);

            // code to probably rerender page to reflect new values
        // Ensure mutationResponse has the correct data structure
        const stockId = mutationResponse?.data?.updateStock?._id;
        if (stockId) {
            localStorage.setItem('stockQuery', stockId)
            // Redirect to the new stock page
            navigate(`/stock/${stockId}`);
        } else {
            console.error("Failed to get stock ID from mutation response");
        }

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
                    flexShrink: 0,  // Prevent heading from shrinking
                }}
            >
                Search Stocks
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
                    {...register("ticker", {
                        required: "Stock ticker is required",
                    })}
                    label="Enter Stock Ticker"
                    variant="outlined"
                    fullWidth
                    error={!!errors.ticker}
                    helperText={errors.ticker ? errors.ticker.message : ""}
                    sx={{ flex: 1 }}
                />
                {errors.ticker && (
                    <Typography color="error" variant="body2">
                        {errors.ticker.message}
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
                    Search
                </Button>
            </Box>
        </Box>
    );
}

{/* <form onSubmit={onSubmit}>
<input {...register("ticker")} placeholder="Enter Stock Ticker" />
{errors?.ticker && <p>{errors.ticker.message}</p>}
{error ? (
    <div>
        <p className="error-text">
            Change This Error Message to Fit Better
        </p>
    </div>
) : null}
<input type="submit" />
</form> */}