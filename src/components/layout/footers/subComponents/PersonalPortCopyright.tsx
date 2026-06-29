import { ScrollLink } from '@/components/common';
import { FooterBackToTopArrow } from '@/svg/ArrowIcons';
import { getCurrentYear } from '@/utils/getCurrentYear';
import Link from 'next/link';

const PersonalPortCopyright = () => {
    return (
        <div className="px-copyright-3-wrap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4">
                        <div className="px-copyright-3-text text-center text-lg-start">
                            <p>© {getCurrentYear()} <Link href="#">Themepure.</Link> All Right Reserved</p>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-8">
                        <div className="px-copyright-3-menu text-center text-lg-start">
                            <ul>
                                <li><Link href="#">Home</Link></li>
                                <li><Link href="#">About</Link></li>
                                <li><Link href="#">Projects</Link></li>
                                <li><Link href="#">Blog</Link></li>
                                <li><Link href="#">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <div className="px-copyright-3-backtop smooth text-center text-lg-end">
                            <ScrollLink target='#top'>
                                back to top{" "}
                                <span>
                                    <FooterBackToTopArrow />
                                </span>
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortCopyright;