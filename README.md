# Interactive Project Gallery

This is an elegant and interactive gallery showcasing a portfolio of creative projects. The application is built with a zoneless Angular setup, styled with Tailwind CSS, and features a raw, brutalist design aesthetic with engaging micro-interactions and AI-powered content generation.

## Technology Stack
- **Angular (v20+)**: Zoneless, standalone components for a modern, performant frontend.
- **Tailwind CSS**: For utility-first styling.
- **Google Gemini API**: For generative AI content features.
- **TypeScript**: For type safety and robust code.
- **ESM (via esm.sh)**: CDN-based module loading, eliminating the need for a local build step.

## Project Structure

-   `index.html`: The main entry point. Includes CDN links and the import map.
-   `index.tsx`: The bootstrap script for the zoneless Angular application.
-   `vercel.json`: Configuration file for Vercel deployment.
-   `src/app.routes.ts`: Defines the application's routes for navigation.
-   `src/app.component.ts`: The root component managing the main layout shell.
-   `src/pages/`: Components for each page.
    -   `work/`: The main portfolio gallery page.
    -   `about/`: The about page.
    -   `capabilities/`: The studio's services page.
    -   `manifesto/`: The studio's principles page, including an AI thought generator.
    -   `journal/`: The blog/updates page.
    -   `article/`: The detail page for a single journal article.
    -   `contact/`: The contact page.
-   `src/components/`: Reusable components.
    -   `gallery-item/`: Displays a single project in the gallery.
-   `src/services/`: Application services.
    -   `gallery.service.ts`: Provides project data for the gallery.
    -   `journal.service.ts`: Provides article data for the journal.
    -   `gemini.service.ts`: Handles communication with the Google Gemini API.

---

## Environment Variables

To use the AI-powered features, you must have a Google Gemini API key. This key must be available as an environment variable named `API_KEY`. When deploying to Vercel, you will need to add this environment variable in your project settings.

## Deploying to Vercel

This project is configured as a static site and is optimized for deployment on Vercel. The included `vercel.json` file ensures a seamless and correct deployment process.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FIAlready8%2FGMB-GRAPHIC-PERSONAL)

### Deployment Process

Vercel will automatically detect the `vercel.json` file and configure the deployment correctly. The configuration instructs Vercel to:
1.  Skip the `npm install` step, as all dependencies are loaded via a CDN import map.
2.  Run a simple `buildCommand` that creates a `dist` directory and copies all project files into it.
3.  Serve the application from the newly created `dist` directory.

This process is robust and avoids the dependency conflicts that can arise from Vercel's default build process for static sites. Just import your repository into Vercel, and it will deploy automatically.