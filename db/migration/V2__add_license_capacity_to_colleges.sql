-- V2: track licence capacity per college (safe change: default keeps existing rows valid)
ALTER TABLE colleges
    ADD COLUMN license_capacity INTEGER NOT NULL DEFAULT 0
    CHECK (license_capacity >= 0);

-- speeds up "how many ACTIVE sessions does this college have?"
CREATE INDEX idx_tool_sessions_status ON tool_sessions(status);
