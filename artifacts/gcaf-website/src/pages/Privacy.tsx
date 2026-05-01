import PageHero from '../components/PageHero';
import Section from '../components/Section';

export default function Privacy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="We are committed to protecting your privacy and being transparent about how we handle your information."
        breadcrumb="Privacy Policy"
        gradient="from-slate-300 to-slate-400"
      />

      <Section>
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-500 text-xs mb-8">Last updated: January 2024</p>

          {[
            {
              title: '1. Information We Collect',
              content: `We collect information that you voluntarily provide to us when you interact with our website, donate, volunteer, or contact us. This may include:\n\n- Personal identification information: name, email address, phone number, mailing address\n- Donation information: payment details, donation amounts, frequency preferences\n- Communication data: messages sent through our contact form, emails, and correspondence\n- Usage data: pages visited, time spent on site, browser type, and device information collected through standard analytics tools\n- Volunteer information: skills, availability, program preferences, and background check results where applicable`,
            },
            {
              title: '2. How We Use Your Information',
              content: `We use the information we collect for the following purposes:\n\n- To process and acknowledge donations and provide tax receipts\n- To communicate with you about our programs, events, and organizational updates\n- To match volunteers with appropriate opportunities and programs\n- To respond to your inquiries and provide support\n- To improve our website, programs, and services\n- To comply with legal obligations and protect our rights`,
            },
            {
              title: '3. Information Sharing',
              content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:\n\n- With service providers who assist in operating our website and processing donations (e.g., payment processors, email services)\n- With program partners when you have explicitly consented to participate in a partnered program\n- When required by law or to protect the rights, property, or safety of GCAF and its community\n- In aggregate, anonymized form for research, reporting, or promotional purposes`,
            },
            {
              title: '4. Data Security',
              content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
            },
            {
              title: '5. Your Rights',
              content: `Depending on your location, you may have the following rights regarding your personal information:\n\n- The right to access the personal information we hold about you\n- The right to request correction of inaccurate information\n- The right to request deletion of your personal information\n- The right to opt out of communications\n- The right to data portability\n\nTo exercise any of these rights, please contact us at hello@gcaf.org.`,
            },
            {
              title: '6. Changes to This Policy',
              content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of our website after changes constitutes acceptance of the updated policy.`,
            },
            {
              title: '7. Contact Us',
              content: `If you have questions about this Privacy Policy or our data practices, please contact us at:\n\nGlobal Code Access Foundation\nEmail: hello@gcaf.org`,
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
