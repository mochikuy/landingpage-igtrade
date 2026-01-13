import type { Route } from "./+types/about";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "Tentang Kami - Infinity Globalindo" },
		{
			name: "description",
			content: "Pelajari lebih lanjut tentang Infinity Globalindo, perusahaan perdagangan internasional yang menghubungkan pasar global melalui layanan ekspor-impor berkualitas.",
		},
	];
}

export default function About() {
	return (
		<div className="min-h-screen w-full bg-white">
			{/* Hero Section */}
			<section className="relative mx-4 my-12 rounded-3xl sm:mx-6 sm:p-16 lg:mx-8 text-left sm:text-center">
				<span className="inline-block px-4 py-1 text-sm font-medium uppercase" style={{
					backgroundColor: 'rgba(245, 245, 245, 1)',
					color: 'rgba(29, 152, 196, 1)'
				}}>
					Produk Kami
				</span>
				<div className="max-w-4xl mx-auto mt-[24px]">
					<h1 className="font-serif font-medium text-[28px] leading-[42px] sm:text-[32px] sm:leading-[48px] lg:text-[40px] lg:leading-[60px] tracking-[0px] text-[rgba(40,40,40,1)] mb-6">
						Perdagangan Global, Kepercayaan Lokal
					</h1>
					<p className="font-sans font-normal sm:text-[16px] lg:text-[18px] leading-[150%] tracking-[0px] text-[rgba(136,136,136,1)] mb-8">
						Sebagai pemimpin di industri impor-ekspor, dengan jaringan global yang luas dan tim profesional berpengalaman,
						PT Infinity Globalindo Trade memahami pentingnya kualitas dan pengiriman tepat waktu. Oleh karena itu, kami berkomitmen untuk
						menyediakan layanan impor-ekspor hardware terbaik.
					</p>
				</div>
			</section>

			{/* Two Column Layout Section */}
			<section className="mt-[80px] px-4">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
						{/* Left Column */}
						<div className="relative rounded-3xl p-8 border-2 min-h-[300px]" style={{
							backgroundColor: "rgba(242, 252, 255, 1)",
							borderColor: "rgba(29, 152, 196, 1)"
						}}>
							<div className="absolute bottom-6 left-6 right-6">
								<img src="/infinity-globalindo-logo.svg" alt="Infinity Globalindo" className="h-12 w-auto mb-6" />
								<h2 className="font-serif font-medium text-[24px] leading-[150%] tracking-[0px] text-[rgba(40,40,40,1)] mb-4">
									Visi dan Misi Kami
								</h2>
								<p className="font-sans font-normal text-[16px] leading-[150%] tracking-[0px] text-[rgba(102,102,102,1)]">
									Menjadi mitra terpercaya dalam logistik dan perdagangan global dengan menghubungkan bisnis melalui solusi rantai pasok yang efisien.
								</p>
							</div>
						</div>

						{/* Right Column */}
						<div className="relative rounded-3xl p-8 border-2 bg-white min-h-[300px]" style={{
							borderColor: "rgba(29, 152, 196, 1)"
						}}>
							<div className="absolute bottom-6 left-6 right-6">
								<ul className="space-y-4">
									<li className="flex items-start gap-3">
										<span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
										<span className="font-sans font-normal text-[16px] leading-[150%] tracking-[0px] text-[rgba(102,102,102,1)]">
											Menyediakan produk berkualitas tinggi dengan efisiensi dan transparansi.
										</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
										<span className="font-sans font-normal text-[16px] leading-[150%] tracking-[0px] text-[rgba(102,102,102,1)]">
											Membangun hubungan jangka panjang dengan klien dan pemasok di seluruh dunia.
										</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
										<span className="font-sans font-normal text-[16px] leading-[150%] tracking-[0px] text-[rgba(102,102,102,1)]">
											Mendorong perdagangan global yang berkelanjutan dan bertanggung jawab.
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Nilai yang Kami Pegang Section */}
			<section className="mt-[100px] px-4">
				<div className="px-4 sm:px-8 md:px-16 lg:px-28">
					<Separator className="bg-gray-200" />
				</div>

				<div className="max-w-6xl mx-auto text-left sm:text-center mt-16">
					<h1 className="font-serif font-medium text-[28px] leading-[42px] sm:text-[32px] sm:leading-[48px] lg:text-[40px] lg:leading-[60px] tracking-[0px] text-[rgba(40,40,40,1)] mb-6">
						Nilai yang Kami Pegang
					</h1>
					<div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{/* Column 1 */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							className="text-left sm:text-center"
						>
							<img src="/integritas.svg" alt="Kualitas" className="h-16 w-16 mb-6 sm:mx-auto" />
							<h3 className="font-sans font-medium text-[20px] leading-[150%] tracking-[0px] text-[rgba(40,40,40,1)] mb-4">
								Integritas
							</h3>
							<p className="font-sans font-normal text-[18px] leading-[150%] tracking-[0px] text-[rgba(136,136,136,1)]">
								Membangun kepercayaan, kejujuran dan transparansi
							</p>
						</motion.div>

						{/* Column 2 */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							viewport={{ once: true, amount: 0.3 }}
							className="text-left sm:text-center"
						>
							<img src="/efisien.svg" alt="Keandalan" className="h-16 w-16 mb-6 sm:mx-auto" />
							<h3 className="font-sans font-medium text-[20px] leading-[150%] tracking-[0px] text-[rgba(40,40,40,1)] mb-4">
								Efisiensi
							</h3>
							<p className="font-sans font-normal text-[18px] leading-[150%] tracking-[0px] text-[rgba(136,136,136,1)]">
								Proses pengiriman yang tepat waktu dan setiap waktu.
							</p>
						</motion.div>

						{/* Column 3 */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							viewport={{ once: true, amount: 0.3 }}
							className="text-left sm:text-center"
						>
							<img src="/inovasi.svg" alt="Inovasi" className="h-16 w-16 mb-6 sm:mx-auto" />
							<h3 className="font-sans font-medium text-[20px] leading-[150%] tracking-[0px] text-[rgba(40,40,40,1)] mb-4">
								Inovasi
							</h3>
							<p className="font-sans font-normal text-[18px] leading-[150%] tracking-[0px] text-[rgba(136,136,136,1)]">
								Terus berkembang untuk memenuhi standar global.
							</p>
						</motion.div>

						{/* Column 4 */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							viewport={{ once: true, amount: 0.3 }}
							className="text-left sm:text-center"
						>
							<img src="/kemitraan.svg" alt="Kemitraan" className="h-16 w-16 mb-6 sm:mx-auto" />
							<h3 className="font-sans font-medium text-[20px] leading-[150%] tracking-[0px] text-[rgba(40,40,40,1)] mb-4">
								Kemitraan
							</h3>
							<p className="font-sans font-normal text-[18px] leading-[150%] tracking-[0px] text-[rgba(136,136,136,1)]">
								Sukses melalui kolaborasi dan pertumbuhan bersama.
							</p>
						</motion.div>
					</div>
				</div>

				<div className="px-4 sm:px-8 md:px-16 lg:px-28 mt-16">
					<Separator className="bg-gray-200" />
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 px-4">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					viewport={{ once: true, amount: 0.2 }}
					className="mx-auto max-w-6xl rounded-3xl px-6 py-6 text-left sm:text-center"
					style={{ backgroundColor: "rgba(29, 152, 196, 1)" }}
				>
					<div className="pt-4 sm:pt-16">
						<img
							src="/infinity-globalindo-white-logo.svg"
							alt="Infinity Globalindo"
							className="h-10 w-auto sm:mx-auto"
						/>
					</div>
					<h2 className="mt-10 font-serif font-medium text-[28px] leading-[150%] sm:text-[32px] lg:text-[40px] tracking-[0px] text-white">
						Mari Bangun Koneksi Global Bersama
					</h2>
					<p className="mt-6 font-sans font-normal text-[16px] sm:text-[18px] leading-[150%] tracking-[0px] text-white">
						Dari komponen industri hingga perlengkapan olahraga dan keamanan —
						setiap produk kami pastikan memenuhi standar internasional.
					</p>
					<div className="mt-10">
						<a
							href="https://wa.me/6287775559883?text=Halo, saya tertarik dengan produk/layanan IGTrade. Mohon info lebih lanjut ya."
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button className="bg-white text-[rgba(29,152,196,1)] hover:bg-white/90">Hubungi Kami</Button>
						</a>
					</div>
					<div className="pb-4 sm:pb-16" />
				</motion.div>
			</section>
		</div>
	);
}
