# Soni Exim - Website Redevelopment Project

This project is a complete rebuild and modernization of the corporate website for **Soni Exim**, a company specializing in premium essential oils, carrier oils, and natural extracts. The primary goal was to transform a static informational site into a sophisticated, e-commerce-style product catalog, enhancing the brand's digital presence and improving the user experience.

The redevelopment focused on creating a visually stunning, intuitive, and interactive platform that effectively showcases the quality and diversity of Soni Exim's product line, giving it the feel of a high-end online store without the complexities of actual e-commerce functionality.

## ✨ Key Features

*   **Modern & Responsive Design:** A fully responsive and mobile-first interface built with Next.js and Tailwind CSS, ensuring a seamless experience across desktops, tablets, and smartphones.
*   **Dynamic Product Catalog:** An elegant and interactive product gallery that beautifully showcases the company's oils. Products are categorized, and each has a detailed view accessible via a modal, mimicking a premium e-commerce experience.
*   **AI-Powered Recommendations:** A standout feature is the "AI Recommender," which uses Google's Gemini Pro model via **Genkit**. Users can describe their needs (e.g., "I need help relaxing"), and the AI will analyze the product data to provide personalized essential oil recommendations.
*   **Immersive User Experience:** The UI is designed to be engaging, featuring a fixed nature-themed background, translucent content cards that "float" above it, and smooth animations. Interactive elements like flipping cards are used to present information in a dynamic and space-efficient way.
*   **Consistent & Professional Branding:** A clean, natural, and light color theme was implemented to reflect the company's focus on pure and natural products. The branding is consistent across all pages and components.

## 🚀 Technology Stack

This project was built using a modern, robust, and scalable technology stack:

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
*   **AI/Generative AI:** [Genkit (Google)](https://firebase.google.com/docs/genkit) with the Gemini 1.5 Flash model.
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Deployment:** Ready for deployment on platforms like Firebase App Hosting or Vercel.

## 🛠️ Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

*   Node.js (v18 or later)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/soni-exim-website.git
    cd soni-exim-website
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add your Google AI API key. You can obtain a key from [Google AI Studio](https://aistudio.google.com/).
    ```env
    GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```

4.  **Run the Genkit developer UI (optional):**
    To inspect and test the AI flows, you can run the Genkit developer UI in a separate terminal.
    ```sh
    npm run genkit:watch
    ```
    This will typically start on `http://localhost:4000`.

5.  **Run the development server:**
    ```sh
    npm run dev
    ```
    Open [http://localhost:9002](http://localhost:9002) (or your configured port) with your browser to see the result.

### Building for Production

To create a production-ready build, run:
```sh
npm run build
```

This will generate an optimized build of the application in the `.next` directory. You can then start the production server with:
```sh
npm run start
```
