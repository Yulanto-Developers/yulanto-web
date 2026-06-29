import { TextArrowIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

type CommentItemProps = {
    name: string;
    date: string;
    text: string;
    avatar: string;
    isReply?: boolean;
};

const CommentItem = ({
    name,
    date,
    text,
    avatar,
    isReply,
}: CommentItemProps) => {
    return (
        <li className={isReply ? "children" : ""}>
            <div className="postbox__comment-box d-flex">
                <div className="postbox__comment-info">
                    <div className="postbox__comment-avater mr-30">
                        <Image className="img-fluid" width={70} height={70} src={avatar} alt={name} />
                    </div>
                </div>

                <div className="postbox__comment-text">
                    <div className="postbox__comment-name d-flex justify-content-between align-items-center">
                        <h5>By {name}</h5>
                        <span className="post-meta">{date}</span>
                    </div>

                    <p>{text}</p>

                    <div className="postbox__comment-reply">
                        <Link href="#">
                            Reply
                            <span>
                                <TextArrowIcon/>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CommentItem;