---
layout: post
author: Marcel Rieser
title: "Changes in MATSim from the Code Sprint 2025"
summary: "In last weeks code sprint, several larger changes for MATSim have been decided upon"
type: news
---

In the last week of March 2025, 14 MATSim developers from various institutes and companies
came together in Berlin for a week of discussions and coding. At this week-long event, 
the following decisions and changes were made:

- **Renaming the default git-branch to `main`.** For a few years now, the git-community
  uses `main` as the name of the default branch in new repositories. We now follow this convention
  and have renamed the previous `master` branch to `main`.
- **Squashing for Pull Requests.** When merging changes from contributors, the branches
  were merged into the main branch using a merge commit, keeping all individual commits
  of the merged branch. This lead to sometimes very complex and nested commit histories,
  making it harder to understand what actually changed. We now decided to use **sqashing**
  by default when merging PRs. This will result in a single commit for all the changes being
  merged, which will result in a much shorter and hopefully cleaner commit history of our 
  large project.
- **Use Conventional Commit messages.** For the PRs, we now suggest to use the so-called
  [conventional commit message format](https://conventionalcommits.org). Together with the 
  squashed commits, we hope to be able to provide the often-requested changelog for new 
  releases in the future.
- **Better support forum.** For the past few years, we used 
  [GitHub's issue tracker](https://github.com/matsim-org/matsim-code-examples/issues?q=is%3Aissue%20) 
  to answer support requests. As the interaction capabilities for the issues were limited for a support
  forum, we now decided to start using [GitHub Discussions](https://github.com/orgs/matsim-org/discussions)
  instead. You can reach the new support forum using the stable 
  URL [www.matsim.org/faq](https://www.matsim.org/faq).
- **Remove deprecated and outdated code.** We removed several methods and classes that were 
  marked as deprecated for a few years already in order to clean up our code base. We plan 
  to do this more often in the future, so if you use MATSim to write some code, please
  adapt your code regularly if you use deprecated constructs. In addition, outdated and/or
  unmaintained packages like `jdeqsim` and `lanes` were or will be removed.

