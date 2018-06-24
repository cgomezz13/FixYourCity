# To Collaborate

1.  Get added to the list of collaborators
    ..\* (invite only at this time)
2.  Clone the project from the main repo to your local machine
3.  Branch from master: `git branch <BRANCH_NAME> && git checkout <BRANCH_NAME>`
4.  When you've added your changes: `git push origin <BRANCH_NAME>`
5.  Create your own pull request on the repo on GitHub
6.  If there are no conflicts, merge your own branch into the master branch
    ..\* If there are conflicts & it isn't obvious how to resolve them, post in the Slack channel (also invite only at this time)
7.  Once your changes are merged:
    ..\* Delete your old branch on the repo (there is a Delete Branch button available after you merge on GitHub)
    ..\* On your local environment checkout the master branch & pull down changes, delete your old branch, and make a new branch from the updated master if you want to continue working at that time: `git checkout master && git pull && git branch -D <BRANCH_NAME> && git <BRANCH_NAME> && git checkout <BRANCH_NAME>`
