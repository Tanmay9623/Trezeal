export const articles = [
  {
    slug: "javascript-foundations-practice-roadmap",
    category: "JAVASCRIPT",
    title: "A practical JavaScript foundations roadmap for beginners",
    description:
      "A project-led path through the JavaScript concepts that make everyday web interfaces work.",
    sections: [
      {
        heading: "Start with the browser and the language",
        paragraphs: [
          "JavaScript becomes easier to learn when you can connect a line of code to something visible. Begin with variables, primitive values, arrays, objects, comparisons, conditionals and loops. For each concept, write a tiny example and predict its output before running it. Then use the browser console to inspect the result. This habit builds a useful feedback loop: make a guess, test it, and explain what happened. It is more valuable than memorizing a long list of syntax rules without knowing when they matter.",
          "Learn to read errors as information. A syntax error points to code the parser could not understand; a runtime error usually means an operation did not work with the value it received. Read the message, find the relevant line, and inspect nearby values. Keep a small practice file where you reproduce the issue and test a fix. Being able to investigate a problem calmly is part of programming, not evidence that you are failing to learn.",
        ],
      },
      {
        heading: "Use functions and data structures to describe a task",
        paragraphs: [
          "Next, practise functions as named units of work. Give a function an input, return a result, and keep it responsible for one clear task. For example, a function can calculate a subtotal from a list of prices, while another can format that number for display. Separating these jobs makes each function easier to test and reuse. Learn the difference between returning a value and printing one: a returned result can be used by other code, whereas console output is primarily for inspection.",
          "Arrays and objects help model real information. An array can represent a collection of projects; each project object can hold a name, category and status. Practise map, filter and find using those collections, and explain what each operation returns. Add simple validation for missing or unexpected values. The goal is not to use every method immediately, but to select a structure that makes the data and the operation understandable to another person.",
        ],
      },
      {
        heading: "Connect the language to the page",
        paragraphs: [
          "Once the language basics feel familiar, use the Document Object Model to connect JavaScript with HTML. Select an element, update text or attributes, and respond to a button click. Keep the HTML meaningful and use JavaScript to add behavior rather than constructing an entire page as one unexplained string. Try a small task list: add an item, mark it complete, and remove it. Give controls descriptive labels and ensure that the page still makes sense when content changes.",
          "Events are messages about something that happened. A click handler, form submission, or keyboard event should call a function that performs a focused action. For forms, prevent the browser’s default submission only when you are intentionally handling the data yourself. Validate input, show a useful message, and avoid silently discarding user information. These details turn a demonstration into an interface that someone can actually use.",
        ],
      },
      {
        heading: "Learn asynchronous work with care",
        paragraphs: [
          "Modern websites often request data from another service. Learn promises and async/await by making a request to a public development endpoint or a local test fixture. Handle both success and failure, show a loading state while the request is pending, and display a clear error if it fails. A request can be slow, unavailable or return data in a shape you did not expect. Treat each of those outcomes as part of the feature rather than assuming every response will be perfect.",
          "Keep secrets out of browser code. Any value shipped to a user’s device can be inspected, so private API keys belong on a server or in an approved server-side environment. If a practice API requires a key, use a backend proxy or a safe mock instead of publishing credentials. This is a foundational security habit even for small learning projects.",
        ],
      },
      {
        heading: "Build, review and explain one small project",
        paragraphs: [
          "Choose a project with a few clear user actions, such as a study planner, expense list or simple searchable catalogue. Write down what the user can do before coding. Break the work into small steps: render the initial data, add one interaction, validate the input, handle an empty state and refine the layout. Commit changes to Git as you complete meaningful milestones. Small commits make it easier to understand what changed and to return to a working version if an experiment goes wrong.",
          "Before calling the project finished, test it with realistic and unusual inputs. What happens when the list is empty? What if a field contains only spaces? Can a user reach every control with a keyboard? Does an error explain what to do next? Add a README that describes the goal, setup, features and known limitations. A clear explanation of your decisions demonstrates understanding more effectively than a long feature list.",
        ],
      },
      {
        heading: "A steady learning routine beats rushed coverage",
        paragraphs: [
          "A practical routine could include a short concept lesson, a small exercise, and a weekly project review. Keep notes in your own words and include examples that you can run again. When you get stuck, reduce the problem to the smallest case that still reproduces it. Search documentation for the specific API you are using, then verify the answer in your own code. Avoid copying a large solution before you understand the inputs, output and assumptions.",
          "There is no single timeline that fits every learner. Your progress depends on previous experience, available time and the kind of work you want to do. Focus on being able to explain a concept, apply it in a small feature and debug a mistake. That foundation makes later topics—modules, browser storage, testing and frontend frameworks—much easier to approach with confidence.",
        ],
      },
    ],
  },
  {
    slug: "full-stack-portfolio-project-that-shows-your-thinking",
    category: "PORTFOLIO",
    title: "Build a full-stack portfolio project that shows your thinking",
    description:
      "Plan a manageable application that demonstrates decisions, reliability and communication—not just a screenshot.",
    sections: [
      {
        heading: "Choose a problem with a clear user",
        paragraphs: [
          "A strong portfolio project begins with a specific user and a small problem. Instead of building a broad platform for everyone, choose a scenario such as a club coordinator tracking event registrations or a freelancer organizing project enquiries. Write down who uses the application, what they need to accomplish and what the first useful version must include. A clear boundary helps you finish the work and gives a reviewer a simple way to understand why the product exists.",
          "Look for a problem that lets you demonstrate the skills you want to practise. If you are learning full-stack development, your project might need forms, persistent records, search and a simple permissions model. Avoid adding payments, chat, analytics and machine learning merely to make the feature list longer. Each additional feature creates design, testing and maintenance work. A smaller application that handles its core tasks well is more convincing than a collection of unfinished ideas.",
        ],
      },
      {
        heading: "Write down requirements before choosing tools",
        paragraphs: [
          "Create a short requirements note with user stories, data fields and acceptance criteria. For example: “As an organizer, I can see the registrations for an event,” followed by the fields an event needs and the rules for creating one. Record assumptions too: whether users need accounts, who can edit a record, and what should happen when a required value is missing. This makes later technical choices easier to explain and prevents the project from expanding without a reason.",
          "Choose tools you can support and describe. A familiar frontend, a small API and a straightforward database are usually enough for a learning product. Draw the request flow from browser to server to storage. Decide where validation happens, how errors return to the interface and what information should be logged. You do not need a complicated architecture to show sound judgment; you do need to understand the pieces you choose.",
        ],
      },
      {
        heading: "Treat data handling as part of the interface",
        paragraphs: [
          "A full-stack application should make its data lifecycle clear. Identify what is created, read, updated and deleted, and define the fields for each record. Validate data at the server boundary even if the browser also provides helpful checks. Browser validation improves the experience, but requests can be sent without using your interface. Return useful status codes and messages, and avoid returning internal stack traces or credentials to a user.",
          "Plan for empty, loading and error states as carefully as the successful view. A list with no records should explain how to add the first one. A slow request should give feedback rather than appear frozen. A failed save should preserve what the person typed when it is safe to do so and tell them whether retrying may help. These details demonstrate product thinking and make your project easier to test.",
        ],
      },
      {
        heading: "Build in small, reviewable milestones",
        paragraphs: [
          "Start with a working skeleton: project setup, one page, one route and a clear development command. Then connect a single end-to-end feature, such as creating and displaying one record. Verify the browser, API and database behavior before moving to the next feature. Use version control from the beginning, with commits that describe the work rather than vague messages such as “updates.” If you work alone, a clean history still helps you track decisions and recover from regressions.",
          "Add tests around rules that matter to the project. A form validator, permission check or data transformation is a good candidate because it has clear inputs and expected results. Manually test the complete user journey as well: create a record, edit it, refresh the page, and confirm the stored data remains correct. Keep a short checklist of what you tested and which cases are not covered yet.",
        ],
      },
      {
        heading: "Make the result accessible and dependable",
        paragraphs: [
          "Use semantic HTML, labels connected to form controls and buttons that describe their actions. Check keyboard navigation and visible focus. Ensure text and controls have sufficient contrast, and do not communicate status with color alone. Test a narrow screen as well as a desktop layout. Accessibility is not a decorative finishing step; it influences structure and interaction from the beginning.",
          "Keep configuration separate from source code. Use environment variables for local service addresses or public configuration that the build needs, and never commit passwords, tokens or private API keys. Provide an example environment file with placeholder names only. Include a setup guide, required runtime, database instructions and deployment notes so another person can run the project without guessing.",
        ],
      },
      {
        heading: "Present the work honestly",
        paragraphs: [
          "A project page should show the problem, your role, the main features, important decisions and known limitations. If the project is a learning exercise, say so. If you did not collect user feedback or measure performance, do not imply that you did. Add screenshots you created yourself, a short demonstration when useful, and a link to the source repository only if it is safe to share.",
          "Prepare to explain one technical decision and one trade-off. You might describe why you chose a particular data structure, how you handled a failed request, or what you would change with more time. Be ready to discuss what was difficult and how you investigated it. A thoughtful account of a modest project is often more useful in a conversation than claiming expertise across a large stack.",
        ],
      },
    ],
  },
  {
    slug: "fresher-interview-preparation-plan",
    category: "CAREER PREPARATION",
    title: "A practical interview-preparation plan for freshers",
    description:
      "Organize role research, technical practice, project explanations and mock interviews into repeatable preparation.",
    sections: [
      {
        heading: "Begin with the role, not a random question list",
        paragraphs: [
          "Interview preparation is more effective when it starts with the role you want. Read the job description and highlight the skills that appear repeatedly. Separate requirements into areas you can explain confidently, areas you have practised but need to revisit, and areas you have not used yet. This creates a realistic plan and helps you avoid spending all your time on topics that are unrelated to the position.",
          "Research the company using information it publishes itself. Learn what its product or service does, who it serves and what the role is expected to contribute. Prepare a few genuine questions about the team, responsibilities or onboarding. Do not memorize a script about the company; understand enough to explain why the role interests you and what you hope to learn or contribute.",
        ],
      },
      {
        heading: "Refresh fundamentals with active practice",
        paragraphs: [
          "For a web development role, revisit the concepts named in the job description. This may include JavaScript values, functions, arrays, asynchronous operations, browser behavior, React component state, props, forms, APIs or database basics. Write short explanations from memory, then verify them against documentation and small runnable examples. Active recall helps reveal what you understand and what only feels familiar after reading.",
          "Practise coding problems at a level appropriate to the role. Before writing code, clarify the input, output and edge cases. Explain a simple approach, estimate whether it is sufficient and improve it only when needed. Test a normal example, a boundary case and an invalid or empty input. Interview practice is not only about producing a final answer; it also demonstrates how you reason when a problem is not immediately clear.",
        ],
      },
      {
        heading: "Prepare project stories you can defend",
        paragraphs: [
          "Choose two or three projects you can discuss in detail. For each one, explain the user need, your contribution, the tools you used, one challenge and the result you can verify. If it was a team project, describe your own work accurately and recognize other contributions. If it was a personal learning project, say that directly. Honest scope makes follow-up questions easier to answer than inflated claims.",
          "Review your own code and README before the conversation. Be prepared to explain data flow, validation, error handling and one decision you might change now. Interviewers may ask about an unfinished feature or a bug you encountered. A clear explanation of how you investigated the issue can show practical learning even if the original project was small.",
        ],
      },
      {
        heading: "Practise concise behavioral answers",
        paragraphs: [
          "For experience-based questions, use a simple structure: describe the situation, the task you owned, the actions you took and what happened. Keep the setup brief so the listener can understand your decisions. If a result was qualitative or not measured, explain it without inventing a metric. Include what you learned or what you would do differently when that adds useful context.",
          "Prepare examples for collaboration, learning a new tool, handling feedback, resolving a disagreement and managing a mistake. Students and freshers can draw from coursework, volunteering, group projects or personal work, as long as they make the context clear. Do not present a classroom assignment as professional client work. Specific, truthful examples are easier to discuss naturally.",
        ],
      },
      {
        heading: "Use mock interviews to find the next improvement",
        paragraphs: [
          "A mock interview should have a goal. You might practise explaining a project, answering JavaScript questions, solving a coding problem aloud or structuring a behavioral response. Afterward, write down what was clear, where you became uncertain and which answer needs another attempt. Feedback should be actionable, such as “state your assumptions before coding,” rather than only “be more confident.”",
          "Record yourself only if you are comfortable doing so and can store the recording privately. Review the content and pacing rather than trying to imitate a particular personality. The aim is to communicate your reasoning clearly, not to sound memorized. Repeat the exercise after working on one or two improvements so you can notice progress.",
        ],
      },
      {
        heading: "Create a sustainable final-week routine",
        paragraphs: [
          "In the final week, prioritize sleep, logistics and targeted review over trying to learn an entire technology overnight. Confirm the interview time, format, contact instructions and any allowed materials. Prepare a quiet space and test the required setup for a remote meeting. Keep your resume and project notes nearby, but do not read answers word for word.",
          "On interview day, listen to the full question and ask for clarification when needed. Think aloud in a way that explains decisions without narrating every keystroke. If you do not know something, state what you understand and how you would investigate it. Afterward, note topics to revisit and send any appropriate follow-up. A single interview does not define your ability; use each experience to improve the next preparation cycle.",
          "After the interview, write a private debrief while the experience is still fresh. Record the questions you remember, which examples felt clear, where you needed more time and what you want to practise before the next conversation. Do not copy confidential questions or share an employer’s private material publicly. A short reflection turns one interview into useful learning without treating the outcome as a judgment of your entire ability.",
        ],
      },
    ],
  },
  {
    slug: "business-process-automation-planning-guide",
    category: "BUSINESS AUTOMATION",
    title: "A practical guide to planning business process automation",
    description:
      "Map the work, assess exceptions and choose an automation approach that teams can operate responsibly.",
    sections: [
      {
        heading: "Begin with the work, not the software",
        paragraphs: [
          "Automation projects often begin with a tool demonstration or a request to connect two systems. A more reliable starting point is the task itself. Identify who performs the work, what triggers it, which information is needed, what decisions are made and what outcome the next person expects. Write the process in ordinary language and validate it with the people who do it every day. Their experience reveals handoffs, informal checks and exceptions that a diagram made from a manager’s assumptions may miss.",
          "Define the problem in observable terms. Perhaps staff enter the same approved information in two systems, requests wait without an owner, or a recurring report requires several manual steps. Record how often the work happens, who is affected and what currently makes it difficult. Avoid claiming a saving before collecting a baseline. The point of discovery is to understand where effort is spent and whether automation is likely to improve the experience.",
        ],
      },
      {
        heading: "Document normal cases and exceptions",
        paragraphs: [
          "A process map should show the ordinary path and the conditions that interrupt it. What happens when required information is missing? Who resolves a duplicate? Can a customer change a request after it is submitted? Does an approval depend on context that cannot be represented as a simple rule? These questions matter because an automated workflow needs a safe way to pause, ask for help or return work to a person.",
          "List the decisions that are deterministic and those that require judgment. Rules such as “route this request to a named team when the category is X” may be suitable for ordinary automation. Decisions involving sensitive personal circumstances, eligibility, financial consequences or ambiguous language may need review. The more consequential the decision, the more important it is to identify the accountable human and the path for appeal or correction.",
        ],
      },
      {
        heading: "Check data, permissions and system ownership",
        paragraphs: [
          "Before connecting tools, identify the system that owns each record and the permission needed to read or update it. Confirm who controls the accounts, API credentials, data export and administrative access. A spreadsheet can be a useful working document, but it may contain inconsistent formats, duplicate rows or personal information that should not be copied into an unapproved service. Data quality is part of the project, not a cleanup task that can be assumed away.",
          "Review the provider’s terms, data location, retention settings, security controls and service limits with the people responsible for privacy and procurement. Keep credentials out of browser code and public repositories. Use the smallest permission set that supports the approved task, and decide how credentials will be rotated or revoked. If a third-party service changes its API or becomes unavailable, document what the workflow should do rather than leave users with a silent failure.",
        ],
      },
      {
        heading: "Choose the smallest useful implementation",
        paragraphs: [
          "A process improvement can take several forms: a clearer form, a notification, a configured workflow in an existing product, a small integration or a custom application. Compare these options using fit, reliability, accessibility, operating effort, ongoing cost and ease of reversal. Custom code is not automatically more flexible in practice; a feature in a supported product may be simpler to maintain if it meets the need.",
          "Start with a bounded version that can be tested using representative cases. Identify the minimum inputs, expected output, permissions, error messages and manual fallback. Agree on what success means before implementation. A useful pilot might show that requests reach the correct queue and preserve the original message, not claim a percentage improvement without measurement. Expand only after people have reviewed how the first version behaves.",
        ],
      },
      {
        heading: "Test with people and realistic edge cases",
        paragraphs: [
          "Testing should include normal inputs, missing values, unexpected formats, duplicated records, provider timeouts and permission failures. Ask the people who perform the work to walk through the new process and explain what they would do when an exception appears. Check keyboard access, mobile layouts and status messages as well as the integration itself. An automation that works technically but is confusing to operate will create new work.",
          "For AI-based steps, include representative examples where the right answer is uncertain, where the model should abstain and where a human must decide. Keep evaluation data authorized and avoid sending sensitive content to a provider without approval. Track whether outputs are accepted, corrected or escalated according to a documented method. Do not treat a small test set as proof that a system is accurate in every future context.",
        ],
      },
      {
        heading: "Plan for ownership after launch",
        paragraphs: [
          "Every workflow needs an owner who understands how to monitor it, update a rule, handle an exception and contact the provider. Document the expected inputs, system dependencies, routine checks and rollback steps. Decide who receives alerts and how quickly someone should respond. If the automation stops, users should know whether to retry, use a manual route or wait for support; they should not have to guess whether an action completed.",
          "Review costs and outcomes after the workflow has been in use for an agreed period. Compare the observed process with the baseline, collect feedback from the people affected and note errors or workarounds. The result may be to expand, adjust or remove the automation. Responsible improvement is a cycle of observation and review, not a one-time launch. Clear ownership helps a team keep the process useful as tools, staff and requirements change.",
        ],
      },
    ],
  },
  {
    slug: "small-business-website-planning-checklist",
    category: "WEBSITE PLANNING",
    title: "A small business website planning checklist that starts with customers",
    description:
      "Plan a clear website structure, useful content, accessible interactions and a launch process before choosing a theme.",
    sections: [
      {
        heading: "Set a clear goal for the website",
        paragraphs: [
          "A business website is easier to plan when it has one primary job. It may help a visitor understand a service, compare options, book an appointment, request a quote or find a support answer. Write down what the visitor should know and what action should become easier after reading the page. A site can support several goals, but every page should have a clear purpose so the content does not become a list of unrelated claims.",
          "Describe the audience in specific terms. What do people already know when they arrive? What questions make them hesitate? What information do they need before they contact you? The answers influence navigation, page order, examples and the language used in buttons. Avoid designing only for the owner’s preferred terminology if customers use different words to describe the problem.",
        ],
      },
      {
        heading: "Build a small, understandable page structure",
        paragraphs: [
          "Start with the pages visitors need to make a decision: a home page, about information, detailed service pages, pricing or quote guidance, contact details and relevant policies. A resource section can answer repeated questions and support organic discovery over time. Do not add a page solely to make the navigation look larger. Each page should have a unique purpose, a descriptive title and a clear next step.",
          "Sketch the route between pages. A visitor who learns about a service should be able to review the process and reach the contact form without searching the footer. Related pages can link to one another with plain-language labels. Use consistent navigation and avoid links that point to an empty destination or rely on vague text such as “click here.” This structure helps people and search crawlers understand how the content relates.",
        ],
      },
      {
        heading: "Write specific, supportable copy",
        paragraphs: [
          "Useful website copy explains what the business does, who it serves, how the work proceeds and what the visitor should do next. Replace broad promises with concrete details that can be verified. If you have not measured a result, do not claim a percentage improvement. If you do not have customer permission, do not publish their name or logo. Testimonials should be authentic, approved and attributed accurately; fictional endorsements damage trust.",
          "Use short paragraphs, descriptive headings and examples that help a reader understand the offer. Explain what is included and what is not, especially when price depends on scope. If information is not yet available—such as a phone number, opening hours or registered address—confirm it before publication rather than guessing. Consistent, truthful details make it easier for a customer to decide whether to contact you.",
        ],
      },
      {
        heading: "Design for mobile, accessibility and speed",
        paragraphs: [
          "Many visitors will read the site on a phone, so test the page at narrow widths early. Check that the navigation opens and closes, buttons are easy to tap, forms use the right keyboard types and long headings do not overflow. Use semantic HTML, labels for inputs, visible focus states, meaningful alternative text and sufficient text contrast. Do not rely on color alone to communicate an error or status.",
          "Choose images for a purpose and prepare them at appropriate dimensions. Large unoptimized files can slow the first visit; decorative images should not prevent content from being understood. Avoid unnecessary animation and respect reduced-motion preferences. Check Core Web Vitals and page weight on a representative mobile connection, then prioritize improvements that materially help real users rather than optimizing numbers without context.",
        ],
      },
      {
        heading: "Prepare forms and privacy information",
        paragraphs: [
          "A contact form should request only information needed to respond, validate fields clearly and tell the visitor whether the message was actually delivered. Test successful submission, invalid input, network failure and an unconfigured endpoint. A success message must only appear after the receiving service confirms success. Provide a visible email alternative and explain how submitted information is handled.",
          "If you add analytics, advertising, embedded media or newsletter subscriptions, review the data flows and consent requirements that apply to your audience. Update the privacy and cookie information to match the tools actually deployed. Never place private credentials in public frontend code. Keep legal text accurate to the operating business and obtain qualified review where required.",
        ],
      },
      {
        heading: "Launch, measure and maintain deliberately",
        paragraphs: [
          "Before launch, test every route, internal link, form, mobile menu, keyboard path and custom error page. Confirm that page titles, descriptions, canonical URLs, sitemap and robots directives match the public domain. Set up HTTPS, backups, uptime monitoring and analytics only after the relevant configuration and consent behavior have been checked. Use Search Console to monitor indexing and diagnose crawler issues.",
          "A website remains a product after launch. Assign someone to review contact details, service claims, policy changes, link health and content freshness. Check forms and backups on a schedule, and plan updates for dependencies. A simple monthly review can catch a broken destination or obsolete offer before a visitor does. Keep a record of what changed so the team can understand how the site evolved.",
          "Before announcing the site, ask someone who was not involved in building it to complete the main visitor tasks on a phone. Can they identify what the business offers, find the relevant service, understand what information the form requests and reach a human contact route? Ask them to report where they paused rather than telling them what to click. This small review can expose unclear labels, missing context and dead ends that the project team has learned to overlook.",
        ],
      },
    ],
  },
];
