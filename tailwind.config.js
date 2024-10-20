/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['"Adobe Garamond Pro"', 'serif'],
        grotesk: ['"NHaasGroteskDSPro"', 'sans-serif'],
        mono: ['" "', 'monospace'],
      },
      // Customizing the default font sizes, line heights, and letter spacing
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.75rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      // Define consistent line heights and letter spacing to reuse
      lineHeight: {
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
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
      // Define logo media sizes
      spacing: {
        'logo-small': '200px',   // Size for small screens
        'logo-medium': '240px', // Size for medium screens
        'logo-large': '300px',  // Size for large screens
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Include the typography plugin
    function({ addBase, theme }) {
      // Set default typography styles
      addBase({
        'h1': { fontFamily: theme('fontFamily.garamond'), fontSize: theme('fontSize.6xl'), fontWeight: theme('fontWeight.extrabold'), lineHeight: theme('lineHeight.tight'), letterSpacing: theme('letterSpacing.tightest'), marginTop: theme('spacing.16'), marginBottom: theme('spacing.8') },
        'h2': { fontFamily: theme('fontFamily.grotesk'), fontSize: theme('fontSize.4xl'), fontWeight: theme('fontWeight.bold'), lineHeight: theme('lineHeight.snug'), letterSpacing: theme('letterSpacing.tighter'), marginTop: theme('spacing.12'), marginBottom: theme('spacing.6') },
        'h3': { fontFamily: theme('fontFamily.grotesk'), fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.semibold'), lineHeight: theme('lineHeight.snug'), marginTop: theme('spacing.10'), marginBottom: theme('spacing.4') },
        'p': { fontFamily: theme('fontFamily.garamond'), fontSize: theme('fontSize.base'), lineHeight: theme('lineHeight.relaxed'), marginTop: theme('spacing.4'), marginBottom: theme('spacing.4') },
        'blockquote': { fontFamily: theme('fontFamily.garamond'), fontStyle: 'italic', fontSize: theme('fontSize.lg'), lineHeight: theme('lineHeight.relaxed'), letterSpacing: theme('letterSpacing.wide'), borderLeftColor: theme('colors.gray.400'), borderLeftWidth: theme('borderWidth.4'), paddingLeft: theme('spacing.6'), marginTop: theme('spacing.8'), marginBottom: theme('spacing.8'), color: theme('colors.gray.700') },
        'code': { fontFamily: theme('fontFamily.mono'), fontSize: theme('fontSize.sm'), backgroundColor: theme('colors.gray.100'), padding: theme('spacing.1'), borderRadius: theme('borderRadius.md') },
        'pre': { fontFamily: theme('fontFamily.mono'), fontSize: theme('fontSize.sm'), backgroundColor: theme('colors.gray.900'), color: theme('colors.gray.100'), padding: theme('spacing.4'), borderRadius: theme('borderRadius.lg'), overflowX: 'auto', marginTop: theme('spacing.6'), marginBottom: theme('spacing.6') },
      });
    },
  ],
};
