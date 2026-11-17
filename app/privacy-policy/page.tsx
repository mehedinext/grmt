import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getSiteSettings } from "../lib/sanity";

const G = "var(--font-garamond)";
const I = "var(--font-inter)";
const green = "#082F27";
const gold = "#C89A3B";
const cream = "#F7F2E8";

export const revalidate = 60;

export default async function PrivacyPolicyPage() {
  const settings = await getSiteSettings();

  const H2 = ({ children }: { children: React.ReactNode }) => (
    <h2 style={{ fontFamily: G, fontSize: "clamp(1.5rem, 2.2vw, 1.9rem)", color: green, fontWeight: 500, marginTop: 44, marginBottom: 18, lineHeight: 1.25 }}>{children}</h2>
  );
  const H3 = ({ children }: { children: React.ReactNode }) => (
    <h3 style={{ fontFamily: I, fontSize: "0.72rem", color: gold, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", marginTop: 26, marginBottom: 10 }}>{children}</h3>
  );
  const P = ({ children }: { children: React.ReactNode }) => (
    <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "clamp(0.92rem, 1vw, 1rem)", lineHeight: 1.85, marginBottom: 14 }}>{children}</p>
  );
  const UL = ({ children }: { children: React.ReactNode }) => (
    <ul style={{ color: "#3d5c51", fontFamily: I, fontSize: "clamp(0.92rem, 1vw, 1rem)", lineHeight: 1.75, marginBottom: 18, paddingLeft: 20 }}>{children}</ul>
  );
  const LI = ({ children }: { children: React.ReactNode }) => (
    <li style={{ marginBottom: 6 }}>{children}</li>
  );

  return (
    <>
      <Navbar settings={settings} />
      <main style={{ paddingTop: 68, background: cream }}>

        <section style={{ background: green, padding: "clamp(60px, 7vw, 96px) 0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
            <p style={{ color: gold, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.24em", fontWeight: 600, fontFamily: I, marginBottom: 14 }}>Legal</p>
            <h1 style={{ fontFamily: G, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 500, color: "#fff", lineHeight: 1.15, marginBottom: 18 }}>Privacy Policy</h1>
            <div style={{ width: 44, height: 2, background: gold, marginBottom: 20 }} />
            <p style={{ color: "rgba(255,255,255,0.72)", fontFamily: I, fontSize: "clamp(0.9rem, 1vw, 1rem)", lineHeight: 1.75, maxWidth: 640 }}>
              Green Room Music Summer Camp (GRMSC). Operated by Green Room Place Ltd. Last updated: 17 November 2026.
            </p>
          </div>
        </section>

        <section style={{ background: "#fff", padding: "clamp(48px, 6vw, 80px) 0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>

            <H2>1. Introduction</H2>
            <P>At Green Room Music Summer Camp (GRMSC), we take the privacy, safety and protection of personal information seriously.</P>
            <P>GRMSC is a residential music education programme for young people aged 10-17, organised by Green Room Place Ltd. and held at Stamford School, Stamford, Lincolnshire, England.</P>
            <P>This Privacy Policy explains how we collect, use, store, share and protect personal information relating to prospective students, enrolled students, parents, legal guardians, staff, faculty members, contractors, volunteers, website visitors and others who interact with our organisation.</P>
            <P>As our programmes involve children and young people, we recognise our particular responsibility to handle personal information carefully, especially information concerning health, wellbeing and safeguarding.</P>
            <P>We process personal information in accordance with applicable UK data protection legislation, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</P>

            <H2>2. Who We Are</H2>
            <P>Green Room Music Summer Camp (GRMSC) is organised and operated by Green Room Place Ltd., which acts as the data controller for personal information processed in connection with the programme, except where another organisation independently determines how and why information is used.</P>
            <P><strong>Data Controller:</strong> Green Room Place Ltd.<br />
            <strong>Programme:</strong> Green Room Music Summer Camp (GRMSC)<br />
            <strong>Registered Office:</strong> 20-22 Wenlock Road, London, England, N1 7GU<br />
            <strong>Privacy Enquiries:</strong> info@greenroomplace.com</P>
            <P>For questions regarding this Privacy Policy, the use of personal information or the exercise of data protection rights, please contact us using the details above.</P>

            <H2>3. Personal Information We Collect</H2>
            <P>We collect personal information that is reasonably necessary to respond to enquiries, assess applications, organise enrolments, provide educational activities and maintain a safe residential environment. Depending on your relationship with GRMSC, this may include:</P>

            <H3>Student Information</H3>
            <UL>
              <LI>Full name, date of birth, age and contact details.</LI>
              <LI>Home address and country of residence.</LI>
              <LI>Course preferences, musical experience and educational background.</LI>
              <LI>Assessment or audition videos, where required for admission.</LI>
              <LI>Relevant information concerning musical ability, learning requirements and participation.</LI>
            </UL>

            <H3>Parent and Guardian Information</H3>
            <UL>
              <LI>Names and contact details.</LI>
              <LI>Relationship to the student.</LI>
              <LI>Emergency contact information.</LI>
              <LI>Registration details, authorisations and parental permissions.</LI>
              <LI>Information about individuals authorised to collect a student.</LI>
            </UL>

            <H3>Medical, Welfare and Safeguarding Information</H3>
            <UL>
              <LI>Relevant medical conditions, allergies and dietary requirements.</LI>
              <LI>Medication details and administration instructions.</LI>
              <LI>Disabilities, accessibility requirements and additional support needs.</LI>
              <LI>Information necessary to support a student's physical and emotional wellbeing.</LI>
              <LI>Incident reports, welfare concerns and safeguarding records where necessary.</LI>
            </UL>
            <P>This information may include special category personal data under UK GDPR and is subject to additional protections.</P>

            <H3>Identity Verification</H3>
            <P>Where reasonably necessary, we may request identification documents or verify identity information for registration, international travel administration, safeguarding, authorised student collection or other legitimate operational purposes. This may include checking a passport or government-issued photographic identification where appropriate.</P>
            <P>We collect and retain copies of identification documents only where necessary and handle such information with appropriate security measures.</P>

            <H3>Staff, Faculty and Volunteer Information</H3>
            <P>Where applicable, we collect and process personal information relating to employees, faculty members, contractors and volunteers. This may include:</P>
            <UL>
              <LI>Names, addresses and contact details.</LI>
              <LI>Professional qualifications, experience and references.</LI>
              <LI>Employment, engagement or contractual records.</LI>
              <LI>Payment and financial administration information.</LI>
              <LI>Relevant training and professional certification records.</LI>
              <LI>Information relating to safeguarding suitability, including appropriate Disclosure and Barring Service (DBS) checks.</LI>
            </UL>
            <P>Such information is processed for legitimate recruitment, contractual, administrative, financial, safeguarding and legal purposes. Information relating to criminal records or safeguarding suitability is subject to additional legal requirements and appropriate restrictions on access and retention.</P>

            <H3>Booking and Payment Information</H3>
            <UL>
              <LI>Registration and booking details.</LI>
              <LI>Payment status, transaction references and billing information.</LI>
              <LI>Records of invoices, refunds or transfers where applicable.</LI>
              <LI>Correspondence relating to financial transactions.</LI>
            </UL>
            <P>Payment information may also be processed by authorised third-party payment providers. We do not require full payment card details to be included in ordinary correspondence.</P>

            <H3>International Traveller Information</H3>
            <P>Where relevant to participation, we may collect information relating to a student's country of residence, travel arrangements, arrival and departure plans, emergency contacts and any permissions required for independent travel.</P>
            <P>Where reasonably necessary, we may also process information provided in support of enrolment confirmation letters or other administrative documentation requested by international travellers.</P>

            <H3>Website and Communication Information</H3>
            <UL>
              <LI>Information submitted through enquiry or registration forms.</LI>
              <LI>Email correspondence and other communications.</LI>
              <LI>Feedback and other information voluntarily provided to us.</LI>
              <LI>Technical information such as IP address, device information and website usage data, where collected.</LI>
              <LI>Cookie preferences and other relevant website settings.</LI>
            </UL>
            <P>We aim to collect only the information necessary for the relevant purpose.</P>

            <H2>4. How We Use Personal Information</H2>
            <P>We process personal information for the following purposes:</P>

            <H3>Admissions and Enrolment</H3>
            <P>To respond to enquiries, review applications, assess audition or assessment videos, confirm eligibility, process bookings and communicate admission decisions. For the Piano and Singing Performance courses, submitted assessment materials may be reviewed by appropriately authorised members of our artistic and teaching team.</P>

            <H3>Educational Provision</H3>
            <P>To organise courses, allocate appropriate teaching, prepare learning activities, manage schedules and support students' musical development. Relevant information may be shared with individual faculty members where necessary for effective teaching and student support.</P>

            <H3>Residential Care and Student Welfare</H3>
            <P>To provide appropriate residential supervision, manage accommodation arrangements, respond to medical needs, support individual requirements and maintain a safe environment throughout the programme.</P>

            <H3>Safeguarding and Child Protection</H3>
            <P>To identify, record, respond to and, where appropriate, report concerns relating to the safety or welfare of children and young people. This may include verifying relevant permissions, maintaining appropriate safeguarding records and sharing information with authorised professionals or statutory authorities where necessary.</P>

            <H3>Staff and Faculty Administration</H3>
            <P>To manage recruitment, appointments, contractual arrangements, appropriate suitability checks, professional responsibilities, payments and other matters necessary for the administration of our team.</P>

            <H3>Communication</H3>
            <P>To communicate with parents, guardians, students, staff and other relevant individuals about applications, enrolment, course preparation, schedules, residential arrangements, student welfare and other essential programme information.</P>

            <H3>Payments and Administration</H3>
            <P>To process fees, maintain financial records, manage bookings and comply with relevant accounting, tax and legal obligations.</P>

            <H3>Website Management</H3>
            <P>To maintain the functionality, security and performance of our website, respond to enquiries and understand website usage where appropriate.</P>

            <H3>Marketing and Publicity</H3>
            <P>Where we have an appropriate lawful basis, we may use contact details to share information about future GRMSC programmes, events or opportunities. Where consent is required, we will obtain it before sending marketing communications. Individuals may opt out of marketing at any time.</P>

            <H2>5. Our Legal Basis for Processing Information</H2>
            <P>Under UK GDPR, we must have a lawful basis for processing personal information. Depending on the circumstances, we may rely upon:</P>

            <H3>Contractual Necessity</H3>
            <P>Where processing is necessary to take steps towards, enter into or fulfil an agreement concerning participation in GRMSC or another relevant contractual arrangement.</P>

            <H3>Legal Obligation</H3>
            <P>Where we are required to process or retain information to comply with applicable laws and legal duties.</P>

            <H3>Legitimate Interests</H3>
            <P>Where processing is necessary for our legitimate interests in administering the programme, protecting the organisation, maintaining appropriate records, improving our services and providing a safe educational environment, provided these interests are not overridden by individuals' rights and freedoms. When processing children's information, their interests and rights receive particular consideration.</P>

            <H3>Consent</H3>
            <P>Where individuals or, where appropriate, parents or legal guardians have given valid consent for specified activities, such as certain promotional communications or uses of photographs and recordings.</P>

            <H3>Vital Interests</H3>
            <P>Where processing is necessary to protect someone's life, for example in an urgent medical emergency.</P>

            <P>Some information, including medical and health information, receives additional protection under UK GDPR. Where we process such information, we also identify an applicable special category condition, which may include explicit consent, the protection of vital interests or relevant safeguarding conditions under applicable legislation.</P>
            <P>Criminal offence information, where processed, is also handled in accordance with the additional requirements of applicable data protection legislation.</P>
            <P>We do not rely upon consent where another lawful basis is more appropriate, and we do not treat consent to participate in GRMSC as automatic consent for unrelated purposes.</P>

            <H2>6. Children's Privacy and Parental Responsibility</H2>
            <P>GRMSC is designed for children and young people aged 10-17. We recognise that children require particular protection when their personal information is collected and processed.</P>
            <P>Applications and enrolments must be completed with the appropriate involvement and authorisation of a parent or legal guardian.</P>
            <P>We use students' personal information only for appropriate and legitimate purposes connected with programme administration, education, residential care, safeguarding and other purposes described in this policy. Access to sensitive student information is restricted to individuals who have a legitimate requirement to receive it.</P>
            <P>We also recognise that children have their own data protection rights. Requests concerning a child's information will be considered in accordance with applicable law, taking account of the child's age, understanding, rights and best interests.</P>
            <P>We do not knowingly use children's personal information for behavioural advertising or commercial profiling.</P>

            <H2>7. Medical Information, Medication and Safeguarding</H2>
            <P>Student safety and wellbeing are central to GRMSC. Parents and guardians may be asked to provide relevant medical, dietary and welfare information before attendance so that our team can make appropriate arrangements.</P>
            <P>Such information will be available only to authorised personnel who reasonably require it, including appropriate residential, pastoral, safeguarding or medical staff.</P>
            <P>Where necessary to protect a student's health or safety, relevant information may be shared with healthcare professionals, emergency services or other appropriate authorities.</P>
            <P>Safeguarding records are handled with particular care, kept appropriately restricted and shared only where there is a lawful and necessary reason. Where a safeguarding concern arises, information may be shared without consent where permitted or required by law to protect a child or another person.</P>
            <P>We will not use medical or safeguarding information for marketing purposes.</P>

            <H2>8. Photography, Video and Audio Recordings</H2>
            <P>Photographs, video recordings and audio recordings may be created during GRMSC activities, including rehearsals, classes and the Final Performance Celebration. These materials may be used for educational, administrative or promotional purposes, as appropriate.</P>
            <P>Photography and recording permissions are included within the GRMSC registration packet, which is provided to parents and legal guardians as part of the enrolment process. The registration packet explains the intended use of photographs and recordings and provides an opportunity for parents or legal guardians to give or withhold consent for optional promotional purposes, including website and social media publicity.</P>
            <P>Where appropriate, we will also take account of the wishes and rights of the student. Consent for promotional photography and recording is separate from consent or authorisation relating to essential participation in GRMSC. Students will not be excluded from the educational programme simply because permission for optional promotional use has been withheld.</P>
            <P>We take particular care when publishing images of children and will avoid unnecessary disclosure of identifying information.</P>
            <P>Requests to withdraw consent for future promotional use may be submitted using the contact details in this policy. Withdrawal will not make earlier lawful processing unlawful, and removal of previously published material may be subject to practical and legal limitations.</P>

            <H2>9. Sharing Personal Information and Third-Party Services</H2>
            <P>We do not sell or rent students' or families' personal information.</P>
            <P>We use Google Workspace Business, including Google Drive, to store and manage enquiries, administrative correspondence and relevant programme records. Information stored using Google Workspace may include application details, correspondence, registration documentation and other personal information required for the administration of GRMSC.</P>
            <P>Google provides cloud-based storage and associated services under its applicable data processing, security and international data transfer arrangements. We are responsible for determining which authorised members of our organisation may access information held within our Google Workspace environment and for applying appropriate access restrictions.</P>
            <P>We may also share information where reasonably necessary with:</P>
            <UL>
              <LI>Authorised GRMSC faculty, administrative staff, residential and pastoral personnel.</LI>
              <LI>Designated safeguarding personnel and relevant welfare professionals.</LI>
              <LI>Stamford School or relevant venue personnel, where necessary for agreed operational, accommodation, safety or emergency arrangements.</LI>
              <LI>Healthcare professionals and emergency services.</LI>
              <LI>Emergency contacts, where appropriate and necessary.</LI>
              <LI>Appropriate statutory authorities, safeguarding agencies or law enforcement bodies where required or justified.</LI>
              <LI>Payment providers, booking systems, website service providers and other contracted organisations supporting our operations.</LI>
              <LI>Professional advisers, insurers or relevant authorities where reasonably necessary for legal, regulatory or administrative purposes.</LI>
            </UL>
            <P>Information is shared on a need-to-know basis and, where appropriate, subject to contractual confidentiality and data protection requirements.</P>
            <P>Where another organisation acts as an independent data controller, its own privacy information may also apply.</P>

            <H2>10. International Travellers and Data Transfers</H2>
            <P>GRMSC welcomes applications from international travellers and recognises that personal information may be provided by students and families residing outside the United Kingdom.</P>
            <P>As part of the application and enrolment process, we may receive personal information relating to travel arrangements, emergency contacts, parental permissions and other information necessary to support participation in our residential programme.</P>
            <P>We use Google Workspace Business and other service providers to support our administrative operations. Depending on the services used, personal information may be processed, accessed or stored in countries outside the United Kingdom.</P>
            <P>Where an international transfer is subject to the UK GDPR's restricted transfer rules, we use an appropriate lawful transfer mechanism. This may include relevant UK adequacy regulations, approved contractual safeguards or another legally permitted mechanism.</P>
            <P>Google Workspace's applicable data processing terms include provisions addressing international data transfers, including contractual safeguards where required.</P>
            <P>We take reasonable steps to ensure that personal information receives an appropriate level of protection when transferred internationally. Further information about applicable international data transfer safeguards may be requested using the contact details provided in this policy.</P>

            <H2>11. How We Protect Personal Information</H2>
            <P>We take reasonable and proportionate technical and organisational measures to protect personal information against unauthorised access, accidental loss, misuse, alteration and unlawful disclosure. These measures include, where appropriate:</P>
            <UL>
              <LI>Restricting access to information according to responsibilities.</LI>
              <LI>Applying appropriate security controls to electronic records, including information stored within Google Workspace, and to communications.</LI>
              <LI>Handling medical and safeguarding information with additional care.</LI>
              <LI>Limiting unnecessary collection and disclosure of information.</LI>
              <LI>Providing appropriate data protection guidance and training to staff and other authorised personnel.</LI>
              <LI>Reviewing relevant security arrangements and access permissions periodically.</LI>
              <LI>Reviewing arrangements with external providers who process personal information on our behalf.</LI>
              <LI>Securely disposing of information when it is no longer required.</LI>
            </UL>
            <P>Although we take data protection seriously, no method of electronic transmission or storage can be guaranteed to be completely secure.</P>

            <H3>Personal Data Breaches</H3>
            <P>In the event of a suspected or confirmed personal data breach, we will take appropriate steps to investigate, contain and assess the incident.</P>
            <P>Where a breach meets the legal reporting threshold, we will notify the Information Commissioner's Office without undue delay and, where feasible, within 72 hours of becoming aware of it.</P>
            <P>Where a breach is likely to result in a high risk to individuals' rights and freedoms, we will inform those affected without undue delay, as required by law.</P>
            <P>We will maintain appropriate records of personal data breaches in accordance with applicable data protection requirements.</P>

            <H2>12. How Long We Keep Personal Information</H2>
            <P>We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including any relevant legal, financial, safeguarding or administrative obligations.</P>
            <P>Retention periods vary depending on the type of information involved. For example:</P>
            <UL>
              <LI><strong>General enquiries:</strong> Retained only while reasonably required to respond and manage related correspondence.</LI>
              <LI><strong>Applications and assessment videos:</strong> Retained for the relevant admissions process and any justified follow-up period.</LI>
              <LI><strong>Enrolment and financial records:</strong> Retained in accordance with applicable accounting, tax and legal requirements.</LI>
              <LI><strong>Medical and welfare information:</strong> Retained for periods appropriate to student care, record-keeping and any relevant legal requirements.</LI>
              <LI><strong>Safeguarding records:</strong> Retained in accordance with applicable safeguarding obligations and appropriate retention procedures.</LI>
              <LI><strong>Staff, faculty and contractor records:</strong> Retained for periods appropriate to contractual, safeguarding, financial and legal obligations.</LI>
              <LI><strong>Identity verification records:</strong> Retained only where reasonably necessary for the purpose of collection or where further retention is required by law.</LI>
              <LI><strong>Marketing information:</strong> Retained until consent is withdrawn, an opt-out is received or continued retention is no longer justified.</LI>
            </UL>
            <P>Records relating to safeguarding or other sensitive matters may require different retention periods from general administrative records.</P>
            <P>We determine appropriate retention periods according to the nature of the information, the purpose for which it is held and any relevant legal or regulatory requirements. When information is no longer required, it will be securely deleted, destroyed or anonymised, unless further retention is legally necessary.</P>

            <H2>13. Website Cookies and Analytics</H2>
            <P>Our website may use cookies and similar technologies to support essential functionality, improve the visitor experience and, where implemented, analyse website usage. Cookies are small files or similar technologies used to store or access information on a visitor's device.</P>
            <P>Depending on the services enabled, cookies may include:</P>
            <UL>
              <LI><strong>Essential Cookies:</strong> Necessary for the operation, functionality and security of the website.</LI>
              <LI><strong>Analytics Cookies:</strong> Used, where implemented, to help us understand website usage and improve our services.</LI>
              <LI><strong>Marketing Cookies:</strong> Used only where relevant technologies are implemented and subject to applicable consent requirements.</LI>
            </UL>
            <P>Strictly necessary cookies may be used where permitted by law without requiring consent. For other cookies or tracking technologies, we will obtain consent where required by applicable UK legislation.</P>
            <P>Visitors will be provided with appropriate information about the cookies in use and any available preference controls. Where relevant, further details will be provided through our website's cookie notice or cookie settings.</P>

            <H2>14. Your Data Protection Rights</H2>
            <P>Under UK data protection law, individuals have rights relating to their personal information, subject to applicable conditions and exemptions. These may include the right to:</P>
            <UL>
              <LI>Request access to personal information held about them.</LI>
              <LI>Request correction of inaccurate or incomplete information.</LI>
              <LI>Request erasure of personal information in certain circumstances.</LI>
              <LI>Request restriction of particular processing activities.</LI>
              <LI>Object to processing where the law provides that right.</LI>
              <LI>Request transfer of certain personal information in a portable format.</LI>
              <LI>Withdraw consent at any time where processing relies on consent.</LI>
            </UL>
            <P>You have the right to object to processing based on legitimate interests, subject to applicable legal conditions. You may also object to the use of your personal information for direct marketing at any time.</P>
            <P>Where consent is withdrawn, this will not affect processing that was lawful before withdrawal.</P>
            <P>Requests may be directed to our privacy contact. We may need to verify the identity or authority of the person making a request before responding. We will respond to valid requests within the timescales required by applicable data protection law.</P>

            <H2>15. Providing Personal Information</H2>
            <P>Certain information is necessary to assess an application, confirm enrolment, fulfil participation arrangements and maintain appropriate standards of safety and supervision.</P>
            <P>If essential information is not provided, we may be unable to assess an application, complete a booking or safely accommodate a student's participation.</P>
            <P>Information requested for optional activities, such as promotional photography or marketing communications, is not a condition of admission.</P>
            <P>We aim to distinguish clearly between essential information and optional permissions.</P>

            <H2>16. Automated Decision-Making</H2>
            <P>Admissions and educational assessments are intended to involve appropriate human judgement. We do not use solely automated decision-making or profiling that produces legal or similarly significant effects on applicants or students.</P>

            <H2>17. External Websites and Third-Party Services</H2>
            <P>Our website may contain links to external websites, payment services or other third-party platforms. These organisations may operate under their own privacy policies and data protection arrangements. We encourage visitors to review the relevant privacy information when using external services.</P>

            <H2>18. Changes to This Privacy Policy</H2>
            <P>We may update this Privacy Policy to reflect changes in legislation, regulatory guidance, our operations or the services we provide. The most recent version will be published on our website together with its revision date.</P>
            <P>Where changes materially affect how personal information is processed, we will take appropriate steps to notify affected individuals.</P>

            <H2>19. Contact and Complaints</H2>
            <P>If you have questions about this policy, wish to exercise your data protection rights or have concerns about how your information is handled, please contact:</P>
            <P><strong>Green Room Place Ltd.</strong><br />
            Green Room Music Summer Camp (GRMSC)<br />
            Email: info@greenroomplace.com<br />
            Address: 20-22 Wenlock Road, London, England, N1 7GU</P>
            <P>We encourage individuals to contact us in the first instance so that we have an opportunity to address concerns.</P>
            <P>You also have the right to raise a complaint with the UK's independent data protection regulator:</P>
            <P><strong>Information Commissioner's Office (ICO)</strong><br />
            Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: gold, textDecoration: "underline" }}>https://ico.org.uk</a><br />
            Telephone: 0303 123 1113</P>

            <div style={{ marginTop: 56, padding: "32px 28px", background: cream, borderLeft: `3px solid ${gold}` }}>
              <p style={{ fontFamily: G, fontSize: "1.1rem", color: green, fontStyle: "italic", lineHeight: 1.6, marginBottom: 8 }}>Green Room Music Summer Camp</p>
              <p style={{ fontFamily: I, fontSize: "0.75rem", color: gold, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Operated by Green Room Place Ltd.</p>
              <p style={{ color: "#3d5c51", fontFamily: I, fontSize: "0.9rem", lineHeight: 1.7 }}>Committed to protecting the privacy, wellbeing and personal information of every member of our community.</p>
            </div>

          </div>
        </section>

      </main>
      <Footer settings={settings} />
    </>
  );
}
