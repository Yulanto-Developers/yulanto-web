'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import '@/assets/css/ThankYou.css';
import { useEffect, useState } from 'react';

export default function Page() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(15);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          router.push('/');
          return 1;
        }

        setAnimate(true);

        setTimeout(() => {
          setAnimate(false);
        }, 300);

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <main className="thankyou-page">
      <div className="container thankyou-container">
        <div className="row align-items-center min-vh-100">

          {/* Left - Image */}
          <div className="col-lg-6 col-md-6">
            <div className="thankyou-image">
              <Image
                src="/assets/img/thank-you/yulanto-web-creation.png"
                alt="Thank you"
                width={600}
                height={500}
                priority
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="col-lg-6 col-md-6">
            <div className="thankyou-content">

              <span className="tp-section-subtitle text-black blink-ball">
                Thank You!
              </span>

              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">
                  Thank You for{" "}
                </span>
                Reaching Us
              </h4>

              <p className="text-black">
                Thank you for reaching out to us. We have received your
                enquiry successfully.
              </p>

              <p className="text-black">
                Our team will review your request and get in touch with you
                soon.
              </p>

              <div className="thankyou-line"></div>

              {/* Countdown */}
              <div className="processing-message">

                <span className="loading-spinner"></span>

                <span className="contact-text">
                  Back to Home in{' '}

                  <span
                    className={`countdown-number ${
                      animate ? 'countdown-animate' : ''
                    }`}
                  >
                    {countdown}
                  </span>

                  {' '}seconds
                </span>

              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}