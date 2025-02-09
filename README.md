# Sprint Challenge: Node DB Sprint

## Description

In this challenge, you design and build a Data Model and a RESTful API that stores data into a Relational Database.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment, please work on it alone. It is an opportunity to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

If the instructions are not clear, please seek support from your TL and Instructor on Slack.

The Minimum Viable Product must be completed in three hours.

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add your _Team Lead_ as collaborator on Github.
- [ ] Clone your forked version of the Repository.
- [ ] Create a new Branch on the clone: git checkout -b `firstName-lastName`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `firstName-lastName`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `firstName-lastName` Branch into master on **your fork, don't make Pull Requests against Lambda's repository**.
- [ ] Please don't merge your own pull request.
- [ ] Add your _Team Lead_ as a Reviewer on the Pull-request
- [ ] Your _Team Lead_ will count the challenge as done by merging the branch into _master_.

## Commits

Commit your code regularly and use descriptive messages. This helps both you (in case you ever need to return to old code) and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ x ] Explain the difference between `Relational Databases` and `SQL`. -- A relational database is a set of tables that store data. The database is constructed as a series of tables (that are themselves composed of columns and rows), some of which reference each other, hence the name 'relational'. SQL is the language used to create, update, and access the database.

- [ x ] Why do tables need a `primary key`? This is to allow records to be distinguished when their other properties are identical. For example, there might be several people named "John Smith", and without a primary key there would be no way to distinguish between records with identical properties.

- [ x ] What is the name given to a table column that references the primary key on another table. -- Foreign key

- [ x ] What do we need in order to have a _many to many_ relationship between two tables. -- An intermediary table whose primary key is the composite of both tables' primary key.

## Minimum Viable Product

Take the steps necessary to complete the project from scratch. Start by initializing your project with a `package.json` and go from there.

Complete the following tasks:

- [ ] Design the data model and use _knex migrations_ to create the database and tables needed to satisfy the following business rules:
  - [ ] a `project` can have multiple `tasks`.
  - [ ] a `task` belongs to only one `project`.
  - [ ] a `project` can use multiple `resources`. Example of `resources` are: computer, conference room, microphone, delivery van.
  - [ ] the same `resource` can be used in multiple `projects`.
  - [ ] when adding `projects` the client must provide a name, the description is optional.
  - [ ] when adding `resources` the client must provide a name, the description is optional.
  - [ ] when adding a `task` the client must provide a description, the notes are optional.
  - [ ] when adding a `task` the client must provide the `id` of an existing project.
  - [ ] for `projects` and `tasks` if no value is provided for the `completed` property, the API should provide a default value of `false`.
- [ ] Build an API with endpoints for:
  - [ ] adding resources.
  - [ ] retrieving a list of resources.
  - [ ] adding projects.
  - [ ] retrieving a list of projects.
  - [ ] adding tasks.
  - [ ] retrieving a list of tasks. **The list of tasks should include the project name and project description**.

### Entities

A `project` is what needs to be done. We want to store the following data about a `project`:

- [ ] a unique ID.
- [ ] a name. This column is required.
- [ ] a description.
- [ ] a boolean that indicates if the project has been completed. This column cannot be NULL, the default value should be `false`.

A `resource` is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a `resource`:

- [ ] a unique ID.
- [ ] a name. This column is required.
- [ ] a description.

The database should not allow resources with duplicate names.

A `task` one of the steps needed to complete the project. We want to store the following data about an `task`.

- [ ] a unique ID.
- [ ] a description of what needs to be done. This column is required.
- [ ] a notes column to add additional information.
- [ ] a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be `false`.

## Stretch Problem

This section is **optional** and not counted towards MVP. Start working on it after you're done with the main assignment.

Add an endpoint for retrieving a `project` by its `id` that returns an object with the following structure:

```js
{
  id: 1,
  name: 'project name here',
  description: 'the project description',
  completed: false, // or true, the database will return 1 for true and 0 for false, extra code is required to convert a 1 to true and a 0 to false.
  tasks: [
    {
      id: 1,
      description: 'task description',
      notes: 'the task notes',
      completed: false // or true
    },
    {
      id: 7,
      description: 'another task description',
      notes: 'the task notes',
      completed: false // or true
    }
  ],
  resources: [
    {
      id: 1,
      name: 'Lambda Student',
      description: 'a soon to be hired developer'
    },
    {
      id: 2,
      name: 'MacBook Pro #1'
      description: 'an overly expensive laptop computer'
    }
  ]
}
```

Add the remaining CRUD operations for projects and tasks.

Use `knex` to add _data seeding_ scripts for projects and tasks.

Add support for the concept of `contexts`. A context is something like _at home_, _at work_ or _at computer_. The idea is that some tasks require one or more `contexts` in order to be worked on. For example, the task of _file income taxes_ may require that you are _at home_, _at computer_ and _online_ so if you are _at work_ and look at the list of pending tasks you could do in your current context, filing your taxes will not be one of them.

A `context` can be applied to more than one `task`. An task can be tied to more than one context, like in the example above.

When retrieving an `task` by _id_, add a property that lists all the `contexts` related to that task.

_Good luck and have fun!_
