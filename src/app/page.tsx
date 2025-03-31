import IntroSection from "./components/IntroSection";
import Courses from "./components/Courses";
import HowToEnroll from "./components/HowToEnroll";
import ContactsInfo from "./components/ContactsInfo";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
       <IntroSection />
       <Courses />
       <HowToEnroll />
       <ContactsInfo />
    </div>
  );
}
