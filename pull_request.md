# Pull Request (PR) Guidelines

## Step 1 :-
  1. Check for Duplicates
     - Ensure your PR is not addressing an issue that has already been resolved.

  2. Branch Management
      - Go to the Base branch and pull all latest code
        ```bash
          git pull origin
        ```
      - Create one branch from it with the proper naming convention
      - Use descriptive branch names that start with the appropriate prefix:
        - fix/ for bug fixes (e.g., fix/signin-issue)
        - feature/ for new features (e.g., feature/add-user-authentication)
      - Try to break work into small chunks and commit for each chunk
      - Update your current working branch with the base branch using
          - rebase (be careful if you have already pushed changes to the remote)
          - merge

  3. Testing (Skip this step for now, because we don't have proper test setup)
    - Run the tests to ensure everything works correctly.
        ```bash
          npm run test
        ```
     - If there are errors, resolve them and add commit for those fix.


## Step 2 :-
  1. Target Branch:
     - Ensure your pull request targets the correct base branch.

  2. Title of your PR:
      - Give your pull request a clear and descriptive title that reflects the changes made.

  3. Description:
     - Provide a detailed description of your changes, including:
       - What was changed.
       - Why it was changed.
       - Any relevant context or  background information.
       - If possible add image of gif for showing the UI changes

  4. Issue Closure:
     - If your PR addresses an existing issue, include the following line in your comment to automatically close it:
        - >closes #XXXX , // # replace XXXX with the issue number

## Step 3 :-
  After submitting your pull request, please take note of the following:

1. Review Process:
   - Wait for reviewers to provide feedback. Be responsive to comments and suggestions.

2. Update Your PR:
    - If changes are requested, make the necessary updates in your branch and push the changes. The PR will automatically update.

3. Re-request the PR to the reviewer
    - Click on the refresh button to re-request for the review.

4. Merge Process:
    - Once approved, your PR will be merged into the target branch by the designated reviewer or maintainer.

5. Cleanup:
    - After merging, delete your branch to keep the repository clean.
    
6. Delete local branch :
      ```bash
        git branch -d branch-name # replace branch-name with your branch
      ```