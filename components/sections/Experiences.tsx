import { Accordion } from "../blocks/Accordion"

export const Experiences = () => {
  return (
    <ul className="timeline timeline-vertical timeline-snap-icon gap-6 px-4 md:px-24">
      <li>
        <h1 className="timeline-middle text-base-content">Notable Experience</h1>
      </li>

      <li>
        <div className="timeline-middle">
          <Accordion title="Research Assistant @ NUS Insitute of Operations Research and Analytics, NCS" skills={["Python", "Numerical Methods"]}>
            Exploratory data analysis on time series temperature and humidity data using Python. Created low fidelity model of heat distribution within Data Center using the Finite Volume Method, optimising convergence speed and accuracy.
          </Accordion>
        </div>
      </li>

      <li>
        <div className="timeline-middle">
          <Accordion title="Full Stack Intern @ Idemia" skills={["Java", "Spring Boot"]}>
            Developed orchestrator application for microservices in Java using Spring Boot and Apache Camel, and debugged various services.
          </Accordion>
        </div>
      </li>

      <li>
        <div className="timeline-middle">
          <Accordion title="Modelling and Simulations Intern @ Defense Science and Technology Agency" skills={["C#", "Unity", "Reinforcement Learning"]}>
            Used Unity’s ML Agents package to train neural networks to be used alongside computer vision and 3D pathfinding algorithms for multi-stage AI system.
          </Accordion>
        </div>
      </li>
    </ul>
  )
}