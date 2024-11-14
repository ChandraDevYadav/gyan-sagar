import React from 'react';

function EmbeddedMap() {
  return (
    <div className="flex justify-center items-center bg-white rounded-md">
      <div className="w-full">

        {/* Embedded Google Map */}
        <div className="pb-6 md:pb-0 border-[8px] border-white rounded-md">
          <iframe
            title="Biratnagar Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7067.456957862143!2d87.26499877339275!3d26.458108519447374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef74676b4fb20b%3A0x1564e5b7604b91ae!2sBiratnagar%2C%20Nepal!5e0!3m2!1sen!2sus!4v1698958505283!5m2!1sen!2sus"
            width="100%"
            height="410"
            allowFullScreen=""
            loading="lazy"
            className=""
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default EmbeddedMap;
