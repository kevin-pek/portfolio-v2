import { Accordion } from "../blocks/Accordion"

export const Experiences = () => {
  return (
    <div className="flex flex-col gap-6 px-4 md:px-24">
      <h1 className="text-base-content">Notable Experience</h1>

      <Accordion title="Research Assistant @ NUS Insitute of Operations Research and Analytics, NCS" skills={["Python", "PyTorch", "Microsoft Azure Machine Learning", "Numerical Methods"]}>
            Exploratory data analysis on time series temperature and humidity data using Python. Created low fidelity model of heat distribution within Data Center using the Finite Volume Method, optimising convergence speed and accuracy. Optimised forecasting model for predicting temperature and power usage in Data Center.
      </Accordion>

      <Accordion title="Full Stack Intern @ Idemia" skills={["Java", "Spring Boot"]}>
            Developed orchestrator application for microservices in Java using Spring Boot and Apache Camel, and debugged various services.
      </Accordion>

      <Accordion title="Modelling and Simulations Intern @ Defense Science and Technology Agency" skills={["C#", "Unity", "Reinforcement Learning"]}>
            Used Unity’s ML Agents package to train neural networks to be used alongside computer vision and 3D pathfinding algorithms for multi-stage AI system.
      </Accordion>
    </div>
  )
}