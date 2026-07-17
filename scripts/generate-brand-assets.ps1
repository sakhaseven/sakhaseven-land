param(
  [string]$ProjectRoot = (Split-Path -Parent $PSScriptRoot)
)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$publicDir = Join-Path $ProjectRoot "public"

function New-BrandMaster {
  param([switch]$Maskable)

  $size = 512
  $master = New-Object System.Drawing.Bitmap $size, $size, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $forest = [System.Drawing.Color]::FromArgb(255, 18, 63, 45)
  $goldLight = [System.Drawing.Color]::FromArgb(255, 228, 201, 106)
  $gold = [System.Drawing.Color]::FromArgb(255, 201, 162, 39)
  $goldDark = [System.Drawing.Color]::FromArgb(255, 159, 123, 30)

  $graphics = [System.Drawing.Graphics]::FromImage($master)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.Clear([System.Drawing.Color]::Transparent)

  $forestBrush = New-Object System.Drawing.SolidBrush $forest
  $backgroundPath = $null
  if ($Maskable) {
    $graphics.FillRectangle($forestBrush, 0, 0, $size, $size)
  }
  else {
    $backgroundRect = New-Object System.Drawing.RectangleF 0, 0, $size, $size
    $backgroundPath = New-RoundedRectanglePath -Rectangle $backgroundRect -Radius 112
    $graphics.FillPath($forestBrush, $backgroundPath)
  }

  $scale = $size / 32
  $graphics.TranslateTransform($size / 8, $size / 8)
  $graphics.ScaleTransform($scale, $scale)

  $gradientRect = New-Object System.Drawing.RectangleF 4, 3, 16, 18
  $gradient = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    $gradientRect,
    $goldLight,
    $goldDark,
    45.0
  )
  $blend = New-Object System.Drawing.Drawing2D.ColorBlend
  $blend.Colors = [System.Drawing.Color[]]@($goldLight, $gold, $goldDark)
  $blend.Positions = [single[]]@(0, 0.52, 1)
  $gradient.InterpolationColors = $blend

  $pen = New-Object System.Drawing.Pen $gradient, 1.8
  $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $pen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round

  $stemPath = New-Object System.Drawing.Drawing2D.GraphicsPath
  $stemPath.StartFigure()
  $stemPath.AddLine(14, 9.536, 14, 7)
  $stemPath.AddBezier(14, 7, 14, 4.79, 15.79, 3, 18, 3)
  $stemPath.AddLine(18, 3, 19.5, 3)
  $stemPath.AddBezier(19.5, 3, 19.776, 3, 20, 3.224, 20, 3.5)
  $stemPath.AddLine(20, 3.5, 20, 5)
  $stemPath.AddBezier(20, 5, 20, 7.209, 18.209, 9, 16, 9)
  $stemPath.AddBezier(16, 9, 13.791, 9, 12, 10.791, 12, 13)
  $stemPath.AddBezier(12, 13, 12, 15, 13, 16, 13, 18)
  $stemPath.AddBezier(13, 18, 13, 19.2, 12.7, 20.15, 12, 21)

  $leafPath = New-Object System.Drawing.Drawing2D.GraphicsPath
  $leafPath.StartFigure()
  $leafPath.AddBezier(4, 9, 6.1, 8.2, 10.8, 9.3, 12, 13)
  $leafPath.AddBezier(12, 13, 9.2, 14.1, 5.1, 12.2, 4, 9)

  $groundPath = New-Object System.Drawing.Drawing2D.GraphicsPath
  $groundPath.StartFigure()
  $groundPath.AddLine(5, 21, 19, 21)

  $graphics.DrawPath($pen, $stemPath)
  $graphics.DrawPath($pen, $leafPath)
  $graphics.DrawPath($pen, $groundPath)

  $groundPath.Dispose()
  $leafPath.Dispose()
  $stemPath.Dispose()
  $pen.Dispose()
  $gradient.Dispose()
  $forestBrush.Dispose()
  if ($backgroundPath) {
    $backgroundPath.Dispose()
  }
  $graphics.Dispose()

  return $master
}

function Save-ResizedPng {
  param(
    [System.Drawing.Bitmap]$Source,
    [int]$Size,
    [string]$OutputPath
  )

  $output = New-Object System.Drawing.Bitmap $Size, $Size, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($output)
  $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.DrawImage($Source, 0, 0, $Size, $Size)
  $graphics.Dispose()
  $output.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $output.Dispose()
}

function New-RoundedRectanglePath {
  param(
    [System.Drawing.RectangleF]$Rectangle,
    [float]$Radius
  )

  $diameter = $Radius * 2
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.AddArc($Rectangle.X, $Rectangle.Y, $diameter, $diameter, 180, 90)
  $path.AddArc($Rectangle.Right - $diameter, $Rectangle.Y, $diameter, $diameter, 270, 90)
  $path.AddArc($Rectangle.Right - $diameter, $Rectangle.Bottom - $diameter, $diameter, $diameter, 0, 90)
  $path.AddArc($Rectangle.X, $Rectangle.Bottom - $diameter, $diameter, $diameter, 90, 90)
  $path.CloseFigure()
  return $path
}

