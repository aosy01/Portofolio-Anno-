import { Mail, Phone, MapPin } from 'lucide-react';
import AnimationedContent from "../../components/AnimatedContent";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'annoderitman@gmail.com',
      link: 'mailto:annoderitman@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 878 1665 2331',
      link: 'tel:+6287816652331',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pematang Siantar, Sumatera Utara',
      link: 'https://maps.app.goo.gl/2hDDvim6npTxUCyRA',
    },
  ];

  return (
    <AnimationedContent>
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="bg-black/40 border border-gray-800 rounded-xl p-6 hover:border-[#0046FF] transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 bg-[#0046FF]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0046FF]/20 transition-colors">
                <info.icon className="w-6 h-6 text-[#0046FF]" />
              </div>
              <p className="text-sm text-gray-400 mb-1">{info.label}</p>
              <p className="font-medium">{info.value}</p>
            </a>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Anno D Siregar. All rights reserved.
          </p>
        </div>
      </div>
    </section>
    </AnimationedContent>
  );
}
