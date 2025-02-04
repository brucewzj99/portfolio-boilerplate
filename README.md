# Portfolio Template

Welcome to your new portfolio template! This template is built with [Next.js](https://nextjs.org/), a powerful React framework, and is designed so you can easily customize your portfolio by editing just one file: `data/profile.json`.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Customizing Your Profile](#customizing-your-profile)
- [Adding Your Images](#adding-your-images)
- [Using the Built-In Pages](#using-the-built-in-pages)
- [Running the Development Server](#running-the-development-server)
- [Deploying Your Portfolio to Vercel](#deploying-your-portfolio-to-vercel)

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

- **Node.js and npm**  
  Download and install [Node.js](https://nodejs.org/). This will also install npm (the Node package manager).

## Getting Started

1. **Clone the Repository**  
   Simply clone this repository to your computer:

   ```bash
   git clone https://github.com/brucewzj99/portfolio-boilerplate.git
   ```

   Then navigate into the project directory:

    ```bash
    cd your-portfolio-repo
    ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

## Customizing Your Profile
All your personal details are stored in one file: data/profile.json. To update your portfolio:
1. **Open `data/profile.json` in your text editor.**
2. **Edit the Fields:**
Update the fields with your information, such as:
- `name`: Your name.
- `role`: Your professional role (e.g., "Digital Photographer & Visual Storyteller").
- `bio`: A short biography.
- `title`: The title that appears in the browser tab.
- `profilePicture`: The path to your profile image.
- `profileCTA`: Call-to-action button text and link.
- `navBar`: Navigation bar settings, including logo and links.
- `footer`: Footer text and colors.
- `socialLinks`: Your social media links.
- `about`: Your detailed bio and sections (such as Skills and Workshops).
- `workExperience`: A list of your previous jobs.
- `projects`: A list of your relevant projects.
- `gallery`: A list of images for your portfolio gallery.
- `theme`: The colors and fonts used throughout your portfolio.

## Adding Your Images
- **Images for Your Profile and Gallery:**
Place all your images (profile picture, gallery items, logos, etc.) in the `public` directory. You can create subfolders (for example, `public/my-images`) to keep things organized.

- **Update Image Paths:**
In `data/profile.json`, update the image paths to reflect where your images are stored. For example:
    ```json
    "profilePicture": "/my-images/profile.jpg",
    ```

## Using the Built-In Pages
This template comes with several built-in pages, including:
- **Home:** Your main portfolio page.
- **About:** A detailed bio with sections for your skills, workshops, etc.
- **Work:** A list of your work experience.
- **Projects:** A list of your projects.
- **Gallery:** A gallery of your images.

To add or remove pages, update the `navBar` field in `data/profile.json`. For example:
```json
    "links": [
        {
            "name": "Home",
            "path": "/"
        },
        {
            "name": "About Me",
            "path": "/about"
        },
        {
            "name": "Work Experience",
            "path": "/work"
        },
        {
            "name": "Gallery",
            "path": "/gallery"
        },
        {
            "name": "My Projects",
            "path": "/projects"
        }
    ]
```

## Running the Development Server
Once you have made your customizations, follow these steps to view your portfolio locally:
1. **Install Dependencies**  
   If you haven't already, install the project dependencies:

   ```bash
   npm install
   ```
2. **Start the Development Server**

   ```bash
   npm run dev
   ```
3. **View Your Portfolio**
Your portfolio will be available at [http://localhost:3000](http://localhost:3000).

## Deploying Your Portfolio to Vercel
To deploy your portfolio to [Vercel](https://vercel.com/), follow these steps:
1. **Sign Up for Vercel**  
   If you don't already have an account, sign up for a free account at [Vercel](https://vercel.com/).

2. **Install Vercel CLI**
    If you haven't already, install the Vercel CLI globally:
    
    ```bash
    npm install -g vercel
    ```

3. **Log In to Vercel**
    Log in to your Vercel account using the CLI:
    
    ```bash
    vercel login
    ```

4. **Deploy Your Portfolio**
    Run the following command in your project directory:
    
    ```bash
    vercel
    ```

5. **Follow the Prompts**
    The Vercel CLI will guide you through the deployment process. You will be asked to log in to your Vercel account and configure your project settings.
- Set up and deploy: yes
- Which scope: your username
- Link to existing project: no
- Your project name: your-portfolio-name
- In which directory is your code located: . (current directory)
- Want to override the settings: no

6. **View Your Portfolio**
    Once the deployment is complete, you can view your portfolio live at the provided URL.