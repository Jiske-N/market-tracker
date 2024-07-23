import { useForm, Resolver } from "react-hook-form";
import { validateTicker } from "../utilities/helpers";
import { useQuery } from "@apollo/client";
// import {  } from "../utilities/mutations";

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
    // const [login, { error }] = useMutation(LOGIN);

    const onSubmit = handleSubmit(async (data) => {
        try {
            console.log("AddStockForm.tsx pre api request");
            const ticker: string = data.ticker
                        const queryResponse = await ({
                variables: {
                    ticker: data.ticker,
                },
            });
            // const twelveDataApiKey = process.env.TWELVEDATA_API_KEY
            // const twelveDataUrl : string = `https://api.twelvedata.com/time_series?apikey=${twelveDataApiKey}&interval=1month&symbol=${ticker}&end_date=2024-07-23 19:03:00&start_date=2014-07-23 19:03:00&format=JSON&dp=2&type=none"`

            // const data2 = null;

            // const xhr = new XMLHttpRequest();
            // xhr.withCredentials = true;
            
            // xhr.addEventListener("readystatechange", function () {
            //     if (this.readyState === this.DONE) {
            //         console.log(this.responseText);
            //     }
            // });
            
            // xhr.open("GET", twelveDataUrl);
            
            // xhr.send(data2);
                

            // const twelveDataGet = await 


            // // const mutationResponse = await login({
            // //     variables: {
            // //         ticker: data.ticker,
            // //     },
            // // });

            // console.log(mutationResponse, typeof mutationResponse);

            // code to probably rerender page to reflect new values

        } catch (error) {
            console.log(error);
        }
    });

    return (
        <form onSubmit={onSubmit}>
            <input {...register("ticker")} placeholder="Enter Stock Ticker" />
            {errors?.ticker && <p>{errors.ticker.message}</p>}
            {/* {error ? (
                <div>
                    <p className="error-text">
                        Change This Error Message to Fit Better
                    </p>
                </div>
            ) : null} */}
            <input type="submit" />
        </form>
    );
}
