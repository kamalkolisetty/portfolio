# Your GitHub token (make sure you set this before running)
$token = $env:GITHUB_TOKEN

# Repos to update
$repos = @(
  "kamalkolisetty/DestNotify"
  "kamalkolisetty/SnapSolve.ai"
  "kamalkolisetty/BookStore"
)

# Topic to add
$newTopic = "portfolio-project"

foreach ($repo in $repos) {
    Write-Host "Fetching existing topics for ${repo}..."

    # Get current topics
    $response = Invoke-RestMethod `
        -Headers @{Authorization = "token $token"; Accept = "application/vnd.github.v3+json"} `
        -Uri "https://api.github.com/repos/$repo/topics" `
        -Method GET

    $topics = $response.names

    if ($topics -contains $newTopic) {
        Write-Host "Topic '$newTopic' already exists in ${repo}"
    } else {
        $topics += $newTopic
        Write-Host "Adding topic '$newTopic' to ${repo}..."
    }

    # Update topics
    $body = @{ names = $topics } | ConvertTo-Json -Depth 3
    Invoke-RestMethod `
        -Headers @{Authorization = "token $token"; Accept = "application/vnd.github.v3+json"} `
        -Uri "https://api.github.com/repos/$repo/topics" `
        -Method PUT `
        -Body $body

    Write-Host "Updated topics for ${repo}: $($topics -join ', ')"
    Write-Host ""
}
