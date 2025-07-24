import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API_URL: "https://api.sayyn.net/api/v1"
    },
};

export default withNextIntl(nextConfig);
