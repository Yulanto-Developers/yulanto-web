import { TextArrowIcon } from "@/svg";
import Link from "next/link";

const SocialLinkItem = ({
    name,
    href,
}: {
    name: string;
    href: string;
}) => (
    <Link className="px-line-black px-doubble-effect" href={href}>
        {name}
        <i>
            <TextArrowIcon strokeColor="#1E1E1E" />
            <TextArrowIcon strokeColor="#1E1E1E" />
        </i>
    </Link>
);
export default SocialLinkItem;