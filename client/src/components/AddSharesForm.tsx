import { useForm, Resolver } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { ADD_SHARES } from "../utilities/mutations";
import { useUserContext } from "../utilities/UserContext";
import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate()
    const { portfolios } = useUserContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver });
    // const onSubmit = handleSubmit((data) => console.log(data))
    const [addShares] = useMutation(ADD_SHARES);

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
<form onSubmit={onSubmit}>
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
</form>
    );
}
