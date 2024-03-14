---
title: git
description: Guidelines for collaborating on projects.
---


## Introduction to git

##### **Git** is a version control system (VCS) designed for managing source code during software development. It was developed by Linus Torvalds, the creator of Linux, in 2005. Git is utilized by a diverse range of individuals and organizations, including software developers, project managers, and open-source communities worldwide.

Distributed version control is a paradigm where every developer has a copy of the entire repository. Git is a perfect example of this. Through the help of faster procedures and more smooth exchanges, decentralized techniques deliver considerable performance improvements.

Git has many benefits, such as accurate branching and merging, effective management of large repositories, and offline work support. Its flexibility and compatibility with various workflows make it a preferred choice for version control among software teams.

## What is git and how it works?

We're talking about Git, a decentralized version control system (DVCS) that we  for tracking changes in source code during software development. Unlike centralized version control systems where there's a single central repository that holds all the code and its history, Git operates on a decentralized model where each developer has their own copy of the entire repository, including its full history.

Here's a step-by-step overview of how Git works:

**1. Initialize:** Start by setting up a new Git repository in your project folder using
 ```bash
 $ git init
 ```

**2. Add Files:** Use git add to tell Git which files you want to track.
 ```bash
 $ git add
 ```

**3. Commit Changes:** Commit your changes with git commit to save a snapshot of your project.
 ```bash
 $ git commit
 ```

**4. Create Branches:** Use branches git branch to work on new features or fixes without affecting the main code.
 ```bash
 $ git branch
 ```

**5. Merge Changes:** Merge branches git merge back into the main code when ready.
 ```bash
 $ git merge
 ```

**6. Collaborate:** Share your changes by pushing git push them to a remote repository, like GitHub.
 ```bash
 $ git push
 ```

**7. Sync Changes:** Pull git pull changes from the remote repository to keep your local copy up to date.
 ```bash
 $ git pull
 ```

**8. Review History:** Use git log to see a history of changes and git diff to compare versions.
 ```bash
 $ git diff
 ```

**9. Resolve Conflicts:** If there are conflicting changes, Git helps you resolve them.

**10. Keep Improving:** Use Git to continuously improve your project, collaborating with others and making changes confidently.

## Version control with Git

#### **Why git is industry standard for version control?**

Git is the industry standard for version control since it's fast, flexible, and widely adopted. It gives developers their own space to work, makes experimenting with new features easy, and works reliably even with large projects. Plus, it's supported by popular platforms like GitHub and GitLab, and it's constantly evolving thanks to its open-source nature. In short, Git is the primary tool for managing code changes efficiently. Git is used to handle nearly all project source code at Outsoar, highlighting its essential function in successful code management.

According to [GitLab](https://about.gitlab.com/topics/version-control/version-control-best-practices/),
> Using Git best practices, teams can coordinate all changes in a software project and utilize fast branching to help teams quickly collaborate and share feedback, leading to immediate, actionable changes.

#### **Why you should learn git?**

As an example, let's take a look at Juna, a developer who is working on a web application feature. Juna can test the functionality without affecting the main codebase by using Git to create a new branch. Her changes can be easily merged back into the main branch if they operate properly.  Should that not be the case, she can throw away the branch without messing with the project. Its control and flexibility allow developers such as Juna to confidently experiment and create.

We all need to learn Git in software development. It's highly valued by employers and essential for effective collaboration, change tracking, and conflict resolution. Git skills also empower us to contribute to open-source projects, showcase our work, and follow industry best practices. Ultimately, mastering Git enhances our employability, productivity, and success in collaborative environments.

## Basic git commands

Some basic Git commands are:

| Command                  | Description                                                                                     |
|--------------------------|-------------------------------------------------------------------------------------------------|
| `$ git status`           | List new or modified files not yet committed.                                                   |
| `$ git log`              | Display a history of commits in the repository.                                                 |
| `$ git diff`             | Show changes between the working directory, staging area, and the last commit.                  |
| `$ git branch`           | List all branches in the repository.                                                            |
| `$ git checkout [branch]`| Switch to a different branch.                                                                   |
| `$ git merge [branch]`   | Merge changes from a specified branch into the current branch.                                  |
| `$ git remote -v`        | Display a list of remote repositories along with their URLs.                                    |
| `$ git pull`             | Fetch changes from the remote repository and merge them into the local branch.                  |
| `$ git push`             | Upload local commits to a remote repository.                                                    |
| `$ git fetch`            | Retrieve changes from a remote repository without merging them into the local branch.           |
| `$ git clone [URL]`      | Clone a repository into a new directory.                                                        |
| `$ git config [option]`  | Set or get configuration options.                                                               |
| `$ git remote add [name] [URL]` | Add a new remote repository.                                                             |
| `$ git remote remove [name]`    | Remove a remote repository.                                                              |
| `$ git reset [file]`     | Unstage a file or reset it to the last committed state.                                         |
| `$ git revert [commit]`  | Create a new commit that undoes the changes made by a previous commit.                          |
| `$ git rm [file]`        | Remove a file from the working directory and the index.                                         |


## Resources

- [Git](https://git-scm.com)
- [GitLab](https://about.gitlab.com/topics/version-control/version-control-best-practices/)
- [Github Education](https://education.github.com/git-cheat-sheet-education.pdf)