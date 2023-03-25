import Pokedex from "./components/Pokedex";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyes from "./styles/Global.style";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyes />
            <Pokedex />
        </QueryClientProvider>
    );
};

export default App;