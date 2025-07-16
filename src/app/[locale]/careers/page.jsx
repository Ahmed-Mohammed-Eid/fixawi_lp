"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import classes from "./careersPage.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
// IMAGE IMPORT
import careersImage from "../../../assets/Layer_1@2x_black.svg";
import Link from "next/link";
import Input from "@/components/Shared/Input";
import Checkbox from "@/components/Shared/Checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import createSchema from "./schemas/partners-schema";
import ErrorMessage from "@/components/Shared/ErrorMessage";
import Textarea from "@/components/Shared/Textarea";

const CareersPage = ({ params: { locale } }) => {
    const t = useTranslations("PartnersPage");
    const schema = createSchema(t);

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
        },
    });

    const serviceType = watch("serviceType");
    const commercialRegister = watch("commercialRegister");
    const taxId = watch("taxId");

    useEffect(() => {
        console.log("Service Type Changed:", serviceType);
    }, [serviceType]);
    console.log("Errors:", errors);

    // SUBMIT HANDLER
    const onSubmit = (data) => {
        console.log(errors);
        console.log(data);
    };

    return (
        <div className={classes.container}>
            <Link href={`/${locale}`} className={classes.backLink} passHref>
                <Image
                    src={careersImage}
                    alt="Careers"
                    width={150}
                    height={300}
                    className={classes.image}
                />
            </Link>
            <h1 className={classes.title}>{t("title")}</h1>
            <p className={classes.description}>{t("description")}</p>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <Input
                        label={t("form.fullName")}
                        placeholder={t("form.fullName")}
                        register={register("fullName", { required: true })}
                        errors={errors.fullName}
                        required={true}
                    />

                    <Input
                        label={t("form.company")}
                        placeholder={t("form.company")}
                        register={register("company", { required: true })}
                        errors={errors.company}
                        required={true}
                    />

                    <div className={`${classes.mixedGroup} col-span-2`}>
                        <p>{t("form.serviceType.title")}</p>
                        <ErrorMessage message={errors.serviceType?.message} />
                        <div className={classes.CheckboxContainer}>
                            <Checkbox
                                label={t("form.serviceType.options.option1")}
                                errors={errors.serviceType?.option1}
                                value={"ورشة صيانة وتصليح سيارات"}
                                name={"serviceType"}
                                setValue={setValue}
                                selectedValue={serviceType}
                            />
                            <Checkbox
                                label={t("form.serviceType.options.option2")}
                                errors={errors.serviceType?.option2}
                                value={"خدمة إنقاذ مركبات"}
                                name={"serviceType"}
                                setValue={setValue}
                                selectedValue={serviceType}
                            />
                            <Checkbox
                                label={t("form.serviceType.options.option3")}
                                errors={errors.serviceType?.option3}
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

                    {/* CITY & AREA */}
                    <Input
                        label={t("form.place")}
                        placeholder={t("form.place")}
                        register={register("place", { required: true })}
                        errors={errors.place}
                        required={true}
                    />

                    {/* PHONE NUMBER */}
                    <Input
                        label={t("form.phone")}
                        placeholder={t("form.phone")}
                        register={register("phone", { required: true })}
                        errors={errors.phone}
                        required={true}
                    />

                    {/* EMAIL */}
                    <Input
                        label={t("form.email")}
                        placeholder={t("form.email")}
                        register={register("email", { required: true })}
                        errors={errors.email}
                        required={false}
                    />

                    {/* FB PAGE */}
                    <Input
                        label={t("form.fbPage")}
                        placeholder={t("form.fbPage")}
                        register={register("fbPage", { required: true })}
                        errors={errors.fbPage}
                        required={false}
                    />

                    {/* TAX ID */}
                    <div>
                        <p className={classes.title}>{t("form.taxId.title")}</p>
                        <Checkbox
                            label={t("form.taxId.option")}
                            errors={errors.taxId}
                            value={true}
                            name={"taxId"}
                            setValue={setValue}
                            selectedValue={taxId}
                        />
                    </div>

                    {/* COMMERCIAL REGISTRATION */}
                    <div>
                        <p className={classes.title}>
                            {t("form.commercialRegister.title")}
                        </p>
                        <Checkbox
                            label={t("form.commercialRegister.option")}
                            errors={errors.commercialRegister}
                            value={true}
                            name={"commercialRegister"}
                            setValue={setValue}
                            selectedValue={commercialRegister}
                        />
                    </div>

                    <div className="col-span-2">
                        <Textarea
                            label={t("form.AddetionalQuestions.title")}
                            placeholder={t("form.AddetionalQuestions.placeholder")}
                            register={register("additionalInfo")}
                            errors={errors.additionalInfo}
                            required={false}
                        />
                    </div>
                </div>

                <button type="submit" className={classes.button}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CareersPage;
