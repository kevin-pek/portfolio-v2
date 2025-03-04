import { Accordion } from "../blocks/Accordion"

export const Experiences = () => {
  return (
    <div className="flex flex-col gap-6 px-4 md:px-24">
      <h1 className="text-base-content">Past Experiences</h1>

      <Accordion title="Data Scientist Intern @ GovTech" skills={["Python", "FastAPI", "PyTorch", "PaddlePaddle", "sklearn", "Docker", "Deep Learning", "AWS"]}>
        I made a custom implementation of the <a href="https://arxiv.org/abs/2111.03930" className="hover:text-primary"><b>Tip-Adapter</b></a>, a few shot learning technique for CLIP models. I also finetuned multimodal encoder models on Sagemaker, deployed them on a FastAPI server, and made performance optimisations for inference.
      </Accordion>

      <Accordion title="Research Assistant @ NUS IORA, NCS" skills={["Python", "Data Analysis", "FiPy", "PyTorch", "Azure"]}>
        I did data analysis on time series data and trained forecasting models for predicting temperature and power usage in data centers, and created thermal renders of temperature distribution.
      </Accordion>

      <Accordion title="Research Assistant @ NUS IORA, SIA" skills={["Typescript", "Express", "React", "Docker", "Python", "FastAPI", "Multi-armed Bandits", "AWS"]}>
        I implemented a research paper about Multi-arm Bandit algorithms for question recommendation into a FastAPI service. I also built a quiz platform with user management dashboards and deployed these services using docker.
      </Accordion>

      <Accordion title="Full Stack Intern @ Idemia" skills={["Java", "Spring Boot"]}>
        I developed an orchestrator application in Java using Spring Boot and Apache Camel, and did bug fixes for various services.
      </Accordion>

      <Accordion title="Modelling and Simulations Intern @ DSTA" skills={["C#", "Unity", "Reinforcement Learning"]}>
        I created a drone flight simulation training environment in Unity. Used Unity&apos;s ML Agents package to train reinforcement learning agents to be used alongside computer vision models and octree bsaed 3D pathfinding algorithm.
      </Accordion>
    </div>
  )
}