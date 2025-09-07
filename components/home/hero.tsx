import React from "react";
import Link from "next/link";
import Image from "next/image";


import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";

import EcommerceDashboard from "@/public/assets/images/elysian-ecommerce-dashboard.png";
import EcommerceDashboardDark from "@/public/assets/images/elysian-ecommerce-dashboard-dark.png";
import { Container } from "../ui/container";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const Hero = () => {
  return (
    <Container
      size={"2xl"}
      alignment={"none"}
      height={"screen"}
      padding={"px-lg"}
      gap={"none"}
      flow={"none"}
      id="hero"
      className="overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden contain-strict lg:block"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <section>
        <div className="relative pt-24">
          <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
          <div className="mx-auto">
            <div className="sm:mx-auto lg:mr-auto lg:mt-0">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16"
              >
                Manage Your Business with our Emporium Dashboard
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mt-8 max-w-2xl text-pretty"
              >
                A pre-built ecommerce dashboard for managing products, users, orders, and analytics with elegance and efficiency.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12 flex items-center gap-2"
              >
                <div
                  key={1}
                
                >
                  <Button
                    asChild
                    size="lg"
                 
                  >
                    <Link href="/admin">
                      <span className="text-nowrap">Start Building</span>
                    </Link>
                  </Button>
                </div>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="ghost"
                 
                >
                  <Link href="/sign-up">
                    <span className="text-nowrap">Free Trial</span>
                  </Link>
                </Button>
              </AnimatedGroup>
            </div>
          </div>
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="relative -mr-56 mt-8 overflow-hidden sm:mr-0 sm:mt-12 md:mt-20">
              <div
                aria-hidden
                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
              />
              <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto  overflow-hidden rounded-2xl border  shadow-lg shadow-zinc-950/15 ring-1">
                <Image
                  className="bg-background relative hidden rounded-2xl dark:block"
                  src={EcommerceDashboardDark}
                  alt="app screen"
                  width="2700"
                  height="1440"
                />
                <Image
                  className="z-2 border-border/25 relative rounded-2xl border dark:hidden"
                  src={EcommerceDashboard}
                  alt="app screen"
                  width="2700"
                  height="1440"
                />
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>
    
    </Container>
  );
};

export default Hero;
