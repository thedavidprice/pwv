/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['"Adobe Garamond Pro"', 'serif'],
        grotesk: ['"NHaasGroteskDSPro-65Md"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      // Customizing the default font sizes, line heights, and letter spacing
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1.125rem', { lineHeight: '1.75rem' }],
        'lg': ['1.25rem', { lineHeight: '1.75rem' }],
        'xl': ['1.5rem', { lineHeight: '2rem' }],
        '2xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '3xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '4xl': ['3rem', { lineHeight: '1.2' }],
        '5xl': ['3.75rem', { lineHeight: '1.2' }],
        '6xl': ['4.5rem', { lineHeight: '1.1' }],
      },
      // Define consistent line heights and letter spacing to reuse
      lineHeight: {
        tight: '1.1',
        snug: '1.35',
        normal: '1.5',
        relaxed: '1.75',
        loose: '2',
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      // Extend the spacing scale without overwriting defaults
      spacing: {
        'logo-small': '200px',   // Size for small screens
        'logo-medium': '240px',  // Size for medium screens
        'logo-large': '300px',   // Size for large screens
        'section': '4rem',
        'section-sm': '2rem',
      },
      // Added maxWidth for consistent container sizing
      maxWidth: {
        'container': '68rem', // 1088px, similar to SFCD's content width
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Include the typography plugin
    function ({ addBase, theme }) {
      // Set default typography styles
      addBase({
        'main, footer': {
          maxWidth: theme('maxWidth.container'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
        },
        'h1': {
          fontFamily: theme('fontFamily.garamond'),
          fontSize: theme('fontSize.4xl'),
          fontWeight: theme('fontWeight.extrabold'),
          lineHeight: theme('lineHeight.tight'),
          letterSpacing: theme('letterSpacing.tighter'),
          marginTop: theme('spacing.16'),
          marginBottom: theme('spacing.8'),
          '@screen md': {
            fontSize: theme('fontSize.5xl'), // Medium screens
          },
          '@screen lg': {
            fontSize: theme('fontSize.6xl'), // Large screens
          },          
        },
        // Improved grid alignment for h2
        'h2': {
          fontFamily: theme('fontFamily.grotesk'),
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.bold'),
          lineHeight: theme('lineHeight.tight'),
          letterSpacing: theme('letterSpacing.tighter'),
          marginTop: theme('spacing.12'),
          marginBottom: theme('spacing.6'),
          maxWidth: theme('maxWidth.container'),
          '@screen md': {
            fontSize: theme('fontSize.3xl'), // Medium screens
          },
          '@screen lg': {
            fontSize: theme('fontSize.4xl'), // Large screens
          },          
        },
        // Improved grid alignment for h3
        'h3': {
          fontFamily: theme('fontFamily.grotesk'),
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.snug'),
          marginTop: theme('spacing.6'),
          marginBottom: theme('spacing.4'),
          maxWidth: theme('maxWidth.container'),
          letterSpacing: theme('letterSpacing.tightest'),
          '@screen md': {
            fontSize: theme('fontSize.xl'), // Medium screens
          },
          '@screen lg': {
            fontSize: theme('fontSize.2xl'), // Large screens
          },          
        },
        // Updated paragraph font size and grid alignment
        'p': {
          fontFamily: theme('fontFamily.garamond'),
          fontSize: theme('fontSize.lg'),
          lineHeight: theme('lineHeight.relaxed'),
          marginTop: theme('spacing.4'),
          marginBottom: theme('spacing.4'),
          maxWidth: theme('maxWidth.container'),
        },
        // Added styling for ul and li to match typography
        'ul, ol': {
          fontFamily: theme('fontFamily.garamond'),
          fontSize: theme('fontSize.lg'),
          lineHeight: theme('lineHeight.relaxed'),
          marginTop: theme('spacing.4'),
          marginBottom: theme('spacing.4'),
          maxWidth: theme('maxWidth.container'),

        },
        'li': {
          marginBottom: theme('spacing.2'),
        },
        // Audited and improved blockquote styling
        'blockquote': {
          fontFamily: theme('fontFamily.garamond'),
          fontStyle: 'italic',
          fontSize: theme('fontSize.lg'),
          lineHeight: theme('lineHeight.relaxed'),
          letterSpacing: theme('letterSpacing.normal'),
          borderLeftColor: theme('colors.gray.400'),
          borderLeftWidth: theme('borderWidth.4'),
          paddingLeft: theme('spacing.6'),
          marginTop: theme('spacing.8'),
          marginBottom: theme('spacing.8'),
          color: theme('colors.gray.700'),
          maxWidth: theme('maxWidth.container'),
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        'blockquote p': {
          marginTop: '0',
          marginBottom: '0',
        },
        'code': {
          fontFamily: theme('fontFamily.mono'),
          fontSize: theme('fontSize.sm'),
          backgroundColor: theme('colors.gray.100'),
          padding: theme('spacing.1'),
          borderRadius: theme('borderRadius.md'),
        },
        'pre': {
          fontFamily: theme('fontFamily.mono'),
          fontSize: theme('fontSize.sm'),
          backgroundColor: theme('colors.gray.900'),
          color: theme('colors.gray.100'),
          padding: theme('spacing.4'),
          borderRadius: theme('borderRadius.lg'),
          overflowX: 'auto',
          marginTop: theme('spacing.6'),
          marginBottom: theme('spacing.6'),
        },
        'hr': {
          borderColor: theme('colors.gray.300'),
          marginTop: theme('spacing.12'),
          marginBottom: theme('spacing.12'),
        },        
      });
    },
  ],
};
