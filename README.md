# The #30DaysOfCRED Series

The #30DaysOfCRED stands for _30 Days Of Contoso Real Estate - Deconstructed_. The prefix is derived from the popular [**#30DaysOf**](https://github.com/30DaysOf) format where we deep-dive into a topic using a series of 30 blog posts grouped into 4 weekly themes.
 - _This_ deep dive focuses on deconstructing [**Contoso Real Estate**](https://aka.ms/contoso-real-estate/github) - an open-source reference sample for an enterprise-grade serverless application, using JavaScript, on Azure. The sample demonstrates a _composable architecture_ pattern with  _multiple extensible scenarios_.
 - Instead of 4 weekly themes, we have [**4 Learn Live Sessions**](https://aka.ms/contoso-real-estate/learn-live) in Sep-Oct. Traditionally, Learn Live sessions cover a [Microsoft Learn module](https://learn.microsoft.com/en-us/training/browse/) in an hour-long instructor-guided livestream. In our case, we will instead focus on _analyzing and breaking down_ the sample codebase to understand how it is designed, built and deployed - with focus on the end-to-end developer experience.

Here's a quick overview of what this involves.

## Contoso Real Estate: Specification

Contoso is a fictitious global corporation that is currently expanding its workforce. As part of the onboarding experience, _New Hires_ are given the opportunity to browse, save, and reserve, **company-approved rental properties** in their hiring location. To support this need, the Contoso HR organization wants an internal _Contoso Real Estate_ website that satisifies the following requirements:

1. The HR team can _administer the site_, managing the rental listings featured there.
1. The HR team can _publish a blog_ providing news & recommendations to visitors.
1. Any Contoso employee can _visit the site_ to browse rental listings and view details.
1. Any Contoso employee can also _search the listings_ by name (or other criteria)
1. New Hires can _login_ to save listings to their profile, or reserve them with payment.

In addition to these _application requirements_, they also want to make sure the website is **optimized for performance and cost**, and can scale up automatically with demand (e.g., for new employee orientation) and scale back down (potentially to zero) during interim low-hiring periods.

After discussions with the team, the solution architect also observes the following:
1. Different parts of the application may need to be _built & maintained by different teams_.
1. The HR team wants the option to _extend the scenarios_ (to add or modify features) in future.
1. The website must scale with demand and be  _optimized for cost and performance_
1. Website usage _may be bursty_ with highest demand at orientation, and low demand otherwise.

## Contoso Real Estate: Implementation

The [**Contoso Real Estate**](https://aka.ms/contoso-real-estate/github) _reference implementation_ is an open-source enterprise-grade sample that implements the real-world application scenario described above - using JavaScript, on Azure. The primary objectives of the sample are:
 - to demonstrate a _composable enterprise architecture pattern_ for extensibility.
 - to illustrate _best practices and service integrations_ for building solutions on Azure.
 - to showcase _best-in-class developer tools_ for enhancing developer productivity.

**Composable Enterprise Architecture** is _a design pattern that emphasizes the ability to assemble a system from loosely coupled components_ so that organizations and products can adapt and change rapidly to respond to market needs [see: [Forbes, 2023](https://www.forbes.com/sites/forbesbusinesscouncil/2023/01/18/composable-architecture-101-how-to-make-the-transition-in-your-business/?sh=283f4a5754ee)]. **MACH** (Microservices, API-first, Cloud-native, and Headless) is the _technology approach_ powering this, where every component of the solution is pluggable, scalable and replaceable [see [Mach Alliance](https://machalliance.org/mach-technology)] for agility.

Composability enables extensibility by allowing complex solutions to be developed as a series of **prioritized scenarios**, each designed to build upon the previous one in a decoupled manner. The scenarios arethen _composed together in production pipelines_ (i.e, end-to-end workflows) to deliver the complete user experience specified. With that in mind, the Contoso Real Estate reference sample maps the specification above to these 7 prioritized scenarios:

 1. `Build a Blog App` - build a full-stack serverless app
 2. `Add a Portal App` - demonstrate micro-frontends
 3. `Add Authentication` - demonstrate role-based experiences
 4. `Add Payments` - integrate 3rd party API (containerized)
 5. `Add Search` - integrate GraphQL API (now), OpenAI (next)
 6. `Add Events` - integrate Pub/Sub messaging for loose coupling
 7. `Add Caching` - integrate Azure Redis Cache for performance

The composable architecture pattern (and specifically the **API-first** design approach) makes this extensible to new scenarios in the future, with minimal disruption to individual scenario implementations.

## Learn Live: Deconstructed Series

[Learn Live](https://learn.microsoft.com/en-us/shows/learn-live/) is a Microsoft-hosted livestreamed event series where subject matter experts skill you up on new technologies and tools, in an hour-long guided session.
 - The **traditional series** uses a [Microsoft Learn module](https://learn.microsoft.com/en-us/training/browse/) as the default training content - and teaches you how to _build something from scratch_ to understand an underlying concept or service.
 - Our **Deconstructed series** instead uses an [open-source Azure-Samples repo](https://aka.ms/contoso-real-estate/github) as the training content - and teaches you how to _tear something down_ to understand how it works, and how it was constructed.

The value of the second approach is that you can apply that self-guided exploration process to _any open source sample_ - then _transfer the acquired knowledge_ to your own projects, to build robust solutions. 

For our _Deconstructed: Contoso Real Estate_ series, we have defined these 4 labs to cover the end-to-end story. Each session is 1-hour long which may not be sufficient to do the whole topic justice - which then motivated our #30DaysOf series below.

| Session Title | Session Description|
|:---|:---|
| _S1: Specification_  | Learn to _define_ an API-first architecture, and setup development environment. |
| _S2: Application_ | Learn to develop _core scenarios_ that deliver primary user experiences on frontend. |
| _S3: Integration_ | Learn to develop _advanced scenarios_ by integrating 1P/3P services on backend.|
| _S4: Production_ | Learn to _deliver_ production-grade solutions with testing, deployment, insights. |
| | |

## 30DaysOf: Blog Series

Since we don't have Learn modules for the livestreamed series, we decided to create our own _Learn Lab Units_ with structured exercises to help learners deconstruct the sample on their own. We will walk through a subset of these in the Learn Live sessions and use the **#30Days series to publish a lesson a day** for a more complete month-long exploration. You can also visit this site to view all the lessons and work through them at a faster pace.

To host those Lab units, we needed a static site builder that would be lightweight and support both the _blog_ format (for publishing) and the _tutorial_ format (for structured lab units). We decided to use [Astro](https://astro.build/) and their [official blog starter](https://astro.build/themes?search=&categories%5B%5D=official) as basis for our site and content series.

**Why Astro?**
 - It's a [rising star for static sites in JS](https://risingstars.js.org/2022/en#section-ssg) - and is [designed for content-focused websites](https://docs.astro.build/en/concepts/why-astro/#content-focused).
 - It is [fast by default](https://docs.astro.build/en/concepts/why-astro/#fast-by-default) and [outperforms others](https://astro.build/blog/2023-web-framework-performance-report/) in key web performance criteria. 
 - It [deploys to popular hosting platforms](https://docs.astro.build/en/guides/deploy/) and [works with popular CMS](https://docs.astro.build/en/guides/cms/) out-of-the-box.
 - It has [a vibrant community for themes & integrations](https://astro.build/themes?search=&categories%5B%5D=official) making it easy to scaffold projects.
 - It maintains [an official VS Code Extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) which enhances my preferred developer experience.

For convenience, I've [shared my VS Code profile for this project](./assets/Astro%20Dev.code-profile) - just import it into your own VS Code session to get the same VS Code environment you will see in the LearnLive videos and #30Days blog posts.

**#30Days Roadmap**

For a **tentative list of Learn Labs units** and their mapping to the #30DaysOf series of posts, check out the [30DaysRoadmap](30Days-Roadmap.md) document in this repository. Once the Astro site is live, this README will be updated to point to the official Roadmap, posts and associated learning units.
