import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Link href="/courses">
          <Button size="lg" variant="ghost" className="w-full">
            <Image
              src="/en.svg"
              height={32}
              width={40}
              alt="English"
              className="mr-4 rounded-md"
            />
            English
          </Button>
        </Link>
        <Link href="/courses">
          <Button size="lg" variant="ghost" className="w-full">
            <Image
              src="/es.svg"
              height={32}
              width={40}
              alt="Spanish"
              className="mr-4 rounded-md"
            />
            Spanish
          </Button>
        </Link>
        <Link href="/courses">
          <Button size="lg" variant="ghost" className="w-full">
            <Image
              src="/fr.svg"
              height={32}
              width={40}
              alt="French"
              className="mr-4 rounded-md"
            />
            French
          </Button>
        </Link>
        {/* <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/it.svg"
            height={32}
            width={40}
            alt="Italian"
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/jp.svg"
            height={32}
            width={40}
            alt="Japanese"
            className="mr-4 rounded-md"
          />
          Japanese
        </Button> */}
      </div>
    </footer>
  );
};
