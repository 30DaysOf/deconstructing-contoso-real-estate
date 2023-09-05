# Learn Labs: Contoso Real Estate

Define a series of "Learn Labs" defined using a typical Learn Module structure so they can be used for _Learn Live_ sessions now and potentially migrated to Microsoft Learn later. Prioritize 4 for use in September, with others being left for self-guided use.

## Lab Series 
 - **Number of Modules**: TBD
 - **Roles**: Developer, Student, Solution Architect, Educator

### Summary

Contoso Real Estate is an open-source reference sample that demonstrates how to build a multi-scenario enterprise-grade serverless solution on Azure, using JavaScript. The sample illustrates the power of a _composable enterprise_ architecture pattern with _best-in-class_ tooling for enhancing developer experience and productivity for end-to-end solutions.

Contoso is a fictional enterprise that is currently growing its workforce worldwide. As part of their onboarding process, new hires need a website that lets them discover and reserve rental properties in their location. The Contoso HR team defines the _user experience_ requirements:
 - HR admins **manage property listings** featured on website
 - HR admins **publish a blog** on website with tips and recommendations
 - Guests can **browse** listed properties and **view details** on property
 - Guests can **search** for listed properties by name or other criteria
 - Authenticated users can **save** listed properties to their **profile**
 - Authenticated users can **reserve** listed properties with a **payment**

### Learning Objectives

In this series of lab modules you'll learn how to:
 - **Describe** what a composable enterprise architecture is, and why it has value
 - **Define** a composable architecture (API-first, Cloud-native technologies)
 - **Develop** the solution incrementally, as a series of prioritized scenarios 
 - **Validate** the solution with automated, cross-browser, end-to-end testing
 - **Deploy** the solution to Azure using Infrastructure-as-Code assets and a unified CLI
 - **Optimize** the solution deployment for cost, complexity and performance.
 - **Extend** the solution with new scenarios or capabilities, in a loosely-coupled manner
 
In the process, you will also learn how to **deconstruct an open-source implementation** to figure out its building blocks, dependencies, and developer workflows from just the codebase.

### Pre-Requisites

To complete this lab series you will need:
 - An Azure account. Signup for a free account if needed.
 - A GitHub account. Signup for a free account if needed.
 - Familiarity with Visual Studio Code & its Extensions - for editing.
 - Familiarity with GitHub and Git operations - for source control.
 - Familiarity with Node.js, npm - and related developer ecosystem.
 - Familiarity with cloud computing and web development concepts.

## Lab Modules

This is a tentative list of lab modules describing the current (Aug/Sep 2023) implementation of the Contoso Real Estate sample. The "Type" of module reflects Learn templates - relevant ones are:

 1. `Introduction to X` - learn about X conceptually before trying it
 1. `Build Your First X` - learn to use X before applying it elsewhere
 1. `Guided Project` - explore solution using X for real-world problem

Each module should take **max 60 mins** to complete, with each step (unit) within it taking **max 5 minutes** to finish.


| Name | Type | Learning Objectives |
|:---|:---|:---|
| **SESSION: SPECIFICATION** ⭐️ | 1 |  |
| Introduction To Contoso Real Estate (10 min) |  | Understand user scenarios and requirements. **Fork the project.** Understand the repo structure. |
| Introduction to Composable Enterprise (10 min) | | Understand MACH (API-first, Microservices, Cloud-native, Micro-frontends). **Explore OpenAPI Spec**.|
| Launch GitHub Codespaces on Forked Sample (30 min) |  | Validate Codespaces setup. Understand Dev Containers. **Preview Contoso Real Estate** app |
|Understand The Contoso Real Estate Architecture (5 min) |  |  Understand the scenarios and prioritization. Get familiar with **Project File Structure** and mapping to components. |
| Summary (5 min)| | Recap what we did, why, and next steps. |
| **SESSION: APPLICATION** ⭐️ | 3 | |
| Introduction to Serverless Compute Resources (5 min) | | Understand Azure Functions, Azure Static Web Apps, Azure Container Apps. **Identify their usage in scenarios.** |
| Introduction to Data & Storage Resources. (5 min)| | Understand Azure CosmosDB, Azure PostgreSQL, Azure Blob Storage, Strapi CMS.**Identify their usage in scenarios.**  |
| Implement the Contoso Real Estate API (10 min) | | Understand Azure Functions implementation. Get familiar with Azure Functions Core Tools. **Learn how GitHub Copilot can help speed up API development** |
| Build the Contoso Blog App Experience (20 min) | | Understand Azure Containers implementation. Understand how CMS works. Explore Next.js frontend. **Learn how sample data is populated for use across Contoso Real Estate apps**. |
| Build the Contoso Portal App Experience - for guests (20 min) | | Understand Azure Static Web Apps implementation. Get familiar with SWA CLI. **Understand core concepts like Roles, Managed Functions, Data Connections, Auth** in SWA|
| Summary (5 min) | | Recap what we did, why, and next steps. |
| **SESSION 3: INTEGRATION** | 3 | |
| Let's Talk Integrations (5 min) | | |
| Add Authentication support to Portal App (10 min) | | |
| Add Save-Listing feature to Portal App (10 min) | | |
| Add Profile Page feature to Portal App (10 min) | | |
| Integrate Payments into Portal App (10 min) | | |
| Add Reservations feature to Portal App (10 min) | | |
| Summary (5 min) | | |
| **SESSION 4: PRODUCTION** | 3 | |
| | | |
| | | |
| | | |
| | | |
| | | |
