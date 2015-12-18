# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> GitHub Collaboration Workflow

GitHub is a powerful tool for version control and collaborating on code. There are two main scenarios for collaborating on coding projects:

1. You **fork** another developer's project and make pull requests from *your remote fork* to the *project's remote*.
2. Another developer makes you a **collaborator** on a project they own, giving you the ability to clone the project and make pull requests directly from the project's *remote branches* to the project's *remote master*. (Note that as a collaborator on a project, you also have the ability to push directly to the master branch, which you should NEVER do.

<!-- TODO: Draw a diagram of the two scenarios. -->

## Collaborator Scenario

Imagine you, Jessica, and Sam want to build an app together. Jessica bootstraps a Rails project, pushes it to GitHub, and adds the other two group members as <a href="https://help.github.com/articles/adding-collaborators-to-a-personal-repository" target="_blank">collaborators</a>. The group delegates tasks and sets to work.

Your first task is to add user authentication. At the same time, Jessica is doing API integration and Sam is writing tests.

1. You clone the project Jessica pushed up to GitHub after she makes you a collaborator. This creates a local repository with a `remote` called `origin` which is the original repo Jessica created and technically belongs to Jessica. From within your local repository, you can check the urls of all remote repos it's connected to.

  ```zsh
  ➜  git remote -v
  ```

2. Before you start implementing user authentication, make a new branch called `auth`. Feature branches help organize work on a project and ensure that only production-ready code lives on the `master` branch.

  ```zsh
  ➜  git checkout -b auth
  ```

  *Now you build the entire auth feature with sign up, log in, log out, etc. How do you get your new code up to the main group project?*

3. Make sure to commit all your changes on your `auth` branch. Switch back to your local `master` branch, then pull from `origin/master` to bring your local `master` branch up to date.

  ```zsh
  ➜  git checkout master
  ➜  git pull origin master
  ```

4. Now switch back to your local `auth` branch and merge your local `master` branch into it. This will give you a chance to resolve all conflicts with the most up-to-date master version before making a pull request. Watch git's output in the Terminal to see if any files have merge conflicts.

  ```zsh
  ➜  git checkout auth
  ➜  git merge master
  ```

  **VERY IMPORTANT:** IF you have a merge conflict, you should grab one of your team members to help determine how to safely merge the code, then follow the instructions for [resolving merge conflicts locally](#resolving-merge-conflicts-locally).

5. Once you've resolved all the conflicts if they exist, add and commit your changes locally, and push your feature branch to the remote repo.

  ```
  ➜  git add .
  ➜  git commit -m "fix conflicts; merged with master"
  ➜  git push origin auth
  ```

6. Now navigate in your browser to the original remote repo's GitHub page. GitHub will detect that you just pushed a new branch and give you a prompt to make that branch into a pull request. Go for it!

  <!-- TODO: Add screenshot -->

  This will notify all the collaborators that you just made a pull request, and it's waiting to be merged. The next step is for someone else on the team to review your code and suggest any changes needed before merging it in.

7. If there are no other pull requests in the queue, one of your team members can merge your pull request cleanly with the most up-to-date master. Otherwise, if your team merges other pull requests before yours, those pull requests might create merge conflicts with yours.

  In that case, GitHub will show that merge conflicts exist and must be resolved locally. You'll want to repeat steps 3-5 to resolve the conflicts locally. Remember it's not up to the project "owner" to fix all the merge conflicts! (How could they do that? They didn't write the code!) Each branch owner is responsible to get a clean pull request queued up.

<!-- TODO: Edit "code review" and "resolving merge conflicts" sections -->

## Code Review

To do review merges that do not have conflicts use GitHub's "Diff" functionality in the browser.

## Resolving Merge Conflicts Locally

1. Fetch the remote branch: `git fetch <<remote branch name>>`
2. Checkout the new local branch: `git checkout <<branch name>>`
3. Merge master into the local branch: `git merge master`
4. Resolve conflicts.
5. Push the branch to remote: `git push origin <<branch name>>`
6. Now GitHub will be "happy" and the green button will be there to merge without conflicts.

## Resources

* <a href="https://help.github.com/articles/adding-collaborators-to-a-personal-repository" target="_blank">Adding collaborators to a personal repository</a>
