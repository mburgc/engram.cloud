# Image Implementation Guide for ENGRAM Website

## Overview
All 27 generated images have been successfully integrated into the ENGRAM cognitive architecture website. The images are 1200x1200 pixels and have been optimized for web use with CSS overlays and responsive handling.

## Image Mapping

### Hero Section
- **File**: `z-image_00020_.png`
- **Class**: `.bg-hero-primary`
- **Usage**: Main hero background with neural constellation effect
- **Overlay**: Dark gradient (85-70-85%) for text readability
- **Effect**: Fixed background with parallax

### Section Backgrounds

#### 1. Architecture Section
- **File**: `z-image_00024_.png`  
- **Class**: `.bg-neural-constellation`
- **Usage**: System Architecture section background
- **Overlay**: Medium (85% opacity)

#### 2. Theoretical Foundations Section
- **File**: `z-image_00025_.png`
- **Class**: `.bg-synaptic-storm`
- **Usage**: Hebb's Principle section
- **Overlay**: Medium (85% opacity)

#### 3. Memory System Section
- **File**: `z-image_00026_.png`
- **Class**: `.bg-knowledge-galaxy`
- **Usage**: Graph-Node Memory Architecture section
- **Overlay**: Medium (85% opacity)

#### 4. Plastify Module Section
- **File**: `z-image_00034_.png`
- **Class**: `.bg-deep-neural`
- **Usage**: Core Innovation section
- **Overlay**: Light (70% opacity) for better visibility

#### 5. Results Section
- **File**: `z-image_00036_.png`
- **Class**: `.bg-circuit-garden`
- **Usage**: Experimental Results section
- **Overlay**: Medium (85% opacity)

#### 6. Implementation Section
- **File**: `z-image_00049_.png`
- **Class**: `.bg-pipeline-flow`
- **Usage**: API & Code section
- **Overlay**: Medium (85% opacity)

#### 7. Roadmap Section
- **File**: `z-image_00035_.png`
- **Class**: `.bg-constellation-map`
- **Usage**: Future Development section
- **Overlay**: Medium (85% opacity)

#### 8. Newsletter Section
- **File**: `z-image_00055_.png`
- **Class**: `.bg-particle-field`
- **Usage**: Stay Updated section background
- **Overlay**: Light (70% opacity)

### Card Backgrounds

#### Primary Innovation Card
- **File**: `z-image_00041_.png`
- **Class**: `.bg-glass-neural`
- **Usage**: Executive summary - Hebbian Plasticity Module

#### Context Learning Card
- **File**: `z-image_00045_.png`
- **Class**: `.bg-data-flow-micro`
- **Usage**: Executive summary - Knowledge Generation

#### Strengthening & Clustering Card
- **File**: `z-image_00046_.png`
- **Class**: `.bg-synapse-closeup`
- **Usage**: Implementation features showcase

#### Bio-Inspired Architecture Card
- **File**: `z-image_00057_.png`
- **Class**: `.bg-neural-artistry`
- **Usage**: Brain architecture visualization

#### Shared Neighbor Discovery Card
- **File**: `z-image_00059_.png`
- **Class**: `.bg-cybernetic-nature`
- **Usage**: Algorithm explanation section

#### Example Card (Before/After)
- **File**: `z-image_00061_.png`
- **Class**: `.bg-quantum-synapse`
- **Usage**: Real example demonstration

#### Execution Timeline Card
- **File**: `z-image_00050_.png`
- **Class**: `.bg-layered-processing`
- **Usage**: Performance metrics timeline

#### Version Comparison Card
- **File**: `z-image_00053_.png`
- **Class**: `.bg-vector-space`
- **Usage**: Roadmap comparison table

#### Newsletter Form Card
- **File**: `z-image_00075_.png`
- **Class**: `.bg-plasticity-flow`
- **Usage**: Subscription form background

### Footer Background
- **File**: `z-image_00074_.png`
- **Usage**: Footer section with gradient overlay
- **Position**: Bottom of page

## Available Images for Future Use

