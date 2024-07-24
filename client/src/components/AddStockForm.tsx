import { useForm, Resolver } from "react-hook-form";
import { validateTicker } from "../utilities/helpers";
import { useMutation } from "@apollo/client";
import { UPDATE_STOCK } from "../utilities/mutations";

type FormValues = {
    ticker:string
};

const resolver: Resolver<FormValues> = async (values) => {
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

export default function AddStockForm() {
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
            console.log(mutationResponse, typeof mutationResponse)

            // code to probably rerender page to reflect new values

        } catch (error) {
            console.log(error);
        }
    });

    return (
        <form onSubmit={onSubmit}>
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
        </form>
    );
}
