# 3D Immersive Website Features

## Overview
This website has been transformed into an immersive 3D experience with scroll-based animations, parallax effects, and interactive video backgrounds.

## Features Implemented

### 1. **Video Hero Section**
- Replaced static hero image with dynamic video background
- Multiple video sources with fallback support
- 3D parallax effects on scroll
- Animated grid overlay
- Floating gradient orbs with 3D transforms

### 2. **Scroll-Based Background Changes**
- Background gradients dynamically change as you scroll through sections
- Floating orbs that move and transform with scroll position
- Animated dot patterns that fade based on scroll progress
- 5 different background themes for different page sections

### 3. **3D Parallax Scroll Effects**
Each section has varying parallax intensities:
- **ClientLogos**: 0.3 intensity
- **Services**: 0.5 intensity
- **Projects**: 0.4 intensity
- **BusinessSolutions**: 0.6 intensity
- **About**: 0.3 intensity
- **Industries**: 0.5 intensity
- **CaseStudies**: 0.4 intensity
- **CTA**: 0.3 intensity
- **Contact**: 0.2 intensity

### 4. **Interactive 3D Elements**
- Custom 3D cursor with trailing effect
- Mouse glow effect
- 3D card hover effects with perspective transforms
- Scroll reveal animations with 3D rotations
- Floating elements with continuous 3D animations

## New Components

### ScrollBackground
Location: `src/components/ScrollBackground.tsx`
- Manages dynamic background changes based on scroll position
- Creates floating orbs with 3D transforms
- Implements moving dot patterns

### 3DScrollContainer
Location: `src/components/3DScrollContainer.tsx`
- Wraps sections with 3D parallax effects
- Configurable intensity parameter
- Includes ParallaxLayer for individual element parallax

### ScrollReveal
Location: `src/components/ScrollReveal.tsx`
- Reveals elements with 3D animations as they enter viewport
- Supports multiple directions: up, down, left, right
- Includes Card3D component for interactive mouse-based 3D transforms

### Cursor3D
Location: `src/components/Cursor3D.tsx`
- Custom cursor with 3D trailing effect
- Responds to clicks and interactive elements
- Smooth spring animations

### useScrollAnimation Hook
Location: `src/hooks/useScrollAnimation.tsx`
- Provides scroll position data
- Includes 3D scroll effects for individual elements
- Returns transform values for 3D rotations and scaling

## Usage Examples

### Using ScrollContainer3D
```tsx
import { ScrollContainer3D } from "@/components/3DScrollContainer";

<ScrollContainer3D intensity={0.5}>
  <YourSection />
</ScrollContainer3D>
```

### Using ScrollReveal
```tsx
import { ScrollReveal } from "@/components/ScrollReveal";

<ScrollReveal direction="up" delay={0.2}>
  <div>Your content here</div>
</ScrollReveal>
```

### Using Card3D
```tsx
import { Card3D } from "@/components/ScrollReveal";

<Card3D intensity={1.5}>
  <div className="p-6 bg-card rounded-lg">
    Interactive 3D Card
  </div>
</Card3D>
```

### Using ParallaxLayer
```tsx
import { ParallaxLayer } from "@/components/3DScrollContainer";

<ParallaxLayer speed={0.5}>
  <h2>This moves at half speed</h2>
</ParallaxLayer>
```

## CSS Classes Added

### 3D Utilities
- `.preserve-3d` - Enables 3D transforms
- `.perspective-1000` - Sets perspective to 1000px
- `.perspective-2000` - Sets perspective to 2000px

### Animations
- `.animate-float-3d` - Continuous floating with 3D rotation
- `.animate-rotate-3d` - Continuous 3D rotation
- `.animate-pulse-3d` - Pulsing scale with Z-axis translation

### Enhanced Cards
- `.glass-card` - Now includes 3D hover effects
- `.hover-card` - Enhanced with 3D perspective transforms

## Performance Considerations

1. **Will-change property** - Added to elements with frequent transforms
2. **Transform-style: preserve-3d** - Applied to parent containers
3. **Backdrop-filter** - Used sparingly for glass morphism effects
4. **Video optimization** - Using compressed videos with poster images

## Browser Support

- Modern browsers with CSS 3D transform support
- Fallbacks provided for older browsers
- Progressive enhancement approach

## Dependencies Added

```json
{
  "react-scroll-parallax": "^3.x.x",
  "locomotive-scroll": "^4.x.x"
}
```

## Video Sources

The hero section uses free stock videos from Coverr:
- Digital data network animation
- Futuristic city backdrop

Replace these with your own branded videos for production.

## Customization

### Adjusting 3D Intensity
Change the `intensity` prop on ScrollContainer3D components:
```tsx
<ScrollContainer3D intensity={0.8}> // Higher = more parallax
```

### Changing Video
Update the video sources in HeroSection.tsx:
```tsx
<video ...>
  <source src="your-video.mp4" type="video/mp4" />
</video>
```

### Modifying Background Transitions
Edit the backgrounds array in ScrollBackground.tsx to change colors and gradients.

## Tips

1. Keep video files optimized (<5MB) for faster loading
2. Adjust parallax intensities based on content importance
3. Use ScrollReveal sparingly to avoid overwhelming users
4. Test on different devices for performance
5. Consider disabling some effects on mobile for better performance

## Future Enhancements

- [ ] Add WebGL background effects
- [ ] Implement gyroscope-based 3D on mobile
- [ ] Add custom video upload interface
- [ ] Create more 3D animation presets
- [ ] Add performance mode toggle
