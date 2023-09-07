# Deconstructing Contoso Real Estate

- `Roles:` developer, student, beginner, solutions-architect
- `Level:` beginner, intermediate
- `Products:` azure, github-copilot, playwright 

## Scenario
You just got hired to join the Contoso Organization to work on an exciting new project - _Contoso Real Estate_ - an enterprise-grade multi-scenario application that is running on Azure. The reference architecture and implementation were _designed_ with extensibility and composability in mind.

Your team wants you to get up to speed quickly on the reference sample, so you can start contributing to new feature development, bug fixes, and other enhancements to the repo. You have access to the open-soure repository and want a structured way to _deconstruct_ the codebase to understand it.

## Pre-requisites

- Familiarity with:
    - Cloud Computing and Web Development Concepts
    - Git, GitHub and ecosystem usage
    - Node, npm and ecosystem usage
    - Visual Studio Code, Extensions and usage.
- Accounts with:
    - Azure _👉🏽 Apply for a free one if needed._
    - GitHub  _👉🏽 Apply for a free one if needed._
    - GitHub Codespaces activated. _👉🏽 Free quota should suffice_.
- Optional tools: 
    - GitHub Copilot (optional). _| Requires a paid plan_.
    - Docker Desktop (optional). _| For local dev container usage_

## Learning Objectives

- Learn what Composable Architectures are, and their benefits.
- Understand the Contoso Real Estate specification (requirements).
- Understand the Contoso Real Estate implementation (codebase).
- Understand the Contoso 'Prioritized Scenarios' (sequential)
- Understand Dev Containers and GitHub Codespaces (dev environment)
- Understand Bicep and Azure Developer CLI (deployment pipelines)
- Understand Playwright and Test Automation (end-to-end testing)
- Validate development environment by building & previewing solution.
- Validate deployment workflow by provisioning & deploying on Azure.
- Validate user journey by designing and running e2e test specs.

## Learn Labs Outline

- M1 | Understand the Specification
- M2 | Setup the Development Environment
- M3 | Unpack the Blog Application
- M4 | Unpack the Portal Application (guest experience)
- M5 | Unpact the Authentication support (user favorites)
- M6 | Unpack the Payments support (user reservations)
- M7 | Provision & deploy to Azure (with Azure Developer CLI)
- M8 | Add Test Automation (with Playwright)
- M9 | View Documentation (developer guide)
- M10 | Extend Scenarios (S5, S6, S7 ...)

## Guidance

The labs are loosely modeled after _guided project_ explorations with content organized into "concept+exercise" pairs. Learn something about the solution - then take some hands-on action to reinforce that learning or understand how to put what you learned into practice.


## Complete Challenges
Here is a small subset of the _challenges_ you will complete along the way:

 1. **Fork the open-source sample** to your own GitHub profile.
 1. **Setup your development environment** using GitHub Codespaces.
 1. **Build & Preview the application** using GitHub Codespaces with npm.
 1. **Analyze the Architecture diagram** and identify the prioritized scenarios.
 1. **Analyze the OpenAPI specification** and learn to implement a serverless API.
 1. **Analyze the Project Codebase** and map prioritized scenarios to packages.
 1. **Deploy the Solution to Azure** using Azure Developer CLI.
 1. **Build & Run End-to-End Tests** using Playwright.
 1. **Automate the CI/CD Workflows** using GitHub Actions and Azure DevOps.
 1. **Optimize for Costs & Performance** using Azure Monitor and Dashboard.

## Explore Iteratively

Some challenges are actually a collection of _mini-challenges_ that iteratively skill you up in achieving the broader objective. For instance, the _Analyze Project Codebase_ is a series of smaller challenges, each focused on a prioritized scenario such as:

 1. **Build a Blog** using Next.js with Strapi, Azure Container Apps & more.
 1. **Add the Portal** using Angular with Azure Static Web Apps & Functions.
 1. **Add Authentication** using Azure Static Web Apps & Azure CosmosDB.
 1. **Integrate Payments** using Azure Container Apps, Stripe API & API Management.
 1. **Integrate Search** using GraphQL API (now) & Azure Open AI (next)

## Transfer Knowledge

Practicing the tasks will help you build your knowledge of enterprise architectures and end-to-end development, and build familiarity with the Contoso Real Estate codebase. It will also help you _transfer that knowledge_ in three actionable ways:

 - **Apply Learnings & Best Practices** to build your own real-world projects.
 - **Make Open-Source Contributions** to this sample, or other like it.
 - **Explain Solution Architectures & Tradeoffs** to your team or other learners.

## Time Commitment
 1. Each challenge should take < 5 mins to complete (unless stated otherwise).
 1. Challenges should build on each other (so complete them in order)
 1. You can pause & resume activities (using Codespaces to save state)


---