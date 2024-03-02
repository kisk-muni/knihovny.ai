"use client";
import DashboardTodosList from "@/components/dashboard-todos-list";
import DashboardHeader from "@/components/ui/dashboard-header";
import HorizontalFilter from "@/components/ui/horizontal-filter";
import { Suspense, useState } from "react";
import { type Selection } from "react-aria-components";

export default function TodosPage() {
  let [selectedStateFilter, setSelectedStateFilter] = useState<Selection>(
    new Set([])
  );
  let [selectedDisplayMode, setSelectedDisplayMode] = useState<Selection>(
    new Set(["kanban"])
  );
  const stateFilterItems = [
    { id: "not-started", label: "Nezačaté" },
    { id: "in-progress", label: "Probíhající" },
    { id: "review", label: "Čekající na schválení" },
    { id: "done", label: "Dokončené" },
  ];
  const displayFilterItems = [
    { id: "list", label: "Seznam" },
    { id: "kanban", label: "Kanban" },
  ];
  const displayMode =
    selectedDisplayMode === "all"
      ? "kanban"
      : selectedDisplayMode.entries().next().value[0];
  return (
    <>
      <div className="text-text">
        <DashboardHeader className="justify-between">
          <HorizontalFilter
            aria-label="Filtr stavu"
            selectedKeys={selectedStateFilter}
            onSelectionChange={setSelectedStateFilter}
            selectionMode="multiple"
            items={stateFilterItems}
          />
          <HorizontalFilter
            aria-label="Filtr stavu"
            selectedKeys={selectedDisplayMode}
            onSelectionChange={setSelectedDisplayMode}
            selectionMode="single"
            items={displayFilterItems}
          />
        </DashboardHeader>
        <Suspense fallback={<div>Loading...</div>}>
          <DashboardTodosList
            displayMode={displayMode}
            selectedStates={selectedStateFilter}
          />
        </Suspense>
      </div>
    </>
  );
}
