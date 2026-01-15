import { Mail, Phone } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function CollectorSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="collector"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading mb-12 text-center">Leadership & Coordination</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* District Collector Card */}
          <div
            className={`glass-effect p-8 rounded-2xl overflow-hidden transition-all duration-1000 hover:shadow-2xl hover:scale-105 border border-white/40 hover:border-primary/30 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/Assets/images/vinodsir.jpg"
                  alt="District Collector"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                District Collector
              </h3>
               <p className="text-primary font-semibold mb-1">
                V R VINOD IAS
              </p>
              <p className="text-muted-foreground mb-4">Malappuram District</p>

              <p className="text-foreground leading-relaxed mb-6 italic">
                "The DCIP initiative represents our commitment to developing
                skilled professionals who will drive economic growth and
                innovation in our district. We are proud to support this
                transformative program."
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:dcmlp.ker@nic.in"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors text-primary font-medium"
                >
                  <Mail size={18} />
                 dcmlp.ker@nic.in
                </a>
              </div>
            </div>
          </div>

          {/* Sub Collector Card */}
          <div
            className={`glass-effect p-8 rounded-2xl overflow-hidden transition-all duration-1000 hover:shadow-2xl hover:scale-105 border border-white/40 hover:border-secondary/30 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/Assets/images/dilipsir.jpg"
                  alt="Sub Collector"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-1">
                Sub Collector
              </h3>
              <p className="text-primary font-semibold mb-1">
                DILIP K KAINIKKARA IAS
              </p>
              <p className="text-muted-foreground mb-6">
                 Tirur
              </p>

              <p className="text-foreground leading-relaxed mb-6 italic">
                "Our goal is to bridge the gap between academic learning and
                industry demands. Through DCIP, we provide hands-on training and
                mentorship that prepare students for successful careers in
                technology."
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:tirrdo@yahoo.co.in"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-secondary/10 transition-colors text-secondary font-medium"
                >
                  <Mail size={18} />
                  tirrdo@yahoo.co.in
                </a>
                {/* <a
                  href="tel:"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-secondary/10 transition-colors text-secondary font-medium"
                >
                  <Phone size={18} />
                  
                </a> */}
              </div>
            </div>
          </div>




  {/* JRP Card */}
          <div
            className={`glass-effect p-8 rounded-2xl overflow-hidden transition-all duration-1000 hover:shadow-2xl hover:scale-105 border border-white/40 hover:border-secondary/30 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/Assets/images/Kiransir.jpg"
                  alt="JRP"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-1">
                Junior Resource Person
              </h3>
              <p className="text-primary font-semibold mb-1">
                Kiran B
              </p>
              <p className="text-muted-foreground mb-6">
                 
              </p>

              <p className="text-foreground leading-relaxed mb-6 italic">
                "DEMOOOOOOOOOOOOOOOOOOOOO"
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:jrp.mlpm@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-secondary/10 transition-colors text-secondary font-medium"
                >
                  <Mail size={18} />
              jrp.mlpm@gmail.com
                </a>
                {/* <a
                  href="tel:"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-secondary/10 transition-colors text-secondary font-medium"
                >
                  <Phone size={18} />
                  
                </a> */}
              </div>
            </div>
          </div>




             {/* District Collector Card */}
          {/* <div
            className={`glass-effect p-8 rounded-2xl overflow-hidden transition-all duration-1000 hover:shadow-2xl hover:scale-105 border border-white/40 hover:border-primary/30 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/Assets/images/vinodsir.jpg"
                  alt="District Collector"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                District Collector
              </h3>
               <p className="text-primary font-semibold mb-1">
                V R VINOD IAS
              </p>
              <p className="text-muted-foreground mb-4">Malappuram District</p>

              <p className="text-foreground leading-relaxed mb-6 italic">
                "The DCIP initiative represents our commitment to developing
                skilled professionals who will drive economic growth and
                innovation in our district. We are proud to support this
                transformative program."
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors text-primary font-medium"
                >
                  <Mail size={18} />
                 
                </a>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}
