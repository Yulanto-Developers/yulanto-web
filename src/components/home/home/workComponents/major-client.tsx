import React from 'react';
import Image from 'next/image';
import styles from './major-client.module.css';
import img4 from '@/assets/img/sample/gallery/img- (6).jpg';
import img5 from '@/assets/img/sample/gallery/img- (7).jpg';
import img1 from '@/assets/img/sample/gallery/img- (8).jpg';
import im2 from '@/assets/img/sample/gallery/img- (9).jpg';
import img3 from '@/assets/img/sample/gallery/img- (74).jpg';

interface ClientWork {
    id: string;
    name: string;
    logo: string;
    location: string;
    year: string;
    techStack: string[];
    tasks: string[];
    modalId: string;
}

const defaultClientData: ClientWork[] = [
    {
        id: 'harithams',
        name: 'Harithams',
        logo: img4.src,
        location: 'Chennai',
        year: '2025',
        techStack: ['CSS', 'HTML', 'PHP', 'JQuery'],
        tasks: [
            'Corporate website architecture redesign',
            'Project portfolio showcase optimization',
            'Lead enquiry funnel integration',
            'Mobile-first performance optimization'
        ],
        modalId: '#harithams-modal'
    },
    {
        id: 'preserve-metals',
        name: 'Preserve Metals',
        logo: img5.src,
        location: 'Singapore',
        year: '2025',
        techStack: ['Wordpress', 'JQuery', 'CSS'],
        tasks: [
            'Industrial brand identity web layout',
            'Sustainability-focused content presentation',
            'High-performance website optimization',
            'Technical service showcase enhancement'
        ],
        modalId: '#preserve-metals-modal'
    },
    {
        id: 'tkms',
        name: 'TKMS',
        logo: img1.src,
        location: 'Chennai',
        year: '2025',
        techStack: ['CSS', 'HTML', 'PHP', 'JQuery'],
        tasks: [
            'Professional corporate UI implementation',
            'Service-based lead capture optimization',
            'Compliance-focused content structuring',
            'SEO-ready site architecture setup'
        ],
        modalId: '#tkms-modal'
    },
    {
        id: 'klitech',
        name: 'KL-iTech',
        logo: im2.src,
        location: 'Chennai',
        year: '2024',
        techStack: ['CSS', 'HTML', 'PHP', 'JQuery'],
        tasks: [
            'UI redesign with techy look',
            'Dynamic content setup',
            'UX tailored for enterprise users',
            'Web Maintenance'
        ],
        modalId: '#klitech-modal'
    },
    {
        id: 'typhoon',
        name: 'Typhoon',
        logo: img1.src,
        location: 'Chennai',
        year: '2024',
        techStack: ['Wordpress', 'JQuery', 'CSS'],
        tasks: [
            'Corporate-style website design',
            'Enquiry flow optimized for conversations',
            'Ongoing updates and support',
            'Product catalog Organization'
        ],
        modalId: '#typhoon-modal'
    },
    {
        id: 'bmc',
        name: 'BM Ceramics',
        logo: im2.src,
        location: 'Chennai',
        year: '2024',
        techStack: ['CSS', 'HTML', 'PHP', 'JQuery'],
        tasks: [
            'Custom Redesign UI',
            'User Experience Design',
            'Showcase Collection of Products',
            'Web Maintenance'
        ],
        modalId: '#bmc-modal'
    },
    {
        id: 'pixcell',
        name: 'Pixcellplay',
        logo: img1.src,
        location: 'Chennai',
        year: '2023',
        techStack: ['CSS', 'HTML', 'PHP', 'JQuery'],
        tasks: [
            'Web Redesigning',
            'Improved User Interface',
            'Effectively display games',
            'Strengthen the brand'
        ],
        modalId: '#pixcell-modal'
    },
    {
        id: 'bioxgreen',
        name: 'Bioxgreen',
        logo: im2.src,
        location: 'Chennai',
        year: '2022',
        techStack: ['CSS', 'HTML', 'PHP', 'JQuery'],
        tasks: [
            'Web Redesigning',
            'On-Page SEO',
            'Speed Optimizations',
            'Website Maintenance'
        ],
        modalId: '#biox-modal'
    },
    {
        id: 'stanson',
        name: 'Stanson',
        logo: img1.src,
        location: 'Chennai',
        year: '2022',
        techStack: ['CSS', 'HTML', 'PHP', 'JQuery'],
        tasks: [
            'Web Redesigning',
            'On-Page SEO',
            'Speed Optimizations',
            'Scalability and Adaptability'
        ],
        modalId: '#stanson-modal'
    }
];

interface MajorClientProps {
    clientData?: ClientWork[];
}

export default function MajorClient({ clientData = defaultClientData }: MajorClientProps) {
    return (
        <section className={`py-5 ${styles.majorClientSection}`}>
            <div className="container">
                {/* <h1 className={`text-center mb-5 fw-bold ${styles.mainTitle}`}>
                    Business Website Creation
                </h1> */}

                {clientData.map((client, index) => {
                    const isOdd = index % 2 !== 0;
                    return (
                        <div
                            key={client.id}
                            className={`row align-items-center py-5 ${styles.clientRow} ${isOdd ? 'flex-lg-row-reverse' : ''
                                }`}
                        >
                            {/* Image / Card Section */}
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className={styles.imageCard}>
                                    <div className={styles.imageOverlay} />
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        width={450}
                                        height={280}
                                        className="img-fluid rounded position-relative"
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            </div>

                            {/* Text Content Section */}
                            <div className="col-lg-6">
                                <div className={styles.clientContent}>
                                    <div className="d-flex align-items-center gap-2 mb-3">
                                        <span className={`badge ${styles.tagTube}`}>{client.location}</span>
                                        <span className={`badge ${styles.tagTube}`}>{client.year}</span>
                                    </div>

                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        {client.techStack.map((tech, techIdx) => (
                                            <span key={techIdx} className={`badge ${styles.techBadge}`}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className={styles.slideTitleSub}>The Work We Carried out</h3>
                                    <ul className={styles.infoListUl}>
                                        {client.tasks.map((task, taskIdx) => (
                                            <li key={taskIdx}>{task}</li>
                                        ))}
                                    </ul>

                                    <button
                                        className={`btn mt-3 ${styles.casestudyBtn}`}
                                        data-bs-toggle="modal"
                                        data-bs-target={client.modalId}
                                    >
                                        <i className="fa fa-eye me-2"></i> Case Studies
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}