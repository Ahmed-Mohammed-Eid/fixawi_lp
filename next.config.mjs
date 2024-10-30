import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API_URL: "https://test.fixawi.com/api/v1"
    }
};

export default withNextIntl(nextConfig);
