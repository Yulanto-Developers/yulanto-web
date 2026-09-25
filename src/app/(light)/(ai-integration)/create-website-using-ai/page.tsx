import Breadcrumbdata from "@/components/breadcrum/sections/breadcrumbdata";
import Header from "@/components/AI-assisted-website/header"
import Second from "@/components/AI-assisted-website/second"
import Work from "@/components/AI-assisted-website/workflow"
import AIcard from "@/components/AI-assisted-website/AI-helps"
import Idea from "@/components/AI-assisted-website/Idea-to-Launch"
import AIAssited from "@/components/AI-assisted-website/AI-Assisted-Websites"
import Tools from "@/components/AI-assisted-website/Tools"
import Faq from "@/components/AI-assisted-website/Faq"




export default function Page() {
  return (
    <main>
      <Breadcrumbdata />
      <Header />
      <Second />
      <Work />
      <AIcard />
      <Idea />
      <AIAssited />
      <Tools />
      <Faq />
    
  
      
    </main>
  );
}