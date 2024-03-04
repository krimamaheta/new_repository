/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return[
            {
            source:'/user',
            destination:'/',
            permanent:false
        },
        {
            source:'/user/:userid',
            destination:'/',
            permanent:false
        },
        {
            source:'/admin',
            destination:'/',
            permanent:false
        },
        {
            source:'/college',
            destination:'/',
            permanent:false
        },
        
    ]
    }
};

export default nextConfig;
