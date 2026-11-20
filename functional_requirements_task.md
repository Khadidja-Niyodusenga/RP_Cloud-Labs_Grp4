# SRS Requirements Review and Revision Record

**Student:** Mukwiye Boris  
**Activity:** Requirements Review / SRS Peer Review  
**Repository:** GitHub  
*
## 1. Review Method

The requirements-review technique used was **Peer Review (Requirements Inspection)**.

In this technique, members of another group examine the Software Requirements Specification (SRS) to identify unclear, incomplete, inconsistent, ambiguous, or unverifiable requirements. The reviewers provide comments, and the authors use the feedback to improve the SRS before final submission.

---

## 2. Review Comments on the Other Group's SRS

### Comment 1 – Ambiguous Functional Requirements

**Issue:** Some functional requirements were written using general statements such as “the system should manage users” without clearly explaining what the system must allow users to do.

**Why this is a problem:**  
The requirement is difficult to understand and test because “manage users” can mean different things, such as creating, updating, deleting, activating, or disabling accounts.

**Suggested improvement:**  
Break the requirement into specific actions, for example:

> The system shall allow an administrator to create, update, deactivate, and view user accounts.

---

### Comment 2 – Missing Acceptance/Test Criteria

**Issue:** Several requirements did not include enough information to determine whether the requirement had been successfully implemented.

**Why this is a problem:**  
A requirement should be verifiable. Without clear conditions or expected results, developers and testers may interpret the requirement differently.

**Suggested improvement:**  
Add measurable acceptance criteria to important functional and non-functional requirements.

Example:

> The system shall display a successful login message within 3 seconds when valid credentials are provided.

---

### Comment 3 – Incomplete Non-Functional Requirements

**Issue:** The SRS mentioned performance and security as important qualities but did not define measurable targets.

**Why this is a problem:**  
Statements such as “the system should be fast and secure” are subjective and cannot easily be tested.

**Suggested improvement:**  
Use measurable requirements, such as:

> The system shall respond to normal user requests within 3 seconds under the expected user load.

and:

> The system shall require authenticated users to log in before accessing protected system functions.

---

### Comment 4 – Missing or Unclear Actors

**Issue:** Some system functions were described without clearly identifying which actor is responsible for performing them.

**Why this is a problem:**  
Unclear actors can cause confusion when developing use-case diagrams, assigning permissions, and implementing system functionality.

**Suggested improvement:**  
Each major system function should identify the responsible actor, such as Administrator, User, Lecturer, or System Administrator, depending on the project.

---

## 3. Feedback Received on Our SRS

After our SRS was reviewed by another group, we received the following feedback:

1. Some requirements needed to be written more clearly and specifically instead of using broad descriptions.
2. Some functional requirements needed clearer acceptance criteria so that they could be tested.
3. The non-functional requirements needed more measurable performance and security conditions.
4. Some requirements needed clearer identification of the actor responsible for each system function.
5. The SRS needed more consistency in the wording of requirements, particularly by using a standard format such as **“The system shall...”**.

These comments were useful because they helped us identify areas where our requirements could be interpreted differently by developers, testers, or other stakeholders.

---

## 4. Revision Record

| No. | Feedback Received | Change Made to Our SRS | Reason |
|---|---|---|---|
| 1 | Requirements were sometimes too broad. | Rewritten broad requirements into specific and actionable statements. | To reduce ambiguity and make requirements easier to implement. |
| 2 | Acceptance criteria were not clear for some requirements. | Added measurable conditions and expected outcomes to important requirements. | To make requirements verifiable and testable. |
| 3 | Non-functional requirements were not measurable enough. | Added specific performance, security, usability, and reliability expectations. | To make quality requirements objectively assessable. |
| 4 | Some actors were unclear. | Identified the responsible actor for each major system function. | To clarify responsibilities and support use-case development. |
| 5 | Requirement wording was inconsistent. | Standardized important requirements using the “The system shall...” format. | To improve consistency and professionalism of the SRS. |

---

## 5. Summary

The peer review helped us improve the quality of our Software Requirements Specification by identifying ambiguity, missing verification criteria, unclear actors, and weakly defined non-functional requirements.

The review also demonstrated the importance of collaboration in requirements engineering. Feedback from another group provided an independent perspective and helped us revise the SRS before further system design and development.

### Final Outcome

After applying the feedback, our SRS was revised to make the requirements:

- **Clearer**
- **More specific**
- **Measurable**
- **Testable**
- **Consistent**
- **Easier for developers and stakeholders to understand**

