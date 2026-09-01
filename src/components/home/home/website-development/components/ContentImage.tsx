import React from 'react';

export interface ContentImageProps {
  subtitle?: string;
  titlefirst?: string;
  titlesecond?: string;
  paragraphs?: string[];
  quoteText?: string;
  quoteAccentColor?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
}

const ContentImage: React.FC<ContentImageProps> = ({
  subtitle,
  titlefirst,
  titlesecond,
  paragraphs,
  quoteText,
  quoteAccentColor = '#53ae7d',
  imageSrc,
  imageAlt = '',
  imagePosition = 'right',
}) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <>
      {/* Internal CSS for Blockquote */}
      <style>{`
        .custom-blockquote {
          position: relative;
          margin-top: 1.5rem;
          padding: 1.25rem 1.5rem;
          padding-left: 1.75rem;
          border-left: 4px solid ${quoteAccentColor};
          background-color: rgba(83, 174, 125, 0.08);
          border-top-right-radius: 12px;
          border-bottom-right-radius: 12px;
          box-shadow: 0 2px 8px rgba(5, 52, 86, 0.05);
          transition: all 0.3s ease-in-out;
        }

        .custom-blockquote:hover {
          background-color: rgba(83, 174, 125, 0.12);
          box-shadow: 0 4px 12px rgba(5, 52, 86, 0.1);
          transform: translateY(-1px);
        }

        .custom-blockquote-content {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .custom-blockquote-text {
          margin: 0;
          color: #053456;
          font-size: 1.05rem;
          font-weight: 500;
          line-height: 1.6;
        }

        .custom-quote-mark {
          color: ${quoteAccentColor};
          font-family: Georgia, serif;
          font-size: 2.25rem;
          line-height: 1;
          user-select: none;
        }

        .custom-quote-mark.end {
          align-self: flex-end;
        }
      `}</style>

      <div className="container py-4">
        <div className="row align-items-center g-4">
          {/* Optional Image Column (Left Side) */}
          {imageSrc && isImageLeft && (
            <div className="col-12 col-lg-5">
              <div>
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                />
              </div>
            </div>
          )}

          {/* Main Content Column */}
          <div className={imageSrc ? 'col-12 col-lg-7' : 'col-12'}>
            <div className="space-y-4">
              {subtitle && (
                <span
                  className="tp-section-subtitle text-black blink-ball"
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  {subtitle}
                </span>
              )}

              <div className="px-project-title-box">
                {(titlefirst || titlesecond) && (
                  <h4
                    className="px-about-title mb-20"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    {titlefirst} {titlefirst && titlesecond ? ' ' : ''}
                    {titlesecond && (
                      <span className="text-blue-about">{titlesecond}</span>
                    )}
                  </h4>
                )}

                {/* Dynamic Paragraphs */}
                {paragraphs &&
                  paragraphs.map((pText, index) => (
                    <p
                      key={index}
                      className="text-figtree text-black mt-2"
                      data-aos="fade-up"
                      data-aos-delay={500 + index * 100}
                    >
                      {pText}
                    </p>
                  ))}

                {/* Optional Custom Blockquote */}
                {quoteText && (
                  <blockquote
                    className="custom-blockquote"
                    data-aos="fade-up"
                    data-aos-delay={
                      500 + (paragraphs ? paragraphs.length * 100 : 0)
                    }
                  >
                    <div className="custom-blockquote-content">
                      <span className="custom-quote-mark">“</span>
                      <p className="custom-blockquote-text">{quoteText}</p>
                      <span className="custom-quote-mark end">”</span>
                    </div>
                  </blockquote>
                )}
              </div>
            </div>
          </div>

          {/* Optional Image Column (Right Side - Default) */}
          {imageSrc && !isImageLeft && (
            <div className="col-12 col-lg-5">
              <div>
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContentImage;