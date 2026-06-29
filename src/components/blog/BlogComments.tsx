import CommentItem from "./CommentItem";

const comments = [
    {
        id: 1,
        name: "Farhan Firoz",
        date: "January 2, 2026",
        text: "I love this theme. Sometimes it’s difficult to work with some themes, because even if they are created with Elementor, you can’t edit all the things with Elementor.",
        avatar: "/assets/img/blog/blog-details/user-2.jpg",
    },
    {
        id: 2,
        name: "Oliver Williams",
        date: "January 2, 2026",
        text: "They have really taken their time to work appearance of the theme, also, they have a very interactive client assistance service, I like() !",
        avatar: "/assets/img/blog/blog-details/blog-details-sm-1.jpg",
        isReply: true,
    },
    {
        id: 3,
        name: "James Taylor",
        date: "January 2, 2026",
        text: "They have really taken their time to work appearance of the theme, also, they have a very interactive client assistance service, I like() !",
        avatar: "/assets/img/blog/blog-details/blog-details-sm-2.jpg",
    },
];

const BlogComments = () => {
    return (
        <div className="postbox__comment pt-115 pb-50">
            <h3 className="postbox__comment-title">
                Comments ({comments.length.toString().padStart(2, "0")})
            </h3>

            <ul>
                {comments.map((comment) => (
                    <CommentItem key={comment.id} {...comment} />
                ))}
            </ul>
        </div>
    );
};

export default BlogComments;