This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on GitHub Pages

This project is configured to deploy to GitHub Pages using GitHub Actions.

### Automatic Deployment

When you push changes to the `main` branch, GitHub Actions will automatically build and deploy the site to GitHub Pages.

The deployment workflow:
1. Checks out the code
2. Sets up Node.js 22.14.0
3. Installs dependencies
4. Builds the project
5. Creates a .nojekyll file
6. Deploys to GitHub Pages

### Manual Deployment

You can also deploy manually:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Configuration

The project is configured for GitHub Pages in:
- `next.config.mjs`: Sets output to 'export', configures basePath and assetPrefix
- `package.json`: Includes deploy script and homepage URL
- `.github/workflows/deploy.yml`: GitHub Actions workflow for automated deployment

## Deploy on Vercel

Alternatively, you can deploy your Next.js app using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
