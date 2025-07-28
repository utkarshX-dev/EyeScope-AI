const faqsData = [
    {
        question: "What is EyeScope AI?",
        answer: "EyeScope AI is an AI-powered tool that detects early signs of eye and brain diseases using retina scans. It’s built to work in clinics, schools, and even rural areas without the need for specialists."
    },
    {
        question: "Which diseases can EyeScope AI detect?",
        answer: "The model detects 7 conditions: Normal, Glaucoma, Diabetic Retinopathy, Cataract, Age-related Macular Degeneration (AMD), Papilledema, and Pseudopapilledema."
    },
    {
        question: "How does the AI model work?",
        answer: "Our model analyzes retina images using a lightweight CNN (trained via Teachable Machine). It gives a disease prediction with a confidence score, Grad-CAM heatmap, and a voice summary."
    },
    {
        question: "Is a specialist required to use this tool?",
        answer: "No. EyeScope AI is designed to be used by anyone—health workers, NGOs, school staff, or caregivers. It’s fully automated and user-friendly."
    },
    {
        question: "Can the tool be used on a mobile phone?",
        answer: "Yes. The web app is mobile-friendly, requires no installation, and works directly in the browser on phones, tablets, and laptops."
    },
    {
        question: "Does it support regional languages?",
        answer: "Yes. The system includes English ↔ Hindi translation and also supports voice-based results for visually impaired users."
    },
    {
        question: "What is Grad-CAM and why is it useful?",
        answer: "Grad-CAM is a heatmap that highlights which areas of the retina influenced the AI’s prediction. It improves explainability and builds trust in the model."
    },
    {
        question: "How is patient data handled?",
        answer: "Patient info is saved securely as a CSV file (locally or cloud-based, depending on setup). PDF reports are generated for offline reference, and no login is required."
    },
    {
        question: "How can I find nearby hospitals based on the result?",
        answer: "The tool auto-detects your location via IP and shows nearby hospitals using OpenStreetMap and Google Search integrations."
    },
    {
        question: "Is EyeScope AI available for commercial or personal use?",
        answer: "Currently, it’s a hackathon prototype aimed at social impact and research. With further development, we plan to offer a doctor dashboard, offline access, and government integrations."
    },
    {
        question: "Is this tool medically certified or reviewed by doctors?",
        answer: "EyeScope AI is currently a prototype designed for educational and social impact purposes. It is not yet certified by any medical regulatory body but follows ethical design and explainability standards to support non-diagnostic awareness."
    },
    {
        question: "Can I use EyeScope AI in my clinic or health camp?",
        answer: "Yes. EyeScope AI can be used in mobile screening camps, rural health centers, or schools. It requires no special hardware—just an internet connection and a device with a camera or image upload."
    },
    {
        question: "What is glaucoma?",
        answer: "Glaucoma is a group of eye conditions that damage the optic nerve. It often has no early symptoms. Regular eye exams and medications can manage it.",
    },
    {
        question: "What is diabetic retinopathy?",
        answer: "Diabetic retinopathy is caused by long-term diabetes. It damages blood vessels in the retina and can be managed with laser treatment and injections.",
    },
    {
        question: "What is a cataract?",
        answer: "A cataract is a cloudy area in the eye's lens. It's common with aging and may require surgery for clear vision.",
    },
    {
        question: "What is Age-related Macular Degeneration (AMD)?",
        answer: "Age-related Macular Degeneration affects the macula. It leads to central vision loss. Treatment includes anti-VEGF injections.",
    },
    {
        question: "What is Retinitis Pigmentosa?",
        answer: "Retinitis Pigmentosa is a genetic condition causing vision loss over time. There is no cure, but low vision aids can help.",
    },
    {
        question: "What is retinal detachment?",
        answer: "Retinal Detachment occurs when the retina lifts from the eye wall. It requires emergency surgery to restore vision.",
    },
    {
        question: "What is papilledema?",
        answer: "Papilledema is swelling of the optic disc due to increased brain pressure. It requires immediate medical attention.",
    },
    {
        question: "What is pseudopapilledema?",
        answer: "Pseudopapilledema mimics papilledema but is usually benign. Monitoring is recommended.",
    },
    {
        question: "How can I find nearby eye hospitals?",
        answer: "You can check the Nearby Eye Hospitals section above based on your location.",
    },
    {
        question: "How do I get information about a specific eye disease?",
        answer: "Please specify the eye disease for more information. For example: glaucoma, cataract, AMD, etc.",
    },
    {
        question: "How do I upload a retinal scan?",
        answer: "You can upload a retinal scan by clicking the upload button in the EyeScope AI chat interface.",
    },
    {
        question: "What diseases can EyeScope detect?",
        answer: "EyeScope can detect glaucoma, diabetic retinopathy, cataracts, AMD, retinitis pigmentosa, and more.",
    },
    {
        question: "How do I use the EyeScope AI chat support?",
        answer: "You can start a chat with EyeScope AI by clicking the 'Start Chat' button on the support page.",
    },
    {
        question: "What should I do if I have an eye emergency?",
        answer: "In case of an eye emergency, please visit the nearest eye hospital immediately or call for emergency services.",
    },
];

export default faqsData;