import { useForm, Resolver } from "react-hook-form";
// import { validatename } from "../utilities/helpers";
import { useMutation } from "@apollo/client";
import { ADD_PORTFOLIO } from "../utilities/mutations";

type FormValues = {
    name:string
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
            console.log(mutationResponse, typeof mutationResponse)

            // code to probably rerender page to reflect new values

        } catch (error) {
            console.log(error);
        }
    });

    return (
        <form onSubmit={onSubmit}>
            <input {...register("name")} placeholder="Enter Portfolio name" />
            {errors?.name && <p>{errors.name.message}</p>}
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
