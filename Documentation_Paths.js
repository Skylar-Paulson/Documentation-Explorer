/*
    Documentation file paths for the Documentation Explorer.

    If the documentation file has a fallback url, it must include the connector script in its source in order
    to detect when loading fails and should have hasConnector: true in the table of contents below.

    Any documentation files without the connector and hasConnector: true will not support fallback urls or 
    document outline generation.
*/
const tableOfContents = [
    {
        title: "Documentation Explorer (Home)",
        url: "home",
        id: "home",
        classList: ["visible-in-docs", "hidden"],
        hasConnector: false
    },

    // General
    {
        title: "General",
        open: true,
        children: [
            // Markdown Guide
            {
                format: "<b>[Guide]</b> <a href='#' onclick='{loadThis}'>{title}</a>",
                title: "Markdown",
                url: "DOCUMENTATION_HELP_GUIDES/Markdown/Markdown_Quickstart_Guide.html",
                id: "MarkdownGuide",
                hasConnector: true
            },

            // Documentation Guide
            {
                format: "<b>[Guide]</b> <a href='#' onclick='{loadThis}'>{title}</a>",
                title: "Creating Documentation",
                url: "DOCUMENTATION_HELP_GUIDES/Documentation_Setup/Documentation_Setup_Guide.html",
                id: "DocumentationSetupGuide",
                hasConnector: true
            }
        ]
    },

    // Applications
    {
        title: "Applications",
        children: [
            // Example App 1
            {
                title: `Example App 1 (<a href='#' onclick='loadById("ExampleApp1")'>Guide</a>)`,
                open: true,
                children: [
                    // Guides
                    {
                        format: "<b>[Guide]</b> <a href='#' onclick='{loadThis}'>{title}</a>",
                        title: "Example App 1",
                        url: "ExampleApp1/ExampleApp1.html",
                        id: "ExampleApp1",
                        hasConnector: true
                    },

                    // Specifications
                    {
                        format: "<b>[Specification]</b> <a href='#' onclick='{loadThis}'>{title}</a>",
                        title: "Example Spec 1",
                        url: "ExampleApp1/SPEC_DOCS/ExampleSpec1/ExampleSpec1.html",
                        id: "ExampleApp1_ExampleSpec1",
                        hasConnector: true
                    },

                    {
                        format: "<b>[Specification]</b> <a href='#' onclick='{loadThis}'>{title}</a>",
                        title: "Example Spec 2",
                        url: "ExampleApp1/SPEC_DOCS/ExampleSpec2/ExampleSpec2.html",
                        id: "ExampleApp1_ExampleSpec2",
                        hasConnector: true
                    }
                ]
            },

            // Example App 2
            {
                title: `Example App 2 (<a href='#' onclick='loadById("ExampleApp2")'>Guide</a>)`,
                open: true,
                children: [
                    // Guides
                    {
                        format: "<b>[Guide]</b> <a href='#' onclick='{loadThis}'>{title}</a>",
                        title: "Example App 2",
                        url: "ExampleApp2/ExampleApp2.html",
                        id: "ExampleApp2",
                        hasConnector: true
                    }
                ]
            },
        ]
    }
];