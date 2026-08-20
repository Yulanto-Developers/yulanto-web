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
      <section id="postbox" className="postbox-area pt-60 pb-60">
        <div className="container container-1230">
          <div className="row justify-content-center">
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="postbox-wrapper">

                <div className="postbox-details-quote-box">
                  <h4 className="px-about-title mb-20">
                    <span className="text-blue-about">Converting Concepts into</span> Captivating Digital Experiences
                  </h4>
                  <blockquote>
                    <div className="postbox-details-quote-wrap d-flex align-items-start">
                      <i>
                        <BlogQuoteIcon />
                      </i>

                      <div className="postbox-details-quote col-lg-8">
                        <p>
                          “Let’s turn your ideas into impactful digital experiences. Whether you have a question, need guidance, or are ready to start a project, our team is here to help. Get in touch with us or visit our office for a conversation over a cup of coffee.”
                        </p>


                      </div>
                      <div className="col-lg-4">
                        <div className="tp-contact-us-img">
                          <Image src="/assets/img/tocontact/QR2.png" alt="Contact Us" width={170} height={170} />
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