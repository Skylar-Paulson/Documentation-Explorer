---
Title: Documentation Setup - Guide
Author: Skylar Paulson (spaulson@adworthy.com)
Version: 1.0.0
---

<hidden id="top">
<script type="text/javascript" src="../../Connector.js"></script>
<script type="text/javascript">
  function navigate(docId, fallback) {
    if (connector) {
      connector.loadDoc(docId);
    } else if (fallback) {
      location.href = fallback;
    }
  }
</script>

---

<!-- Document Start -->
#### Documentation Setup Guide

---

### Contents

- [Contents](#contents)
- [Introduction](#introduction)
- [Folder Structure](#folder-structure)
- [Writing Documentation Files](#writing-documentation-files)
- [Updating the Documentation Explorer](#updating-the-documentation-explorer)
  - [Connector.js](#connectorjs)

---

### Introduction

This guide outline general guidelines and information needed to produce functional documentation, including the generation of source documentation files and general folder structure and naming rules to minimize potential headaches. 

---

[Back to top](#top)

---

### Folder Structure

Before you can write any documents, it's important to determine an appropriate folder structure to house the files you'll be creating. 

Here's a few simple rules to follow when creating folders for documentation:

1. Folder names should represent what's contained within them.
   - Avoid unclear names that would make it harder to understand the purpose of the folder. 
   - Typically, the base folder should be the name of the application the documentation is for, or represent some sort of category for its contents. 
1. Folder names should be alphanumeric and should not contain spaces.
   - Folder names with spaces will be harder to deal with in future steps and may result in unclear final paths, while making them harder to access via URL/path. 
   - While the file system may support special characters, URLs do not. Similar to spaces, special characters in document paths may cause unexpected final paths that complicate things unnecessarily.
   - Underscores (_) are fine, however they should not appear at the start of the folder's name. 
     - For example: `DOCUMENT_FOLDER` is fine, while `__DOCUMENT_FOLDER` is not.
     - This restriction primarily a result of complications with GitHub pages and likely other docs-to-website generators. 
1. Avoid deep nesting.
   - While this one isn't a technical limitation, nesting files in a complicated tree of parent folders can result in wasted time when trying to find specific needed files. 
1. Any folders or subfolders that should be accessible via GitHub pages (or similar website generators/documentation hosting solutions) should include either an `index.md` or `index.html` file. 
   - Any folder not containing one of these files will be ignored. This also means any subfolders within that folder will not be indexed, resulting in unreachable directories.
   - The contents of these files is largely unimportant, but in the case of GitHub Pages any `index.md` file must contain a yaml section at the start of the document with basic information like title and author. To simplify things, you can just copy the index.md file that is in the same directory as this document, or find it in any of the other document directories. Alternatively, you can find its contents [at the end of this section](#index-md-code) to simply copy and paste.
   - If you would instead like to use your documentation files as the page index, thus eliminating the need for the placeholder index file and allowing the page to be loaded without navigating to the specific `.html` file, you can simply name your documentation's html file `index.html` and it should work fine. Just remember to use the correct path when updating the [Documentation Explorer Table of Contents](#updating-the-documentation-explorer).

<hidden id="index-md-code">
> index.md

```markdown
---
title: Placeholder Index
author: Skylar Paulson (spaulson@adworthy.com)
---

---

# Intentionally blank page required for subfolders

Placeholder index used to ensure subfolders are correctly indexed.

---

```

You can refer to existing folders for examples. 

---

[Back to top](#top)

---

### Writing Documentation Files

The easiest approach to writing documentation files without needing to worry as much about aesthetics is to use Markdown. Markdown allows us to write plain text documents that can be reasonably read and understood without any other processing. Markdown files can also be converted to HTML with theming and formatting applied automatically by the Markdown parser used to produce the HTML. This allows us to only worry about writing good documentation without needing to worry about how the result will look later. To learn more about Markdown, as well as the tools used to produce the existing Markdown files and convert them to HTML, please refer to the provided <a href="#" onclick='navigate("MarkdownGuide", "../Markdown/Markdown_Quickstart_Guide.html")'>Markdown Guide</a>.


If you want to generate source documentation to accompany your application documentation, it is recommended to use [Doxygen](https://www.doxygen.nl/index.html).

Doxygen allows you to easily generate source documentation with and easy to use html-based browsing interface that can be included with your application documentation. 

An example Doxygen configuration file is included with this document. The settings configured within it are the same that were used to generate existing source documentation files. You can find it [here](Example_Doxygen).

After generating your source html files, make sure to add a placeholder index file to each generated folder and subfolder that does not already contain an `index.html`. Failing to do this will result in the generated folders not being indexed and therefore being inaccessible via browser. Refer to [Folder Structure](#folder-structure) for more information.

---

[Back to top](#top)

---

### Updating the Documentation Explorer

After you've created your folder structure and written your documentation files, it's time to update the Documentation Explorer's Table of Contents so your documentation is discoverable and can be viewed in a web browser. 

You will need to update the `Documentation_Paths.js` file located in the root folder of the documentation repository. This file is loaded by the Documentation Explorer and acts as a table of contents that informs it of where documents are and how they should be listed. 

Upon opening the file, you will be greeted with something similar to the following:

```javascript
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
```

Within this document, you can see there are categories (for example, `Applications`) and documents nested within them. While documents do not need to be nested, categorizing them like this makes it easier to find them quickly in related to related items. The potential structure of categories and documents is identical: if we wanted to, we could have further documents nested within existing document entries, however doing this would potentially lead to confusion and accidental navigation when attempting to collapse or expand categories, and so should typically be avoided. 

As you can see, defining new entries is fairly straight forward. 

Below is a list of possible entry properties:
- `title`
  - This is the title of the section/document.
- `format`
  - This is an optional property that if provided allows us to define custom html for the entry's `title`. 
  - If this is not provided, the title will display as the value of `title` and if `url` is set the entire entry text will become a link. This allows us to fine tune that behavior, such as adding smaller clickable link within the title rather than turning the entire title into a link.
  - `format` supports replacing certain placeholder values at runtime.
    - `loadThis`
      - Gets replaced with a function call that loads the current document/url in the same way it would when it is instead loaded as a link. This allows us to setup custom links/buttons rather than performing this action the moment the entire entry is clicked (the default behavior, unless no `url` is provided.)
    - Any entry property can be embedded in the `format` string as a placeholder value surrounded by double curly brackets. For example, `{{title}}` would be replaced with the value of the `title` property for this entry.
- `open`
  - This is a boolean value indicating whether or not this category is open by default.
  - If true, and if this entry has children, the entry's children will be shown by default.
  - If false, children will be hidden by default and the entry must be expanded by the user to view them. 
  - This is useful for situations where one entry/category has potentially a lot of sub-entries.
- `url`
  - This is the path to the documentation file or a url to whatever the entry should link to. 
  - If this is not set, the entry will not become a clickable link unless some sort of special handling is done using `format`. 
- `id`
  - This is a unique identifier for the entry and what it represents. 
  - When loading documentation pages, they are typically loaded using their `id` which serves to identify the entry that contains their associated information.
  - This should be unique! If more than one entry share the same `id` value, unintended behavior may occur. 
- `children`
  - This is a list of sub-entry that will appear as a nested, collapsible, list under their parent entry in the Documentation Explorer. 
  - Child entries have all of the same properties and abilities as normal entries. The only difference is they will appear as being nested under their parent. Other than that, there are no functional differences between child and parent entries.
- `hasConnector`
  - This is a boolean value indicating whether or not a documentation file uses the documentation connector (`Connector.js` in the root of the documentation repository.)
  - If the file does not reference `Connector.js`, it will not be able to communicate with the Documentation Explorer and thus functionality like the document outline and certain navigation abilities will be disabled.
  - If this is set to true, but the file does not reference `Connector.js`, an error will be displayed and it may cause the document's page to fail to load. Refer to the section [Connector.js](#connectorjs) below for more information.

#### Connector.js

`Connector.js` is a simple JavaScript file responsible for communication between the document (child) and Documentation Explorer (parent) through the iFrame the document is loaded in. Normally, depending on the environment, direct access to iFrame contents by the parent are blocked by browser cross-site security policies. To bypass this restriction, the Documentation Explorer uses browser broadcast messages to facilitate communication. `Connector.js` provides a simple interface that can be used to handle these browser messages and exchange data or commands. 

For documents to use this functionality, they simply need to include a script element that loads `Connector.js` from the documentation repository's root files. The actual path will vary depending on how deeply the documentation file is nested, however generally the below with minor tweaking is sufficient to load the connector without any additional required work:

```javascript
<script type="text/javascript" src="../Connector.js"></script>
```

Of course, you'll need to adjust the path according to how deeply your file is nested, adding or removing `../`s to the path based on the number of folders between your file and the `Connector.js` file.

---

[Back to top](#top)

---

This concludes this short guide. If there's any confusion, refer to existing documentation files for examples of anything mentioned above. 

When viewing analyzing existing documentation files—especially when looking for examples—be sure to check the Markdown (`.md`) version of the file and not the HTML (`.html`) version as the HTML version will likely be harder to read and include mostly auto-generated content and reformatting that will obscure a lot of the original file's formatting and plaintext readability.

---

<!-- End of Document -->

<!-- CSS Styles -->
<!-- End of Styles -->
