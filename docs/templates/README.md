# Module Design 

Creating a Module has 4 tasks:
 - Create **design document**
 - Request **Azure sandbox** => Check if you need Azure Sandbox
 - Identify **artwork** => screenshots, lightbox, diagrams, animations
 - Add **code samples** (or lab) => repo in MicrosoftDocs org

## Design Document

There is a design template. However, if you use the Learn Authoring Pack (below) it will automatically provide you templates for **the specified module type** with guidance to fill in, which is easier.

Instead, focus on a **Learning Path** Design Doc as follows:
- Title
- Role, Level, Products
- Pre-Requisites
- Summary
- Learning Objectives
- **List of Modules**
    - Module Title (Type)
    - Module Title (Type)
    - Module Title (Type)

Then based on module, list the default units and revise them (keeping the template scaffold updated with changes). **After that point, work directly with scaffold**.
    
## Module Templates
These are automatically scaffolded by the Learn Authoring Pack extension available on the VS Code Marketplace. The extension will override default Markdown and formatting styles - so create a custom VSCode profile and switch on demand.

1. Install Extension
1. Configure Settings to add profile or metadata
1. Use Extension to `Create Module in NEW folder`




There are **6 modules templates** currently available - guidance to select one:

## 1 | Introduction To Product

Use this to **teach learner to evaluate whether product fits their needs** in a know-before-you-try context.

 1. Introduction
 1. Concept
 1. Exercise
 1. Concept
 1. **Exercise**
 1. Knowledge Check
 1. Summary

May typically be followed by the "Build your first" module type for that product. Typically has 2 learning objectives mapped to (task)
 - (Evaluate) if product X is appropriate for requirement Y.
 - (Describe) how product X can achieve requirement Y by taking actions Z.

## 2 | Choose the Best Product

Use this to **teach learner to make a decision** in picking a product given 2-4 known options with similar functionality.

 1. Introduction
 1. Identify Product Options
 1. Analyze Decision Criteria
 1. Use Product
 1. Use Product
 1. Use Product
 1. Use Product
 1. Knowledge Check
 1. Summary

Introduce the scenario (context for decision). Identify options and define decision criteria. Then apply criteria to each product.
Module title is _Choose the best <product> for <your purpose>. `Example` 👉🏽 [Choose the best Azure service to automate your business processes](https://learn.microsoft.com/training/modules/choose-azure-service-to-integrate-and-automate-business-processes/)


## 3 | Build Your First Using Product

Use this to **teach learner how to use the identified product** in a try-before-you-buy context.

 1. Introduction
 1. Concept
 1. Exercise
 1. Concept
 1. **Exercise**
 1. Knowledge Check
 1. Summary

Pre-requisite should be "Introductory level knowledge of product" with this module often preceded by the "Introduction To Product" module. 

Module Title is in the form _XYZ your first ABCD_ e.g., `Build your first Static Web App` or `Run your first Playwright Test`

Try to set a real-world context. Have 3 learning objectives linked to (task)
 - (Prepare) e.g. Design a workflow to automate deployment
 - (Apply) e.g., Implement the workflow using GitHub Actions
 - (Validate) e.g., Run the workflow on commit and view results


## 4 | Challenge Project

Use this to **teach learner to solve a real-world problem** with rubric (homework). Helps identify learning gaps, evaluate readiness for certification.

 1. Introduction
 1. Prepare
 1. **Exercise**
 1. **Exercise**
 1. **Exercise**
 1. Knowledge Check
 1. Summary
 
Start Module title with _Challenge Project -_ as a prefix. Have 2-8 exercise units with a _Prepare_ unit to describe rubric and setup. Unique in that you can have extra-large modules - up to **max 4-hr time target** (think mini-hack) | `Example` 👉🏽 [Challenge Project - Create a Mini Game](https://learn.microsoft.com/training/modules/challenge-project-create-mini-game/)

## 5 | Guided Project

Use this to **guide learner through a solution to a real-world problem**. Assumes learner knows the fundamentals so focus is on _applied practice_ not _new skills_.

 1. Introduction
 1. Prepare
 1. **Exercise**
 1. **Exercise**
 1. **Exercise**
 1. Knowledge Check
 1. Summary

Ideal for module-length practice of a _single_ skill with multiple exercises that explore capabilities in detail **within 60-min max**. Start Module title with _Guided Project -_ as a prefix. | `Example` 👉🏽 [Guided project - Automate Node.js deployments with Azure Pipelines](https://learn.microsoft.com/en-us/training/modules/deploy-nodejs/)


## 6 | Standard

Use this to **teach learner how to do a real-world task** in a manner that supports generalized learning and knowledge transfer. 

 1. Introduction
 1. Concept
 1. **Exercise**
 1. Concept
 1. **Exercise**
 1. Knowledge Check
 1. Summary
 
Module Title as _verb-task-product_. e.g., `Authenticate User Using GitHub Login`