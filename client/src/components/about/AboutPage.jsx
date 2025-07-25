export default function AboutSection() {
  return (
    <section className="mt-10 bg-background text-foreground py-16 px-4 sm:px-8 lg:px-24 border-t border-border">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            About EyeScope AI
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
            EyeScope AI is an accessible and lightweight AI-powered platform for early detection of retinal diseases.
            It supports multi-class classification using a custom-trained Convolutional Neural Network (CNN)
            and is designed for use in both clinical and underserved environments.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">The Challenge</h3>
            <p className="text-muted-foreground leading-relaxed">
              Blindness remains a major health concern in low-resource regions, with 70% of cases being preventable through early diagnosis.
              However, access to trained ophthalmologists and diagnostic tools is limited, especially in rural India.
              EyeScope addresses this diagnostic gap with a fast, scalable, and low-cost solution.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">The Technology</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our CNN model is trained on real-world annotated retinal images across 7 disease classes.
              It is optimized for speed and accuracy, with over 90% validation accuracy.
              The model is deployed using Streamlit and supports webcam input, batch uploads, Grad-CAM visualizations, and PDF report generation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">Deployment Features</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 leading-relaxed">
              <li>Multi-image batch upload and live camera integration</li>
              <li>Real-time inference with Grad-CAM based visual feedback</li>
              <li>Support for English and Hindi with voice-guided interface</li>
              <li>PDF and CSV report generation for screenings</li>
              <li>Location-based hospital finder powered by OpenStreetMap</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">Use Cases</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 leading-relaxed">
              <li>Primary healthcare centers and rural clinics</li>
              <li>Mass school and workplace screenings</li>
              <li>Elderly care and home diagnostics</li>
              <li>Mobile eye camps and telemedicine</li>
            </ul>
          </div>
        </div>

       
      </div>
    </section>
  );
}
