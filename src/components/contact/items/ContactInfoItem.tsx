import Link from "next/link";

const ContactInfoItem = ({
    title,
    content,
    href,
    colClass,
}: {
    title: string;
    content: string;
    href: string;
    colClass: string;
}) => (
    <div className={colClass}>
        <div className="px-contact-inf">
            <span className="px-contact-inf-title">{title}</span>
           <Link className="px-line-black" href={href}>
    {content.split("\n").map((line, i) => (
        <span key={`${line}-${i}`}>
            {line}
            <br />
        </span>
    ))}
</Link>
        </div>
    </div>
);
export default ContactInfoItem;