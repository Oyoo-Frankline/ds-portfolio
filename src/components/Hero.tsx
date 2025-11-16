import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-data.jpg";
import { useEffect, useState } from "react";

const useTypeWriter = (text: string, speed: number = 50) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [displayedText, text, speed]);

  return { displayedText, isComplete };
};

const Hero = () => {
  const descriptionText =
    "Transforming raw data into actionable insights through advanced analytics, visualization, and machine learning";
  const { displayedText, isComplete } = useTypeWriter(descriptionText, 40);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.35)",
        }}
      />
      {/* Overlay gradient for better text contrast */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/40 via-primary/20 to-background/80" />

      {/* subtle floating accent */}
      <div className="absolute -right-6 top-20 z-20">
        <div className="w-14 h-14 rounded-full bg-accent/20 dark:bg-accent/30 backdrop-blur-sm animate-float" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4 animate-fade-in">
          I am Frankline
        </h2>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up delay-100"
          style={{ animationDelay: "120ms" }}
        >
          Data Analyst & Scientist
        </h1>
        <p
          className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 animate-fade-in delay-200 min-h-20"
          style={{ animationDelay: "260ms" }}
        >
          {displayedText}
          <span
            className={`${
              isComplete ? "hidden" : "inline-block"
            } ml-1 animate-pulse`}
          >
            |
          </span>
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground animate-fade-in"
            style={{ animationDelay: "380ms" }}
          >
            <a href="#contact">Hire Me</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-accent hover:text-accent-foreground animate-fade-in dark:text-white"
            style={{ animationDelay: "420ms" }}
          >
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
