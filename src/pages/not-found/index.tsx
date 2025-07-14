import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<>
			<Helmet>
				<title>Not Found | Akiba Pamoja</title>
			</Helmet>

			<main className="min-h-[80vh] border-t-2 flex flex-col items-center justify-center">
				<h1 className="mb-4 text-6xl font-semibold text-primary">
					404
				</h1>
				<p className="mb-4 text-lg font-semibold text-primary">
					Oops! Looks like you're lost.
				</p>
				<div className="animate-bounce">
					<svg
						className="mx-auto h-16 w-16 text-primary"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
						></path>
					</svg>
				</div>
				<p className="mt-4 font-semibold text-gray-600">
					Let's get you back{" "}
					<Link to="/" className="text-primary underline">
						home
					</Link>
					.
				</p>
			</main>
		</>
	);
};

export default NotFoundPage;
