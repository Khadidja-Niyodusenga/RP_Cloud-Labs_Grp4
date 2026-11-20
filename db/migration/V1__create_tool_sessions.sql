-- V1: core tables for the Tool-Session Service
CREATE TABLE colleges (
    id                BIGSERIAL PRIMARY KEY,
    code              VARCHAR(20)  NOT NULL UNIQUE,
    name              VARCHAR(150) NOT NULL,
    parent_college_id BIGINT REFERENCES colleges(id),   -- NULL = own tenant, set = subsidiary
    created_at        TIMESTAMPTZ  NOT NULL DEFAULT now()
);

CREATE TABLE students (
    id          BIGSERIAL PRIMARY KEY,
    college_id  BIGINT       NOT NULL REFERENCES colleges(id),
    reg_number  VARCHAR(20)  NOT NULL UNIQUE,
    full_name   VARCHAR(150) NOT NULL,
    email       VARCHAR(150) NOT NULL UNIQUE,
    is_verified BOOLEAN      NOT NULL DEFAULT FALSE,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT now()
);

CREATE TABLE tools (
    id   BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE      -- e.g. 'Cloud IDE', 'ArchiCAD'
);

CREATE TABLE tool_sessions (
    id           BIGSERIAL PRIMARY KEY,
    student_id   BIGINT      NOT NULL REFERENCES students(id),
    tool_id      BIGINT      NOT NULL REFERENCES tools(id),
    status       VARCHAR(20) NOT NULL DEFAULT 'REQUESTED'
                 CHECK (status IN ('REQUESTED','ACTIVE','ENDED','REJECTED')),
    requested_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    started_at   TIMESTAMPTZ,
    ended_at     TIMESTAMPTZ
);

CREATE INDEX idx_tool_sessions_student ON tool_sessions(student_id);
