# Instructions for Submitting Homework

Check your class schedule for nightly homeworks and weekend labs.

Homework and labs will each live in their own repository, which you will need to **fork & clone**.  These repositories will usually live in your class's GitHub organization.

Each night, you'll be asked to submit you homework as a "Pull Request".

## What's submitted?
**Do Submit**

* If we say "**DUE TONIGHT**" or ask you to submit a pull request in the homework schedule, we want you to submit it as a Pull Request (see below).
	* You should always *fork & clone* homework.

**Do NOT Submit**

* Exercises from morning/afternoon modules. These are are for your own practice / review and are NOT submitted unless explicitly requested.

## Fork and Pull Request Workflow

In order to submit homework, you must first *fork & clone* the homeowork/lab repo. If you do not *fork & clone*, you will not be able to submit a Pull Request. Here are the steps:

1. Create a fork of the class version of a repository by clicking "Fork" on the top right. Make sure you're starting from the class version linked in the schedule.

  ![GitHub "fork" button screenshot](https://cloud.githubusercontent.com/assets/7833470/10625501/b15a2bee-7758-11e5-8b12-2c84b785801b.png)

2. Forking creates a copy of the original class repo on your own GitHub account. You'll see a screen like this while GitHub is forking the repo. 

  ![GitHub fork waiting screen screenshot](https://cloud.githubusercontent.com/assets/7833470/10625502/b422f2e8-7758-11e5-8cf1-09ae4fd7d946.png)

3. Now you have your own copy of the repo! GitHub even redirects you to your new copy on your account! Make sure you're on your GitHub account, and copy the "clone URL" from the top.

  ![GitHub clone URL screenshot](https://cloud.githubusercontent.com/assets/3010270/13687431/17d1d2e6-e6d0-11e5-8a5f-9f1575f03aa9.png)

4. Use the "clone URL" to clone the repo onto your local machine.  Cloning takes a remote repository and makes a local copy.  Start by opening up your Terminal and navigating to your `~/wdi` directory. Then run the following commands, copying and pasting in the correct clone url instead of <clone-url>.  


  ```zsh
  ➜  cd ~/wdi
  ➜  git clone <clone-url>
  ```

5. You should now have a copy of the repo inside your `~/wdi` directory! Change directories into the repo you cloned. 

1. As you complete the tasks from the homework instructions, remember to commit your local changes as you go, and check `git status`!

  ```
  ➜  git add <filename>

  ➜  git commit -m "adds <filename>"
  ```


## Creating Pull Requests


When you're ready to submit your homework (and it's okay if you only have a partial solution, we still want to see it!), you need to push your changes to github and create a pull request:


1. Make sure you've added, committed, and pushed all your updates to your fork of the repo on GitHub. 

    ``` bash
    git push origin master # push your changes to your remote repo
    ```

2. Once you're done with the assignment and have committed and pushed ALL of your changes to GitHub, it's time to make a pull request back to the original repo. Go to your forked copy of the repo on GitHub, and click the "Pull Request" button.

  ![make new pull request button screenshot](https://cloud.githubusercontent.com/assets/3010270/13687969/7ed9d38c-e6d3-11e5-9510-ac0fbf1f22e9.png)

3. GitHub takes you to a new view and asks if you want to create the pull request. We want to know how each assignment went! **Please add the following information to each of your homework pull requests**:

	```
	week 1 day 1

	comfort: 3/5
	completeness: 4/5
	Here are my thoughts on how the homework assignment went....
	```


4. Click the green button, and that's it - you've now created a pull request to submit the homework or lab!

  ![create/submit pull request button screenshot](https://cloud.githubusercontent.com/assets/7833470/10625507/bc97d38a-7758-11e5-8fe9-e4846e06e454.png)

