import React from "react";

const CalendlySection = () => {
  return (
    <section className="w-full px-4 py-8 flex justify-center bg-gray-100">
      <div className="max-w-4xl w-full">
        <div className="calendly-inline-widget w-full h-[700px]" style={{ minWidth: '320px' }}>
          <iframe
            src="https://calendly.com/anziandco/free-consultation?hide_event_type_details=1&hide_gdpr_banner=1"
            width="100%"
            height="100%"
            style={{ minHeight: '700px', border: '0' }}
            frameBorder="0"
            title="Calendly Scheduling"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
