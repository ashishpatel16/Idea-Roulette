document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const wordA = document.getElementById('wordA');
    const wordB = document.getElementById('wordB');
    const wordC = document.getElementById('wordC');
    const ideaInput = document.getElementById('ideaInput');
    const flashCardContainer = document.getElementById('flashCardContainer');


    const lists = {
        a: [
            "Artificial Intelligence",
            "Blockchain",
            "Nanotechnology",
            "Robotics",
            "Solar Power",
            "Biometrics",
            "Virtual Reality",
            "3D Printing",
            "Quantum Computing",
            "Augmented Reality",
            "Internet of Things (IoT)",
            "Drones",
            "Machine Learning",
            "Genetic Engineering",
            "Graphene",
            "Renewable Energy",
            "Cybersecurity",
            "Big Data",
            "Cloud Computing",
            "Smart Materials",
            "Wearable Tech",
            "IoT Sensors",
            "Cloud Storage",
            "Data Analytics",
            "Virtual Assistants",
            "Smart Grids",
            "Augmented Reality Interfaces",
            "Wireless Charging",
            "Cryptography",
            "Biodegradable Materials",
            "Photonics",
            "Haptic Technology",
            "Electric Vehicles",
            "Smart Glass",
            "Digital Twins",
            "Lidar",
            "Voice Recognition",
            "Edge Computing",
            "Synthetic Biology",
            "Hydroponics",
            "Geothermal Energy",
            "Microprocessors",
            "Nanofibers",
            "Fusion Energy",
            "Organic Electronics",
            "E-Ink",
            "Gesture Control",
            "Brain-Computer Interfaces",
            "Lab-grown Meat",
            "Smart Textiles",
            "Autonomous Drones",
            "Ultra-Fast Charging Batteries",
            "Deep Learning",
            "Microfluidics",
            "Advanced Ceramics",
            "Bionic Limbs",
            "Aerogels",
            "OLED Displays",
            "Smart Contact Lenses",
            "Precision Agriculture",
            "Neuromorphic Chips",
            "Carbon Capture Technology",
            "Digital Health Records",
            "Telepresence",
            "Predictive Maintenance",
            "Quantum Sensors",
            "Biometric Authentication",
            "Peer-to-Peer Energy Trading",
            "Low-Code Platforms",
            "Advanced Robotics",
            "Smart Mirrors",
            "High-Speed Rail",
            "Voice-to-Text Technology",
            "Modular Construction",
            "Tidal Energy Systems"
        ],
        b: [
            "Sustainability",
            "User-Centric Design",
            "Agile Methodology",
            "Open Innovation",
            "Circular Economy",
            "Gamification",
            "Lean Startup",
            "Biomimicry",
            "Crowdsourcing",
            "Design Thinking",
            "Decentralization",
            "Holacracy",
            "Disruptive Innovation",
            "Blue Ocean Strategy",
            "Systems Thinking",
            "Collaborative Consumption",
            "Co-creation",
            "Minimal Viable Product (MVP)",
            "Scalability",
            "Frugal Innovation",
            "Human-Centered Design",
            "Risk Management",
            "Ethical Hacking",
            "Digital Nomadism",
            "Zero Waste",
            "Thought Leadership",
            "Emotional Intelligence",
            "Internet of Behavior (IoB)",
            "Digital Detox",
            "Cross-Functional Teams",
            "Growth Hacking",
            "Social Innovation",
            "Corporate Social Responsibility",
            "Knowledge Economy",
            "Remote Working",
            "Experience Design",
            "Adaptive Learning",
            "Cognitive Flexibility",
            "Platform Economy",
            "Intellectual Property",
            "Omnichannel Strategies",
            "Customer Journey Mapping",
            "Servitization",
            "Exponential Organizations",
            "Green Energy",
            "Digital Transformation",
            "Corporate Venturing",
            "Data Privacy",
            "User Experience (UX)",
            "User Interface (UI)",
            "Creativity",
            "Machine Ethics",
            "Mixed Reality",
            "Predictive Analytics",
            "Adaptive Security",
            "Artificial Neural Networks",
            "Smart Contracts",
            "Work-Life Integration",
            "Digital Wellness",
            "Augmented Workforce",
            "Human Augmentation",
            "Space Tourism",
            "Smart Cities",
            "Hyperautomation",
            "Quantum Internet",
            "Edge AI",
            "Low Earth Orbit (LEO) Technologies",
            "Mass Customization",
            "Personalization",
            "Digital Literacy",
            "Industry 4.0",
            "Mental Health Awareness",
            "Employee Engagement"
        ],
        c: [
            "Healthcare",
            "Education",
            "Environmental Conservation",
            "Space Exploration",
            "Urban Planning",
            "Agriculture",
            "Transportation",
            "E-commerce",
            "Financial Services",
            "Entertainment",
            "Manufacturing",
            "Telecommunications",
            "Social Networking",
            "Wearable Technology",
            "Smart Cities",
            "Food Technology",
            "Oceanography",
            "Virtual Workplaces",
            "Public Safety",
            "Sports Technology",
            "Renewable Energy",
            "Space Colonization",
            "Digital Education",
            "Smart Agriculture",
            "Elder Care",
            "Cybersecurity",
            "Marine Biology",
            "Artificial Intelligence",
            "Virtual Reality",
            "Quantum Computing",
            "Urban Agriculture",
            "eSports",
            "Wearable Fitness Tech",
            "Autonomous Vehicles",
            "5G Networks",
            "Digital Art",
            "E-Sports",
            "Mixed Reality",
            "Drone Delivery",
            "Home Automation",
            "Augmented Reality",
            "Sustainable Fashion",
            "Waste Management",
            "Mental Health",
            "Blockchain",
            "FinTech",
            "Telemedicine",
            "Social Entrepreneurship",
            "Robotics",
            "Space Tourism",
            "Biotechnology",
            "3D Printing",
            "Virtual Learning",
            "Sustainable Tourism",
            "Internet of Things",
            "Precision Medicine",
            "EdTech",
            "Smart Homes",
            "Digital Marketing",
            "Quantum Technologies",
            "Augmented Reality in Retail",
            "Smart Wearables",
            "Green Construction",
            "Autonomous Farming",
            "Regenerative Medicine",
            "AR/VR in Training",
            "Nanomedicine",
            "Digital Twins in Manufacturing",
            "Smart Grids",
            "Food Security",
            "Digital Currency",
            "Cloud Computing",
            "IoT in Logistics",
            "3D Bioprinting",
            "Smart Transportation"
        ]
    };

    generateBtn.addEventListener('click', () => {
        const randomWords = {
            a: lists.a[Math.floor(Math.random() * lists.a.length)],
            b: lists.b[Math.floor(Math.random() * lists.b.length)],
            c: lists.c[Math.floor(Math.random() * lists.c.length)]
        };
        wordA.textContent = randomWords.a;
        wordB.textContent = randomWords.b;
        wordC.textContent = randomWords.c;

        // Remove 'hot-keyword' class from previous selected keywords
        const previousHotKeywords = document.querySelectorAll('.hot-keyword');
        previousHotKeywords.forEach(keyword => keyword.classList.remove('hot-keyword'));

        // Add 'hot-keyword' class to the selected keywords
        [wordA, wordB, wordC].forEach(word => word.classList.add('hot-keyword'));
    });

    ideaInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const enteredText = ideaInput.value.trim();
            if (enteredText !== '') {
                const flashCard = document.createElement('div');
                flashCard.classList.add('flash-card');
                flashCard.textContent = enteredText;
                flashCardContainer.appendChild(flashCard);
                ideaInput.value = ''; // Clear input field after creating flash card
            }
        }
    });

    flashCardContainer.addEventListener('click', (event) => {
        // Check if the clicked element is a flash card
        if (event.target.classList.contains('flash-card')) {
            // Remove 'hot-card-animation' class from all flash cards
            const allCards = document.querySelectorAll('.flash-card');
            allCards.forEach(card => {
                card.classList.remove('hot-card-animation');
            });

            // Toggle the 'highlighted-card' class on the clicked flash card
            event.target.classList.toggle('highlighted-card');
            // Add 'hot-card-animation' class to the clicked flash card
            event.target.classList.toggle('hot-card-animation');
        }
    });
});