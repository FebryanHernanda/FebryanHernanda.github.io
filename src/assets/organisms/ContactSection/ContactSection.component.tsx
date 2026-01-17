import { Title } from "@/assets/atoms";
import { DialogProfile } from "@/assets/molecules";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { FormContactTrigger } from "@/assets/features";
import { styleConfig } from "./ContactSection.config";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray(".contact-item");
            gsap.fromTo(
                items,
                { opacity: 0, y: 50, filter: "blur(10px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

  return (
    <section id="Contact" className={styleConfig.container} ref={containerRef}>
      <div className={`${styleConfig.textWrapper} contact-item`}>
        <Title Label="Let's Connect With Me" Type="Bold" />
        <Title
          Label="Feel free to reach out for consultation or to discuss new projects, creative ideas, or opportunities to bring your vision to life. Whether you're looking for guidance or a brainstorming session, let's connect!"
          Type="subTitle"
        />
      </div>
      <div className={`${styleConfig.buttonWrapper} contact-item`}>
        {/* using Trigger for FormContact */}
        <FormContactTrigger />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className={styleConfig.button}>
              About me
            </Button>
          </DialogTrigger>
          <DialogProfile />
        </Dialog>
      </div>
    </section>
  );
};

export default ContactSection;
