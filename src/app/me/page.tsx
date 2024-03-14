import Link from 'next/link';
import React from 'react';


export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl">About Us</h1>
      <div className="rounded-lg ">
        <div className="relative  bg-orange-600 py-28">
          <div className="relative z-10 mx-auto max-w-screen-xl px-4 md:px-8 md:text-center">
            <div className="max-w-xl md:mx-auto">
              <p className="text-3xl font-semibold text-white sm:text-4xl">
                Advertise With Us
              </p>
              <p className="mt-3 text-orange-100">
               
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-white px-4 py-2 font-medium text-gray-800 duration-150 hover:bg-gray-100 active:bg-gray-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div
            className="absolute top-0 h-full w-full"
            style={{
              background:
                'linear-gradient(268.24deg, rgba(255, 165, 0, 0.76) 50%, rgba(255, 165, 0, 0.545528) 80.61%, rgba(255, 165, 0, 0) 117.35%)',
            }}
          ></div>
        </div>
      </div>

      <p>
        Mohodi Community Radio – found in 1995 – broadcasts on the 98.8 MHz FM
        stereo frequency from the Mohodi township outside Polokwane to Tzaneen;
        Mokopane; Ngoako; Ramalepe; Sekakeng; Fatima; Madikana; Maponto;
        Broekman; Brussels; Lisa; Mogwadi; Makgado; Louis Trichardt;
        Potgietersrus; Duiwelskloof; Dendron; and Makgolong. Villages
        :Waterpoort, Burgersfort and Montcresto The station’s listeners are aged
        between 16 and 39, in LSM segments one to five, with multicultural
        programming that targets the community as a whole and which is made up
        of 60% talk and 40% music. The main broadcast languages are Northern
        Sotho and English and the station broadcasts 24-hours a day, seven days
        a week. Mohadi FM attempts to add value to its community initiatives
        through an improved, informative communication system. Its mission is to
        provide a reliable and accessible service to its community; promoting
        strong leadership and institutional capacity enhancement programmes;
        facilitating development and self-worth through the dissemination of
        relevant information; and promoting diversity of opinions amongst
        listeners.
      </p>
    </div>
  );
}
