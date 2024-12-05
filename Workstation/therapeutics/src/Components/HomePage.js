// src/HomePage.js
import React from 'react';
import HeroSection from './HeroSection';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="HomePage">
      <HeroSection />
      <main className="container my-5">
        <section id="overview" className="section my-5">
          <h2>Overview</h2>
          <p>This project aims to harness the power of quantum machine learning to revolutionize personalized medicine. By analyzing complex patient data, including genetic information and medical history, we strive to provide tailored treatment recommendations that enhance healthcare outcomes. Leveraging IBM’s quantum algorithms in conjunction with CUDA for efficient data processing, we are developing a framework that not only addresses the limitations of traditional methods but also sets the stage for transformative advancements in personalized healthcare.</p>
        </section>

        <section id="features" className="section my-5">
          <h2>Features</h2>
          <ul>
            <li><strong>Quantum Algorithms:</strong> Utilizes IBM’s state-of-the-art quantum algorithms to classify and analyze complex genomic data, overcoming challenges faced by classical methods.</li>
            <li><strong>Efficient Processing:</strong> Integrates CUDA to accelerate the processing of large datasets, enabling faster model training and predictions, thus reducing the time required to deliver personalized treatment recommendations.</li>
            <li><strong>Recommendation Engine:</strong> Develops a sophisticated recommendation engine that suggests tailored treatment plans based on comprehensive analyses of patient data.</li>
          </ul>
        </section>

        <section id="advantages" className="section my-5">
          <h2>Advantages</h2>
          <ul>
            <li><strong>Enhanced Accuracy:</strong> By leveraging quantum computing capabilities, our framework can potentially uncover patterns in data that classical algorithms may miss, leading to more accurate treatment recommendations.</li>
            <li><strong>Personalized Care:</strong> This approach allows for the customization of treatment plans based on individual patient profiles, improving overall healthcare quality and patient satisfaction.</li>
            <li><strong>Scalability:</strong> The integration of quantum machine learning with conventional methods provides a scalable solution that can accommodate the growing complexity of patient data.</li>
            <li><strong>Future Research Opportunities:</strong> This project opens avenues for further research into the application of quantum computing in healthcare, encouraging exploration into other areas such as predictive analytics, early diagnosis, and patient monitoring.</li>
          </ul>
        </section>

        <section id="challenges" className="section my-5">
          <h2>Challenges</h2>
          <p>While the potential benefits are significant, this project also faces important challenges that must be addressed:</p>
          <ul>
            <li><strong>Ethical Considerations:</strong> Protecting patient privacy and ensuring informed consent are paramount. We are committed to adhering to regulations and best practices surrounding data privacy and security.</li>
            <li><strong>Accuracy and Reliability:</strong> It is crucial to validate the recommendations derived from quantum algorithms. We will implement rigorous testing and collaboration with healthcare professionals to ensure that our solutions are both accurate and reliable.</li>
          </ul>
        </section>

        <section id="future-vision" className="section my-5">
          <h2>Future Vision</h2>
          <p>The integration of quantum machine learning into personalized medicine represents a significant leap forward in healthcare innovation. By continuously refining our algorithms and expanding our dataset, we aspire to contribute to the evolution of personalized treatments that cater to the unique needs of each patient.</p>
          <p>We envision a future where healthcare is not only more efficient but also more humane—where treatment plans are designed with the individual in mind, significantly improving health outcomes and patient experiences.</p>
          <p>Together, let's pioneer the future of personalized healthcare through the innovative application of quantum machine learning.</p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
