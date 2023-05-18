import React from 'react';
import Header from '../components/Header';
import { TextImageSplit, SectionHeading } from '../components/Sections';

function ContactSuccessPage({ heading, subheading, office }) {
  return (
    <div>
      <Header heading={heading} subheading={subheading} />
      <TextImageSplit image={office.image} imageLeft={true}>
        <p className="text-green-700 font-semibold tracking-wide">
          {office.tagline}
        </p>
        <SectionHeading>{office.location}</SectionHeading>
        <div className="mt-6 sm:flex sm:flex-row text-gray-500">
          <div
            className="sm:w-1/2"
            dangerouslySetInnerHTML={{ __html: office.address.html }}
          />
          <div
            className="mt-6 sm:mt-0 sm:w-1/2"
            dangerouslySetInnerHTML={{ __html: office.phone.html }}
          />
        </div>
      </TextImageSplit>
      <div className="success-page">
        <h2>Thank you for your submission!</h2>
      </div>
    </div>
  );
}

export default ContactSuccessPage;
