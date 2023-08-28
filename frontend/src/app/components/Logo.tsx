// ./frontend/src/app/[lang]/components/Logo.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo({
  src,
  altText,
}: {
  src: string | null;
  altText: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Back to homepage"
      className="flex items-center p-2"
    >
      {src && <Image src={src} alt={altText} width={292} height={20} />}
    </Link>
  );
}