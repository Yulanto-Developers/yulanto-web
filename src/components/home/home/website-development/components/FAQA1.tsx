"use client";

import React, { useState } from "react";
import { useAOS } from "../../../../hooks/useAOS";
import SectionTitle from "../../../../sectiontitle/SectionTitle";
import faqa1Data from "./faqa1data";
import "./dynamicwebdesign.css";

const FAQA1 = () => {
    useAOS();

    const [activeId, setActiveId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="faqa1">
            <SectionTitle
                subtitle="FAQ"
                className="faqa1-title"
                titleFirst="Frequently Asked"
                titleSecond="Questions"
                description=""
                delay={300}
                animated={true}
                animationType="fade-up"
                triggerOnce={true}
            />

            <div className="container">
                <div className="row">
                    {faqa1Data.map((item, index) => {
                        const isActive = activeId === item.id;

                        return (
                            <div
                                className="col-lg-6 col-md-6 col-12"
                                key={item.id}
                            >
                                <div
                                    className="faqa1-item"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    data-aos-once="true"
                                >
                                    <button
                                        type="button"
                                        className={`faqa1-question ${
                                            isActive ? "active" : ""
                                        }`}
                                        onClick={() =>
                                            handleToggle(item.id)
                                        }
                                    >
                                        <span className="faqa1-question-text">
                                            <i className={item.icon}></i>
                                            <span>{item.question}</span>
                                        </span>

                                        <i
                                            className={`fa-solid ${
                                                isActive
                                                    ? "fa-minus"
                                                    : "fa-plus"
                                            } faqa1-toggle`}
                                        ></i>
                                    </button>

                                    <div
                                        className={`faqa1-answer ${
                                            isActive ? "show" : ""
                                        }`}
                                    >
                                        <div className="faqa1-answer-content">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQA1;