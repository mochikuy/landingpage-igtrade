import type { Route } from "./+types/_index";
import { Button } from "@/components/ui/button";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "infinity-globalindo" },
		{
			name: "description",
			content: "infinity-globalindo is a web application",
		},
	];
}

export default function Home() {
	return (
		<div className="min-h-screen w-full bg-white">
			<section 
				className="relative mx-4 my-12 rounded-3xl p-12 sm:mx-6 sm:p-16 lg:mx-8"
				style={{
					background: "linear-gradient(180deg, rgba(219, 239, 255, 1) 0%, rgba(219, 239, 255, 0) 100%)",
				}}
			>
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
					{/* Left Column */}
					<div className="flex flex-col justify-center">
						<h1 className="font-serif font-medium text-[48px] leading-[71px] tracking-[0px] text-left text-[rgba(40,40,40,1)] mb-6">
							Menghubungkan Pasar Global Melalui Perdagangan Berkualitas
						</h1>
						<p className="font-sans font-normal text-[20px] leading-[150%] tracking-[0px] text-left text-[rgba(102,102,102,1)] mb-8">
							Kami membantu bisnis memperluas jangkauan internasional melalui layanan ekspor–impor terpercaya untuk produk industri, keamanan, dan gaya hidup.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button size="lg" className="text-white px-8 hover:opacity-90" style={{ backgroundColor: "rgba(29, 152, 196, 1)" }}>
								Dapatkan Penawaran
							</Button>
							<Button size="lg" variant="outline" className="px-8 !text-black !border-gray-300 hover:!bg-gray-100 hover:!text-black !bg-white">
								Lihat Produk Kami
							</Button>
						</div>
					</div>
					
					{/* Right Column (empty for now, can be used for image) */}
					<div className="hidden lg:flex items-center justify-center">
						<img src="/world-maps.svg" alt="World map" className="w-full max-w-xl h-auto" />
					</div>
				</div>
			</section>

			<section className="mt-[100px] px-4">
				<div className="max-w-4xl mx-auto text-center">
					<span className="inline-block rounded-full bg-blue-100 text-blue-700 px-4 py-1 text-sm font-medium">
						Layanan Kami
					</span>
					<h2 className="mt-6 font-serif font-medium text-[40px] leading-[150%] tracking-[0px] text-black">
						Mendukung Perdagangan Global <br />
						Melalui Layanan yang Andal
					</h2>
					<p className="mt-6 font-sans font-normal text-[18px] leading-[150%] tracking-[0px] text-[rgba(102,102,102,1)]">
						Kami menjembatani produsen dan pembeli di seluruh dunia <br />
						melalui layanan perdagangan yang tepercaya dan transparan.
					</p>
				</div>
			</section>

			<section className="mt-[80px] px-4">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3">
						{/* Column 1 */}
						<div className="text-center px-3 sm:px-4">
							<img src="/export-import.svg" alt="Export & Import" className="mx-auto w-20 h-20" />
							<h3 className="mt-6 font-sans font-medium text-[20px] leading-[150%] tracking-[0px] text-[rgba(40,40,40,1)]">
								Export & Import Management
							</h3>
							<p className="mt-6 font-sans font-normal text-[18px] leading-[150%] tracking-[0px] text-[rgba(136,136,136,1)]">
								Penanganan menyeluruh dari dokumen, bea cukai, hingga logistik agar proses lintas negara berjalan lancar.
							</p>
						</div>

						{/* Column 2 */}
						<div className="text-center px-3 sm:px-4">
							<img src="/product-sourcing.svg" alt="Product Sourcing" className="mx-auto w-20 h-20" />
							<h3 className="mt-6 font-sans font-medium text-[20px] leading-[150%] tracking-[0px] text-[rgba(40,40,40,1)]">
								Product Sourcing
							</h3>
							<p className="mt-6 font-sans font-normal text-[18px] leading-[150%] tracking-[0px] text-[rgba(136,136,136,1)]">
								Kami membantu Anda menemukan produsen terpercaya untuk mendapatkan produk yang sesuai dengan pasar Anda.
							</p>
						</div>

						{/* Column 3 */}
						<div className="text-center px-3 sm:px-4">
							<img src="/international-shipping.svg" alt="International Shipping" className="mx-auto w-20 h-20" />
							<h3 className="mt-6 font-sans font-medium text-[20px] leading-[150%] tracking-[0px] text-[rgba(40,40,40,1)]">
								International Shipping
							</h3>
							<p className="mt-6 font-sans font-normal text-[18px] leading-[150%] tracking-[0px] text-[rgba(136,136,136,1)]">
								Pengiriman internasional cepat dan aman melalui udara, laut, atau darat — disesuaikan dengan kebutuhan Anda.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Secondary services (two columns) */}
			<section className="mt-[64px] px-4">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 gap-10 md:grid-cols-2">
						{/* Column 4 */}
						<div className="text-center px-6">
							<img src="/quality-inspection.svg" alt="Quality Inspection" className="mx-auto w-20 h-20" />
							<h3 className="mt-6 font-sans font-medium text-[20px] leading-[150%] tracking-[0px] text-[rgba(40,40,40,1)]">
								Quality Inspection
							</h3>
							<p className="mt-6 font-sans font-normal text-[18px] leading-[150%] tracking-[0px] text-[rgba(136,136,136,1)]">
								Setiap produk diperiksa dengan teliti agar memenuhi standar internasional sebelum dikirim.
							</p>
						</div>

						{/* Column 5 */}
						<div className="text-center px-6">
							<img src="/warehouse.svg" alt="Warehouse & Distribution" className="mx-auto w-20 h-20" />
							<h3 className="mt-6 font-sans font-medium text-[20px] leading-[150%] tracking-[0px] text-[rgba(40,40,40,1)]">
								Warehouse & Distribution
							</h3>
							<p className="mt-6 font-sans font-normal text-[18px] leading-[150%] tracking-[0px] text-[rgba(136,136,136,1)]">
								Solusi penyimpanan yang aman dan strategis untuk distribusi global yang efisien.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Produk Kami section */}
			<section className="mt-[200px] px-4">
				<div className="max-w-5xl mx-auto text-center">
					<span className="inline-block rounded-full bg-blue-100 text-blue-700 px-4 py-1 text-sm font-medium">
						Produk Kami
					</span>
					<h2 className="mt-6 font-serif font-medium text-[40px] leading-[150%] tracking-[0px] text-black">
						Menyediakan Produk Berkualitas <br />
						untuk Pasar Global
					</h2>
					<p className="mt-6 font-sans font-normal text-[18px] leading-[150%] tracking-[0px] text-gray-700">
						Dari komponen industri hingga perlengkapan olahraga dan keamanan — <br />
						setiap produk kami pastikan memenuhi standar internasional.
					</p>
				</div>
			</section>

			{/* Produk cards grid */}
			<section className="mt-12 px-4">
				<div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
					{/* Card 1 */}
					<div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
						<img src="/safety-box.svg" alt="Safety Box & Security" className="mx-auto h-24 w-24 object-contain" />
						<h3 className="mt-6 font-sans text-2xl font-semibold text-[rgba(40,40,40,1)]">Safety Box & Security Equipment</h3>
						<p className="mt-4 font-sans text-base font-normal leading-[150%] text-[rgba(136,136,136,1)]">
							Kuat, tahan lama, dan presisi — brankas serta kunci digital kami dipercaya oleh rumah, kantor, dan lembaga di seluruh dunia.
						</p>
						<div className="mt-6">
							<Button variant="outline" className="!text-black !border-gray-300 hover:!bg-gray-100 hover:!text-black !bg-white">Detail Produk</Button>
						</div>
					</div>

					{/* Card 2 */}
					<div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
						<img src="/padel-tennis.svg" alt="Padel & Sports" className="mx-auto h-24 w-24 object-contain" />
						<h3 className="mt-6 font-sans text-2xl font-semibold text-[rgba(40,40,40,1)]">Padel Tennis Racket & Sports Equipment</h3>
						<p className="mt-4 font-sans text-base font-normal leading-[150%] text-[rgba(136,136,136,1)]">
							Ringan dan berperforma tinggi, perlengkapan olahraga kami memenuhi standar terbaik bagi pemain maupun distributor.
						</p>
						<div className="mt-6">
							<Button variant="outline" className="!text-black !border-gray-300 hover:!bg-gray-100 hover:!text-black !bg-white">Detail Produk</Button>
						</div>
					</div>

					{/* Card 3 */}
					<div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
						<img src="/pneumatic.svg" alt="Pneumatic & Industrial" className="mx-auto h-24 w-24 object-contain" />
						<h3 className="mt-6 font-sans text-2xl font-semibold text-[rgba(40,40,40,1)]">Pneumatic & Industrial Components</h3>
						<p className="mt-4 font-sans text-base font-normal leading-[150%] text-[rgba(136,136,136,1)]">
							Komponen industri berkualitas tinggi yang dirancang untuk presisi dan ketahanan — mendukung pabrik, otomasi, & sistem teknik.
						</p>
						<div className="mt-6">
							<Button variant="outline" className="!text-black !border-gray-300 hover:!bg-gray-100 hover:!text-black !bg-white">Detail Produk</Button>
						</div>
					</div>

					{/* Card 4 */}
					<div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
						<img src="/financial.svg" alt="Financial Tools" className="mx-auto h-24 w-24 object-contain" />
						<h3 className="mt-6 font-sans text-2xl font-semibold text-[rgba(40,40,40,1)]">Financial Tools</h3>
						<p className="mt-4 font-sans text-base font-normal leading-[150%] text-[rgba(136,136,136,1)]">
							Mendukung transaksi global dengan alat finansial yang cerdas, aman, dan efisien untuk pembiayaan perdagangan.
						</p>
						<div className="mt-6">
							<Button variant="outline" className="!text-black !border-gray-300 hover:!bg-gray-100 hover:!text-black !bg-white">Detail Produk</Button>
						</div>
					</div>
				</div>
				</section>

			{/* CTA section */}
			<section className="mt-[100px] px-4">
				<div
					className="mx-auto max-w-6xl rounded-3xl px-6 py-6 text-center"
					style={{ backgroundColor: "rgba(29, 152, 196, 1)" }}
				>
					<div className="pt-16">
						<img
							src="/infinity-globalindo-white-logo.svg"
							alt="Infinity Globalindo"
							className="mx-auto h-10 w-auto"
						/>
					</div>
					<h2 className="mt-10 font-serif font-medium text-[40px] leading-[150%] tracking-[0px] text-white">
						Mari Bangun Koneksi Global Bersama
					</h2>
					<p className="mt-6 font-sans font-normal text-[18px] leading-[150%] tracking-[0px] text-white">
						Dari komponen industri hingga perlengkapan olahraga dan keamanan — <br />
						setiap produk kami pastikan memenuhi standar internasional.
					</p>
					<div className="mt-10">
						<Button className="bg-white text-[rgba(29,152,196,1)] hover:bg-white/90">Hubungi Kami</Button>
					</div>
					<div className="pb-16" />
			</div>
			</section>
		</div>
	);
}

