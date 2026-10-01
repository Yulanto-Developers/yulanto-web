import HomeLayoutWrapper from "@/components/layout/HomeLayoutWrapper";
import HomePage from "./(light)/home/page";
import { generateSeo } from "@/lib/seo";

export const metadata = generateSeo({
  title: "Best Web Design and Development Company in Chennai | Yulanto Web Creations",
  description:
    "Yulanto is one of the best web design and website development company in Chennai, with experienced web designers in Chennai delivering professional websites.",
});
export default function RootPage() {
  return (
    <HomeLayoutWrapper>
      <HomePage />
    </HomeLayoutWrapper>
  );
}