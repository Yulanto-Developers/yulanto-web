
interface AboutServiceItemProps {
    item: {
        id: string;
        title: string;
        desc: string;
    };
}

const AboutServiceItem = ({ item }: AboutServiceItemProps) => {
    return (
        <div className="aus-service-item">
            <div className="row">
                <div className="col-md-6">
                    <div className="aus-service-content d-flex align-items-center">
                        <span>{item.id}</span>
                        <h4>{item.title}</h4>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="aus-service-content">
                        <p>{item.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutServiceItem;