# PowerShell script to rename photos in gallery folder
# This script will rename photos to "balcons-de-madrid (1).jpg" format

$galleryPath = "C:\Users\Administrator\Downloads\西班牙\balcons-de-madrid\public\gallery"

# Get all jpg files in the gallery folder
$photos = Get-ChildItem -Path $galleryPath -Filter "*.jpg" | Sort-Object Name

Write-Host "Found $($photos.Count) photo(s) in gallery folder:"
$photos | ForEach-Object { Write-Host $_.Name }

# Check if we have 18 photos
if ($photos.Count -ne 18) {
    Write-Host "`nWarning: Expected 18 photos, but found $($photos.Count)" -ForegroundColor Yellow
    $continue = Read-Host "Continue anyway? (Y/N)"
    if ($continue -ne "Y" -and $continue -ne "y") {
        Write-Host "Script cancelled." -ForegroundColor Red
        exit
    }
}

# Rename photos
$index = 1
foreach ($photo in $photos) {
    $newName = "balcons-de-madrid ($index).jpg"
    $newPath = Join-Path $galleryPath $newName
    
    # Check if file already exists
    if (Test-Path $newPath) {
        Write-Host "Skipping: $newName already exists" -ForegroundColor Yellow
    } else {
        Write-Host "Renaming: $($photo.Name) -> $newName"
        Rename-Item -Path $photo.FullName -NewName $newName
        $index++
    }
}

Write-Host "`nDone! Renamed $($index - 1) photo(s)." -ForegroundColor Green
