"use client"

import * as React from "react"
import { Separator } from "../components/ui/separator"

const TermOfUse = () => {
  const [activeTab, setActiveTab] = React.useState<string>("welcome")

  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, tab: string) => {
    e.preventDefault()
    setActiveTab(tab)
  }

  const tableOfContents = [
    { id: "welcome", title: "Welcome", number: "" },
    { id: "overview", title: "Overview of Services", number: 1 },
    { id: "acceptance", title: "Acceptance of Terms", number: 2 },
    { id: "eligibility", title: "Eligibility", number: 3 },
    { id: "account", title: "Account Registration", number: 4 },
    { id: "use", title: "Use of Services", number: 5 },
    { id: "intellectual", title: "Intellectual Property Rights", number: 6 },
    { id: "privacy", title: "Data Privacy and Security", number: 7 },
    { id: "comment", title: "Use Comment", number: 8 },
    { id: "disclaimer", title: "Disclaimer", number: 9 },
    { id: "limitation", title: "Limitation of Liability", number: 10 },
    { id: "indemnification", title: "Indemnification", number: 11 },
    { id: "termination", title: "Termination and Suspension", number: 12 },
    { id: "dispute", title: "Dispute Resolution", number: 13 },
    { id: "governing", title: "Governing Law", number: 14 },
    { id: "changes", title: "Changes to Terms", number: 15 },
    { id: "contact", title: "Contact Us", number: 16 },
  ]

  const getContent = (id: string) => {
    const item = tableOfContents.find((item) => item.id === id)

    switch (id) {
      case "welcome":
        return (
          <section id="welcome" className="mb-10">
            <p className="text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">Welcome to Harlivia Enterprises Ltd</p>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              Welcome to Harlivia Enterprises Ltd. ("Harlivia "we," "our," or "us"). By accessing or using our website
              and services (the "Services"), you ("you") agree to be bound by the following Terms of use (the
              "Agreement"). The use of our website is subject to the following terms of use. This Agreement are to be
              read together by you with any terms, conditions or disclaimers provided in our website. Please review
              the Terms carefully. The Agreement apply to all users of our website, including without limitation,
              users who are browsers, customers, merchants and vendors. If you do not agree to the Terms of our
              privacy policy, you are not authorized to access our website, use any of our website's service or place
              an order on our website.
            </p>

          </section>
        )
      case "overview":
        return (
          <section id="overview" className="mb-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">{item?.number}. Overview of Services</h2>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              Harlivia Enterprises Ltd is a provider of a wide range of services, including but not limited to: Buying,
              selling and trading of goods, Oil and gas sector services, Transportation and logistics, Real estate, Food
              processing and production. You agree to use our services only for lawful purposes and in a manner that
              does not infringe the rights of others.
            </p>
          </section>
        )
      case "acceptance":
        return (
          <section id="acceptance" className="mb-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">{item?.number}. Acceptance of Terms</h2>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              By using or accessing our Services, you agree to comply with and be bound by these Terms of Use, our
              Privacy Policy, and any other guidelines or policies referenced herein. If you do not agree to these
              terms, you should not use our Services.
            </p>
          </section>
        )
      case "eligibility":
        return (
          <section id="eligibility" className="mb-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">{item?.number}. Eligibility</h2>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              To use our Services, you must be at least 18 years old or the legal age of majority in your jurisdiction.
              You agree to provide accurate, current, and complete information when using our Services and to update
              your information if it changes.
            </p>
          </section>
        )
      case "account":
        return (
          <section id="account" className="mb-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">{item?.number}. Account Registration</h2>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              Some of our Services require you to create an account. By registering, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              <li>Provide accurate and complete information.</li>
              <li>Maintain the confidentiality of your account credentials.</li>
              <li>Notify us immediately of any unauthorized use of your account.</li>
              <li>Be fully responsible for all activities under your account.</li>
            </ul>
          </section>
        )
      case "use":
        return (
          <section id="use" className="mb-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">{item?.number}. Use of Services</h2>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              You agree to use the Services only for lawful purposes and in accordance with all applicable local, state,
              and international laws, rules, and regulations. Specifically, you agree that you will not:
            </p>
            <ul className="list-disc pl-6 mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              <li>Use the Services for any fraudulent, illegal, or unauthorized activities.</li>
              <li>Violate or infringe upon the intellectual property rights or privacy rights of any third party.</li>
              <li>Transmit any harmful, disruptive, or malicious software or viruses through the Services.</li>
              <li>Engage in any activity that interferes with the proper functioning of the Services..</li>
            </ul>
          </section>
        )
      case "intellectual":
        return (
          <section id="intellectual" className="mb-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">{item?.number}. Intellectual Property Rights</h2>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              All content, designs, trademarks, software, and other intellectual property associated with the Services
              are owned by Harlivia. or our licensors. You may not reproduce, distribute, modify, or create derivative
              works from our intellectual property without our prior written consent.
            </p>
          </section>
        )
      case "privacy":
        return (
          <section id="privacy" className="mb-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">{item?.number}. Data Privacy and Security</h2>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              Your privacy is important to us. Please review our [Privacy Policy] to understand how we collect, use, and
              protect your personal data. By using our Services, you consent to the collection and use of your data as
              outlined in the Privacy Policy.
            </p>
          </section>
        )
      case "comment":
        return (
          <section id="usecomment" className="mb-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              {item?.number}. Use Comment, Feedback and other Submission
            </h2>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              You acknowledge that you are responsible for the information, profiles, opinions, messages, comments and
              any other content (collectively, the “content”) that you post, distribute or share on or through our
              website or services available in connection with our website. You further acknowledge that you have full
              responsibility for the content, including but not limited to, with respect to its legality and its
              trademark, copyright and other intellectual property ownership. You agree that any content submitted by
              you in response to a request by us for a specific submission may be edited, adapted, modified, recreated,
              published or distributed by us. You further agree that we are under no obligation to maintain any content
              in confidence, to pay compensation for any content or to respond to any content. We reserve the right to
              terminate your ability to post on our website and/or delete any content that we deemed objectionable. You
              consent to such removal and/or deletion and waive any claim against us for the removal and/or deletion of
              your content.
            </p>
          </section>
        )
      case "disclaimer":
        return (
          <section id="disclaimer" className="mb-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">{item?.number}. Disclaimer</h2>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              You assume all responsibility and risk with respect to your use of our website, which is provided “as is”
              without warranties, representations or conditions of any kind, either express or implied, with regard to
              information accessed from or via our website, including without limitation, all content and materials, and
              functions and services provided on our website, all of which are provided without warranty of any kind,
              including but not limited to warranties concerning the availability, accuracy, completeness or usefulness
              of content or information, uninterrupted access and any warranties of title, non-infringement,
              merchantability or fitness for a particular purpose. We do not warrant that our website or its functioning
              or the content and material of the services made available thereby will be timely, secure, uninterrupted
              or error-free, that defects will be corrected, or that our websites or the servers that make our website
              available are free of viruses or other harmful components.
            </p>
          </section>
        )
      case "limitation":
        return (
          <section id="limitation" className="mb-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">{item?.number}. Limitation of Liability</h2>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              To the fullest extent permitted by applicable law, Harlivia will not be liable for any indirect,
              incidental, special, consequential, or punitive damages, including loss of profits, data, or business,
              arising from the use of or inability to use our Services. Our total liability for any claim arising out of
              or related to these Terms shall be limited to the amount you have paid for the Services in question.
            </p>
          </section>
        )
      case "indemnification":
        return (
          <section id="indemnification" className="mb-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">{item?.number}. Indemnification</h2>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              You agree to indemnify and hold harmless Harlivia, its director, officers, employees, and affiliates from
              any and all claims, liabilities, damages, and expenses (including legal fees) arising out of your use of
              the Services, violation of these Terms, or infringement of any third- party rights.
            </p>
          </section>
        )
      case "termination":
        return (
          <section id="termination" className="mb-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">{item?.number}. Termination and Suspension</h2>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              We may suspend or terminate your access to our Services at any time, with or without cause, including if
              we suspect fraud, violation of these Terms, or illegal activities. You may also terminate your account by
              notifying us, subject to any outstanding payments or obligations.
            </p>
          </section>
        )
      case "dispute":
        return (
          <section id="dispute" className="mb-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">{item?.number}. Dispute Resolution</h2>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              Any disputes arising out of or in connection with these Terms shall be resolved through mediation in
              accordance with the rules of the Lagos Multidoor Courthouse (LMDC). The mediation shall be conducted in
              Lagos state, Nigeria, and the language of the arbitration shall be English.
            </p>
          </section>
        )
      case "governing":
        return (
          <section id="governing" className="mb-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">{item?.number}. Governing Law</h2>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              These Terms of use shall be governed by and construed in accordance with the laws of the Federal Republic
              of Nigeria. Any disputes not subject to mediation shall be resolved in the courts located in the Federal
              Republic of Nigeria.
            </p>
          </section>
        )
      case "changes":
        return (
          <section id="changes" className="mb-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">{item?.number}. Changes to Terms</h2>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              We reserve the right to modify or update these Terms of use at any time. Any changes will be posted on our
              website, and the updated Terms will be effective immediately upon posting. Your continued use of the
              Services after any changes constitutes your acceptance of the revised Terms.
            </p>
          </section>
        )
      case "contact":
        return (
          <section id="contact" className="mb-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">{item?.number}. Contact Us</h2>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              If you have any questions or concerns about these Terms and Conditions, please contact us at:
              <p className="font-bold">Harlivia Enterprises Ltd.</p>
              <p className="font-bold">Address: S.95, Tafawa Balewa Square, Race Course, Onikan, Lagos, Nigeria.</p>
              <p className="font-bold">Email Address: support@Harlivia.com</p>
              <p className="font-bold">Phone Number: +2349167664447</p>
            </p>
          </section>
        )
      default:
        return (
          <section id={id} className="mb-10">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              {item?.number}. {item?.title}
            </h2>
            <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
              This section contains the terms related to {item?.title.toLowerCase()}. The full content would be provided
              in the complete Terms of Use document.
            </p>
          </section>
        )
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Table of Contents - Sidebar */}
        <aside className="w-full md:w-64 shrink-0 bg-[#F9F9F9] dark:bg-gray-700 p-4 md:py-2 h-full sticky top-8">
          <div className="sticky top-8">
            <h2 className="text-sm font-bold uppercase text-gray-700 dark:text-gray-300 mb-4 tracking-wide">
              TABLE OF CONTENT
            </h2>
            <nav className="flex flex-col space-y-1">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm py-1 ${activeTab === item.id
                    ? "text-blue-600 dark:text-blue-400 font-medium underline whitespace-nowrap"
                    : "text-gray-700 dark:text-gray-300"
                    } hover:text-blue-600 dark:hover:text-blue-400 transition`}
                  onClick={(e) => handleTabClick(e, item.id)}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1 className="text-3xl font-semibold mb-2 dark:text-white">Terms of Use</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Last updated: April 8th, 2025</p>
            <Separator className="mb-3" />
            {getContent(activeTab)}
          </article>
        </main>
      </div>
    </div>
  )
}

export default TermOfUse
