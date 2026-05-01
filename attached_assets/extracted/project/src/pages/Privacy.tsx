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
        <div className="max-w-3xl mx-auto prose-sm">
          <p className="text-slate-500 text-xs mb-8">Last updated: January 2024</p>

          {[
            {
              title: '1. Information We Collect',
              content: `We collect information that you voluntarily provide to us when you interact with our website, donate, volunteer, or contact us. This may include:

- Personal identification information: name, email address, phone number, mailing address
- Donation information: payment details, donation amounts, frequency preferences
- Communication data: messages sent through our contact form, emails, and correspondence
- Usage data: pages visited, time spent on site, browser type, and device information collected through standard analytics tools
- Volunteer information: skills, availability, program preferences, and background check results where applicable`,
            },
            {
              title: '2. How We Use Your Information',
              content: `We use the information we collect for the following purposes:

- To process and acknowledge donations and provide tax receipts
- To communicate with you about our programs, events, and organizational updates
- To match volunteers with appropriate opportunities and programs
- To respond to your inquiries and provide support
- To improve our website, programs, and services
- To comply with legal obligations and protect our rights`,
            },
            {
              title: '3. Information Sharing',
              content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:

- With service providers who assist in operating our website and processing donations (e.g., payment processors, email services)
- With program partners when you have explicitly consented to participate in a partnered program
- When required by law or to protect the rights, property, or safety of GCAF and its community
- In aggregate, anonymized form for research, reporting, or promotional purposes`,
            },
            {
              title: '4. Data Security',
              content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
            },
            {
              title: '5. Cookies and Tracking',
              content: `Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect usage data. You can control cookie preferences through your browser settings. Disabling cookies may affect some functionality of our website.

We use analytics tools to understand how visitors interact with our site. This data is collected in aggregate and does not personally identify you.`,
            },
            {
              title: '6. Your Rights',
              content: `Depending on your location, you may have the following rights regarding your personal information:

- The right to access the personal information we hold about you
- The right to request correction of inaccurate information
- The right to request deletion of your personal information
- The right to opt out of communications
- The right to data portability

To exercise any of these rights, please contact us at hello@gcaf.org.`,
            },
            {
              title: "7. Children's Privacy",
              content: `Our programs may serve individuals under the age of 18. We collect personal information from minors only with the consent of a parent or guardian. We take special care to protect the privacy of children and comply with applicable child privacy laws.`,
            },
            {
              title: '8. Changes to This Policy',
              content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of our website after changes constitutes acceptance of the updated policy.`,
            },
            {
              title: '9. Contact Us',
              content: `If you have questions about this Privacy Policy or our data practices, please contact us at:

Global Code Access Foundation
Email: hello@gcaf.org`,
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
