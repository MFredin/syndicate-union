"use client";

import * as React from "react";
import { SearchBar } from "@/components/common/search-bar";
import { ProfileCard } from "@/components/common/profile-card";
import { EmptyState } from "@/components/common/empty-state";
import type { Member } from "@/data/members";
import type { Department } from "@/data/departments";
import type { Badge } from "@/data/badges";
import { formatDate } from "@/lib/utils";

const selectClass =
  "h-9 rounded-md border border-input bg-background px-3 text-sm";

interface MembersExplorerProps {
  members: Member[];
  departments: Department[];
  badges: Badge[];
}

export function MembersExplorer({ members, departments: allDepartments, badges: allBadges }: MembersExplorerProps) {
  const [query, setQuery] = React.useState("");
  const [department, setDepartment] = React.useState("All");
  const [role, setRole] = React.useState("All");

  const departments = ["All", ...Array.from(new Set(members.map((m) => m.department)))];
  const roles = ["All", ...Array.from(new Set(members.map((m) => m.role)))].sort();

  const filtered = members.filter((m) => {
    const matchesDept = department === "All" || m.department === department;
    const matchesRole = role === "All" || m.role === role;
    const matchesQuery =
      query.trim() === "" ||
      m.callsign.toLowerCase().includes(query.toLowerCase()) ||
      m.role.toLowerCase().includes(query.toLowerCase());
    return matchesDept && matchesRole && matchesQuery;
  });

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar value={query} onChange={setQuery} placeholder="Search by callsign or role..." className="max-w-sm" />
        <div className="flex flex-wrap gap-3">
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            aria-label="Filter by department"
            className={selectClass}
          >
            {departments.map((d) => (
              <option key={d} value={d}>
                {d === "All" ? "All Departments" : d}
              </option>
            ))}
          </select>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            aria-label="Filter by role"
            className={selectClass}
          >
            {roles.map((r) => (
              <option key={r} value={r}>
                {r === "All" ? "All Roles" : r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Showing {filtered.length} of {members.length} Unionists
      </p>

      <div className="mt-4">
        {filtered.length === 0 ? (
          <EmptyState title="No members found" description="Try a different search term or department." />
        ) : (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {filtered.map((m) => {
              const dept = allDepartments.find((d) => d.name === m.department);
              const resolvedBadges = m.badges
                .map((id) => allBadges.find((b) => b.id === id))
                .filter((b): b is Badge => Boolean(b));
              return (
                <ProfileCard
                  key={m.id}
                  seed={m.id}
                  name={m.callsign}
                  role={m.role}
                  department={m.department}
                  departmentIcon={dept?.icon}
                  badges={resolvedBadges}
                  meta={`Joined ${formatDate(m.joined, { month: "short", year: "numeric" })}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
