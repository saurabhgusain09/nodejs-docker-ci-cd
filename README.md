# Node.js Docker App with CI/CD Pipeline

This is a simple Node.js application that is containerized using Docker and deployed to DockerHub using GitHub Actions (CI/CD pipeline).

---

## 🧰 Technologies Used

- Node.js
- Docker
- GitHub Actions (CI/CD)
- DockerHub

---

## 📁 Project Structure

```
nodejs-docker-app/
├── app.js
├── package.json
├── Dockerfile
├── .github/
│   └── workflows/
│       └── main.yml
```

---

## ⚙️ How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/nodejs-docker-app.git
cd nodejs-docker-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the App
```bash
node app.js
```

The app will start on `http://localhost:3000`

---

## 🐳 Docker Commands

### Build Docker Image
```bash
docker build -t my-node-app .
```

### Run Docker Container
```bash
docker run -p 3000:3000 my-node-app
```

### Tag Docker Image for DockerHub
```bash
docker tag my-node-app saurabhgusain21/my-node-app
```

### Push to DockerHub
```bash
docker push saurabhgusain21/my-node-app
```

---

## 🔄 GitHub Actions CI/CD Pipeline

We have implemented a GitHub Actions pipeline to automate:

- Testing (optional)
- Building Docker Image
- Logging in to DockerHub
- Pushing the image to DockerHub on every push to the `main` branch.

### 📄 Workflow File Path
```
.github/workflows/main.yml
```

### 🧪 Pipeline Triggers

This workflow runs on:
```yaml
on:
  push:
    branches:
      - main
```

### 🔐 Required GitHub Secrets

Go to your repo → **Settings** → **Secrets and variables** → **Actions** and add:

- `DOCKER_USERNAME` = your DockerHub username (e.g., saurabhgusain21)
- `DOCKER_PASSWORD` = your DockerHub access token

---

## 📦 DockerHub

The final Docker image will be available on:

🔗 [DockerHub - saurabhgusain21/my-node-app](https://hub.docker.com/r/saurabhgusain21/my-node-app)

---

## 💡 Author

**Saurabh Gusain**  
MCA Graduate | DevOps Enthusiast | Learning Docker, GitHub Actions, and more 🚀

---


