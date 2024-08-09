import { Accordion } from "../blocks/Accordion"

export const Experiences = () => {
  return (
    <div className="flex flex-col gap-6 px-4 md:px-24">
      <h1 className="text-base-content">Experience</h1>

      <Accordion title="Data Scientist Intern @ GovTech" skills={["Python", "FastAPI", "PyTorch", "PaddlePaddle", "sklearn", "Docker", "Deep Learning", "AWS"]}>
        Applied few shot learning technique for CLIP model. Finetuned multimodal encoder model on Sagemaker. Trained and deployed machine learning models. Optimised response time for API running deployed models.
      </Accordion>

      <Accordion title="Research Assistant @ NUS IORA, NCS" skills={["Python", "Data Analysis", "Finite Volume Method", "FiPy", "PyTorch", "Azure"]}>
        Exploratory data analysis on time series data using Python. Created thermal render of heat distribution within Data Center using the Finite Volume Method and Heat Equation. Trained forecasting model for predicting temperature and power usage in Data Center.
      </Accordion>

      <Accordion title="Research Assistant @ NUS IORA, SIA" skills={["Typescript", "Express", "React", "Docker", "Python", "FastAPI", "Multi-armed Bandits", "AWS"]}>
        Full stack development for a quiz platform with question recommender system and dashboards. Handled deployment of services on AWS and on-premises. Written epsilon greedy algorithm for prototype recommender system and deployed it using FastAPI.
      </Accordion>

      <Accordion title="Full Stack Intern @ Idemia" skills={["Java", "Spring Boot"]}>
        Developed POC orchestrator application in Java using Spring Boot and Apache Camel. Bug fixes for various services.
      </Accordion>

      <Accordion title="Modelling and Simulations Intern @ DSTA" skills={["C#", "Unity", "Reinforcement Learning"]}>
        Created drone flight simulation training environment in Unity. Used Unity&apos;s ML Agents package to train a reinforcement learning agent to be used alongside computer vision model and Octree bsaed 3D pathfinding algorithm.
      </Accordion>
    </div>
  )
}