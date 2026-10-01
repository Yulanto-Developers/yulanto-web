import HomeLayoutWrapper from "@/components/layout/HomeLayoutWrapper";
import HomePage from "./(light)/home/page";

export default function RootPage() {
  return (
    <HomeLayoutWrapper>
      <HomePage />
    </HomeLayoutWrapper>
  );
}