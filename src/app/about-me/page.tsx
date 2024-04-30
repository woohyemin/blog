"use client";

import { Tab } from "@/components/atoms/Tab";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";

export default function AboutMe() {
  return (
    <TemplateLayout size="medium">
      <main>
        <p>About Me Page</p>
        <Tab label="About Me Page" size="large" />
      </main>
    </TemplateLayout>
  );
}
