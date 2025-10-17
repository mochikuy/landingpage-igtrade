import type { Route } from "./+types/coming-soon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Coming Soon - Infinity Globalindo" },
		{
			name: "description",
			content: "Kami sedang menyiapkan sesuatu yang berharga untuk pengalaman ekspor-impor Anda.",
		},
	];
}

export default function ComingSoon() {
	return (
		<div className="min-h-screen w-full bg-white flex items-center justify-center px-4">
			<div className="max-w-4xl mx-auto text-center">
				<img src="/empty-state.svg" alt="Coming Soon" className="mx-auto h-32 w-auto mb-8" />
				<h1 className="font-serif font-medium text-[40px] leading-[150%] tracking-[0px] text-[rgba(40,40,40,1)] mb-6">
					Sesuatu yang Hebat Sedang Kami Siapkan
				</h1>
				<p className="font-sans font-normal text-[18px] leading-[150%] tracking-[0px] text-[rgba(136,136,136,1)] mb-8">
					Kami sedang menyiapkan sesuatu yang berharga untuk pengalaman ekspor-impor Anda. Nantikan pembaruan selanjutnya dari kami!
				</p>
				<Link to="/">
					<Button variant="outline" className="!text-black !border-gray-300 hover:!bg-gray-100 hover:!text-black !bg-white">
						Kembali ke Home
					</Button>
				</Link>
			</div>
		</div>
	);
}
