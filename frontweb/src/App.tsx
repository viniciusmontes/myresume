import { AppRouter } from "./router";
import Providers from "./utils/Providers";


export default function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}
