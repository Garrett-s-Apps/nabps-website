"use client";

import { Container } from "@/components/ui/container";
import { vendors, allStates, certificationLevels } from "@/lib/data/vendors";
import Link from "next/link";
import { useState } from "react";

export default function MembersPage() {
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

  const filteredVendors = vendors.filter((vendor) => {
    const stateMatch =
      selectedStates.length === 0 ||
      selectedStates.some((state) => vendor.statesServed.includes(state));
    const levelMatch =
      selectedLevels.length === 0 || selectedLevels.includes(vendor.certificationLevel);
    return stateMatch && levelMatch;
  });

  const toggleState = (state: string) => {
    setSelectedStates((prev) =>
      prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state]
    );
  };

  const toggleLevel = (level: string) => {
    setSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const clearFilters = () => {
    setSelectedStates([]);
    setSelectedLevels([]);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-cyan/5 to-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-key sm:text-5xl">
              Certified Vendor Directory
            </h1>
            <p className="mt-6 text-lg text-key/80">
              Find NABPS-certified ballot printing companies in your region
            </p>
          </div>
        </Container>
      </section>

      {/* Directory */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-4 rounded-lg border border-key/10 bg-white p-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-key">Filters</h2>
                  {(selectedStates.length > 0 || selectedLevels.length > 0) && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-cyan hover:text-cyan-600"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {/* Certification Level Filter */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-key">Certification Level</h3>
                  <div className="mt-3 space-y-2">
                    {certificationLevels.map((level) => (
                      <label key={level.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedLevels.includes(level.value)}
                          onChange={() => toggleLevel(level.value)}
                          className="h-4 w-4 rounded border-key/30 text-cyan focus:ring-cyan"
                        />
                        <span className="text-sm text-key/80">
                          {level.emoji} {level.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* State Filter */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-key">States Served</h3>
                  <div className="mt-3 max-h-96 overflow-y-auto space-y-2">
                    {allStates.map((state) => (
                      <label key={state} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedStates.includes(state)}
                          onChange={() => toggleState(state)}
                          className="h-4 w-4 rounded border-key/30 text-cyan focus:ring-cyan"
                        />
                        <span className="text-sm text-key/80">{state}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Vendor Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-key/70">
                  Showing {filteredVendors.length} of {vendors.length} certified vendors
                </p>
              </div>

              {filteredVendors.length === 0 ? (
                <div className="rounded-lg border border-key/10 bg-gray-50 p-12 text-center">
                  <p className="text-lg text-key/70">No vendors match your filters</p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-sm font-semibold text-cyan hover:text-cyan-600"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {filteredVendors.map((vendor) => (
                    <Link
                      key={vendor.id}
                      href={`/members/${vendor.slug}`}
                      className="group rounded-lg border border-key/10 bg-white p-6 transition-all hover:border-cyan hover:shadow-lg"
                    >
                      {/* Logo Placeholder */}
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-cyan/10 text-2xl font-bold text-cyan">
                        {vendor.name.charAt(0)}
                      </div>

                      <h3 className="mt-4 text-lg font-semibold text-key group-hover:text-cyan">
                        {vendor.name}
                      </h3>

                      {/* Certification Badge */}
                      <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-cyan/10 px-3 py-1 text-sm font-medium text-cyan">
                        {certificationLevels.find((l) => l.value === vendor.certificationLevel)?.emoji}{" "}
                        {vendor.certificationLevel.charAt(0).toUpperCase() + vendor.certificationLevel.slice(1)}
                      </div>

                      <p className="mt-3 text-sm text-key/70">
                        <span className="font-medium">Headquarters:</span> {vendor.headquarters}
                      </p>

                      <p className="mt-2 text-sm text-key/70">
                        <span className="font-medium">States Served:</span>{" "}
                        {vendor.statesServed.slice(0, 3).join(", ")}
                        {vendor.statesServed.length > 3 && ` +${vendor.statesServed.length - 3} more`}
                      </p>

                      <p className="mt-4 text-sm text-cyan font-medium group-hover:underline">
                        View Profile →
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
