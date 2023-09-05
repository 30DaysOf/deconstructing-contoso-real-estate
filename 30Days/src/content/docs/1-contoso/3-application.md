---
title: 3. App Requirements
description: What is Contoso Real Estate? What are the application requirements? How do we begin our design process?
---

Learn about the core requirements for the Contoso Real Estate application, identify key user roles, and understand why we use a cloud-native architecture for our solution.

## Design Requirements

Contoso is a **fictitious global corporation** that is currently expanding its workforce. Contoso Real Estate will be the _flagship application_ to support onboarding "New Hires" by helping them _find and reserve_ HR-approved rental housing in their location.

They hired a solution architect & provided these **design requirements**:

1. The application should be implemented as an internal website.
1. The HR team must be be able to select and modify the featured listings.
1. The HR team must be able to publish blog posts with additonal information.
1. Any visitor to the site can view rental listings and blog posts.
1. Any visitor to the site can search for listings by name (or other criteria).
1. Authenticaed visitors can also save listings & reserve rentals (with payment).

They also added these **solution requirements**:
1. The solution must be reliable, secure, cost-effective and performant.
1. It should scale up (e.g., at orientation) & down (to zero) to match demand.
1. Its design should be _extensible_ to support new features in future.
1. Its design should be _flexible_ to allow differrent teams to own different parts.

## User Roles

First, the solution architect defines 3 user roles for the application:
1. _Admin_ - manages content assets and data used by the solution.
1. _Guest_ - unauthenticated user with access to basic site experience.
1. _New Hire_ - authenticated user with richer experience & interactions.

This adds a requirement for _authentication_ (to identify users) with associated _role-based access control_ to determine the features or experiences accessible to users based on the roles attached to to their identity.

## Application Architectures

Next, the solution architect has to select an appropriate [Application Architecture](https://learn.microsoft.com/en-us/azure/architecture/guide/) design pattern that can meet the security, reliability, scalability and performance requirements for enterprise-grade usage. They choose the [cloud-native approach](https://learn.microsoft.com/dotnet/architecture/cloud-native/definition) since it prioritizes _managed services_ (for lower ownership cost and complexity) and provides key cloud-computing benefits like auto-scaling, cost optimization and pay-as-you-go pricing. 

![Cloud-native foundational pillars](https://learn.microsoft.com/dotnet/architecture/cloud-native/media/cloud-native-foundational-pillars.png)

The figure shows the key pillars of a cloud-native solution. These are designed to maximize agility and minimize disruption in deployed solutions. Now, a tightly-coupled backend (_monolith_) can be replaced by a distributed system (_microservices_) built with independent, loosely-coupled components that deliver the same functionality - but have more flexibility for scaling and adaptation as shown below.

![Monolithic vs. Microservices Architecture](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/media/monolithic-vs-microservices.png)

Other more specialized design patterns can be built on top of cloud-native foundations. In this case, we need an architecture that is adaptive not just on the backend, but also on the front-end - allowing different teams to own & develop different segments of the end-to-end user experience, based on domain expertise. 

For example: We want to have teams work _independently_ on implementing blog, portal, and payments UI/UX - and have them connect to a shared infrastructure (backend) to deliver the consistent end-to-end application experience. **This requires a composable enterprise architecture pattern** that works on full-stack applications.