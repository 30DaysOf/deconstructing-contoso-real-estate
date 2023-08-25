# #30DaysOfCRED Series

#30DaysOfCRED stands for "30 Days Of Contoso Real Estate - Deconstructed" - a series of 30 blog posts that can be organized  into _"modules"_ corresponding to a 4-part Learn Live series on the topic.

## 1. What is Contoso Real Estate?

The series focuses on deconstructing the [Contoso Real Estate](https://aka.ms/contoso-real-estate/github) open-source reference sample that implements a enterprise-grade solution for a multi-scenario composable serverless application on Azure. It targets the following scenarios and is easily extensible to more.

 1. Build a Blog App - build a full-stack serverless app
 2. Add a Portal App - demonstrate micro-frontends
 3. Add Authentication - demonstrate role-based experiences
 4. Add Payments - integrates 3rd party API (containerized)
 5. Add Search - integrates GraphQL API (now), OpenAI (next)
 6. Add Events - integrates Pub/Sub messaging for loose coupling
 7. Add Caching - integrates Azure Redis Cache for performance

## 2. What is Learn Live "Deconstructed"?

The Learn Live series traditionally focuses on live walkthroughs of Microsoft Learn modules that teach learners how to skill up on a particular technology by _building it up step by step_ - given a meticulously crafted tutorial or training materials for guidance.

This Learn Live _"Deconstructed"_ series does the reverse. It teaches learners how to _tear down an open-source project_ and figure out its building blocks (components) and end-to-end development workflow (composability) - given just the codebase. 

Both approaches have value to learners. The first requires less effort from learners but needs someone to have created the materials. The second requires more self-guided efforts from learners - but opens up the entire ecosystem of open-source projects as your "training ground".

## 3. What is Astro? 

To support self-guided "learn by deconstructing" efforts, it helps to have a _paved path_ that can help learners connect the dots between what they may know (concepts & rapid prototypes) and where they want to be (architectures & enterprise solutions). This #30DaysOf series is one such path.

To reflect a sense of chronological progress, we created content in the form of 30 'blog posts' organized into 4 'themed weeks' which subtly mirror the traditional learning path format of 'units' organized into 'modules'.

While the content itself is just a collection of Markdown files, we decided to host it in its own static site for fun. [Astro](https://docs.astro.build/en/concepts/why-astro/) is a popular modern web framework for building _content-focused websites_ that build fast, run fast, and are easy to use with a growing list of community-supported integrations. It can be [deployed to popular hosting platforms](https://docs.astro.build/en/guides/deploy/) and [connect to popular headless CMS](https://docs.astro.build/en/guides/cms/) if desired. For our needs, we'll use the [official blog starter](https://astro.build/themes?search=&categories%5B%5D=official), an ultra-minimal site with 100/100 Lighthouse score, built-in RSS feed and sitemap, and SEO-friendly setup out of the box.

 The #30DaysOf content is primarily located under the `docs/src/content/blog` making it easy to extract and move this to an alternative framework or repository location later. My [Astro Dev](./assets/Astro%20Dev.code-profile) Visual Studio Code profile sets up the editor with related extensions for development.

## 4. #30Days Roadmap

The series is tentatively organized into these 4 themed weeks (that map into 4 Learn Live session "modules") - with 7 posts each week (mapping to 7 "units" per module). The series is book-ended by a Kickoff post (think Learning path outline) and a Wrap-up post (think Resources & next steps).

### Outline 
1. `Kickoff` 👉🏽 Why Deconstruct to Learn? 
1. `Define`  👉🏽 Take a minute to understand what, where, why
1. `Develop` 👉🏽 Start unpacking the project, one piece at a time
1. `DevOps`  👉🏽 Take it to production, think about testing & CI/CD
1. `Delivery`  👉🏽 Understand best practices, design patterns, resources.
1. `Wrapup` 👉🏽 Let's Talk Collections, Contributions & Continuation ...

### Week 1️⃣

1. `Application` 👉🏽 What is Contoso Real Estate?
1. `Quickstart` 👉🏽 Setup Development Environment
1. `Architecture` 👉🏽 Identify Scenarios, Prioritize Them
1. `Project` 👉🏽 Understand Structure, Map to Scenarios
1. `Services` 👉🏽 Identify Services, Understand Functionality
1. `Environment` 👉🏽 Identify Tools, Understand Functionality
1. `API` 👉🏽 OpenAPI Specification, Swagger tooling

### Week 2️⃣
1. `Scenario 1` 👉🏽 Start with the Blog - for Admins
1. `Scenario 2` 👉🏽 Let's Add the Portal - for Guests
1. `Scenario 3` 👉🏽 Let's Add Authentication - for New Hires
1. `Scenario 4` 👉🏽 Let's Add Payments - for Reservations
1. `Scenario 5` 👉🏽 Let's Add Search - with AI Integrations
1. `Scenario 6` 👉🏽 Let's Add Events - with Pub/Sub Messaging
1. `Scenario 7`:. Let's Add Performance - with Redis Caching

### Week 3️⃣
1. `DevOps-Deploy` 👉🏽 Let's Deploy To Azure - with AZD Tooling
1. `DevOps-Deploy` 👉🏽 Let's Explore Deployment - on Azure Portal
1. `DevOps-Deploy` 👉🏽 Let's Understand Configuration - with Bicep
1. `DevOps-Deploy` 👉🏽 Let's Monitor Deployment - with App Insights
1. `DevOps-Testing` 👉🏽 Let's Run E2E Tests - with Playwright Test 
1. `DevOps-Testing` 👉🏽 Let's Debug E2E Tests - with Playwright UI Mode
1. `DevOps-Testing` 👉🏽 Let's Analyze Tests - with Playwright Reporting

### Week 4️⃣
1. `Deliver-Reliability` 👉🏽 Assess ability to recover from failure
1. `Deliver-Security` 👉🏽 Assess ability to protect apps and data
1. `Deliver-Costs` 👉🏽 Assess ability to maximize value with minimal cost
1. `Deliver-Performance` 👉🏽 Assess ability to adapt to changes in load
1. `Deliver-Operation` 👉🏽 Assess ability to keep app running in prod
1. `DiveInto-Fundamentals` 👉🏽 [Azure Application Architecture Fundamentals](https://learn.microsoft.com/en-us/azure/architecture/guide/)
1. `DiveInto-DesignPatterns` 👉🏽 [Cloud Design Patterns](https://learn.microsoft.com/en-us/azure/architecture/patterns/)

## Related Resources
1. ⬜️ Collection.mslearn
2. ⬜️  Glossary.ai
3. ⬜️  LearnLive.sessions
4. ⬜️ YouTube.shorts
5. ⬜️  Instagram.visuals