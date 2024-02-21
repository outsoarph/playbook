---
title: git
description: Guidelines for collaborating on projects.
---


## Introduction to git

**Git** is a free and open-source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

We find **Git** easy to learn and appreciate its tiny footprint with lightning-fast performance. We consider it outclasses SCM tools like [Subversion](https://subversion.apache.org), [CVS](https://savannah.nongnu.org/projects/cvs), [Perforce](https://www.perforce.com), and [ClearCase](https://www.ibm.com/products/devops-code-clearcase)with features such as cheap local branching, convenient staging areas, and support for multiple workflows.

Git makes it easy for us to keep track of changes, go back to earlier versions, and fix conflicts when they come up. Since it's widely d across different industries, it's an essential tool for us. It helps us work more smoothly and efficiently when developing software.

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


## Why git is industry standard for version control? Why you should learn git?

Git is the industry standard for version control since it's fast, flexible, and widely adopted. It gives developers their own space to work, makes experimenting with new features easy, and works reliably even with large projects. Plus, it's supported by popular platforms like GitHub and GitLab, and it's constantly evolving thanks to its open-source nature. In short, Git is the primary tool for managing code changes efficiently.

We all need to learn Git in software development. It's highly valued by employers and essential for effective collaboration, change tracking, and conflict resolution. Git skills also empower us to contribute to open-source projects, showcase our work, and follow industry best practices. Ultimately, mastering Git enhances our employability, productivity, and success in collaborative environments.

According to [GitLab](https://about.gitlab.com/topics/version-control/version-control-best-practices/),
> Using Git best practices, teams can coordinate all changes in a software project and utilize fast branching to help teams quickly collaborate and share feedback, leading to immediate, actionable changes.


## Basic git commands

Some basic Git commands are:

 `$ git status` list new or modified files not yet committed.

 `$ git log` display a history of commits in the repository.

 `$ git diff` show changes between the working directory, staging area, and the last commit.

 `$ git branch` list all branches in the repository.

 `$ git checkout [branch name]` switch to a different branch.

 `$ git merge [branch name]` merge changes from a specified branch into the current branch.

 `$ git remote -v` display a list of remote repositories along with their URLs.

 `$ git pull` fetch changes from the remote repository and merge them into the local branch.

 `$ git push` upload local commits to a remote repository.

 `$ git fetch` retrieve changes from a remote repository without merging them into the local branch.

 `$ git clone [repository URL]` clone a repository into a new directory.
 
 `$ git config [option]` set or get configuration options.
 
 `$ git remote add [name] [URL]` add a new remote repository.
 
 `$ git remote remove [name]` remove a remote repository.
 
 `$ git reset [file]` unstage a file or reset it to the last committed state.
 
 `$ git revert [commit]` create a new commit that undoes the changes made by a previous commit.
 
 `$ git rm [file]` remove a file from the working directory and the index.

## Resources

- [Git](https://git-scm.com)
- [GitLab](https://about.gitlab.com/topics/version-control/version-control-best-practices/)
- [Github Education](https://education.github.com/git-cheat-sheet-education.pdf)