function New-OpenGraphImage {
  param(
    [System.Drawing.Bitmap]$Logo,
    [string]$OutputPath
  )

  $canvas = New-Object System.Drawing.Bitmap 1200, 630, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($canvas)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  $graphics.Clear([System.Drawing.Color]::FromArgb(255, 18, 63, 45))

  $goldBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 201, 162, 39))
  $creamBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 246, 241, 228))
  $mutedBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(210, 246, 241, 228))

  $panelRect = New-Object System.Drawing.RectangleF 760, 95, 320, 320
  $panelPath = New-RoundedRectanglePath -Rectangle $panelRect -Radius 44
  $graphics.FillPath($creamBrush, $panelPath)
  $graphics.DrawImage($Logo, 805, 140, 230, 230)

  $titleFont = New-Object System.Drawing.Font "Arial", 58, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
  $subtitleFont = New-Object System.Drawing.Font "Arial", 34, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
  $detailFont = New-Object System.Drawing.Font "Arial", 24, ([System.Drawing.FontStyle]::Regular), ([System.Drawing.GraphicsUnit]::Pixel)

  $graphics.DrawString("SAKHA 7", $titleFont, $creamBrush, 80, 120)
  $graphics.DrawString("WHEAT & RICE SEEDS", $subtitleFont, $goldBrush, 80, 235)
  $graphics.DrawString("From field care to trusted seed packaging", $detailFont, $mutedBrush, 80, 340)

  $linePen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(150, 201, 162, 39)), 3
  $graphics.DrawLine($linePen, 80, 470, 1080, 470)
  $graphics.DrawString("www.sakha7.com", $detailFont, $creamBrush, 80, 505)

  $linePen.Dispose()
  $titleFont.Dispose()
  $subtitleFont.Dispose()
  $detailFont.Dispose()
  $goldBrush.Dispose()
  $creamBrush.Dispose()
  $mutedBrush.Dispose()
  $panelPath.Dispose()
  $graphics.Dispose()
  $canvas.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $canvas.Dispose()
}

function New-PngIco {
  param(
    [string[]]$PngPaths,
    [string]$OutputPath
  )

  [object[]]$images = @()
  foreach ($pngPath in $PngPaths) {
    $images += ,([System.IO.File]::ReadAllBytes($pngPath))
  }
  $stream = New-Object System.IO.MemoryStream
  $writer = New-Object System.IO.BinaryWriter $stream

  $writer.Write([uint16]0)
  $writer.Write([uint16]1)
  $writer.Write([uint16]$images.Count)

  $offset = 6 + (16 * $images.Count)
  for ($index = 0; $index -lt $images.Count; $index++) {
    $size = [int][System.IO.Path]::GetFileNameWithoutExtension($PngPaths[$index]).Split("-")[-1].Split("x")[0]
    $writer.Write([byte]$size)
    $writer.Write([byte]$size)
    $writer.Write([byte]0)
    $writer.Write([byte]0)
    $writer.Write([uint16]1)
    $writer.Write([uint16]32)
    $writer.Write([uint32]$images[$index].Length)
    $writer.Write([uint32]$offset)
    $offset += $images[$index].Length
  }

  foreach ($image in $images) {
    $writer.Write([byte[]]$image)
  }

  [System.IO.File]::WriteAllBytes($OutputPath, $stream.ToArray())
  $writer.Dispose()
  $stream.Dispose()
}

$master = New-BrandMaster
$maskableMaster = New-BrandMaster -Maskable
$logoPath = Join-Path $publicDir "sakha7-logo-512.png"
$master.Save($logoPath, [System.Drawing.Imaging.ImageFormat]::Png)
$maskableMaster.Save(
  (Join-Path $publicDir "web-app-manifest-512x512-maskable.png"),
  [System.Drawing.Imaging.ImageFormat]::Png
)
$sizes = @{
  16 = "favicon-16x16.png"
  32 = "favicon-32x32.png"
  48 = "favicon-48x48.png"
  96 = "favicon-96x96.png"
  150 = "mstile-150x150.png"
  180 = "apple-touch-icon.png"
  192 = "web-app-manifest-192x192.png"
  512 = "web-app-manifest-512x512.png"
}

foreach ($entry in $sizes.GetEnumerator()) {
  Save-ResizedPng -Source $master -Size $entry.Key -OutputPath (Join-Path $publicDir $entry.Value)
}

New-PngIco -PngPaths @(
  (Join-Path $publicDir "favicon-16x16.png"),
  (Join-Path $publicDir "favicon-32x32.png"),
  (Join-Path $publicDir "favicon-48x48.png")
) -OutputPath (Join-Path $publicDir "favicon.ico")

New-OpenGraphImage -Logo $master -OutputPath (Join-Path $publicDir "og-image.png")

$master.Dispose()
$maskableMaster.Dispose()

Write-Output "Generated Sakha7 favicon, PWA, Windows tile, organization logo, and social-preview assets."
