# FURPS+ Requirements Specification for RP-Cloud Labs

**Task:** Non-Functional & System Quality Requirements (FURPS+ Model)

## Overview

The **FURPS+** model provides a structured framework to categorize quality attributes and constraints for the **RP-Cloud Labs** system, complementing the functional specifications.

## 1. Functionality (F)

* **F-1 Security & Data Protection:** The system shall encrypt all student lab data in transit (TLS 1.3) and at rest (AES-256).

* **F-2 Audit Logging:** The system shall maintain immutable activity logs capturing user logins, lab launches, command executions, and grading attempts for security audits.

* **F-3 Data Backup & Recovery:** Automatic daily database backups shall be executed to prevent loss of student submissions and instructor rubrics.

## 2. Usability (U)

* **U-1 User Interface Consistency:** The web portal shall follow responsive design principles, ensuring seamless usability across desktop monitors, laptops, and tablet devices.

* **U-2 Accessibility Compliance:** The portal interface shall comply with WCAG 2.1 Level AA standards, supporting screen readers and keyboard-only navigation.

* **U-3 Onboarding & Support:** The interface shall include built-in tooltips and interactive guided tours for first-time student users.

## 3. Reliability (R)

* **R-1 High Availability (SLA):** The platform shall maintain an overall operational uptime of **99.5%** during active academic semesters.

* **R-2 Fault Tolerance:** If a student's virtual machine instance crashes unexpectedly, the container orchestrator shall automatically recover the VM state within **30 seconds** without data loss.

* **R-3 Mean Time Between Failures (MTBF):** System critical failures shall not occur more than once every 1,000 operational hours.

## 4. Performance (P)

* **P-1 Response Time:** The web application shall render dashboard pages within **2.0 seconds** under normal load conditions.

* **P-2 Concurrency Support:** The infrastructure shall support up to **500 concurrent active lab sessions** across all campuses without degradation of performance.

* **P-3 VM Spin-up Latency:** Dedicated lab environments (VMs or containers) shall launch completely and be ready for user input in under **15 seconds** from execution.

## 5. Supportability (S) & Plus (+) Constraints

* **S-1 Modular Architecture:** The software shall be developed using a microservices architecture to allow independent deployment and maintenance of core services.

* **S-2 Internationalization & Localization:** The system UI shall support multi-language toggling (English and French).

* **+ Design Constraint:** The backend services must be containerized using Docker and orchestrated using Kubernetes.

* **+ Implementation Constraint:** All API communication between front-end and back-end modules must strictly adhere to RESTful specifications or gRPC.

* **+ Interface Constraint:** The platform must integrate seamlessly with the existing university Learning Management System (LMS) via LTI (Learning Tools Interoperability) standards.

## Summary Quality Attribute Matrix

| Category | Primary Metric / Focus Area | Target Benchmark | 
| ----- | ----- | ----- | 
| **Functionality** | Encryption & Audit Logging | TLS 1.3 / AES-256 Compliance | 
| **Usability** | Device Adaptability & Accessibility | WCAG 2.1 Level AA | 
| **Reliability** | Availability & Auto-Recovery | 99.5% Uptime / <30s Recovery | 
| **Performance** | Concurrent Sessions & VM Spin-up | 500 Sessions / <15s Launch | 
| **Supportability** | Architecture & Standards | Microservices / REST API | 
