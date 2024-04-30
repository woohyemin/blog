"use client";

import { Tab } from "@/components/atoms/Tab";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";

export default function Projects() {
  return (
    <TemplateLayout size="medium">
      <main>
        <p>Projects Page</p>
        <Tab label="Projects Page" size="large" />
      </main>
    </TemplateLayout>
  );
}
