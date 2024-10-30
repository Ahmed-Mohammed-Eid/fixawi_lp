"use client";
// Import Swiper React components
import {Pagination, Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import classes from "./About.module.css";

import AboutCard from "@/components/AboutCard";
import {useTranslations} from "next-intl";

export default function About() {

    const t = useTranslations();

    return (
        <section id="About" className={"p-3 md:p-10"}>
            <div className={classes.About + " fx-container"}>
                <h2>
                    {t("About.title")}
                </h2>
                <div className={classes.AboutCards}>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        pagination={{clickable: true}}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <AboutCard
                                title={t("About.cards.1.title")}
                                subtitle={t("About.cards.1.slogan")}
                                description={t("About.cards.1.content")}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard
                                title={t("About.cards.2.title")}
                                subtitle={t("About.cards.2.slogan")}
                                description={t("About.cards.2.content")}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard
                                title={t("About.cards.3.title")}
                                subtitle={t("About.cards.3.slogan")}
                                description={t("About.cards.3.content")}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard
                                title={t("About.cards.4.title")}
                                subtitle={t("About.cards.4.slogan")}
                                description={t("About.cards.4.content")}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard
                                title={t("About.cards.5.title")}
                                subtitle={t("About.cards.5.slogan")}
                                description={t("About.cards.5.content")}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard
                                title={t("About.cards.6.title")}
                                subtitle={t("About.cards.6.slogan")}
                                description={t("About.cards.6.content")}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className={"break__line"}></div>

                <div className={classes.AboutStatic}>
                    <AboutCard
                        title={t("About.staticCards.1.title")}
                        description={t("About.staticCards.1.content")}
                        staticCard={true}
                    />
                    <AboutCard
                        title={t("About.staticCards.2.title")}
                        description={t("About.staticCards.2.content")}
                        staticCard={true}
                    />
                </div>
            </div>
        </section>
    );
}
