"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classes from "./partnersPage.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
// IMAGE IMPORT
import careersImage from "../../../assets/Layer_1@2x_black.svg";
import Link from "next/link";
import Input from "@/components/Shared/Input";
import Checkbox from "@/components/Shared/Checkbox";
import CheckboxNormal from "@/components/Shared/Checkbox_Normal";
import { zodResolver } from "@hookform/resolvers/zod";
import createSchema from "./schemas/partners-schema";
import ErrorMessage from "@/components/Shared/ErrorMessage";
import Textarea from "@/components/Shared/Textarea";
import FixedNavbar from "@/components/Shared/FixedNavbar";
import toast from "react-hot-toast";

const CareersPage = ({ params: { locale } }) => {
    const t = useTranslations("PartnersPage");
    const schema = createSchema(t);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: zodResolver(schema),
        mode: "onBlur",
        defaultValues: {
            fullName: "",
            company: "",
            serviceType: [],
            typeOfOtherServices: "",
            place: "",
            phone: "",
            email: "",
            fbPage: "",
            taxId: false,
            commercialRegister: false,
            message: "",
        },
    });

    const serviceType = watch("serviceType");
    const commercialRegister = watch("commercialRegister");
    const taxId = watch("taxId");



    

    useEffect(() => {

    }, [serviceType]);

    // SUBMIT HANDLER
    const onSubmit = (data) => {
        setIsSubmitting(true);
        const formattedData = {
            fullName: data.fullName,
            serviceCenterTitle: data.company,
            services: data?.serviceType.join(", ") + ", " + (data?.typeOfOtherServices || ""),
            City: data.place,
            phoneNumber: data.phone,
            email: data.email || "",
            facebook: data.fbPage || "",
            haveTaxId: taxId,
            haveCommercialId: commercialRegister,
            quests: data.message || "",
        }

        fetch(`${process.env.API_URL}/be/partner`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formattedData),
        })
            .then((response) => {
                setIsSubmitting(false);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {

                toast.success(
                    t("form.successMessage")
                );
            })
            .catch((error) => {
                setIsSubmitting(false);
                toast.error(error.response?.data?.message || error.message);
            });
    };

    return (
        <>
            <FixedNavbar
                logo={
                    <Image
                        src={careersImage}
                        alt="Sayyn Logo"
                        width={50}
                        height={50}
                    />
                }
                links={[
                    { label: "home", href: `/${locale}` },
                    { label: "driverApp", href: `/${locale}/careers` },
                    {
                        label: "privacyPolicy",
                        href: `/${locale}/privacy-policies`,
                    },
                    {
                        label: "termsAndConditions",
                        href: `/${locale}/terms-and-conditions`,
                    },
                ]}
            />
            <div className={classes.container}>
                {/* <Link href={`/${locale}`} className={classes.backLink} passHref>
                    <Image
                        src={careersImage}
                        alt="Careers"
                        width={150}
                        height={300}
                        className={classes.image}
                        priority
                    />
                </Link> */}
                <h1 className={classes.title}>{t("title")}</h1>
                <p className={classes.description}>{t("description")}</p>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={classes.form}
                >
                    <div className={classes.formGrid}>
                        {/* Full Name */}
                        <Input
                            label={t("form.fullName")}
                            placeholder={t("form.fullName")}
                            register={register("fullName", { required: true })}
                            errors={errors.fullName}
                            required={true}
                        />

                        {/* Company */}
                        <Input
                            label={t("form.company")}
                            placeholder={t("form.company")}
                            register={register("company", { required: true })}
                            errors={errors.company}
                            required={true}
                        />

                        {/* Service Type - Full Width */}
                        <div
                            className={`${classes.mixedGroup} ${classes.fullWidth}`}
                        >
                            <p className={classes.label}>{t("form.serviceType.title")}</p>
                            <ErrorMessage
                                message={errors.serviceType?.message}
                            />
                            <div className={classes.CheckboxContainer}>
                                <Checkbox
                                    label={t(
                                        "form.serviceType.options.option1"
                                    )}
                                    value={"ورشة صيانة وتصليح سيارات"}
                                    name={"serviceType"}
                                    setValue={setValue}
                                    selectedValue={serviceType}
                                />
                                <Checkbox
                                    label={t(
                                        "form.serviceType.options.option2"
                                    )}
                                    value={"خدمة إنقاذ مركبات"}
                                    name={"serviceType"}
                                    setValue={setValue}
                                    selectedValue={serviceType}
                                />
                                <Checkbox
                                    label={t(
                                        "form.serviceType.options.option3"
                                    )}
                                    value={"أخرى"}
                                    name={"serviceType"}
                                    setValue={setValue}
                                    selectedValue={serviceType}
                                />
                            </div>
                            {serviceType?.includes("أخرى") && (
                                <Input
                                    label={t(
                                        "form.serviceType.options.typeOfOtherServices"
                                    )}
                                    placeholder={t(
                                        "form.serviceType.options.typeOfOtherServices"
                                    )}
                                    register={register("typeOfOtherServices")}
                                    errors={errors.typeOfOtherServices}
                                    required={false}
                                />
                            )}
                        </div>

                        {/* Place */}
                        <Input
                            label={t("form.place")}
                            placeholder={t("form.place")}
                            register={register("place", { required: true })}
                            errors={errors.place}
                            required={true}
                        />

                        {/* Phone Number */}
                        <Input
                            label={t("form.phone")}
                            placeholder={t("form.phone")}
                            register={register("phone", { required: true })}
                            errors={errors.phone}
                            required={true}
                        />

                        {/* Email */}
                        <Input
                            label={t("form.email")}
                            placeholder={t("form.email")}
                            register={register("email", { required: true })}
                            errors={errors.email}
                            required={false}
                        />

                        {/* Facebook Page */}
                        <Input
                            label={t("form.fbPage")}
                            placeholder={t("form.fbPage")}
                            register={register("fbPage", { required: true })}
                            errors={errors.fbPage}
                            required={false}
                        />

                        {/* Tax ID */}
                        <div className={classes.mixedGroup}>
                            <p className={classes.title}>
                                {t("form.taxId.title")}
                            </p>
                            <CheckboxNormal
                                label={t("form.taxId.option")}
                                register={register("taxId")}
                            />
                        </div>

                        {/* Commercial Registration */}
                        <div className={classes.mixedGroup}>
                            <p className={classes.title}>
                                {t("form.commercialRegister.title")}
                            </p>
                            <CheckboxNormal
                                label={t("form.commercialRegister.option")}
                                register={register("commercialRegister")}
                            />
                        </div>

                        {/* Additional Information - Full Width */}
                        <div className={classes.fullWidth}>
                            <Textarea
                                label={t("form.AddetionalQuestions.title")}
                                placeholder={t(
                                    "form.AddetionalQuestions.placeholder"
                                )}
                                register={register("message")}
                                errors={errors.message}
                                required={false}
                            />
                        </div>
                    </div>

                    <button type="submit" className={classes.button}
                        disabled={Object.keys(errors).length > 0 || isSubmitting} >
                        {isSubmitting ? t("form.submitting") : t("form.submit")}
                    </button>
                </form>
            </div>
        </>
    );
};

export default CareersPage;
