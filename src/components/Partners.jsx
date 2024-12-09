"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import classes from "./Partners.module.css";

const Partners = () => {
	const partners = [
		{ id: 1, image: "https://placehold.co/200x100", name: "Partner 1" },
		{ id: 2, image: "https://placehold.co/200x100", name: "Partner 2" },
		{ id: 3, image: "https://placehold.co/200x100", name: "Partner 3" },
		{ id: 1, image: "https://placehold.co/200x100", name: "Partner 1" },
		{ id: 2, image: "https://placehold.co/200x100", name: "Partner 2" },
		{ id: 3, image: "https://placehold.co/200x100", name: "Partner 3" },
		{ id: 1, image: "https://placehold.co/200x100", name: "Partner 1" },
		{ id: 2, image: "https://placehold.co/200x100", name: "Partner 2" },
		{ id: 3, image: "https://placehold.co/200x100", name: "Partner 3" },
		// Add more partners as needed
	];

	return (
		<section className={classes.Partners} id="Partners">
			<div className="container mx-auto">
				<Swiper
					modules={[Autoplay]}
					spaceBetween={30}
					slidesPerView={4}
					loop={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					containerModifierClass={"partners-swiper-"}
					breakpoints={{
						320: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					}}
				>
					{partners.map((partner) => (
						<SwiperSlide key={partner.id}>
							<div className="flex items-center justify-center p-4">
								<img
									src={partner.image}
									alt={partner.name}
									className="max-w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Partners;
