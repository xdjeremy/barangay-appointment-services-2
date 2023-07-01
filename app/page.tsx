import Hero from "@/app/components/hero";
import AuthOptions from "@/app/components/auth-options";

export default function Home() {
  return (
    <div
      className={
        "flex h-screen w-full flex-col items-center justify-center bg-base-300"
      }
    >
      <div className={"flex h-[765px] w-full flex-row justify-center gap-20"}>
        <Hero />
        <AuthOptions />
      </div>
    </div>
  );
}
