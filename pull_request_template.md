# Pull Request Template

## Pre-Submission Checklist:-

 Before submitting your pull request, please follow these steps:

-[1] Check for Duplicates:

 - Ensure your PR is not addressing an issue that has already been resolved.

-[2] Branch Management:

- Create your changes in a separate branch.
- Use descriptive branch names that start with the appropriate prefix:
  - fix/ for bug fixes (e.g., fix/signin-issue)
  - feature/ for new features (e.g., feature/add-user-authentication)

-[3] Commit Message:

- Write a descriptive commit message that includes:

  - A short title (first line) summarizing the change.
  - Additional details in the body if necessary.

-[4] Commit Management:

  - Ensure you have a single commit. If you have multiple commits, squash them into one using:
      >git rebase -i HEAD~n # replace n with the number of commits to squash

-[5] Testing:

  -Run the tests to ensure everything works correctly. Execute:

    npm test
  - If there are errors, resolve them and amend your commit:
    >git commit --amend


## Submission Steps
  Once you have completed the above steps, you are ready to submit your pull request:

  1. Target Branch:

     - Ensure your pull request targets the staging branch, not the master or main branch.

  2. Title Your PR:

      - Give your pull request a clear and descriptive title that reflects the changes made.

  3. Description:

     - Provide a detailed description of your changes, including:

       - What was changed.
       - Why it was changed.
       - Any relevant context or  background information.

  4. Issue Closure:

     - If your PR addresses an existing issue, include the following line in your comment to automatically close it:

        >closes #XXXX , // # replace XXXX with the issue number

## Post-Submission Actions
  After submitting your pull request, please take note of the following:

1. Review Process:
   - Wait for reviewers to provide feedback. Be responsive to comments and suggestions.

2. Update Your PR:
    - If changes are requested, make the necessary updates in your branch and push the changes. The PR will automatically update.

3. Merge Process:
    - Once approved, your PR will be merged into the staging branch by the designated reviewer or maintainer.

4. Cleanup:
    - After merging, delete your branch to keep the repository clean.
    
      >git branch -d branch-name , # replace branch-name with your feature/fix branch

