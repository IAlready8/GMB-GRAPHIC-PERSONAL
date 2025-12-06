# Interactive Project Gallery

This is an elegant and interactive gallery showcasing a portfolio of creative projects. The application is built with a zoneless Angular setup, styled with Tailwind CSS, and features a raw, brutalist design aesthetic with engaging micro-interactions like hover effects.

## Project Structure

-   `index.html`: The main entry point of the application. It includes CDN links for Tailwind CSS, Google Fonts, and the import map for ES modules.
-   `index.tsx`: The bootstrap script for the zoneless Angular application.
-   `src/app.routes.ts`: Defines the application's routes for navigation between pages.
-   `src/app.component.ts`: The root component of the application, which orchestrates the main layout shell including the header, router outlet, and footer.
-   `src/pages/`: Contains the components for each page of the application.
    -   `work/`: The main portfolio gallery page.
    -   `about/`: The about page.
    -   `contact/`: The contact page.
-   `src/components/`: Contains the reusable, standalone Angular components.
    -   `gallery-item/`: The component responsible for displaying a single project in the gallery.
-   `src/services/`: Contains the application's services.
    -   `gallery.service.ts`: Provides the project data for the gallery.

---

## Deploying to Vercel

This project is configured as a static site and can be easily deployed on Vercel with zero configuration.

### Step-by-Step Guide

1.  **Sign up for Vercel:**
    If you don't have an account, sign up for a free Vercel account at [vercel.com](https://vercel.com).

2.  **Create a New Project:**
    -   From your Vercel dashboard, click the "Add New..." button and select "Project".
    -   Import the Git repository where your project is hosted (e.g., GitHub, GitLab, Bitbucket).

3.  **Configure the Project:**
    Vercel is excellent at auto-detecting static projects. You should not need to change any settings. The configuration should be:
    -   **Framework Preset:** `Other`
    -   **Build Command:** *Leave this empty.*
    -   **Output Directory:** *Leave this as the default.*
    -   **Install Command:** *Leave this empty.*

4.  **Deploy:**
    -   Click the "Deploy" button.
    -   Vercel will deploy your site and provide you with a live URL.

That's it! Your interactive project gallery is now live.