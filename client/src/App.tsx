import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import { ThemeContextProvider } from "./theme/index";
import {
    ApolloClient,
    ApolloProvider,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { UserProvider } from "./utilities/UserContext";
// import { Box, Typography } from "@mui/material";

const httpLink = createHttpLink({
    uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("id_token");
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="app">
                <ThemeContextProvider>
                    <CssBaseline />
                    {/* maybe delete */}
                    {/* <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem"> */}
                    <UserProvider>
                        <Outlet />
                    </UserProvider>
                    {/* <Typography variant="h1" color='background.primary'>Hello</Typography> */}
                    {/* </Box> */}
                </ThemeContextProvider>
            </div>
        </ApolloProvider>
    );
}

export default App;
