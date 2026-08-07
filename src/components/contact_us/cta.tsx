import { DribbleIcon, FacebookIcon, InstragramIconTwo, TwittorIcon } from "@/svg/SocialIcons";
import { BlogCommentIcon, BlogEditIcon, BlogQuoteIcon, BlogTimeIcon } from "@/svg";
import PostboxDetailsForm from "@/components/form/PostboxDetailsForm";

import { blogs } from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsArea = () => {
  return (
    <>
      {/* -- postbox area start -- */}
      <section id="postbox" className="postbox-area tp-blog-details-ptb pt-60 pb-60">
        <div className="container container-1230">
          <div className="row justify-content-center">
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="postbox-wrapper">

                <div className="postbox-details-quote-box mb-45">
                  <h4 className="px-about-title mb-20">
                    <span className="text-blue-about">Converting concepts into </span> Captivating digital experiences
                  </h4>
                  <blockquote>
                    <div className="postbox-details-quote-wrap d-flex align-items-start">
                      <i>
                        <BlogQuoteIcon />
                      </i>

                      <div className="postbox-details-quote">
                        <p>
                          “We are available to provide assistance and address any inquiries you may
                          have. We eagerly anticipate receiving your questions. If you require any assistance,
                          please do not hesitate to contact us or arrange a meeting at our office, where we
                          can discuss matters over a cup of coffee.”
                        </p>

                        {/* Added Button */}
                        <div className="mt-20 px-btn-grey ">
                          <Link href="#" className="">
                            Request a Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  </blockquote>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="container container-1230">
          <div className="row"></div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsArea;