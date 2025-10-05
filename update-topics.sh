#!/bin/bash

# Your GitHub token (export before running, don’t hardcode here)
GITHUB_TOKEN=$GITHUB_TOKEN

# Repos you want to update
REPOS=(
  "kamalkolisetty/DestNotify"
  "kamalkolisetty/SnapSolve.ai"
  "kamalkolisetty/BookStore"
)

# Topic(s) you want to apply
TOPICS='{"names": ["portfolio-project"]}'

# Loop through repos and apply topics
for REPO in "${REPOS[@]}"; do
  echo "Updating topics for $REPO..."
  curl -s -X PUT \
    -H "Authorization: token $GITHUB_TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    -d "$TOPICS" \
    "https://api.github.com/repos/$REPO/topics"
  echo -e "\nDone with $REPO ✅\n"
done
