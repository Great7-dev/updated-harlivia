"use client";

import * as React from "react";
import { Separator } from "../../ui/separator";

const sections = [
  "Introduction",
  "Objective",
  "Scope and Applicability",
  "Ownership, Review and Approval",
  "Interpretation",
  "Policy",
  "Consent",
  "Use/Processing of Data Subject’s Data",
  "Third-Party Disclosure",
  "Data Confidentiality Rights",
  "Cookies",
  "Contact Us",
];

const Policy = () => {
  const [activeSection, setActiveSection] = React.useState("Introduction");

  const renderSectionContent = () => {
    switch (activeSection) {
      case "Introduction":
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              Introduction
            </h2>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              This Privacy Policy is developed by Harlivia Enterprises Ltd (the
              Company) in compliance with the Nigerian Data Protection
              Regulation 2023 and other similar regulations as well as
              demonstration of the Company’s commitment to provide its customers
              and other stakeholders with the highest level of protection of
              their personal data obtained in the course of interacting with the
              Company.
            </p>
          </>
        );
      case "Objective":
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              Objective
            </h2>
            <div className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              <p className="mb-2">
                This Privacy Policy has been put in place to:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Inform data subjects about their rights, responsibilities, and
                  privileges.
                </li>
                <li>
                  Ensure the protection of Client and other Stakeholder’s
                  information.
                </li>
                <li>Ensure confidentiality as much as possible.</li>
                <li>Take corrective action if wrongdoing is discovered.</li>
              </ul>
            </div>
          </>
        );
      case "Scope and Applicability":
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              2. Scope and Applicability
            </h2>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              This Policy applies to all employees, clients and stakeholders of
              the Company. This policy highlights the basis on which personal
              data collected from Clients and other stakeholders shall be
              processed by the Company. This policy applies to the Company’s
              website and physical contact with the Company regardless of how
              you access or use them. By continuing to visit our website, users
              of the website accepts and consent to the practices described in
              this policy.
            </p>
          </>
        );
      // Repeat cases for other sections as needed
      case "Ownership, Review and Approval":
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              3. Ownership, Review and Approval
            </h2>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              The Head of Data Protection shall be responsible for the
              development and maintenance of the data protection policy. The
              policy shall be reviewed periodically in line with the provisions
              of extant Data Protection laws. Final approval of this policy lies
              with the Managing Director of the Company.
            </p>
          </>
        );
      case "Interpretation":
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              4. Interpretation
            </h2>
            <div className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              <ul className="list-[upper-roman] list-inside space-y-2">
                <li>
                  <strong>Personal Data:</strong> This means any information
                  relating to an identified or identifiable natural persons
                  (Data Subject); an identifiable natural person is one who can
                  be identified, directly or indirectly.
                </li>
                <li>
                  <strong>Data Subject:</strong> This refers to all person who
                  can be identified, directly or indirectly, vianan identifier
                  such as a name, an ID Number, Location data etc.
                </li>
                <li>
                  <strong>Personally Identifiable Information (PII):</strong>{" "}
                  This means information that can be used on its own or with
                  other information to identify, contact or locate a single
                  person, or to identify an individual In a context.
                </li>
                <li>
                  <strong>Processing:</strong> This means any operation or set
                  of operations which is performed on personal data or sets of
                  personal data, whether or not by automated means, such as
                  collection, recording, use, disclosure by transmission, etc
                </li>
              </ul>
            </div>
          </>
        );
      case "Policy":
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              4. Policy
            </h2>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              This Privacy Policy describes your privacy rights with respect to
              personal information which the Company may collect, use, store, or
              otherwise process when you engage our services. It applies to the
              Company’s website and all database, applications, services,
              products, and physical contact with us, regardless of how you
              access or use them.
              <div className="list-decimal list-inside">
                <li> Responsibility of Data Subject</li>
                <li>
                  {" "}
                  Usernames, identification codes, passwords, or any other piece
                  of information used as part of our access security measures
                  must be treated as confidential and must not disclose to any
                  third party.
                </li>
              </div>
              We reserve the right to disable any user identification code or
              password, whether chosen or <br /> allocated by the Company at any
              time, if in the Company’s opinion, there has been non- <br />{" "}
              compliance with any of the provisions of this privacy policy.{" "}
              <br /> All enquires, complaints or suspicion of a data breach
              should be forwarded to <br /> Hello@Harlivia.com
            </p>
          </>
        );
      case "Consent":
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              6. Consent
            </h2>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              You accept this privacy policy when you give consent upon access
              to the Company’s platforms, or use of the Company’s services,
              features, technologies, or functions offered on our website, or
              visit to our office for official or non-official purposes. The
              Company may amend this privacy policy at any time by posting a
              revised version on its website or placing such notice at
              conspicuous points at its office.
            </p>
          </>
        );
      case "Use/Processing of Data Subject’s Data":
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              7. Use/Processing of Data Subject’s Data
            </h2>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              During onboarding (electronically) and when you use our website,
              we collect information such as website visits, identification
              documents (driver’s license, BVN, NIN, Passport, etc), documents
              reflecting personal information such as name, address, passport
              details, identification numbers, telephone number, occupation, as
              is necessary. In the course of carrying out our due diligence as
              required by our Regulators, we may also use information obtained
              from third parties such as friends, employers, regulators, and
              publicly available sources such as the press, public search
              engines, etc. <br /> The Company will only collect personal data
              in other to give efficient, enjoyable, and secure services. We may
              use your information to:
              <div className="list-inside">
                <li>provide necessary services and support</li>
                <li>
                  process applications and send notices about transactions to
                  requisite parties
                </li>
                <li>verify your identity</li>
                <li>
                  manage risk, or detect, prevent, and/or remediate fraud or
                  other potentially prohibitedor illegal activities
                </li>
                <li>
                  Detect, prevent, or remediate violation of laws, regulations,
                  standards, guidelines and frameworks
                </li>
                <li>
                  {" "}
                  improve the NITDA Services by implementing aggregate customer
                  or user preferences
                </li>
                <li>
                  measure the performance of the NITDA Services and improve the
                  content, technolog . and layout
                </li>
                <li>
                  track information breach and remediate such identified
                  breaches
                </li>
                <li>
                  manage and protect our information technology and physical
                  infrastructure; or
                </li>
                <li>
                  contact you at any time through your provided telephone
                  number, email address or other contact details.
                </li>
              </div>
            </p>
          </>
        );
      case "Cookies":
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              Cookies
            </h2>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              Cookies are small text files stored on your computer or mobile
              devices whenever you visit website. Cookies have many uses, such
              as memorizing your preferences to tailor your experiences while on
              our site– or to help us analyze our website traffic. The Company
              uses cookies to improve your experience while on its website. We
              would like to let you know a few things about our cookies:
              <div className="list-inside ">
                <li>
                  Some cookies are essential to access certain areas of this
                  site;
                </li>
                <li>
                  We use analytics cookies to help us understand how you use our
                  site to discover what content is most useful to you
                </li>
              </div>
            </p>
            <h2 className="text-l font-semibold mt-8 dark:text-white">
              Why and How We Use Cookies on Our Website
            </h2>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              We use cookies to improve your online activity session by making
              navigation easier and providing important security features.
            </p>
            <p className="mt-4 text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              When You access the Service by or through a mobile device, We may
              collect certain information automatically, including, but not
              limited to, the type of mobile device you use, Your mobile
              device’s unique ID, the IP address of Your mobile device, Your
              mobile operating system, the type of mobile Internet browser you
              use, unique device identifiers and other diagnostic data. We may
              also collect information that your browser sends whenever you
              visit our Service or when you access the Service by or through a
              mobile device. We use cookies to track the activity on Our Service
              and store certain information
            </p>
            <p className="mt-4 text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              We use Google Analytics to collect the following types of
              information from users who have <br /> JavaScript enabled on their
              browsers: <br /> Web browser used – software manufacturer, and
              version number
              <div>
                <li>Operating system</li>
                <li>Screen colours</li>
                <li>JavaScript support</li>
                <li>Flash version</li>
                <li>Screen resolution</li>
                <li>Network location and IP address</li>
                <li>Geographic data</li>
                <li>Hostname</li>
                <li>Connection bandwidth</li>
                <li>Time of visit</li>
                <li>Pages visited and dwell time on these pages </li>
                <li>Referring site The referring website URL </li>
                <li>Search engine query used</li>
              </div>
            </p>
            <h2 className="text-l font-semibold mt-8 dark:text-white">
              Cookie Category
            </h2>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              Some cookies are required to make our website work, but we need
              your consent to use others. <br /> The cookie categories are:
            </p>
            <h2 className="text-l font-semibold mt-4 dark:text-white">
              Category Description
            </h2>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              <div className="list-decimal list-inside">
                <li>
                  <strong>Strictly Necessary -</strong>These cookies are
                  required to run our website, to keep it secure, and to obey
                  regulations that apply to us. These cookies are essential even
                  if a customer declines the collection of cookies.
                </li>
                <li>
                  {" "}
                  <strong>Functional</strong> These cookies remember your region
                  or country, language, accessibility options, and your
                  settings.
                </li>
                <li>
                  {" "}
                  <strong>Performance</strong> These cookies tell us how
                  customers use our website. We study and profile this data to
                  help us improve our products and performance
                </li>
                <li>
                  {" "}
                  <strong>Marketing</strong> These cookies help us decide which
                  products, services, and offers may be relevant for you. We may
                  use this data to tailor the ads you see on our own and other
                  websites and apps.
                </li>
              </div>
            </p>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium mt-8">
              You can choose to have your computer warn you each time a cookie
              is collected, or you can choose to turn off all cookies. Since
              browsers differ, we recommend that you access the Help Menu to
              learn the correct way to modify your cookies. e If you turn your
              cookies off, some of the features that make your site, experience
              more efficient may not function properly.
            </p>
          </>
        );
      case "Contact Us":
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              Contact Us
            </h2>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              Should you have any question or concerns about this privacy
              policy, please contact us at;
            </p>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              Harlivia Enterprises Ltd
            </p>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              Address: S. 95 Tafawa Balewa Square, Race Course, Onikan, Lagos,
              Nigeria
            </p>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              Email Address: support@Harlivia.com
            </p>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              Phone Number: +2349167664447
            </p>
          </>
        );
      case "Third-Party Disclosure":
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              Third-Party Disclosure
            </h2>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              As a policy, the Company does not share its Clients or other
              stakeholder’s information with third parties (unless with prior
              obtained approval of the data subject) except for website hosting
              partners and other parties who assist us in operating our website,
              conducting our business, or servicing you, so long as those
              parties agree to 5 keep this information confidential. We may also
              disclose the personal information of Data subjects under
              Regulatory requirements. However, non-personally identifiable
              visitor information may be provided to other parties in some
              limited cases.
            </p>
          </>
        );
      case "Data Confidentiality Rights":
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              10. Data Confidentiality Rights
            </h2>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              <div className="list-inside">
                <li>
                  Your information is regarded as confidential and will not be
                  divulged to any third party,except under legal and/or
                  regulatory conditions.
                </li>
                <li>
                  You have the right to request sight of, and copies of any and
                  all information we keep on you, if such requests are made in
                  compliance with the Freedom of Information Act and other
                  relevant enactments.
                </li>
                <li>
                  You also have the right to request for the correction of
                  information we keep on you.
                </li>
                <li>
                  While the Company is responsible for safeguarding the
                  information entrusted to us, youare also required to practice
                  appropriate security measures such as non-sharing of password
                  and other platform login details.
                </li>
              </div>
            </p>
          </>
        );
      default:
        return (
          <>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              {activeSection}
            </h2>
            <p className="text-base text-[#333333] dark:text-gray-200 leading-relaxed font-medium">
              Content for {activeSection} goes here.
            </p>
          </>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0 bg-[#F9F9F9] dark:bg-gray-700 p-4 md:py-2 h-full sticky top-8">
          <div className="h-full overflow-y-auto">
            <h2 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 mb-4 tracking-wide">
              Table of Contents
            </h2>
            <nav className="flex flex-col space-y-2">
              {sections.map((section) => (
                <a
                  key={section}
                  href="#"
                  className={`text-sm ${
                    activeSection === section
                      ? "text-blue-600 dark:text-blue-400 font-medium underline whitespace-nowrap"
                      : "text-gray-700 dark:text-gray-200"
                  } hover:text-blue-600 dark:hover:text-blue-400 transition`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(section);
                  }}
                >
                  {section}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 h-full overflow-y-auto">
          <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1 className="text-3xl font-semibold mb-2 dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Last updated: April 8th, 2025
            </p>
            <Separator className="mb-6" />

            <section className="mb-10">{renderSectionContent()}</section>
          </article>
        </main>
      </div>
    </div>
  );
};

export default Policy;
