/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
        },
        {
          protocol: "https",
          hostname: "m.media-amazon.com",
        },
        {
          protocol: "http",
          hostname: "hygraph.com",
        },
        {
          protocol: "https",
          hostname: "eu-west-2.graphassets.com",
        },
        {
          protocol: "https",
          hostname: "vercel.com",
        },
        {
          protocol: 'https',
          hostname: 'sa-east-1.graphassets.com',
          port: '',
          pathname: '/**',
        },
        
      ],
    },
  };
  
  export default nextConfig;
  