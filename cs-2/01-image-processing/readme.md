# Image Processing

## Image Coordinates

![](/assets/pixel-coordinates.png)

- Zero-indexed
- [Top-left origin](https://dsp.stackexchange.com/questions/35925/why-do-we-use-the-top-left-corner-as-the-origin-in-image-processing)

## Pixels

![](images/bird.png)

## Subpixels

<img height="300" src="/assets/Pixel_geometry_01_Pengo.jpg" />
<img height="300" src="/assets/Cone-fundamentals-with-srgb-spectrum.svg" />

## Color Channels

![](/assets/Rgb-raster-image.png)

- `(r, g, b)` notation
- https://rgbcolorpicker.com/

## Color Intuition

![](/assets/the_dress.jpg)

## Impossible Colors

<img height="550" src="/assets/eclipse-shrink.svg" />

## Colors Worksheet

<img height="450" src="/assets/checker_shadow_illusion.png" />

## PIL / Pillow

https://pillow.readthedocs.io/en/stable/reference/Image.html

```py
from PIL import Image

# Load input image
im = Image.open("bird.png")

# Make blank output image with same dimension as the original
output = Image.new(im.mode, (im.width, im.height))

for y in range(im.height):
    for x in range(im.width):
        (r, g, b) = im.getpixel((x, y))

        # Your code goes here

        output.putpixel((x, y), (r, g, b))

# Save output image
output.save("grayscale.png")
```

## Tuples

```py
(r, g, b) = im.getpixel((x, y))
```

```py
color = im.getpixel((x, y))

# ...

(r, g, b) = color
```

## Max Red Demo

```py
r = 255
```

## Simple Grayscale

<img width="450" src="images/bird.png" />
<img width="450" src="images/grayscale/grayscale.png" />

- https://en.wikipedia.org/wiki/Grayscale
- `r`, `g`, and `b` are all equal
- $$l = \frac{r + g + b}{3}$$

## Better Grayscale

<img width="450" src="images/bird.png" />
<img width="450" src="images/better-grayscale/better-grayscale.png" />

- Relative / perceptual luminance
- https://brandonrohrer.com/convert_rgb_to_grayscale.html

Linear approximation for gamma-compressed channel values:

$$l = 0.299 \cdot r + 0.587 \cdot g + 0.114 \cdot b$$

## Black and White

<img width="450" src="images/bird.png" />
<img width="450" src="images/black-white/black-white.png" />

- Black `(0, 0, 0)`
- White `(255, 255, 255)`
