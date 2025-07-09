import { type PropsWithChildren } from "react";
import {HelmetProvider} from "react-helmet-async";


const Providers = ({ children }: PropsWithChildren) => {
	return (
		<HelmetProvider>
            {children}
		</HelmetProvider>
	);
};

export default Providers;
