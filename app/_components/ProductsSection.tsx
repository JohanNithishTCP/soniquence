export default function ProductsSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="site-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Card */}
                    <div
                        data-aos="fade-right"
                        className="bg-linear-to-br from-[#4F00F5] via-[#7d3aff] to-[#a47fff] rounded-4xl p-8 md:px-12 md:py-10 relative overflow-hidden min-h-[300px] flex flex-col justify-center items-start shadow-xl shadow-purple-900/10"
                    >
                        <img src="/home/product-bg.png" alt="" width={`250px`} className="absolute -right-0.5 -bottom-0.5" />
                        <div className="relative z-10 w-2/3 md:w-1/2">
                            <h2 className="text-2xl md:text-3xl lg:text-[1.7rem] font-bold text-white mb-6 leading-tight tracking-tight">
                                A Legacy of Medical<br />Excellence
                            </h2>
                            <button className="px-8 py-2.5 rounded-md border-2 border-white/80 text-white font-semibold hover:bg-white/10 hover:border-white transition-colors text-sm tracking-wide">
                                Buy Now
                            </button>
                        </div>

                        {/* Image Placeholder Area */}
                        <div className="absolute right-0 top-0 w-1/2 h-full z-0 flex items-center justify-center p-4">
                            <img src="/home/p-1.png" alt="Logo" width={`400px`} />
                        </div>

                        {/* Background flourish if needed */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                    </div>

                    {/* Right Card */}
                    <div
                        data-aos="fade-left"
                        className="bg-linear-to-br from-[#B000F5] via-[#d657ff] to-[#e89dff] rounded-4xl p-8 md:px-12 md:py-10 relative overflow-hidden min-h-[300px] flex flex-col justify-center items-start shadow-xl shadow-fuchsia-900/10"
                    >
                        <img src="/home/product-bg.png" alt="" width={`250px`} className="absolute -right-0.5 -bottom-0.5" />
                        <div className="relative z-10 w-3/4 md:w-[60%]">
                            <h2 className="text-2xl md:text-3xl lg:text-[1.7rem] font-bold text-white mb-6 leading-tight tracking-tight mt-4">
                                Surgical Instrumentation &<br />Accessories
                            </h2>
                            <button className="px-8 py-2.5 rounded-md border-2 border-white/80 text-white font-semibold hover:bg-white/10 hover:border-white transition-colors text-sm tracking-wide">
                                Buy Now
                            </button>
                        </div>

                        {/* Image Placeholder Area */}
                        <div className="absolute -right-4 top-0 w-1/2 h-full z-0 flex items-center justify-center p-4">
                            {/* Note: Update with actual Next.js Image component when image is available */}

                            <img src="/home/p-2.png" alt="Logo" width={`400px`} />
                        </div>

                        {/* Background flourish */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>
        </section>

    );
}
