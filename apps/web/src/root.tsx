import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import "./index.css";
import Header from "./components/header";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";
import { Logo } from "./components/logo";
import { NavMenu } from "./components/nav-menu";
import { NavigationSheet } from "./components/navigation-sheet";
import { Button } from "./components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./components/ui/select";
import { Footer } from "./components/footer";
import { WhatsAppFloat } from "./components/whatsapp-float";

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap",
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="light"
			disableTransitionOnChange
			storageKey="vite-ui-theme"
		>
			<div className="grid grid-rows-[auto_1fr] min-h-svh">
				<div className="bg-white">
      <nav className="h-16 bg-white border-b text-black">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />
          {/* Desktop Menu */}
          <NavMenu className="hidden md:block text-foreground" />
          <div className="flex items-center gap-3">
            <Select defaultValue="id">
              <SelectTrigger className="w-[190px] !shadow-none !text-black !bg-white !border-0 !ring-0 focus:!ring-0 focus-visible:!ring-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="!border-0 !ring-0 !shadow-md !bg-white bg-white !text-black text-black">
                <SelectItem value="id" className="!text-black !bg-white hover:!bg-gray-100">🇮🇩 Bahasa Indonesia</SelectItem>
                <SelectItem value="en" className="!text-black !bg-white hover:!bg-gray-100">🇬🇧 English</SelectItem>
              </SelectContent>
            </Select>
            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
				<Outlet />
				<Footer />
			</div>
			<Toaster richColors />
			<WhatsAppFloat />
		</ThemeProvider>
	);
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}
	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