The following images are available in `assets/images/` and can be used for future enhancements:

### Header/Border Images
- `z-image_00027_.png` - Neural Border Top
- `z-image_00028_.png` - Synaptic Crown
- `z-image_00030_.png` - Data Stream Header

### Divider Images
- `z-image_00031_.png` - Synaptic Divider
- `z-image_00032_.png` - Geometric Wave Border
- `z-image_00033_.png` - Molecular Edge

### Alternative Backgrounds
- `z-image_00022_.png` - Hero Secondary
- `z-image_00062_.png` - Mobile Hero
- `z-image_00068_.png` - Neural Texture
- `z-image_00071_.png` - Synapse Texture
- `z-image_00073_.png` - Neural Abstract

## CSS Classes Reference

### Background Classes
```css
.bg-hero-primary          /* Main hero */
.bg-hero-secondary        /* Alternative hero */
.bg-neural-constellation  /* Architecture section */
.bg-synaptic-storm        /* Foundations section */
.bg-knowledge-galaxy      /* Memory section */
.bg-deep-neural           /* Plastify section */
.bg-circuit-garden        /* Results section */
.bg-constellation-map     /* Roadmap section */
.bg-pipeline-flow         /* Implementation section */
.bg-particle-field        /* Newsletter section */
```

### Card Background Classes
```css
.bg-glass-neural          /* Glass effect cards */
.bg-data-flow-micro       /* Data visualization cards */
.bg-synapse-closeup       /* Feature cards */
.bg-neural-artistry       /* Architecture cards */
.bg-cybernetic-nature     /* Innovation cards */
.bg-quantum-synapse       /* Example cards */
.bg-layered-processing    /* Timeline cards */
.bg-vector-space          /* Comparison cards */
.bg-plasticity-flow       /* Form cards */
```

### Overlay Classes
```css
.overlay-light    /* 70% opacity overlay */
.overlay-medium   /* 85% opacity overlay */
.overlay-heavy    /* 95% opacity overlay */
```

## Technical Implementation

### Image Processing
- All images are 1200x1200px
- CSS `background-size: cover` ensures proper scaling
- Overlays maintain text readability
- `background-attachment: fixed` creates parallax effect
- Responsive fallback removes fixed attachment on mobile

### Performance Considerations
- Total images: 27 files
- Total size: ~49MB
- Format: PNG (high quality)
- Recommended: Enable gzip compression on server
- Consider WebP conversion for production

### Browser Support
- Modern browsers: Full support
- Safari: May have issues with fixed backgrounds on mobile
- Fallback: `background-attachment: scroll` for mobile devices

## Customization Guide

### Changing a Background Image
1. Copy desired image to `assets/images/`
2. Update CSS class with new filename
3. Adjust overlay opacity if needed:
   - Light overlay: `rgba(10, 10, 15, 0.7)`
   - Medium overlay: `rgba(10, 10, 15, 0.85)`
   - Heavy overlay: `rgba(10, 10, 15, 0.95)`

### Adding New Images
1. Generate or obtain 1200x1200px image
2. Copy to `assets/images/`
3. Add CSS class following naming convention:
   ```css
   .bg-your-name {
     background-image: url('../images/your-image.png');
   }
   ```
4. Apply class to desired HTML element

### Adjusting Overlays
Modify the `::before` pseudo-element in CSS:
```css
.your-section::before {
  background: rgba(10, 10, 15, 0.85); /* Adjust opacity */
}
```

## Visual Consistency Tips

1. **Color Palette**: All images maintain cyan/violet/magenta theme
2. **Dark Base**: Images work best with dark (#0a0a0f) overlays
3. **Text Contrast**: Always use overlay-medium or overlay-heavy for text sections
4. **Card Balance**: Use overlay-light for card backgrounds to show image detail
5. **Parallax Effect**: Use sparingly to avoid performance issues

## Accessibility Notes

- Images are decorative (background images)
- Content remains accessible via screen readers
- Color contrast maintained with overlays
- Consider `prefers-reduced-motion` for parallax effects
