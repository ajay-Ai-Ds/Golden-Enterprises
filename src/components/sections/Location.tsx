"use client";

import { MapPin, Navigation, ExternalLink } from "lucide-react";

export default function Location() {
  const googleMapsUrl = "https://maps.google.com/?q=Golden+Enterprises+Chennai+Invisible+Grills+Pigeon+Nets";

  return (
    <section id="location" className="relative py-20 bg-[#0A1218] border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Location Info */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E86FF]/10 border border-[#2E86FF]/30 w-fit mb-4">
              <MapPin className="w-4 h-4 text-[#2E86FF]" />
              <span className="text-xs font-semibold tracking-wider text-[#2E86FF] uppercase">
                Service Location
              </span>
            </div>

            <h2 className="text-3xl font-extrabold text-white uppercase tracking-tight mb-4">
              Our Chennai <span className="text-wire-gradient">Headquarters</span>
            </h2>

            <p className="text-sm text-[#C7CDD3] leading-relaxed mb-6 font-light">
              We provide free on-site balcony measurements and same-week installation services across all neighborhoods of Chennai.
            </p>

            <div className="space-y-3 mb-8 text-xs text-[#9AA5AD]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#2E86FF] shrink-0 mt-0.5" />
                <span>
                  Golden Enterprises, Main Road, Adyar, Chennai, Tamil Nadu - 600020
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Navigation className="w-4 h-4 text-[#F2A93B] shrink-0" />
                <span>Coverage: Adyar, ECR, OMR, Anna Nagar, Velachery, Porur & all Chennai</span>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2E86FF] hover:bg-[#1E62D0] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(46,134,255,0.4)] w-full sm:w-auto text-center"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Embedded Interactive Map Frame */}
          <div className="lg:col-span-2 relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0D1821]">
            <iframe
              title="Golden Enterprises Location Map Chennai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.620025686008!2d80.2452!3d13.0067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267da57920f1b%3A0x892a06df5c68b753!2sAdyar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
