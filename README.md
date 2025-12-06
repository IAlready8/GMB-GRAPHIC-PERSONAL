# I8 - Interactive Brutalist Portfolio

This is an elegant and interactive gallery showcasing a portfolio of creative projects. The application is built with a zoneless Angular setup, styled with Tailwind CSS, and features a raw, brutalist design aesthetic with a multi-page, responsive layout.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyou%2Fyour-repo-name)

---

## Key Features

-   **Zoneless Angular 20+**: Built with the latest in Angular for a modern, high-performance frontend.
-   **Tailwind CSS**: A utility-first CSS framework for rapid, custom UI development.
-   **Brutalist Design**: A raw, unapologetic aesthetic with a focus on stark contrasts, bold typography, and functional design.
-   **Fully Responsive**: A seamless experience across all devices, with a dedicated mobile navigation overlay.
-   **Multi-Page SPA**: Uses Angular's Router with hash-based routing for a fast, single-page application feel.
-   **Component-Based Architecture**: Modular and maintainable code with a clear separation of concerns.

---

## Technology Stack

-   **Framework**: [Angular](https://angular.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Deployment**: [Vercel](https://vercel.com/)

---

## Getting Started: Local Development

To run this project on your local machine, follow these steps.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later)
-   [npm](https://www.npmjs.com/) (or your preferred package manager)
-   A simple local HTTP server. We recommend `serve`. If you don't have it, install it globally:
    ```bash
    npm install -g serve
    ```

### Setup and Running

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/you/your-repo-name.git
    cd your-repo-name
    ```

2.  **This project uses CDN-based dependencies via an import map in `index.html`, so there is no `npm install` step required for packages.**

3.  **Serve the project:**
    Since this is a static project without a built-in dev server, you can serve the root directory.
    ```bash
    serve .
    ```

4.  **Open in browser:**
    Open your web browser and navigate to the local address provided by `serve` (e.g., `http://localhost:3000`).

---

## Deployment to Vercel

This project is configured as a static site and can be easily deployed on Vercel.

### Option 1: One-Click Deploy

Click the "Deploy with Vercel" button at the top of this README to automatically clone, configure, and deploy this project to your Vercel account.

### Option 2: Manual Deployment via Git

1.  **Sign up for Vercel:**
    If you don't have an account, sign up for a free Vercel account at [vercel.com](https://vercel.com).

2.  **Create a New Project:**
    -   From your Vercel dashboard, click the "Add New..." button and select "Project".
    -   Import the Git repository where your project is hosted (e.g., GitHub, GitLab, Bitbucket).

3.  **Configure the Project:**
    This project includes a `vercel.json` file which explicitly instructs Vercel to skip the standard `install` and `build` commands. This is crucial because the project uses a CDN-based import map and does not require a server-side build. This configuration prevents dependency conflicts and ensures deployments are fast and reliable.

4.  **Deploy:**
    -   Click the "Deploy" button.
    -   Vercel will follow the instructions in `vercel.json`, skip the build, and deploy your site as-is.

---

## Project Structure

-   `index.html`: The main entry point of the application. It includes CDN links for Tailwind CSS, Google Fonts, and the import map for ES modules.
-   `index.tsx`: The bootstrap script for the zoneless Angular application.
-   `vercel.json`: The configuration file for Vercel deployments.
-   `src/app.routes.ts`: Defines the application's routes for navigation between pages.
-   `src/app.component.ts`: The root component of the application, which orchestrates the main layout shell including the header, router outlet, and footer.
-   `src/pages/`: Contains the components for each page of the application.
    -   `work/`: The main portfolio gallery page.
    -   `about/`: The about page.
    -   `capabilities/`: The studio capabilities page.
    -   `manifesto/`: The studio manifesto page.
    -   `journal/`: The journal/blog page.
    -   `contact/`: The contact page.
-   `src/components/`: Contains the reusable, standalone Angular components.
    -   `gallery-item/`: The component responsible for displaying a single project in the gallery.
-   `src/services/`: Contains the application's services.
    -   `gallery.service.ts`: Provides the project data for the gallery.
    -   `journal.service.ts`: Provides the article data for the journal page.