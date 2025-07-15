// Professional business background options from Unsplash
export const backgroundOptions = {
  // Option 1: Modern office with glass and steel
  modernOffice: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  
  // Option 2: Corporate meeting room
  meetingRoom: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  
  // Option 3: Business handshake/partnership
  partnership: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  
  // Option 4: Professional workspace
  workspace: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  
  // Option 5: City skyline (business district)
  cityscape: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  
  // Option 6: Corporate building interior
  corporate: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
};

// More sophisticated color themes for business
export const colorThemes = {
  // Bright and positive theme with warm tones
  elegant: {
    primary: '#2c3e50',     // Soft dark blue-gray
    secondary: '#34495e',   // Lighter blue-gray
    accent: '#f39c12',      // Warm orange (positive and energetic)
    overlay: 'linear-gradient(to bottom right, rgba(44, 62, 80, 0.7), rgba(52, 73, 94, 0.7))',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.9)',
    headerBackground: 'linear-gradient(to right, rgba(74, 144, 226, 0.95), rgba(243, 156, 18, 0.85))',
    footerBackground: 'linear-gradient(to top, rgba(74, 144, 226, 0.9), rgba(243, 156, 18, 0.8))'
  },
  
  // Fresh and modern light theme
  fresh: {
    primary: '#3498db',     // Bright blue
    secondary: '#2980b9',   // Deeper blue
    accent: '#e74c3c',      // Vibrant red-orange
    overlay: 'linear-gradient(to bottom right, rgba(52, 152, 219, 0.75), rgba(41, 128, 185, 0.75))',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.95)',
    headerBackground: 'linear-gradient(to right, rgba(52, 152, 219, 0.95), rgba(41, 128, 185, 0.95))',
    footerBackground: 'linear-gradient(to top, rgba(52, 152, 219, 0.9), rgba(41, 128, 185, 0.9))'
  },
  
  // Warm and inviting theme
  warm: {
    primary: '#8e44ad',     // Rich purple
    secondary: '#9b59b6',   // Lighter purple
    accent: '#f1c40f',      // Bright yellow
    overlay: 'linear-gradient(to bottom right, rgba(142, 68, 173, 0.8), rgba(155, 89, 182, 0.8))',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.9)',
    headerBackground: 'linear-gradient(to right, rgba(142, 68, 173, 0.95), rgba(155, 89, 182, 0.95))',
    footerBackground: 'linear-gradient(to top, rgba(142, 68, 173, 0.9), rgba(155, 89, 182, 0.9))'
  },
  
  // Professional yet positive theme
  professional: {
    primary: '#16a085',     // Teal
    secondary: '#1abc9c',   // Light teal
    overlay: 'linear-gradient(to bottom right, rgba(22, 160, 133, 0.8), rgba(26, 188, 156, 0.8))',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.9)',
    headerBackground: 'linear-gradient(to right, rgba(22, 160, 133, 0.95), rgba(26, 188, 156, 0.95))',
    footerBackground: 'linear-gradient(to top, rgba(22, 160, 133, 0.9), rgba(26, 188, 156, 0.9))'
  },
  
  // Original themes (kept for compatibility)
  navy: {
    primary: '#1e3a8a',
    secondary: '#1e40af',
    accent: '#f59e0b', // Amber
    overlay: 'linear-gradient(to bottom right, rgba(30, 58, 138, 0.9), rgba(30, 64, 175, 0.9))',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.9)',
    headerBackground: 'linear-gradient(to right, rgba(30, 58, 138, 0.95), rgba(30, 64, 175, 0.95))',
    footerBackground: 'linear-gradient(to top, rgba(30, 58, 138, 0.9), rgba(30, 64, 175, 0.9))'
  },
  
  charcoal: {
    primary: '#374151',
    secondary: '#4b5563',
    accent: '#10b981', // Emerald
    overlay: 'linear-gradient(to bottom right, rgba(55, 65, 81, 0.9), rgba(75, 85, 99, 0.9))',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.85)',
    headerBackground: 'linear-gradient(to right, rgba(55, 65, 81, 0.95), rgba(75, 85, 99, 0.95))',
    footerBackground: 'linear-gradient(to top, rgba(55, 65, 81, 0.9), rgba(75, 85, 99, 0.9))'
  },

  // New Bright & Vibrant Professional Themes
  sunset: {
    primary: '#ff6b6b',     // Coral red
    secondary: '#ffa726',   // Warm orange
    accent: '#ffeb3b',      // Bright yellow
    overlay: 'linear-gradient(135deg, rgba(255, 107, 107, 0.85), rgba(255, 167, 38, 0.85), rgba(255, 235, 59, 0.75))',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.95)',
    headerBackground: 'linear-gradient(to right, rgba(255, 107, 107, 0.95), rgba(255, 167, 38, 0.95))',
    footerBackground: 'linear-gradient(to top, rgba(255, 167, 38, 0.9), rgba(255, 235, 59, 0.85))'
  },

  ocean: {
    primary: '#00bcd4',     // Bright cyan
    secondary: '#26c6da',   // Light cyan
    accent: '#ffab40',      // Bright orange
    overlay: 'linear-gradient(135deg, rgba(0, 188, 212, 0.85), rgba(38, 198, 218, 0.85), rgba(79, 172, 254, 0.75))',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.95)',
    headerBackground: 'linear-gradient(to right, rgba(0, 188, 212, 0.95), rgba(79, 172, 254, 0.95))',
    footerBackground: 'linear-gradient(to top, rgba(38, 198, 218, 0.9), rgba(79, 172, 254, 0.85))'
  },

  spring: {
    primary: '#4caf50',     // Vibrant green
    secondary: '#66bb6a',   // Light green
    accent: '#ff9800',      // Bright orange
    overlay: 'linear-gradient(135deg, rgba(76, 175, 80, 0.85), rgba(102, 187, 106, 0.85), rgba(129, 199, 132, 0.75))',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.95)',
    headerBackground: 'linear-gradient(to right, rgba(76, 175, 80, 0.95), rgba(102, 187, 106, 0.95))',
    footerBackground: 'linear-gradient(to top, rgba(102, 187, 106, 0.9), rgba(129, 199, 132, 0.85))'
  },

  cosmic: {
    primary: '#9c27b0',     // Vibrant purple
    secondary: '#ab47bc',   // Light purple
    accent: '#00e676',      // Bright green
    overlay: 'linear-gradient(135deg, rgba(156, 39, 176, 0.85), rgba(171, 71, 188, 0.85), rgba(186, 104, 200, 0.75))',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.95)',
    headerBackground: 'linear-gradient(to right, rgba(156, 39, 176, 0.95), rgba(171, 71, 188, 0.95))',
    footerBackground: 'linear-gradient(to top, rgba(171, 71, 188, 0.9), rgba(186, 104, 200, 0.85))'
  },

  aurora: {
    primary: '#e91e63',     // Vibrant pink
    secondary: '#f48fb1',   // Light pink
    accent: '#00e5ff',      // Electric blue
    overlay: 'linear-gradient(135deg, rgba(233, 30, 99, 0.85), rgba(244, 143, 177, 0.85), rgba(0, 229, 255, 0.75))',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.95)',
    headerBackground: 'linear-gradient(to right, rgba(233, 30, 99, 0.95), rgba(0, 229, 255, 0.95))',
    footerBackground: 'linear-gradient(to top, rgba(244, 143, 177, 0.9), rgba(0, 229, 255, 0.85))'
  },

  golden: {
    primary: '#ff9800',     // Bright orange
    secondary: '#ffb74d',   // Light orange
    accent: '#ffc107',      // Golden yellow
    overlay: 'linear-gradient(135deg, rgba(255, 152, 0, 0.85), rgba(255, 183, 77, 0.85), rgba(255, 193, 7, 0.75))',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.95)',
    headerBackground: 'linear-gradient(to right, rgba(255, 152, 0, 0.95), rgba(255, 193, 7, 0.95))',
    footerBackground: 'linear-gradient(to top, rgba(255, 183, 77, 0.9), rgba(255, 193, 7, 0.85))'
  },

  // Glass Theme - Enhanced glass-morphism with whiter, more prominent elements
  glass: {
    primary: 'rgba(255, 255, 255, 0.95)',     // Much whiter for prominence
    secondary: 'rgba(255, 255, 255, 0.95)',   // More visible white secondary elements
    accent: '#ff0000',                         // Logo red for brand consistency
    overlay: 'rgba(255, 255, 255, 0.5)',      // Whiter glass overlay
    text: '#0f172a',                           // Very dark slate for main content
    textSecondary: '#334155',                  // Dark slate gray for secondary text
    headerBackground: 'rgba(255, 255, 255, 1)', // Much whiter header
    footerBackground: 'rgba(255, 255, 255, 1)'   // Whiter footer
  }
};

// Default theme - change this to switch themes globally
export const defaultTheme = colorThemes.glass;

export default { backgroundOptions, colorThemes, defaultTheme };
