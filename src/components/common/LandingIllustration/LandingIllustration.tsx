import React from 'react';
import Svg, { Rect, Circle, Path, G, Defs, RadialGradient, Stop } from 'react-native-svg';
import { useAppTheme } from '../../../theme/theme.provider';

interface LandingIllustrationProps {
  width?: number;
  height?: number;
}

export default function LandingIllustration({ 
  width = 400, 
  height = 300 
}: LandingIllustrationProps) {
  const { theme, themeType } = useAppTheme();
  const colors = theme.colors;
  const isDark = themeType === 'dark';

  if (isDark) {
    return (
      <Svg width={width} height={height} viewBox="0 0 400 300">
        {/* Background */}
        <Rect width="400" height="300" fill={colors.background} />
        
        {/* Decorative circles */}
        <Circle cx="50" cy="50" r="20" fill={colors.primary} opacity="0.2" />
        <Circle cx="350" cy="80" r="15" fill={colors.primaryContainer} opacity="0.3" />
        <Circle cx="320" cy="250" r="25" fill={colors.primary} opacity="0.15" />
        <Circle cx="80" cy="280" r="18" fill={colors.tertiaryContainer} opacity="0.25" />
        
        {/* Main chat bubble */}
        <G transform="translate(120, 80)">
          <Rect x="0" y="0" width="160" height="100" rx="20" fill={colors.primary} />
          <Path d="M 20 100 L 30 120 L 40 100 Z" fill={colors.primary} />
          
          <Rect x="20" y="20" width="80" height="8" rx="4" fill={colors.onPrimary} opacity="0.9" />
          <Rect x="20" y="35" width="120" height="8" rx="4" fill={colors.onPrimary} opacity="0.7" />
          <Rect x="20" y="50" width="60" height="8" rx="4" fill={colors.onPrimary} opacity="0.5" />
        </G>
        
        {/* Second chat bubble */}
        <G transform="translate(200, 150)">
          <Rect x="0" y="0" width="120" height="70" rx="15" fill={colors.primaryContainer} />
          <Path d="M 100 70 L 110 90 L 120 70 Z" fill={colors.primaryContainer} />
          
          <Rect x="15" y="15" width="70" height="6" rx="3" fill={colors.onPrimaryContainer} opacity="0.8" />
          <Rect x="15" y="28" width="90" height="6" rx="3" fill={colors.onPrimaryContainer} opacity="0.6" />
          <Rect x="15" y="41" width="50" height="6" rx="3" fill={colors.onPrimaryContainer} opacity="0.4" />
        </G>
        
        {/* Floating icons */}
        <G transform="translate(60, 120)">
          <Circle cx="0" cy="0" r="15" fill={colors.tertiaryContainer} />
          <Path d="M -5 -5 L 8 0 L -5 5 Z" fill={colors.onTertiaryContainer} />
        </G>
        
        <G transform="translate(300, 180)">
          <Circle cx="0" cy="0" r="12" fill={colors.secondaryContainer} />
          <Path d="M -6 -3 L 6 -3 L 6 3 L -6 3 Z" fill={colors.onSecondaryContainer} />
          <Rect x="-4" y="-1" width="8" height="2" fill={colors.secondaryContainer} />
        </G>
        
        {/* Connection lines */}
        <Path d="M 200 130 Q 250 100 280 150" stroke={colors.primary} strokeWidth="2" fill="none" opacity="0.4" />
        <Path d="M 150 200 Q 180 220 220 200" stroke={colors.primaryContainer} strokeWidth="2" fill="none" opacity="0.3" />
        
        {/* Small decorative elements */}
        <Circle cx="180" cy="60" r="3" fill={colors.primary} opacity="0.5" />
        <Circle cx="220" cy="220" r="2" fill={colors.primaryContainer} opacity="0.6" />
        <Circle cx="100" cy="200" r="2.5" fill={colors.tertiaryContainer} opacity="0.4" />
        
        {/* Subtle glow effects */}
        <Defs>
          <RadialGradient id="glow1" cx="0.5" cy="0.5" r="0.5">
            <Stop offset="0%" stopColor={colors.primary} stopOpacity="0.1" />
            <Stop offset="100%" stopColor={colors.primary} stopOpacity="0" />
          </RadialGradient>
          <RadialGradient id="glow2" cx="0.5" cy="0.5" r="0.5">
            <Stop offset="0%" stopColor={colors.primaryContainer} stopOpacity="0.1" />
            <Stop offset="100%" stopColor={colors.primaryContainer} stopOpacity="0" />
          </RadialGradient>
        </Defs>
        
        <Circle cx="200" cy="150" r="80" fill="url(#glow1)" />
        <Circle cx="280" cy="100" r="60" fill="url(#glow2)" />
      </Svg>
    );
  }

  // Light mode
  return (
    <Svg width={width} height={height} viewBox="0 0 400 300">
      {/* Background */}
      <Rect width="400" height="300" fill={colors.background} />
      
      {/* Decorative circles */}
      <Circle cx="50" cy="50" r="20" fill={colors.primary} opacity="0.3" />
      <Circle cx="350" cy="80" r="15" fill={colors.secondaryContainer} opacity="0.4" />
      <Circle cx="320" cy="250" r="25" fill={colors.primary} opacity="0.2" />
      <Circle cx="80" cy="280" r="18" fill={colors.primaryContainer} opacity="0.3" />
      
      {/* Main chat bubble */}
      <G transform="translate(120, 80)">
        <Rect x="0" y="0" width="160" height="100" rx="20" fill={colors.primary} />
        <Path d="M 20 100 L 30 120 L 40 100 Z" fill={colors.primary} />
        
        <Rect x="20" y="20" width="80" height="8" rx="4" fill={colors.onPrimary} opacity="0.9" />
        <Rect x="20" y="35" width="120" height="8" rx="4" fill={colors.onPrimary} opacity="0.7" />
        <Rect x="20" y="50" width="60" height="8" rx="4" fill={colors.onPrimary} opacity="0.5" />
      </G>
      
      {/* Second chat bubble */}
      <G transform="translate(200, 150)">
        <Rect x="0" y="0" width="120" height="70" rx="15" fill={colors.secondary} />
        <Path d="M 100 70 L 110 90 L 120 70 Z" fill={colors.secondary} />
        
        <Rect x="15" y="15" width="70" height="6" rx="3" fill={colors.onSecondary} opacity="0.8" />
        <Rect x="15" y="28" width="90" height="6" rx="3" fill={colors.onSecondary} opacity="0.6" />
        <Rect x="15" y="41" width="50" height="6" rx="3" fill={colors.onSecondary} opacity="0.4" />
      </G>
      
      {/* Floating icons */}
      <G transform="translate(60, 120)">
        <Circle cx="0" cy="0" r="15" fill={colors.primaryContainer} />
        <Path d="M -5 -5 L 8 0 L -5 5 Z" fill={colors.onPrimaryContainer} />
      </G>
      
      <G transform="translate(300, 180)">
        <Circle cx="0" cy="0" r="12" fill={colors.tertiaryContainer} />
        <Path d="M -6 -3 L 6 -3 L 6 3 L -6 3 Z" fill={colors.onTertiaryContainer} />
        <Rect x="-4" y="-1" width="8" height="2" fill={colors.tertiaryContainer} />
      </G>
      
      {/* Connection lines */}
      <Path d="M 200 130 Q 250 100 280 150" stroke={colors.primary} strokeWidth="2" fill="none" opacity="0.6" />
      <Path d="M 150 200 Q 180 220 220 200" stroke={colors.secondaryContainer} strokeWidth="2" fill="none" opacity="0.4" />
      
      {/* Small decorative elements */}
      <Circle cx="180" cy="60" r="3" fill={colors.primary} opacity="0.6" />
      <Circle cx="220" cy="220" r="2" fill={colors.secondary} opacity="0.7" />
      <Circle cx="100" cy="200" r="2.5" fill={colors.primaryContainer} opacity="0.5" />
    </Svg>
  );
}