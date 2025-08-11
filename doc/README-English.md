# Awesome Photo Gallery
<p align="center">
  <img src='../images/web_icon.png' width=300>
</p>

<p align="center">
    【<a href="../README.md">Home</a> | <a href="README-Chinese.md">中文</a> | <a href="README-Japanese.md">Japanese</a>】
</p>

## 📖 Overview
This is a freely configurable photo gallery system designed for those who need to quickly build image browsing platforms with tag filtering capabilities. Users simply need to add their own image resources and configuration information to quickly deploy a fully functional gallery system. The system supports multi-dimensional filtering by categories, time periods, tags, and provides an elegant waterfall layout display.

Website showcase:
<p align="center">
  <img src='../images/web_page_example.jpg' width=800>
</p>

## ❓ What can Awesome Photo Gallery do?

#### 1. Smart Image Management
The system supports flexible image classification management, including custom categories, time markers, and multi-tag systems. Through JSON configuration files, users can easily manage large volumes of image resources, with each image containing detailed metadata information.

#### 2. Multi-dimensional Filtering Features
Provides powerful filtering capabilities, allowing users to quickly locate target images through the following dimensions:
- **Category Filtering**: Filter by image categories
- **Time Filtering**: Filter by time periods
- **Tag Filtering**: Filter by custom tags
- **Combined Filtering**: Support multi-condition combined filtering

#### 3. Responsive Waterfall Layout
Adopts modern waterfall layout design that adapts to different screen sizes, providing a smooth browsing experience. Supports image lazy loading and performance optimization to ensure good user experience even with large numbers of images.

<p align="center">
  <img src='../images/web_page_example.jpg' width=600>
</p>

### 🖥️ Quick Start

Please follow these steps to configure your gallery:

1. **Clone the repository:** Use the following command to clone the repository:

```bash
git clone https://github.com/VintLin/awesome-photo-gallery.git
```

2. **Configure data files:** Open the project directory and configure your image data. The project requires Node.js 18 or higher:

```bash
cd awesome-photo-gallery
```

3. **Install dependencies:** Install the required project dependencies:

```bash
pnpm install
```

4. **Configure image resources:** Place your image files in the `/public/images/` directory, organized by categories:

```bash
# Example image directory structure
public/images/
└── your-category/   # Custom category
```

5. **Configure data files:** Edit the configuration files in the `/data/` directory:

```bash
# Edit main data file
vim data/images.json

# Edit metadata configuration
vim data/metadata.json
```

6. **Start development server:** Start the project after configuration is complete:

```bash
# Development mode
pnpm dev

# Production build
pnpm build && pnpm start
```

### 📁 Data Configuration Guide

#### `/data` Directory Configuration

This directory contains all data configuration files:

- `images.json` (required): Main data file containing detailed information for all images
- `metadata.json` (required): Metadata configuration containing categories, time periods, tags, etc.
- Category-specific data files (optional)

#### `images.json` Data Format:

```json
{
  "version": "1.0.0",
  "lastUpdated": "2024-01-01",
  "description": "Your gallery description",
  "images": [
    {
      "id": 1,
      "name": "Image name",
      "url": "/images/category/filename.jpg",
      "height": 750,
      "category": "Category name",
      "dynasty": "Time marker",
      "tags": ["tag1", "tag2"],
      "description": "Detailed description",
      "source": "Source information"
    }
  ]
}
```

#### `metadata.json` Configuration Format:

```json
{
  "categories": ["category1", "category2", "your-category"],
  "dynasties": ["time1", "time2", "your-time"],
  "tags": {
    "category1": ["tag1", "tag2", "tag3"],
    "category2": ["tagA", "tagB", "tagC"]
  },
  "statistics": {
    "totalImages": 100,
    "categoryCounts": {
      "category1": 50,
      "category2": 50
    }
  }
}
```

#### `/public` Directory Configuration

Place your image files in corresponding directories by category:

```bash
public/
├── images/
│   └── your-category/    # Your custom category
└── web_icon.png         # Website icon
```

### 🚀 Deployment Methods

#### Method 1: Docker Deployment (Recommended)

```bash
# Deploy using Docker Compose
docker-compose -f config/docker-compose.yml up -d

# Or build and run directly
docker build -t awesome-photo-gallery .
docker run -p 3000:3000 -v ./public/images:/app/public/images:ro awesome-photo-gallery
```

#### Method 2: PM2 Deployment

```bash
# Build project
pnpm build

# Start with PM2
pm2 start config/ecosystem.config.js

# Or start directly
pm2 start npm --name "awesome-photo-gallery" -- start
```

#### Method 3: Traditional Deployment

```bash
# Build project
pnpm build

# Start production server
pnpm start
```

### Command Line Parameters

Common commands used during development and deployment:

- `pnpm dev`: Start development server (default port 3000)
- `pnpm build`: Build production version
- `pnpm start`: Start production server
- `pnpm lint`: Code linting

### Usage Examples

Here are some configuration examples:

```bash
# Quick start - using sample data
pnpm dev

# Deploy to production environment
pnpm build
PORT=8080 pnpm start

# Quick deployment with Docker
docker-compose up -d
```

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 15 + React 19
- **UI Components**: Radix UI + Tailwind CSS
- **Development Language**: TypeScript
- **Package Manager**: pnpm
- **Deployment Solution**: Docker + PM2

## ✨ Key Features

- 📸 **High-performance Image Loading**: Lazy loading + virtual scroll optimization
- 🔍 **Smart Filtering System**: Multi-dimensional combined filtering
- 📱 **Fully Responsive**: Adapts to various devices
- 🎨 **Waterfall Layout**: Beautiful display effects
- ⚡ **Quick Configuration**: JSON configuration ready to use
- 🔧 **Highly Customizable**: Support custom categories and tags

## 👨‍💻‍ Contributors

<a href="https://github.com/VintLin/awesome-photo-gallery/contributors">
  <img src="https://contrib.rocks/image?repo=VintLin/awesome-photo-gallery" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## ⚖️ License

- Source Code License: The source code of this project is licensed under the MIT License. This license allows the use, modification, and distribution of the code under the terms of the MIT License.
- Project Open Source Status: This project is indeed open source; however, this designation is primarily intended for non-commercial use. While we encourage collaboration and contributions from the community for research and non-commercial applications, it is important to note that using project components for commercial purposes requires a separate licensing agreement.

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=VintLin/awesome-photo-gallery&type=Date)](https://star-history.com/#VintLin/awesome-photo-gallery&Date)

## 📬 Contact

If you have any questions, feedback, or would like to get in touch, please feel free to contact us via email: [vintonlin@gmail.com](mailto:vintonlin@gmail.com)
