# GIT

- Create branches is super important, if we work in the same branch we can have conflicts.

To create a new branch:

```bash
git checkout -b branch_name
```

To change to another branch that already exists:

```bash
git checkout branch_name
```

To delete a branch:

```bash
git branch -d branch_name
```

- Remember to plan your day with the project tasks. Make a meeting at the beginning to let your team know what you are going to do and which files you are going to work on. If you have to work on a file that someone else is working on, let them know.

- If you create a new branch without committing the changes, the changes will be moved to the new branch. If you don't want to move the changes, commit them before creating the new branch.

## MERGE

`git merge branch_name` # Merge the branch_name to the current branch. This is a process that is done locally.
If you want to merge a remote branch to your local branch, you have to do the following:

```bash
git pull origin github_branch_name
```

## STEP BY STEP

1. Team meeting to plan the day.
2. Create a new branch.

```bash
git checkout -b branch_name
```

3. Work on the files.
4. Commit the changes.

```bash
git add .
git commit -m "Message"
```

5. Push the changes to the remote branch.

```bash
git push origin branch_name
```

6. If the branch has the latest changes and you want to update main, you can merge it.

```bash
git checkout main
git merge branch_name
```

7. Push the main branch to github and all the other team members can pull it.

```bash
git push origin main
```

# Integrating react with a backend

- With axios we can also make http requests to the backend.

```jsx
import axios from "axios";

axios
  .get("http://localhost:3001/api")
  .then((response) => {
    console.log(response.data);
    // Do something with the data
  })
  .catch((error) => {
    console.log(error);
  });

// using the try catch block
async function fetchData() {
  try {
    const response = await axios.get("http://localhost:3001/api");
    console.log(response.data);
    // Do something with the data
  } catch (error) {
    console.log(error);
  }
}
```

- Remember to do the request inside the useEffect hook.

```jsx
useEffect(() => {
  fetchData();
  // this runs only when the component is mounted
}, []);
```

- To send post requests we use the same method but we only trigger the function when we submit a form.

```jsx
async function postData(e) {
  e.preventDefault(); // REMEMBER TO PREVENT THE DEFAULT BEHAVIOR OF THE FORM (not refreshing the page)
  try {
    const response = await axios.post("http://localhost:3001/api", {
      data: "data",
    });
    console.log(response.data);
    // Do something with the data
  } catch (error) {
    console.log(error);
  }
}
// we call this function in the onSubmit event of the form

<form onSubmit={postData}>
  <input type="text" />
  <button type="submit">Submit</button>
</form>;
```

- To create post requests with fetch is also possible but it takes more code.

```jsx
fetch("http://localhost:3001/api", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ data: "data" }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

You avoid installing axios but you have to write more code.
