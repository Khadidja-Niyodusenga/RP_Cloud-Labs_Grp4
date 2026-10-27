# Mini System Requirements Specification (SRS)

## 1. Introduction

### 1.1 Purpose

This Mini System Requirements Specification (SRS) document provides a concise overview of the **RP-Cloud Labs** platform. It outlines the scope, overall system description, primary functional areas, non-functional expectations, and system interfaces required to support virtualized practical learning at Rwanda Coding Academy / RP institutions.

### 1.2 Scope

RP-Cloud Labs is a web-based, cloud-hosted learning environment designed to provision, monitor, and assess computer science and networking practical lab sessions for students and instructors.

## 2. Overall Description

### 2.1 Product Perspective

RP-Cloud Labs operates as a web-based portal integrated with underlying cloud infrastructure (VM containers / Kubernetes) and institutional single sign-on (SSO) systems.

```
+-------------------------------------------------------------+
|                     RP-Cloud Labs Portal                    |
+------------------------------+------------------------------+
                               |
       +-----------------------+-----------------------+
       |                                               |
+------v----------------------+             +----------v----------+
|  User Authentication & SSO  |             | Infrastructure (VMs)|
+-----------------------------+             +---------------------+

```

### 2.2 User Classes and Characteristics

* **Students:** Access lab tasks, interact with terminal/GUI lab environments, and submit solutions.

* **Lecturers:** Author lab content, set automated grading criteria, monitor progress, and review submissions.

* **System Administrators:** Manage node clusters, configure resource limits, and maintain system availability.

## 3. Key System Features

### 3.1 Lab Environment Provisioning

* The system shall provision isolated virtual lab instances on demand when requested by a registered student.

* Environments shall reset cleanly upon explicit user command or session expiration.

### 3.2 Automated Assessment Engine

* The system shall run
