"use client";
import CardSwap, { Card } from "./CardSwap";

export default function Home() {
    return (
        <div
            style={{
                position: "relative",
                height: "650px",
            }}
        >
            <CardSwap
                width={800}
                height={500}
                cardDistance={60}
                verticalDistance={60}
                delay={4000}
                pauseOnHover
            >
                <Card>
                    <div className="p-4">
                        <img
                            src="/images/course1.jpg"
                            className="img-fluid rounded"
                            alt=""
                        />

                        <h3 className="mt-3">Business</h3>

                        <p>
                            Learn business management and entrepreneurship.
                        </p>
                    </div>
                </Card>

                <Card>
                    <div className="p-4">
                        <img
                            src="/images/course2.jpg"
                            className="img-fluid rounded"
                            alt=""
                        />

                        <h3 className="mt-3">Computer</h3>

                        <p>
                            Web Development, AI, Cloud Computing and more.
                        </p>
                    </div>
                </Card>

                <Card>
                    <div className="p-4">
                        <img
                            src="/images/course3.jpg"
                            className="img-fluid rounded"
                            alt=""
                        />

                        <h3 className="mt-3">Nursing</h3>

                        <p>
                            Diploma and Degree Nursing Programs.
                        </p>
                    </div>
                </Card>
            </CardSwap>
        </div>
    );
}