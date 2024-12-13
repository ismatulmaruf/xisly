import React from "react";
import Layout from "../Layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Last modified: December 10, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Privacy Notice
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Notice states the basis on which Xisly and its wholly
            owned subsidiaries process your personal information. It describes
            what categories of personal data are collected, the reason for
            collecting such personal data and your rights. Please ensure that
            you read the following carefully and direct any questions to us in
            accordance with the contact details provided below.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            By visiting Xisly’s website, using Xisly’s services and/or providing
            any personal information to us, you accept and agree to the terms of
            this Privacy Notice. Such acceptance is subject to the ‘Your data
            protection rights’ located at the end of this Privacy Notice.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Xisly’s Privacy Notice has been drafted in accordance with data
            privacy frameworks, including but not limited to the California
            Consumer Privacy Act, its revisions pursuant to the California
            Privacy Rights Act, Digital Personal Data Protection Act 2023 and
            the Delaware Personal Data Privacy Act etc.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            About Xisly
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Xisly Inc is headquartered in Illinois. Our offices are located at
            433 West Van Buren Street, Suite 205, Chicago, IL 60607. For our
            communications regarding this Privacy Notice, please email{" "}
            <a
              href="mailto:legal@xisly.com"
              className="text-blue-500 underline"
            >
              legal@xisly.com
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            What information we collect, use, and why
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect or use some or all of the following information to
            provide services, for recruitment purposes, for the operation of
            customer accounts or service updates or marketing purposes:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Names</li>
            <li>
              Contact details (e.g., name, address, telephone number or personal
              email address)
            </li>
            <li>Date of birth</li>
            <li>Addresses</li>
            <li>Purchase history</li>
            <li>Website user information</li>
            <li>Account information, including registration details</li>
            <li>Information used for security purposes</li>
            <li>Marketing preferences</li>
            <li>Location data</li>
            <li>
              Employment history (e.g., job application, employment references
              or secondary employment)
            </li>
            <li>Education history (e.g., qualifications)</li>
            <li>Right to work information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Where we get personal information from
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Xisly obtains personal information directly from individuals as
            provided during the course of dealings with Xisly. Xisly may also
            collect personal data directly from third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            How long we keep information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Personal information is typically retained as long as it is
            necessary to fulfill the purpose for which it was obtained, or as
            long as it is necessary to serve another purpose which arose after
            the initial collection.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Your data protection rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Depending on the law as it relates to Xisly’s processing of your
            personal information:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>
              Your right of access - You have the right to ask us for copies of
              your personal data.
            </li>
            <li>
              Your right to rectification - You have the right to ask us to
              rectify personal data you think is inaccurate. You also have the
              right to ask us to complete information you think is incomplete.
            </li>
            <li>
              Your right to erasure - You have the right to ask us to erase your
              personal data in certain circumstances.
            </li>
            <li>
              Your right to restriction of processing - You have the right to
              ask us to restrict the processing of your personal data in certain
              circumstances.
            </li>
            <li>
              Your right to object to processing - You have the right to object
              to the processing of your personal data in certain circumstances.
            </li>
            <li>
              Your right to data portability - You have the right to ask that we
              transfer the personal data you gave us to another organization, or
              to you, in certain circumstances.
            </li>
            <li>
              Your right to withdraw consent - When we use consent as our lawful
              basis you have the right to withdraw your consent.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            To make a data protection rights request, please contact Xisly using
            the contact details at the top of this Privacy Notice. If you have
            any concerns about our use of your personal data, you can make a
            complaint to Xisly by emailing us at{" "}
            <a
              href="mailto:legal@xisly.com"
              className="text-blue-500 underline"
            >
              legal@xisly.com
            </a>
            .
          </p>
        </section>

        <footer className="text-gray-600 mt-8">
          <p>Last updated: December 10, 2024</p>
        </footer>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
