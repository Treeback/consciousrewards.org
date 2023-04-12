Conscious Rewards Landing Page
==============================

Welcome to the Conscious Rewards Landing Page repository! This project is built using Gatsby, Contentful, and is deployed using Netlify. The landing page is designed to showcase the features and benefits of the Conscious Rewards app, an innovative habit-forming Yoga app that helps users elevate their Sadhana journey.

[Link to website](https://consciousrewards.org)

Table of Contents
-----------------

-   [Features](https://chat.openai.com/chat/02485f76-be3b-46a4-a800-2111feb43966#features)
-   [Prerequisites](https://chat.openai.com/chat/02485f76-be3b-46a4-a800-2111feb43966#prerequisites)
-   [Getting Started](https://chat.openai.com/chat/02485f76-be3b-46a4-a800-2111feb43966#getting-started)
-   [Configuration](https://chat.openai.com/chat/02485f76-be3b-46a4-a800-2111feb43966#configuration)
-   [Deployment](https://chat.openai.com/chat/02485f76-be3b-46a4-a800-2111feb43966#deployment)
-   [Contributing](https://chat.openai.com/chat/02485f76-be3b-46a4-a800-2111feb43966#contributing)
-   [License](https://chat.openai.com/chat/02485f76-be3b-46a4-a800-2111feb43966#license)

Features
--------

-   Gatsby - a fast, modern site generator for React
-   Contentful - a powerful, API-driven headless CMS
-   Netlify - a platform for deploying modern web projects
-   Responsive design for an optimal user experience across devices
-   SEO optimized for increased discoverability
-   Performance and accessibility best practices

Prerequisites
-------------

To work on this project, you need to have the following installed on your machine:

-   [Node.js](https://nodejs.org/) (v12 or higher)
-   [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

Getting Started
---------------

1.  Clone the repository:

bashCopy code

`git clone https://github.com/your-username/conscious-rewards-landing-page.git`

1.  Change into the project directory:

bashCopy code

`cd conscious-rewards-landing-page`

1.  Install the dependencies:

bashCopy code

`yarn install`

or

bashCopy code

`npm install`

1.  Run the development server:

bashCopy code

`gatsby develop`

The site should now be running on `http://localhost:8000`.

Configuration
-------------

To connect the project to your Contentful space, you will need to set up environment variables. Create a `.env` file in the root directory of the project and add the following variables:

makefileCopy code

`CONTENTFUL_SPACE_ID=<your_space_id>
CONTENTFUL_ACCESS_TOKEN=<your_access_token>`

Replace `<your_space_id>` and `<your_access_token>` with your Contentful space ID and access token, respectively.

Deployment
----------

This project is set up to be deployed using Netlify. To deploy your site:

1.  [Sign up for a Netlify account](https://app.netlify.com/signup) or log in to your existing account.
2.  Click the "New site from Git" button.
3.  Connect your Git provider and choose the Conscious Rewards Landing Page repository.
4.  In the "Build settings" section, add the environment variables (`CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN`) with their corresponding values.
5.  Click the "Deploy site" button.

Netlify will now build and deploy your site. You can view the live site using the provided URL.

Contributing
------------

We welcome contributions! If you'd like to contribute, please feel free to submit a pull request or open an issue to discuss your ideas.

License
-------

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the [LICENSE](https://chat.openai.com/chat/LICENSE) file for more information.
