// this barrel file is used to export all UI components for importing later in the dynamic route
// files for MDX, so that I don't need to import components inside content files one by one.
// Might introduce memory load during build, but it should be negligible regarding the size
// of my components.

export { default as Adm } from "@components/mdx/Adm.astro"; // Admonitions
export { default as Refs } from "@components/mdx/Refs.astro"; // References container for SourceLink
export { default as SourceLink } from "@components/mdx/SourceLink.astro"; // SourceLink, for linking outside
