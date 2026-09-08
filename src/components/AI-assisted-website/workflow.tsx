import React from 'react';
import './WorkflowSection.css';

export default function WorkflowSection() {
  const traditionalSteps = [
    { num: 1, title: 'Brief' },
    { num: 2, title: 'Research' },
    { num: 3, title: 'Design' },
    { num: 4, title: 'Development' },
    { num: 5, title: 'Testing' },
    { num: 6, title: 'Launch' },
  ];

  const aiSteps = [
    { num: 1, title: 'Brief' },
    { num: 2, title: 'AI Research' },
    { num: 3, title: 'Concepts' },
    { num: 4, title: 'Human Design' },
    { num: 5, title: 'AI-Assisted Development' },
    { num: 6, title: 'Human QA' },
    { num: 7, title: 'Launch' },
  ];

  return (
    <section className="px-about-6-area pt-50 pb-80 pb-lg-110">
      <div className="container container-1550">
       
    <div className="row align-items-center" data-aos="fade-up">
                    <div className="col-xl-3">
                        <span className="tp-section-subtitle text-black blink-ball">
                         AI website vs traditional website
                        </span>
                    </div>

                    <div className="col-xl-9">
                        <div className="px-project-title-box">
                            <h4 className="px-about-title mb-20">
                                <span className="text-blue-about">What's Different About an </span> AI-Assisted Website?
                            </h4>
                           
                        </div>
                    </div>
                </div>

        <div className="workflow-grid">
          {/* Traditional Workflow Column */}
          <div className="workflow-card">
             <h5 className="mb-3 fw-bold" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' }}>Traditional workflow</h5>
            <div className="text-figtree text-black mt-2">
              <div className="stepper-list">
                {traditionalSteps.map((step, index) => (
                  <div key={index} className="stepper-item">
                    <div className="stepper-node">
                      <span className="stepper-badge">{step.num}</span>
                      {index < traditionalSteps.length - 1 && <div className="stepper-line"></div>}
                    </div>
                    <span className="stepper-text">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI-Assisted Workflow Column */}
          <div className="workflow-card ai-card">
            <h5 className="mb-3 fw-bold" style={{ fontFamily: '"Tenor Sans", "Tenor Sans Fallback"' }}>Our AI-assisted workflow</h5>
            <div className="text-figtree text-black mt-2">
              <div className="stepper-list">
                {aiSteps.map((step, index) => (
                  <div key={index} className="stepper-item">
                    <div className="stepper-node">
                      <span className="stepper-badge ai-badge">{step.num}</span>
                      {index < aiSteps.length - 1 && <div className="stepper-line ai-line"></div>}
                    </div>
                    <span className="stepper-text">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}