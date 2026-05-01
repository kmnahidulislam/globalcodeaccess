import PageHero from '../components/PageHero';
import Section from '../components/Section';

export default function Terms() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        subtitle="Please read these terms carefully before using our website and services."
        breadcrumb="Terms of Use"
        gradient="from-slate-300 to-slate-400"
      />

      <Section>
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-500 text-xs mb-8">Last updated: January 2024</p>

          {[
            {
              title: '1. Acceptance of Terms',
              content: `By accessing and using the Global Code Access Foundation (GCAF) website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you should not use our website or services.`,
            },
            {
              title: '2. Description of Service',
              content: `The GCAF website provides information about our nonprofit mission, programs, and initiatives. It also provides functionality for donations, volunteer registration, and communication with our organization. Our services are provided "as is" and may be modified or discontinued at any time.`,
            },
            {
              title: '3. User Conduct',
              content: `When using our website, you agree to:\n\n- Provide accurate, current, and complete information when requested\n- Not use the website for any unlawful purpose or in violation of these terms\n- Not attempt to gain unauthorized access to any part of the website or its systems\n- Not transmit any viruses, malware, or other harmful code\n- Not impersonate any person or entity\n- Not use automated systems (bots, scrapers) to access the website without permission`,
            },
            {
              title: '4. Donations',
              content: `All donations made through our website are voluntary and non-refundable except as required by applicable law. By making a donation, you represent that:\n\n- You are authorized to use the payment method provided\n- The funds being donated are your own or you have authorization to donate them\n- You understand that donations are used to support GCAF's mission and programs\n\nGCAF reserves the right to refuse any donation. Tax deductibility of donations depends on your jurisdiction and applicable laws.`,
            },
            {
              title: '5. Intellectual Property',
              content: `All content on the GCAF website — including text, graphics, logos, images, and software — is the property of GCAF or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from our content without explicit written permission.\n\nEducational materials and open-source tools released by GCAF are subject to their specific licenses, which will be clearly indicated.`,
            },
            {
              title: '6. Limitation of Liability',
              content: `GCAF provides information and services on an "as is" basis. To the fullest extent permitted by law, GCAF disclaims all warranties, express or implied, including warranties of merchantability and fitness for a particular purpose.\n\nGCAF shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or services, even if GCAF has been advised of the possibility of such damages.`,
            },
            {
              title: '7. Modifications',
              content: `GCAF reserves the right to modify these Terms of Use at any time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of the website after modifications constitutes acceptance of the revised terms.`,
            },
            {
              title: '8. Contact',
              content: `For questions about these Terms of Use, please contact us at:\n\nGlobal Code Access Foundation\nEmail: hello@gcaf.org`,
            },
          ].map((section, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="text-lg font-bold text-slate-200 mb-3">{section.title}</h3>
              <div className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">{section.content}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
