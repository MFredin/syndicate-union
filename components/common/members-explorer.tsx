"use client";

import * as React from "react";
import { SearchBar } from "@/components/common/search-bar";
import { ProfileCard } from "@/components/common/profile-card";
import { EmptyState } from "@/components/common/empty-state";
import { cn } from "@/lib/utils";
import type { Member } from "@/data/members";
import { formatDate } from "@/lib/utils";

export function MembersExplorer({ members }: { members: Member[] }) {
  const [query, setQuery] = React.useState("");
  const [department, setDepartment] = React.useState("All");

  const departments = ["All", ...Array.from(new Set(members.map((m) => m.department)))];

  const filtered = members.filter((m) => {
    const matchesDept = department === "All" || m.department === department;
    const matchesQuery =
      query.trim() === "" ||
      m.callsign.toLowerCase().includes(query.toLowerCase()) ||
      m.role.toLowerCase().includes(query.toLowerCase());
    return matchesDept && matchesQuery;
  });

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar value={query} onChange={setQuery} placeholder="Search by callsign or role..." className="max-w-sm" />
        <div className="flex flex-wrap gap-2">
          {departments.map((d) => (
            <button
              key={d}
              onClick={() => setDepartment(d)}
              className={cn(
                "rounded-sm px-3 py-1.5 text-xs font-medium transition-colors",
                department === d ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/70"
              )}
            >
              {d}
            </button>
          ))}
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
            {filtered.map((m) => (
              <ProfileCard
                key={m.id}
                seed={m.id}
                name={m.callsign}
                role={m.role}
                department={m.department}
                badgeIds={m.badges}
                meta={`Joined ${formatDate(m.joined, { month: "short", year: "numeric" })}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
