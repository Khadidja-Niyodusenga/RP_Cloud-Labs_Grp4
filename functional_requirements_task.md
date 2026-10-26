# Functional Requirements for RP-Cloud Labs

**Task:** Functional Requirements Specification

## Overview

Functional requirements define the specific behaviors, features, functions, and services that the **RP-Cloud Labs** system must perform. They detail what the system should do to allow students, lecturers, and system administrators to fulfill their practical lab activities effectively.

## 1. User Authentication and Access Control (FR-1)

* **FR-1.1 Single Sign-On (SSO):** The system shall allow users (Students, Lecturers, and Admins) to log in using their institutional RP email credentials.

* **FR-1.2 Role-Based Access Control (RBAC):** The platform shall restrict access based on user roles:

  * **Students:** View assigned labs, launch lab virtual environments, and submit lab work.

  * **Lecturers:** Create labs, upload instructions, assign labs to student cohorts, and grade submissions.

  * **Administrators:** Manage user accounts, configure cloud resources, and monitor overall system health.

* **FR-1.3 Password Recovery:** The system shall provide a secure self-service password reset mechanism via email validation.

## 2. Lab & Environment Management (FR-2)

* **FR-2.1 Lab Creation:** Lecturers shall be able to create new practical lab modules, attach instruction guides (PDF/Markdown), set deadlines, and assign resource quotas.

* **FR-2.2 Automated Provisioning:** The platform shall automatically spin up and configure virtual machine (VM) or containerized lab environments when a student launches a session.

* **FR-2.3 Session Timer & Auto-Save:** The system shall display a session timer for timed labs and automatically save student progress state periodically.

* **FR-2.4 Session Reset:** Students shall have the ability to reset their lab environment back to its initial default state if needed.

## 3. Student Submission and Automated Assessment (FR-3)

* **FR-3.1 Lab Submission:** Students shall be able to submit completed lab outputs, code files, or terminal command logs directly through the platform interface.

* **FR-3.2 Automated Grading:** The system shall execute pre-configured test scripts to evaluate student lab outputs automatically and generate immediate score feedback.

* **FR-3.3 Manual Grading & Feedback:** Lecturers shall have an interface to review automated scores, adjust marks manually, and leave written feedback for students.

## 4. Monitoring & Analytics (FR-4)

* **FR-4.1 Student Progress Dashboard:** Students shall have a personal dashboard showing completed labs, pending deadlines, and scores earned.

* **FR-4.2 Instructor Analytics:** Lecturers shall be able to view overall class submission rates, score distributions, and time spent on labs by each student.

* **FR-4.3 Resource Utilization Monitoring:** Administrators shall receive alerts when cloud infrastructure resources (RAM, CPU, storage) exceed defined capacity thresholds.

## Summary Matrix

| Requirement ID | Module Name | Target User | Priority | 
| ----- | ----- | ----- | ----- | 
| **FR-1** | Authentication & RBAC | All Users | High | 
| **FR-2** | Lab Provisioning & Execution | Students / Lecturers | High | 
| **FR-3** | Submission & Assessment | Students / Lecturers | High | 
| **FR-4** | Analytics & Monitoring | Lecturers / Admins | Medium | 
