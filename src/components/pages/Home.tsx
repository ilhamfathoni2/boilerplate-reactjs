import { HeroSection } from "../home/Hero";
import { Cta } from "../home/Cta";
import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <head>
        <meta name="title" content="Dress.id"></meta>
        <meta
          name="description"
          content="This is a React.Js boilerplate that already provides various features including Integration API (CRUD), Redux, Redux Persist, switching .env when running the application, and using tailwindcss and daisyUi."
        ></meta>
        <meta
          name="keywords"
          content="boilerplate, reactjs, react.js, tailwindcss, daisyUi"
        ></meta>
        <meta name="robots" content="noindex, nofollow"></meta>
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <meta name="language" content="English"></meta>
      </head>

      <Navbar />
      <HeroSection />
      <Cta />
      <Footer />
    </>
  );
}
