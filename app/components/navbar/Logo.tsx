'use client';

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <h1
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer text-3xl font-bold"
      style={{ fontFamily: 'Arial, sans-serif', color: '#0078d4' }} 
    >
      SharePoint
    </h1>
  );
}

export default Logo;
