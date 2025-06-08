# Quick Splash - Next.js TypeScript Application

A basic Next.js application with TypeScript, containerized with Docker and deployable via Helm charts.

## Features

- **Next.js 15.3.3** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **ESLint** for code linting
- **Docker** containerization
- **Helm Chart** for Kubernetes deployment

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Docker

### Building the Docker Image

```bash
docker build -t quick-splash:latest .
```

### Running with Docker

```bash
docker run -p 3000:3000 quick-splash:latest
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Docker Image Details

- **Base Image**: Node.js 18 Alpine
- **Multi-stage build** for optimized production image
- **Non-root user** for security
- **Standalone output** for minimal runtime dependencies

## Kubernetes Deployment with Helm

### Prerequisites

- Kubernetes cluster
- Helm 3.x installed
- kubectl configured

### Installing the Chart

1. **Build and push your Docker image** (replace with your registry):
```bash
docker build -t your-registry/quick-splash:latest .
docker push your-registry/quick-splash:latest
```

2. **Update the image repository** in `helm/quick-splash/values.yaml`:
```yaml
image:
  repository: your-registry/quick-splash
  tag: "latest"
```

3. **Install the Helm chart**:
```bash
helm install quick-splash ./helm/quick-splash
```

### Customizing the Deployment

You can customize the deployment by modifying `helm/quick-splash/values.yaml` or by providing values during installation:

```bash
helm install quick-splash ./helm/quick-splash \
  --set replicaCount=3 \
  --set service.type=LoadBalancer \
  --set ingress.enabled=true
```

### Common Configurations

#### Enable Ingress
```yaml
ingress:
  enabled: true
  className: "nginx"
  hosts:
    - host: your-domain.com
      paths:
        - path: /
          pathType: Prefix
```

#### Enable Autoscaling
```yaml
autoscaling:
  enabled: true
  minReplicas: 2
  maxReplicas: 10
  targetCPUUtilizationPercentage: 80
```

#### Set Resource Limits
```yaml
resources:
  limits:
    cpu: 500m
    memory: 512Mi
  requests:
    cpu: 250m
    memory: 256Mi
```

### Helm Commands

- **Install**: `helm install quick-splash ./helm/quick-splash`
- **Upgrade**: `helm upgrade quick-splash ./helm/quick-splash`
- **Uninstall**: `helm uninstall quick-splash`
- **Status**: `helm status quick-splash`
- **Get Values**: `helm get values quick-splash`

### Accessing the Application

After deployment, follow the instructions in the NOTES output from Helm to access your application.

For ClusterIP service (default):
```bash
kubectl port-forward svc/quick-splash 8080:80
```
Then visit [http://localhost:8080](http://localhost:8080)

## Project Structure

```
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout
│       ├── page.tsx        # Home page
│       └── globals.css     # Global styles
├── public/                 # Static assets
├── helm/
│   └── quick-splash/       # Helm chart
│       ├── Chart.yaml
│       ├── values.yaml
│       └── templates/
├── Dockerfile              # Docker configuration
├── .dockerignore          # Docker ignore file
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally and with Docker
5. Submit a pull request

## License

This project is licensed under the MIT License.
