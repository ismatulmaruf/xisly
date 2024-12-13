import React from "react";
import Layout from "../Layout/Layout";

const TermsOfService = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Terms of Service ("Terms")
        </h1>
        <p className="text-gray-700 leading-relaxed mb-8">
          Please read these Terms of Service ("Terms", "Terms of Service")
          carefully before using the{" "}
          <a href="https://xisly.net" className="text-blue-500 underline">
            https://xisly.net
          </a>{" "}
          website (the "Service") operated by Xisly ("us", "we", or "our").
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Your access to and use of the Service is conditioned on your
            acceptance of and compliance with these Terms. These Terms apply to
            all visitors, users, and others who access or use the Service.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            By accessing or using the Service you agree to be bound by these
            Terms. If you disagree with any part of the terms, then you may not
            access the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Links To Other Web Sites
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by Xisly.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Xisly has no control over, and assumes no responsibility for, the
            content, privacy policies, or practices of any third-party web sites
            or services. You further acknowledge and agree that Xisly shall not
            be responsible or liable, directly or indirectly, for any damage or
            loss caused or alleged to be caused by or in connection with use of
            or reliance on any such content, goods or services available on or
            through any such web sites or services.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            We strongly advise you to read the terms and conditions and privacy
            policies of any third-party web sites or services that you visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Governing Law
          </h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms shall be governed and construed in accordance with the
            laws of Illinois, USA, without regard to its conflict of law
            provisions.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. If any provision of
            these Terms is held to be invalid or unenforceable by a court, the
            remaining provisions of these Terms will remain in effect. These
            Terms constitute the entire agreement between us regarding our
            Service, and supersede and replace any prior agreements we might
            have between us regarding the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Changes</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will try to
            provide at least 30 days' notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            By continuing to access or use our Service after those revisions
            become effective, you agree to be bound by the revised terms. If you
            do not agree to the new terms, please stop using the Service.
          </p>
        </section>

        <footer className="text-gray-600 mt-8">
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a
              href="mailto:legal@xisly.net"
              className="text-blue-500 underline"
            >
              legal@xisly.net
            </a>
            .
          </p>
          <p className="mt-4">
            Our Terms of Service agreement was created on TermsFeed.com
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default TermsOfService;
